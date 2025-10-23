"use client";
import React, { useEffect, useMemo, useState } from "react";

/** API helper (reads NEXT_PUBLIC_API_BASE) */
// Example: NEXT_PUBLIC_API_BASE = "http://localhost:5000/api"
const RAW_BASE = (process.env.NEXT_PUBLIC_API_BASE || "").trim();
// ❗️Do NOT append "/services" here — let each call provide its own path.
const API_BASE = RAW_BASE ? RAW_BASE.replace(/\/+$/, "") : "";

function joinPath(base: string, path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

async function api<T = any>(path: string, init?: RequestInit): Promise<T> {
  const url = joinPath(API_BASE, path);
  const res = await fetch(url, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
    credentials: "include",
  });
  if (!res.ok) {
    const msg = await res.text().catch(() => res.statusText);
    throw new Error(msg || `Request failed: ${res.status}`);
  }
  if (res.status === 204) return undefined as unknown as T;
  return res.json();
}

/** ──────────────────────────────────────────────────────────────
 * Response normalization helpers
 * ────────────────────────────────────────────────────────────── */
function ensureArray<T = any>(value: any): T[] {
  if (Array.isArray(value)) return value as T[];
  if (value && Array.isArray(value.categories)) return value.categories as T[];
  if (value && Array.isArray(value.services)) return value.services as T[];
  if (value && Array.isArray(value.items)) return value.items as T[];
  if (value && Array.isArray(value.data)) return value.data as T[];
  if (value && Array.isArray(value.results)) return value.results as T[];
  if (value?.data) return ensureArray<T>(value.data);
  return [];
}

/** ──────────────────────────────────────────────────────────────
 * Tiny UI primitives (same look/feel)
 * ────────────────────────────────────────────────────────────── */
const Btn = (p: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    type="button"
    {...p}
    className={
      "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium shadow-sm transition " +
      (p.disabled
        ? "bg-gray-200 text-gray-400 cursor-not-allowed "
        : "bg-indigo-600 text-white hover:bg-indigo-700 ") +
      (p.className ? p.className : "")
    }
  />
);
const GhostBtn = (p: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    type="button"
    {...p}
    className={
      "inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition " +
      (p.className || "")
    }
  />
);
const Input = (p: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    {...p}
    className={
      "w-full rounded-xl border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white " +
      (p.className || "")
    }
  />
);
const Select = (p: React.SelectHTMLAttributes<HTMLSelectElement>) => (
  <select
    {...p}
    className={
      "w-full rounded-xl border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white " +
      (p.className || "")
    }
  />
);
const Textarea = (p: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea
    {...p}
    className={
      "w-full rounded-xl border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white " +
      (p.className || "")
    }
  />
);

/** helpers */
const uuid = () =>
  (crypto as any).randomUUID?.() ?? Math.random().toString(36).slice(2);
function slugify(s: string) {
  return (s || "")
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}
function move<T>(arr: T[], from: number, to: number) {
  if (to < 0 || to >= arr.length) return arr;
  const copy = arr.slice();
  const [item] = copy.splice(from, 1);
  copy.splice(to, 0, item);
  return copy;
}

/** types (UI) */
type ServiceItem = {
  id: string;
  image?: string;
  title: string;
  slug: string;
  description?: string;
  price: number;
};
type BFieldType =
  | "text"
  | "textarea"
  | "number"
  | "stepper"
  | "select"
  | "radio"
  | "checkbox"
  | "date"
  | "time"
  | "address";
type BFieldRole =
  | "none"
  | "duration"
  | "quantity"
  | "date"
  | "time"
  | "address"
  | "notes";
type BookingField = {
  id: string;
  label: string;
  type: BFieldType;
  required?: boolean;
  role?: BFieldRole;
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
  options?: string[];
};
type BookingForm = {
  id?: string; // form template id if backend returns one
  enabled: boolean;
  title?: string;
  successMessage?: string;
  fields: BookingField[];
};
type Service = {
  id: string;
  image?: string;
  name: string;
  slug: string;
  description?: string;
  items: ServiceItem[];
  bookingForm?: BookingForm; // from template
};
type Category = {
  id: string;
  image?: string;
  name: string;
  slug: string;
  services?: Service[]; // may not exist from admin list; we fetch separately
};

/** steps */
const STEPS = [
  { key: "category", label: "Category" },
  { key: "services", label: "Services" },
  { key: "items", label: "Service Categories / Items" },
  { key: "bform", label: "Booking Form" },
  { key: "review", label: "Review & Save" },
] as const;

/** main */
export default function CatalogBuilder() {
  const [stepIdx, setStepIdx] = useState(0);

  /** server data */
  const [categories, setCategories] = useState<Category[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  // selections
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState<number | null>(null);
  const [selectedServiceIdx, setSelectedServiceIdx] = useState<number | null>(null);

  const currentCategory =
    selectedCategoryIdx != null ? categories[selectedCategoryIdx] : undefined;
  const currentService =
    selectedServiceIdx != null ? services[selectedServiceIdx] : undefined;

  // load admin categories (fallback to public if 401)
  const loadCategories = async () => {
    setLoading(true);
    try {
      const adminRes = await api<any>("/admin/categories");
      setCategories(ensureArray<Category>(adminRes));
    } catch {
      const publicRes = await api<any>("/catalog/categories");
      setCategories(ensureArray<Category>(publicRes));
    } finally {
      setLoading(false);
    }
  };

  // load services for selected category (public route by slug)
  const loadServicesForCategory = async (cat: Category) => {
    if (!cat?.slug) return;
    setLoading(true);
    try {
      const svcsRes = await api<any>(`/catalog/${encodeURIComponent(cat.slug)}/services`);
      const svcs = ensureArray<Service>(svcsRes);
      // Also hydrate each service with its form template if available
      const withForms = await Promise.all(
        svcs.map(async (s) => {
          try {
            const f = await api<BookingForm>(`/catalog/service/${encodeURIComponent(s.id)}/form-template`);
            return { ...s, bookingForm: f ? { ...f } : undefined };
          } catch {
            return s; // no template
          }
        })
      );
      setServices(ensureArray<Service>(withForms));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    if (currentCategory) {
      loadServicesForCategory(currentCategory);
      setSelectedServiceIdx(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategoryIdx]);

  // navigation
  const go = (i: number) => setStepIdx(Math.max(0, Math.min(STEPS.length - 1, i)));
  const next = () => go(stepIdx + 1);
  const back = () => go(stepIdx - 1);

  const canNext = useMemo(() => {
    const key = STEPS[stepIdx].key;
    if (key === "category") return selectedCategoryIdx != null;
    if (key === "services") return selectedServiceIdx != null;
    return true;
  }, [stepIdx, selectedCategoryIdx, selectedServiceIdx]);

  const progressPct = ((stepIdx + 1) / STEPS.length) * 100;

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <header className="rounded-2xl border bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">Catalog Builder</h1>
          <div className="text-xs text-gray-500">
            Step {stepIdx + 1} of {STEPS.length}
          </div>
        </div>
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-indigo-600 transition-all"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <nav className="mt-3 flex gap-2 overflow-x-auto">
          {STEPS.map((s, i) => (
            <button
              key={s.key}
              onClick={() => go(i)}
              className={`rounded-full px-3 py-1 text-xs ${
                i === stepIdx
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {i + 1}. {s.label}
            </button>
          ))}
        </nav>
        {loading && <div className="mt-3 text-xs text-gray-500">Loading…</div>}
        {toast && (
          <div className="mt-3 rounded-lg bg-emerald-50 p-2 text-xs text-emerald-800">
            {toast}
          </div>
        )}
      </header>

      <section className="rounded-2xl border bg-white p-5 shadow-sm">
        {STEPS[stepIdx].key === "category" && (
          <CategoryStep
            categories={categories}
            reload={loadCategories}
            selectedIdx={selectedCategoryIdx}
            setSelectedIdx={(idx) => {
              setSelectedCategoryIdx(idx);
              setSelectedServiceIdx(null);
            }}
            setToast={setToast}
          />
        )}

        {STEPS[stepIdx].key === "services" && (
          <ServicesStep
            category={currentCategory}
            services={services}
            reloadServices={() => currentCategory && loadServicesForCategory(currentCategory)}
            selectedIdx={selectedServiceIdx}
            setSelectedIdx={setSelectedServiceIdx}
            setToast={setToast}
          />
        )}

        {STEPS[stepIdx].key === "items" && (
          <ItemsStep
            service={currentService}
            onSave={async (updated) => {
              if (!updated) return;
              await api(`/admin/services/${encodeURIComponent(updated.id)}`, {
                method: "PUT",
                body: JSON.stringify({
                  ...updated,
                  items: updated.items,
                  name: updated.name,
                  slug: updated.slug,
                  description: updated.description,
                  image: updated.image,
                }),
              });
              setToast("Service items updated.");
              currentCategory && loadServicesForCategory(currentCategory);
            }}
          />
        )}

        {STEPS[stepIdx].key === "bform" && (
          <BookingFormStep
            service={currentService}
            onSaved={async () => {
              setToast("Booking form template saved.");
              currentCategory && loadServicesForCategory(currentCategory);
            }}
          />
        )}

        {STEPS[stepIdx].key === "review" && (
          <ReviewStep
            category={currentCategory}
            service={currentService}
            onQuote={async (payload) => {
              const q = await api("/pricing/quote", { method: "POST", body: JSON.stringify(payload) });
              return q;
            }}
          />
        )}

        <footer className="mt-6 flex items-center justify-between border-t pt-4">
          <GhostBtn onClick={back} disabled={stepIdx === 0}>
            Back
          </GhostBtn>
          <Btn onClick={() => (canNext ? next() : undefined)} disabled={!canNext}>
            Next
          </Btn>
        </footer>
      </section>
    </div>
  );
}

/** ──────────────────────────────────────────────────────────────
 * Step 1: Category (admin CRUD via API)
 * ────────────────────────────────────────────────────────────── */
function CategoryStep(props: {
  categories: Category[];
  reload: () => Promise<void>;
  selectedIdx: number | null;
  setSelectedIdx: (i: number) => void;
  setToast: (s: string | null) => void;
}) {
  const { categories, reload, selectedIdx, setSelectedIdx, setToast } = props;

  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const add = async () => {
    const trimmed = name.trim();
    if (!trimmed) return;
    await api("/admin/categories", {
      method: "POST",
      body: JSON.stringify({
        name: trimmed,
        slug: slugify(trimmed),
        image: image.trim() || undefined,
      }),
    });
    setName("");
    setImage("");
    await reload();
    setToast("Category created.");
  };

  const updateCard = async (cat: Category, patch: Partial<Category>) => {
    const next = { ...cat, ...patch };
    if (patch.name !== undefined) {
      next.slug = slugify(patch.name);
    }
    await api(`/admin/categories/${encodeURIComponent(cat.id)}`, {
      method: "PUT",
      body: JSON.stringify(next),
    });
    await reload();
    setToast("Category updated.");
  };

  const handleKey = (e: React.KeyboardEvent<HTMLDivElement>, i: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSelectedIdx(i);
    }
  };

  return (
    <div className="space-y-5">
      <h3 className="text-sm font-semibold">Categories</h3>

      <div className="grid gap-3 md:grid-cols-3">
        {/* Add new */}
        <div className="rounded-2xl border p-3">
          <div className="text-sm font-medium mb-2">Add a category</div>
          <label className="text-xs text-gray-600">Name</label>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g., Cleaning" />
          <div className="mt-2">
            <label className="text-xs text-gray-600">Image URL (optional)</label>
            <Input value={image} onChange={(e) => setImage(e.target.value)} placeholder="https://..." />
          </div>
          <div className="mt-3 flex gap-2">
            <Btn onClick={add}>+ Add Category</Btn>
          </div>
        </div>

        {/* Existing */}
        {(Array.isArray(categories) ? categories : []).map((c, i) => {
          const selected = selectedIdx === i;
          return (
            <div
              key={c.id}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => handleKey(e, i)}
              onClick={() => setSelectedIdx(i)}
              className={
                "text-left rounded-2xl border p-3 transition group " +
                (selected
                  ? "border-indigo-500 ring-2 ring-indigo-500 bg-indigo-50"
                  : "hover:border-indigo-400 hover:shadow")
              }
            >
              {c.image && (
                <img
                  src={c.image}
                  className="mb-2 h-28 w-full rounded-lg object-cover"
                  alt={c.name}
                />
              )}
              <div className="text-sm font-semibold">{c.name}</div>
              <div className="text-[11px] text-gray-500 mb-2">/{c.slug}</div>

              <div className="grid grid-cols-2 gap-2">
                <Input
                  value={c.name}
                  onChange={(e) => updateCard(c, { name: e.target.value })}
                  placeholder="Category name"
                />
                <Input
                  value={c.image || ""}
                  onChange={(e) => updateCard(c, { image: e.target.value })}
                  placeholder="Image URL"
                />
              </div>

              <div className="mt-3 flex justify-between">
                <div className="text-[11px] text-gray-600">Select to manage services →</div>
                <GhostBtn disabled title="No delete route provided on backend">
                  Remove
                </GhostBtn>
              </div>
            </div>
          );
        })}
      </div>

      <div className="rounded-xl bg-indigo-50 p-3 text-xs text-indigo-800">
        Select a category card to continue (the selected card is <b>highlighted</b>).
      </div>
    </div>
  );
}

/** ──────────────────────────────────────────────────────────────
 * Step 2: Services (reads from public endpoint; admin updates via PUT/POST)
 * ────────────────────────────────────────────────────────────── */
function ServicesStep(props: {
  category?: Category;
  services: Service[];
  reloadServices: () => Promise<void>;
  selectedIdx: number | null;
  setSelectedIdx: (i: number | null) => void;
  setToast: (s: string | null) => void;
}) {
  const { category, services, reloadServices, selectedIdx, setSelectedIdx, setToast } = props;
  if (!category) return <div className="text-sm text-gray-600">Pick a category first.</div>;

  // new service
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const add = async () => {
    const trimmed = name.trim();
    if (!trimmed) return;
    await api("/admin/services", {
      method: "POST",
      body: JSON.stringify({
        categoryId: category.id,
        name: trimmed,
        slug: slugify(trimmed),
        image: image.trim() || undefined,
        description: description.trim() || undefined,
        items: [],
      }),
    });
    setName("");
    setImage("");
    setDescription("");
    await reloadServices();
    setToast("Service created.");
  };

  const updateCard = async (svc: Service, patch: Partial<Service>) => {
    const next = { ...svc, ...patch };
    if (patch.name !== undefined) {
      next.slug = slugify(patch.name);
    }
    await api(`/admin/services/${encodeURIComponent(svc.id)}`, {
      method: "PUT",
      body: JSON.stringify(next),
    });
    await reloadServices();
    setToast("Service updated.");
  };

  const handleKey = (e: React.KeyboardEvent<HTMLDivElement>, i: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSelectedIdx(i);
    }
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">
          Services in <span className="text-indigo-700">{category.name}</span>
        </h3>
        <div className="text-xs text-gray-500">
          Selected: {selectedIdx != null ? services[selectedIdx]?.name : "—"}
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {/* Add new service */}
        <div className="rounded-2xl border p-3">
          <div className="text-sm font-medium mb-2">Add a service</div>
          <label className="text-xs text-gray-600">Service name</label>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g., Furniture Cleaning" />
          <div className="mt-2">
            <label className="text-xs text-gray-600">Service image (optional)</label>
            <Input value={image} onChange={(e) => setImage(e.target.value)} placeholder="https://..." />
          </div>
          <div className="mt-2">
            <label className="text-xs text-gray-600">Service description</label>
            <Textarea rows={3} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Short description shown in admin and customer views" />
          </div>
          <div className="mt-3">
            <Btn onClick={add}>+ Add Service</Btn>
          </div>
        </div>

        {/* Existing services */}
        {(Array.isArray(services) ? services : []).map((s, i) => {
          const selected = selectedIdx === i;
          return (
            <div
              key={s.id}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => handleKey(e, i)}
              onClick={() => setSelectedIdx(i)}
              className={
                "text-left rounded-2xl border p-3 transition " +
                (selected
                  ? "border-indigo-500 ring-2 ring-indigo-500 bg-indigo-50"
                  : "hover:border-indigo-400 hover:shadow")
              }
            >
              {s.image && (
                <img
                  src={s.image}
                  className="mb-2 h-28 w-full rounded-lg object-cover"
                  alt={s.name}
                />
              )}
              <div className="text-sm font-semibold">{s.name}</div>
              <div className="text-[11px] text-gray-500 mb-2">/{s.slug}</div>
              {s.description && (
                <div className="text-xs text-gray-700 mb-2 line-clamp-3">{s.description}</div>
              )}
              <div className="text-[11px] text-gray-600">
                Booking form: {s.bookingForm?.enabled ? "Enabled" : "Disabled or not set"}
              </div>

              <div className="grid gap-2 mt-2">
                <Input
                  value={s.name}
                  onChange={(e) => updateCard(s, { name: e.target.value })}
                  placeholder="Service name"
                />
                <Input
                  value={s.image || ""}
                  onChange={(e) => updateCard(s, { image: e.target.value })}
                  placeholder="Image URL"
                />
                <Textarea
                  rows={2}
                  value={s.description || ""}
                  onChange={(e) => updateCard(s, { description: e.target.value })}
                  placeholder="Description"
                />
              </div>

              <div className="mt-3 flex items-center justify-between">
                <div className="text-[11px] text-gray-600">Edit items in next step →</div>
                <GhostBtn disabled title="No delete route provided on backend">
                  Remove
                </GhostBtn>
              </div>
            </div>
          );
        })}
      </div>

      <div className="rounded-xl bg-indigo-50 p-3 text-xs text-indigo-800">
        Select a service card to continue (card gets <b>highlighted</b>).
      </div>
    </div>
  );
}

/** ──────────────────────────────────────────────────────────────
 * Step 3: Items — saved via PUT /admin/services/:id
 * ────────────────────────────────────────────────────────────── */
function ItemsStep(props: {
  service?: Service;
  onSave: (svc?: Service) => Promise<void>;
}) {
  const { service, onSave } = props;
  const [draft, setDraft] = useState<Service | undefined>(service);

  useEffect(() => setDraft(service), [service]);

  if (!service || !draft) return <div className="text-sm text-gray-600">Pick a service first.</div>;

  // new item
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState<string>("");

  const add = () => {
    const t = title.trim();
    const p = Number(price);
    if (!t || Number.isNaN(p)) return;
    setDraft({
      ...draft,
      items: [
        ...(draft.items || []),
        {
          id: uuid(),
          title: t,
          slug: slugify(t),
          image: image.trim() || undefined,
          description: desc.trim() || undefined,
          price: p,
        },
      ],
    });
    setTitle("");
    setImage("");
    setDesc("");
    setPrice("");
  };

  const updateCard = (idx: number, patch: Partial<ServiceItem>) => {
    const it = draft.items[idx];
    const titleChanged = patch.title !== undefined && patch.title !== it.title;
    const next = draft.items.slice();
    next[idx] = {
      ...it,
      ...patch,
      slug: titleChanged ? slugify(patch.title || it.title) : it.slug,
      price:
        patch.price != null
          ? Number.isNaN(Number(patch.price))
            ? it.price
            : Number(patch.price)
          : it.price,
    };
    setDraft({ ...draft, items: next });
  };

  const remove = (idx: number) => {
    const next = draft.items.slice();
    next.splice(idx, 1);
    setDraft({ ...draft, items: next });
  };

  return (
    <div className="space-y-5">
      <h3 className="text-sm font-semibold">
        Items / Sub-categories in <span className="text-indigo-700">{service.name}</span>
      </h3>

      <div className="grid gap-3 md:grid-cols-3">
        {/* Add new item */}
        <div className="rounded-2xl border p-3">
          <div className="text-sm font-medium mb-2">Add an item</div>
          <label className="text-xs text-gray-600">Title</label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g., Sofa Cleaning" />
          <div className="mt-2">
            <label className="text-xs text-gray-600">Image (optional)</label>
            <Input value={image} onChange={(e) => setImage(e.target.value)} placeholder="https://..." />
          </div>
          <div className="mt-2">
            <label className="text-xs text-gray-600">Description (optional)</label>
            <Textarea rows={2} value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Short details for this item" />
          </div>
          <div className="mt-2">
            <label className="text-xs text-gray-600">Price (AED)</label>
            <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="e.g., 137" />
          </div>
          <div className="mt-3">
            <Btn onClick={add}>+ Add Item</Btn>
          </div>
          <div className="mt-4">
            <Btn onClick={() => onSave(draft)}>Save items to backend</Btn>
          </div>
        </div>

        {/* Existing items */}
        {draft.items.map((it, i) => (
          <div
            key={it.id}
            className={"rounded-2xl border p-3 transition hover:border-indigo-400 hover:shadow"}
          >
            {it.image && (
              <img
                src={it.image}
                className="mb-2 h-28 w-full rounded-lg object-cover"
                alt={it.title}
              />
            )}
            <div className="text-sm font-semibold">{it.title}</div>
            <div className="text-[11px] text-gray-500 mb-2">/{it.slug}</div>
            {it.description && (
              <div className="text-xs text-gray-700 mb-2 line-clamp-3">{it.description}</div>
            )}
            <div className="text-xs font-semibold text-indigo-700 mb-2">AED {it.price}</div>

            <div className="grid gap-2">
              <Input
                value={it.title}
                onChange={(e) => updateCard(i, { title: e.target.value })}
                placeholder="Title"
              />
              <Input
                value={it.image || ""}
                onChange={(e) => updateCard(i, { image: e.target.value })}
                placeholder="Image URL"
              />
              <Textarea
                rows={2}
                value={it.description || ""}
                onChange={(e) => updateCard(i, { description: e.target.value })}
                placeholder="Description"
              />
              <Input
                type="number"
                value={String(it.price)}
                onChange={(e) => updateCard(i, { price: Number(e.target.value || it.price) })}
                placeholder="Price (AED)"
              />
            </div>

            <div className="mt-3 flex justify-end">
              <GhostBtn onClick={() => remove(i)}>Remove</GhostBtn>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** ──────────────────────────────────────────────────────────────
 * Step 4: Booking Form — reads via GET /catalog/service/:id/form-template
 * saves via POST/PUT /admin/form-templates
 * ────────────────────────────────────────────────────────────── */
function BookingFormStep(props: {
  service?: Service;
  onSaved: () => Promise<void>;
}) {
  const { service, onSaved } = props;
  const [loading, setLoading] = useState(false);

  const DEFAULT_FORM: BookingForm = {
    enabled: true,
    title: "Book this service",
    successMessage: "Thanks! We’ll confirm your booking shortly.",
    fields: [
      { id: uuid(), label: "Your Name", type: "text", required: true, placeholder: "Full name" },
      { id: uuid(), label: "Phone", type: "text", required: true, placeholder: "05xxxxxxxx" },
      { id: uuid(), label: "How many hours?", type: "stepper", role: "duration", required: true, min: 1, max: 8, step: 1, placeholder: "2" },
      { id: uuid(), label: "How many professionals?", type: "stepper", role: "quantity", required: true, min: 1, max: 6, step: 1, placeholder: "2" },
      { id: uuid(), label: "Date", type: "date", role: "date", required: true },
      { id: uuid(), label: "Time", type: "time", role: "time", required: true },
      { id: uuid(), label: "Address", type: "address", role: "address", required: true, placeholder: "Building, street, area" },
      { id: uuid(), label: "Any notes?", type: "textarea", role: "notes", required: false, placeholder: "Parking, access, special requests..." },
    ],
  };

  const [form, setForm] = useState<BookingForm | undefined>(service?.bookingForm || DEFAULT_FORM);

  useEffect(() => {
    const load = async () => {
      if (!service) return;
      setLoading(true);
      try {
        const f = await api<BookingForm>(`/catalog/service/${encodeURIComponent(service.id)}/form-template`);
        if (f) setForm(f);
        else setForm(DEFAULT_FORM);
      } finally {
        setLoading(false);
      }
    };
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [service?.id]);

  const updateField = (idx: number, patch: Partial<BookingField>) => {
    if (!form) return;
    const next = [...form.fields];
    next[idx] = { ...next[idx], ...patch };
    setForm({ ...form, fields: next });
  };
  const removeField = (idx: number) => {
    if (!form) return;
    const next = form.fields.filter((_, i) => i !== idx);
    setForm({ ...form, fields: next });
  };
  const moveField = (idx: number, delta: number) => {
    if (!form) return;
    setForm({ ...form, fields: move(form.fields, idx, idx + delta) });
  };
  const addField = (f: Partial<BookingField>) => {
    if (!form) return;
    setForm({
      ...form,
      fields: [
        ...form.fields,
        {
          id: uuid(),
          label: f.label || "New field",
          type: (f.type as BFieldType) || "text",
          required: !!f.required,
          role: (f.role as BFieldRole) || "none",
          min: f.min,
          max: f.max,
          step: f.step,
          placeholder: f.placeholder || "",
          options: f.options,
        },
      ],
    });
  };

  const QUICK: Partial<BookingField>[] = [
    { label: "Your Name", type: "text", required: true },
    { label: "Phone", type: "text", required: true, placeholder: "05xxxxxxxx" },
    { label: "How many hours?", type: "stepper", role: "duration", required: true, min: 1, max: 8, step: 1, placeholder: "2" },
    { label: "How many professionals?", type: "stepper", role: "quantity", required: true, min: 1, max: 6, step: 1, placeholder: "2" },
    { label: "Date", type: "date", role: "date", required: true },
    { label: "Time", type: "time", role: "time", required: true },
    { label: "Address", type: "address", role: "address", required: true },
    { label: "Materials", type: "select", options: ["Yes", "No"] },
    { label: "Notes / Questions", type: "textarea", role: "notes", placeholder: "Anything we should know?" },
  ];

  /** Customer preview state (answers + validation) */
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedJson, setSubmittedJson] = useState<string>("");

  const setAns = (id: string, val: any) => {
    setAnswers((a) => ({ ...a, [id]: val }));
    setErrors((e) => {
      const copy = { ...e };
      delete copy[id];
      return copy;
    });
  };

  const inc = (f: BookingField, delta: number) => {
    const raw = Number(answers[f.id] ?? (f.min ?? 0));
    let next = Number.isNaN(raw) ? (f.min ?? 0) : raw;
    next += delta * (f.step ?? 1);
    if (f.min != null) next = Math.max(f.min, next);
    if (f.max != null) next = Math.min(f.max, next);
    setAns(f.id, next);
  };

  const validate = (theForm: BookingForm): boolean => {
    const errs: Record<string, string> = {};
    for (const f of theForm.fields) {
      const v = answers[f.id];
      if (f.required) {
        const empty =
          v === undefined ||
          v === null ||
          (typeof v === "string" && v.trim() === "") ||
          (f.type === "select" && v === "");
        if (empty) errs[f.id] = "Required";
      }
      if ((f.type === "number" || f.type === "stepper") && v != null && v !== "") {
        const n = Number(v);
        if (Number.isNaN(n)) errs[f.id] = "Must be a number";
        if (f.min != null && n < f.min) errs[f.id] = `Min ${f.min}`;
        if (f.max != null && n > f.max) errs[f.id] = `Max ${f.max}`;
      }
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const submitPreview = () => {
    if (!form) return;
    if (!validate(form)) return;
    const payload = {
      serviceId: service?.id,
      serviceSlug: service?.slug,
      answers,
      createdAt: new Date().toISOString(),
    };
    setSubmittedJson(JSON.stringify(payload, null, 2));
  };

  const saveTemplate = async () => {
    if (!service || !form) return;
    setLoading(true);
    try {
      const body = {
        serviceId: service.id,
        enabled: form.enabled,
        title: form.title,
        successMessage: form.successMessage,
        fields: form.fields,
      };
      if (form.id) {
        await api(`/admin/form-templates/${encodeURIComponent(form.id)}`, {
          method: "PUT",
          body: JSON.stringify(body),
        });
      } else {
        const saved = await api<BookingForm>("/admin/form-templates", {
          method: "POST",
          body: JSON.stringify(body),
        });
        setForm({ ...form, id: (saved as any)?.id });
      }
      await onSaved();
    } finally {
      setLoading(false);
    }
  };

  const renderPreviewField = (f: BookingField) => {
    const err = errors[f.id];
    const label = (
      <label className="text-xs text-gray-600">
        {f.label} {f.required && <span className="text-rose-600">*</span>}
      </label>
    );
    const hint = (f.min != null || f.max != null) && (
      <div className="text-[11px] text-gray-500">
        {f.min != null ? `min ${f.min}` : ""} {f.max != null ? `• max ${f.max}` : ""}
      </div>
    );

    switch (f.type) {
      case "textarea":
        return (
          <div key={f.id}>
            {label}
            <Textarea
              placeholder={f.placeholder || ""}
              value={answers[f.id] ?? ""}
              onChange={(e) => setAns(f.id, e.target.value)}
            />
            {err && <div className="text-[11px] text-rose-600 mt-1">{err}</div>}
          </div>
        );
      case "number":
        return (
          <div key={f.id}>
            {label}
            <Input
              type="number"
              placeholder={f.placeholder || ""}
              value={answers[f.id] ?? ""}
              onChange={(e) => setAns(f.id, e.target.value)}
            />
            {hint}
            {err && <div className="text-[11px] text-rose-600 mt-1">{err}</div>}
          </div>
        );
      case "stepper":
        return (
          <div key={f.id}>
            {label}
            <div className="flex items-center gap-2">
              <GhostBtn onClick={() => inc(f, -1)}>-</GhostBtn>
              <Input
                type="number"
                placeholder={f.placeholder || ""}
                value={answers[f.id] ?? ""}
                onChange={(e) => setAns(f.id, e.target.value)}
              />
              <GhostBtn onClick={() => inc(f, +1)}>+</GhostBtn>
            </div>
            {hint}
            {err && <div className="text-[11px] text-rose-600 mt-1">{err}</div>}
          </div>
        );
      case "select":
        return (
          <div key={f.id}>
            {label}
            <Select
              value={answers[f.id] ?? ""}
              onChange={(e) => setAns(f.id, e.target.value)}
            >
              <option value="" disabled>
                — Select —
              </option>
              {(f.options || []).map((o, i) => (
                <option key={i} value={o}>
                  {o}
                </option>
              ))}
            </Select>
            {err && <div className="text-[11px] text-rose-600 mt-1">{err}</div>}
          </div>
        );
      case "radio":
        return (
          <div key={f.id}>
            {label}
            <div className="flex flex-wrap gap-3 mt-1">
              {(f.options || []).map((o, i) => (
                <label key={i} className="text-xs text-gray-700 inline-flex items-center gap-2">
                  <input
                    type="radio"
                    name={f.id}
                    checked={answers[f.id] === o}
                    onChange={() => setAns(f.id, o)}
                  />{" "}
                  {o}
                </label>
              ))}
            </div>
            {err && <div className="text-[11px] text-rose-600 mt-1">{err}</div>}
          </div>
        );
      case "checkbox":
        return (
          <div key={f.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={!!answers[f.id]}
              onChange={(e) => setAns(f.id, e.target.checked)}
            />
            <label className="text-xs text-gray-700">{f.label}</label>
            {err && <div className="text-[11px] text-rose-600 mt-1">{err}</div>}
          </div>
        );
      case "date":
        return (
          <div key={f.id}>
            {label}
            <Input
              type="date"
              value={answers[f.id] ?? ""}
              onChange={(e) => setAns(f.id, e.target.value)}
            />
            {err && <div className="text-[11px] text-rose-600 mt-1">{err}</div>}
          </div>
        );
      case "time":
        return (
          <div key={f.id}>
            {label}
            <Input
              type="time"
              value={answers[f.id] ?? ""}
              onChange={(e) => setAns(f.id, e.target.value)}
            />
            {err && <div className="text-[11px] text-rose-600 mt-1">{err}</div>}
          </div>
        );
      case "address":
        return (
          <div key={f.id}>
            {label}
            <Textarea
              placeholder={f.placeholder || "Building, street, area"}
              value={answers[f.id] ?? ""}
              onChange={(e) => setAns(f.id, e.target.value)}
            />
            {err && <div className="text-[11px] text-rose-600 mt-1">{err}</div>}
          </div>
        );
      default:
        return (
          <div key={f.id}>
            {label}
            <Input
              placeholder={f.placeholder || ""}
              value={answers[f.id] ?? ""}
              onChange={(e) => setAns(f.id, e.target.value)}
            />
            {err && <div className="text-[11px] text-rose-600 mt-1">{err}</div>}
          </div>
        );
    }
  };

  if (!service) return <div className="text-sm text-gray-600">Pick a service first.</div>;
  if (!form) return null;

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">
          Booking Form for <span className="text-indigo-700">{service.name}</span>
        </h3>
        <div className="flex items-center gap-3">
          <label className="text-xs text-gray-600">Enable form</label>
          <input
            type="checkbox"
            checked={!!form.enabled}
            onChange={(e) => setForm({ ...form, enabled: e.target.checked })}
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Builder (Admin) */}
        <div className="rounded-2xl border p-3">
          {/* …unchanged… */}
          <div className="mb-2 text-sm font-medium">Quick add</div>
          {/* …unchanged… */}
          <div className="mt-3 flex items-center gap-2">
            <Btn onClick={saveTemplate} disabled={loading}>
              {form.id ? "Update Form Template" : "Create Form Template"}
            </Btn>
            {loading && <span className="text-xs text-gray-500">Saving…</span>}
          </div>
        </div>

        {/* Customer Preview (interactive) */}
        <div className="rounded-2xl border p-3">
          {/* …unchanged… */}
        </div>
      </div>
    </div>
  );
}

/** ──────────────────────────────────────────────────────────────
 * Step 5: Review — quick test to call /pricing/quote
 * ────────────────────────────────────────────────────────────── */
function ReviewStep(props: {
  category?: Category;
  service?: Service;
  onQuote: (payload: any) => Promise<any>;
}) {
  const { category, service, onQuote } = props;
  const [quoteRes, setQuoteRes] = useState<any>(null);
  const [busy, setBusy] = useState(false);

  const testQuote = async () => {
    if (!service) return;
    setBusy(true);
    try {
      const res = await onQuote({
        serviceId: service.id,
        hours: 2,
        professionals: 2,
        addons: [],
      });
      setQuoteRes(res);
    } finally {
      setBusy(false);
    }
  };

  return (
       <div className="space-y-5">
      <div className="rounded bg-gray-50 p-3 text-xs">
        <div className="font-medium mb-1">Selected</div>
        <pre className="max-h-[220px] overflow-auto">
{JSON.stringify(
  {
    category: category ? { id: category.id, name: category.name, slug: category.slug } : null,
    service: service
      ? {
          id: service.id,
          name: service.name,
          slug: service.slug,
          items: service.items?.length ?? 0,
          hasFormTemplate: !!service.bookingForm,
        }
      : null,
  },
  null,
  2
)}
        </pre>
      </div>

      <div className="rounded-xl bg-indigo-50 p-3 text-xs text-indigo-800">
        Use the button below to ping your <code>/pricing/quote</code> route with a sample payload.
      </div>

      <div className="flex items-center gap-2">
        <Btn onClick={testQuote} disabled={!service || busy}>
          {busy ? "Requesting…" : "Test Quote API"}
        </Btn>
        {quoteRes && (
          <span className="text-xs text-gray-600">Received response (see below)</span>
        )}
      </div>

      {quoteRes && (
        <div className="rounded bg-gray-50 p-3 text-xs">
          <div className="font-medium mb-1">Quote response</div>
          <pre className="max-h-[220px] overflow-auto">
{JSON.stringify(quoteRes, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
