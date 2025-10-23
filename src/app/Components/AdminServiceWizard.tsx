"use client";
import React, { useEffect, useMemo, useState } from "react";
import { api, postJson } from "@/lib/api";

/* ====== UI helpers ====== */
function Btn(p: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...p}
      className={
        "rounded-lg px-4 py-2 text-sm font-medium text-white transition disabled:opacity-50 " +
        (p.disabled ? "bg-indigo-400" : "bg-indigo-600 hover:bg-indigo-700") +
        " " + (p.className || "")
      }
    />
  );
}
function GhostBtn(p: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...p}
      className={
        "rounded-lg px-3 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-50 border border-indigo-200 " +
        (p.className || "")
      }
    />
  );
}
function Input(p: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...p}
      className={
        "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 " +
        (p.className || "")
      }
    />
  );
}
function Select(p: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...p}
      className={
        "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 bg-white " +
        (p.className || "")
      }
    />
  );
}
function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <label className="mb-3 flex flex-col gap-1">
      <span className="text-sm font-medium text-gray-800">{label}</span>
      {hint && <span className="text-xs text-gray-500">{hint}</span>}
      {children}
    </label>
  );
}
function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
}
function ModalShell({ open, onClose, children, title }: { open: boolean; onClose: () => void; children: React.ReactNode; title: string }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative z-10 w-[95vw] max-w-3xl rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button onClick={onClose} className="rounded-lg px-2 py-1 text-sm text-gray-600 hover:bg-gray-100">Close</button>
        </div>
        <div className="max-h-[80vh] overflow-y-auto p-4">{children}</div>
      </div>
    </div>
  );
}

/* ====== Types for builder ====== */
type BuilderType =
  | "text" | "textarea" | "number" | "stepper"
  | "select" | "radio" | "checkbox"
  | "date" | "time" | "address";

type BuilderField = {
  key: string;
  label: string;
  type: BuilderType;
  required?: boolean;
  min?: number; // only for number/stepper
  max?: number; // only for number/stepper
  options?: { value: string; label: string }[]; // for select/radio/checkbox
};

/* ====== Exported composite (Trigger + Modal) ====== */
const AdminServiceWizard = (() => {
  let setOpenRef: React.Dispatch<React.SetStateAction<boolean>> | null = null;

  function Trigger() {
    const [, setOpen] = useState(false);
    useEffect(() => {
      setOpenRef = setOpen;
      return () => { setOpenRef = null; };
    }, []);
    return <Btn onClick={() => setOpenRef?.(true)}>+ Add Service</Btn>;
  }

  function Modal() {
    const [open, setOpen] = useState(false);
    useEffect(() => {
      setOpenRef = setOpen;
      return () => { setOpenRef = null; };
    }, []);

    /* Wizard */
    type StepKey = 1 | 2 | 3 | 4;
    const [step, setStep] = useState<StepKey>(1);
    const next = () => setStep(s => (s < 4 ? ((s + 1) as StepKey) : s));
    const back = () => setStep(s => (s > 1 ? ((s - 1) as StepKey) : s));

    /* Step 1: Basics */
    const [categories, setCategories] = useState<any[]>([]);
    const [catId, setCatId] = useState("");
    const [newCatName, setNewCatName] = useState("");
    const [name, setName] = useState("Home Cleaning");
    const [slug, setSlug] = useState("home-cleaning");
    const [desc, setDesc] = useState("Standard home cleaning with optional materials.");

    /* Step 2: Form Builder */
    const [fields, setFields] = useState<BuilderField[]>([]);
    const [newField, setNewField] = useState<BuilderField>({
      key: "duration-hours",
      label: "Duration (hours)",
      type: "number",
      required: true,
      min: 1,
      max: 12,
    });

    const addField = () => {
      if (!newField.label.trim()) return;
      const key = slugify(newField.key || newField.label);
      const exists = fields.some(f => f.key === key);
      const field: BuilderField = { ...newField, key };
      if (!exists) setFields(prev => [...prev, field]);
      setNewField({
        key: "",
        label: "",
        type: "text",
        required: false,
      });
    };
    const removeField = (k: string) => setFields(prev => prev.filter(f => f.key !== k));

    const numericKeys = useMemo(
      () => fields.filter(f => f.type === "number" || f.type === "stepper").map(f => f.key),
      [fields]
    );
    const optionFields = useMemo(
      () => fields.filter(f => (f.type === "select" || f.type === "radio" || f.type === "checkbox") && (f.options?.length ?? 0) > 0),
      [fields]
    );

    /* Step 3: Pricing */
    const [baseType, setBaseType] = useState<"per_hour_per_cleaner" | "flat" | "tiered">("per_hour_per_cleaner");
    const [base, setBase] = useState(35);
    const [tax, setTax] = useState(5);
    // map input keys from created fields
    const [durationKey, setDurationKey] = useState<string>("");
    const [quantityKey, setQuantityKey] = useState<string>("");
    const [materialKey, setMaterialKey] = useState<string>("");
    // optional surcharge trigger
    const [surchargeField, setSurchargeField] = useState<string>("");
    const selectedSurchargeField = optionFields.find(f => f.key === surchargeField);
    const [surchargeValue, setSurchargeValue] = useState<string>("");

    /* Commons */
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState<{ kind: "ok" | "err"; text: string } | null>(null);
    const notify = (t: string) => setToast({ kind: "ok", text: t });
    const fail = (t: string) => setToast({ kind: "err", text: t });

    /* Created IDs */
    const [formTemplateId, setFormTemplateId] = useState("");
    const [pricingModelId, setPricingModelId] = useState("");
    const [createdService, setCreatedService] = useState<any>(null);

    /* Load categories on open */
    useEffect(() => {
      if (!open) return;
      api<{ success: boolean; data: any[] }>("/admin/categories", { method: "GET" })
        .then(r => setCategories(r.data || []))
        .catch(e => fail(e.message));
    }, [open]);

    /* Actions */
    const addCategory = async () => {
      if (!newCatName.trim()) return;
      const body = { name: newCatName.trim(), slug: slugify(newCatName), order: categories.length + 1, active: true };
      try {
        setLoading(true);
        const out = await postJson<{ success: boolean; data: any }>("/admin/categories", body);
        setNewCatName("");
        setCatId(out.data?._id || "");
        const refreshed = await api<{ success: boolean; data: any[] }>("/admin/categories", { method: "GET" });
        setCategories(refreshed.data || []);
        notify("Category created");
      } catch (e: any) { fail(e.message); } finally { setLoading(false); }
    };

    const createFormTemplate = async () => {
      // Translate builder fields → template fields
      const templateFields = fields.map(f => {
        const validators: any[] = [];
        if (f.required) validators.push({ type: "required" });
        if ((f.type === "number" || f.type === "stepper") && typeof f.min === "number") validators.push({ type: "min", value: f.min });
        if ((f.type === "number" || f.type === "stepper") && typeof f.max === "number") validators.push({ type: "max", value: f.max });

        const obj: any = { key: f.key, label: f.label, type: f.type, validators };
        if (f.options && (f.type === "select" || f.type === "radio" || f.type === "checkbox")) {
          obj.options = f.options;
        }
        return obj;
      });

      try {
        setLoading(true);
        const out = await postJson<{ success: boolean; data: any }>("/admin/form-templates", {
          title: name,
          version: 1,
          steps: [{ title: "Details" }, { title: "Schedule" }, { title: "Address" }],
          fields: templateFields,
          active: true,
        });
        setFormTemplateId(out.data?._id || "");
        notify("Form template created");
      } catch (e: any) { fail(e.message); } finally { setLoading(false); }
    };

    const createPricingModel = async () => {
      try {
        setLoading(true);
        const inputs: any = {};
        if (durationKey) inputs.durationKey = durationKey;
        if (quantityKey) inputs.quantityKey = quantityKey;
        if (materialKey) inputs.materialKey = materialKey;

        const surcharges: any[] = [];
        if (surchargeField && surchargeValue) {
          surcharges.push({
            name: "Conditional surcharge",
            when: { when: surchargeField, op: "eq", value: surchargeValue },
            type: "flat",
            amount: 10,
          });
        }

        const out = await postJson<{ success: boolean; data: any }>("/admin/pricing-models", {
          currency: "AED",
          baseType,
          base,
          inputs,
          surcharges,
          taxes: { percent: tax },
          active: true,
        });
        setPricingModelId(out.data?._id || "");
        notify("Pricing model created");
      } catch (e: any) { fail(e.message); } finally { setLoading(false); }
    };

    const createService = async () => {
      try {
        setLoading(true);
        const out = await postJson<{ success: boolean; data: any }>("/admin/services", {
          categoryId: catId,
          name,
          slug,
          active: true,
          formTemplateId,
          pricingModelId,
          locales: { en: { name, description: desc } },
        });
        setCreatedService(out.data);
        notify("Service created");
      } catch (e: any) { fail(e.message); } finally { setLoading(false); }
    };

    /* Guards */
    const canNext1 = !!(catId && name && slug);
    const canCreateForm = fields.length > 0;
    const canNext2 = !!formTemplateId;
    const needDurationQty = baseType === "per_hour_per_cleaner";
    const pricingInputsOk = !needDurationQty || (durationKey && quantityKey);
    const canCreatePricing = pricingInputsOk;
    const canNext3 = !!pricingModelId;
    const canCreate = canNext1 && canNext2 && canNext3;

    /* Reset on close */
    const closeAndReset = () => {
      setOpen(false);
      setTimeout(() => {
        setStep(1);
        setCatId("");
        setNewCatName("");
        setName("Home Cleaning");
        setSlug("home-cleaning");
        setDesc("Standard home cleaning with optional materials.");
        setFields([]);
        setNewField({ key: "", label: "", type: "text", required: false });
        setFormTemplateId("");
        setPricingModelId("");
        setBaseType("per_hour_per_cleaner");
        setBase(35);
        setTax(5);
        setDurationKey("");
        setQuantityKey("");
        setMaterialKey("");
        setSurchargeField("");
        setSurchargeValue("");
        setCreatedService(null);
      }, 200);
    };

    /* ===== Render ===== */
    return (
      <>
        <ModalShell open={open} onClose={closeAndReset} title="Add Service">
          {/* Stepper */}
          <div className="mb-4 grid grid-cols-4 text-xs font-medium text-gray-600">
            {["1. Basics", "2. Form", "3. Pricing", "4. Review"].map((t, i) => (
              <div key={i} className={`border-b-2 p-2 text-center ${step >= (i + 1) ? "border-indigo-600 text-indigo-700" : "border-gray-200"}`}>
                {t}
              </div>
            ))}
          </div>

          {/* STEP 1: BASICS */}
          {step === 1 && (
            <div>
              <div className="grid grid-cols-1 gap-4">
                <Field label="Category" hint="Choose existing or add a new one">
                  <Select value={catId} onChange={(e) => setCatId(e.target.value)}>
                    <option value="">-- Select a category --</option>
                    {categories.map((c) => <option key={c._id} value={c._id}>{c.name}</option>)}
                  </Select>
                </Field>

                <div className="flex items-end gap-2">
                  <Field label="Add new category">
                    <Input value={newCatName} onChange={(e) => setNewCatName(e.target.value)} placeholder="e.g., General Cleaning" />
                  </Field>
                  <GhostBtn onClick={addCategory} disabled={!newCatName || loading}>+ Add</GhostBtn>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Field label="Service name">
                    <Input
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (!slug || slug === slugify(name)) setSlug(slugify(e.target.value));
                      }}
                      placeholder="Home Cleaning"
                    />
                  </Field>
                  <Field label="Slug" hint="Auto-generated; editable">
                    <Input value={slug} onChange={(e) => setSlug(slugify(e.target.value))} />
                  </Field>
                </div>

                <Field label="Short description (optional)">
                  <Input value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Describe the service" />
                </Field>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm text-gray-500">Step 1 of 4</span>
                <Btn onClick={next} disabled={!canNext1}>Continue</Btn>
              </div>
            </div>
          )}

          {/* STEP 2: FORM BUILDER */}
          {step === 2 && (
            <div>
              <div className="rounded-lg bg-gray-50 p-3">
                <div className="text-sm font-medium mb-2">Add fields</div>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
                  <Field label="Label">
                    <Input
                      value={newField.label}
                      onChange={(e) => setNewField(f => ({ ...f, label: e.target.value, key: f.key || slugify(e.target.value) }))}
                      placeholder="e.g., Duration (hours)"
                    />
                  </Field>
                  <Field label="Key" hint="Used internally">
                    <Input
                      value={newField.key}
                      onChange={(e) => setNewField(f => ({ ...f, key: slugify(e.target.value) }))}
                    />
                  </Field>
                  <Field label="Type">
                    <Select
                      value={newField.type}
                      onChange={(e) => setNewField(f => ({ ...f, type: e.target.value as BuilderType }))}
                    >
                      <option value="text">Text</option>
                      <option value="textarea">Textarea</option>
                      <option value="number">Number</option>
                      <option value="stepper">Stepper</option>
                      <option value="select">Select</option>
                      <option value="radio">Radio</option>
                      <option value="checkbox">Checkbox</option>
                      <option value="date">Date</option>
                      <option value="time">Time</option>
                      <option value="address">Address</option>
                    </Select>
                  </Field>
                  <Field label="Required">
                    <Select
                      value={newField.required ? "1" : "0"}
                      onChange={(e) => setNewField(f => ({ ...f, required: e.target.value === "1" }))}
                    >
                      <option value="1">Yes</option>
                      <option value="0">No</option>
                    </Select>
                  </Field>
                </div>

                {(newField.type === "number" || newField.type === "stepper") && (
                  <div className="mt-2 grid grid-cols-1 gap-3 md:grid-cols-2">
                    <Field label="Min (optional)"><Input type="number" value={newField.min ?? ""} onChange={(e)=>setNewField(f=>({...f, min: e.target.value===""?undefined:Number(e.target.value)}))} /></Field>
                    <Field label="Max (optional)"><Input type="number" value={newField.max ?? ""} onChange={(e)=>setNewField(f=>({...f, max: e.target.value===""?undefined:Number(e.target.value)}))} /></Field>
                  </div>
                )}

                {(newField.type === "select" || newField.type === "radio" || newField.type === "checkbox") && (
                  <div className="mt-2">
                    <Field label="Options (value:label, comma separated)">
                      <Input
                        placeholder="yes:Bring materials, no:I'll provide"
                        onChange={(e) => {
                          const parts = e.target.value.split(",").map(s => s.trim()).filter(Boolean);
                          const opts = parts.map(p => {
                            const [v, l] = p.split(":").map(s => s.trim());
                            return { value: v || "", label: l || v || "" };
                          });
                          setNewField(f => ({ ...f, options: opts }));
                        }}
                      />
                    </Field>
                  </div>
                )}

                <div className="mt-2">
                  <GhostBtn onClick={addField} disabled={!newField.label}>+ Add field</GhostBtn>
                </div>
              </div>

              <div className="mt-4">
                <div className="text-sm font-medium mb-2">Form preview</div>
                {fields.length === 0 ? (
                  <div className="rounded-lg bg-gray-50 p-3 text-sm text-gray-600">No fields yet.</div>
                ) : (
                  <ul className="rounded-lg bg-gray-50 p-3 text-sm text-gray-800 space-y-2">
                    {fields.map(f => (
                      <li key={f.key} className="flex items-center justify-between">
                        <div>
                          <b>{f.label}</b> <span className="text-gray-500">({f.type})</span>
                          {f.required && <span className="ml-2 text-rose-600">*required</span>}
                          {(f.type === "number" || f.type === "stepper") && (f.min !== undefined || f.max !== undefined) && (
                            <span className="ml-2 text-gray-500">
                              {typeof f.min === "number" ? `min=${f.min}` : ""} {typeof f.max === "number" ? `max=${f.max}` : ""}
                            </span>
                          )}
                          {(f.options?.length ?? 0) > 0 && (
                            <span className="ml-2 text-gray-500">
                              options: {f.options!.map(o => `${o.value}:${o.label}`).join(", ")}
                            </span>
                          )}
                        </div>
                        <button className="text-rose-600 text-xs underline" onClick={() => removeField(f.key)}>remove</button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-5 flex items-center justify-between">
                <GhostBtn onClick={back}>Back</GhostBtn>
                <div className="flex items-center gap-2">
                  <Btn onClick={createFormTemplate} disabled={fields.length === 0 || !!formTemplateId || loading}>
                    {formTemplateId ? "Form template created ✓" : "Create Form Template"}
                  </Btn>
                  <Btn onClick={next} disabled={!formTemplateId}>Continue</Btn>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: PRICING */}
          {step === 3 && (
            <div>
              <div className="grid grid-cols-1 gap-4">
                <Field label="Base type">
                  <Select value={baseType} onChange={(e) => setBaseType(e.target.value as any)}>
                    <option value="per_hour_per_cleaner">Per hour × cleaners</option>
                    <option value="flat">Flat</option>
                    <option value="tiered">Tiered (simple)</option>
                  </Select>
                </Field>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <Field label="Base amount (AED)"><Input type="number" value={base} onChange={(e)=>setBase(parseFloat(e.target.value||"0"))} /></Field>
                  <Field label="Tax (%)"><Input type="number" value={tax} onChange={(e)=>setTax(parseFloat(e.target.value||"0"))} /></Field>
                </div>

                {/* Map pricing inputs to form fields */}
                {baseType === "per_hour_per_cleaner" && (
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Field label="Duration field (number/stepper)">
                      <Select value={durationKey} onChange={(e)=>setDurationKey(e.target.value)}>
                        <option value="">-- Select --</option>
                        {numericKeys.map(k => <option key={k} value={k}>{k}</option>)}
                      </Select>
                    </Field>
                    <Field label="Quantity field (number/stepper)">
                      <Select value={quantityKey} onChange={(e)=>setQuantityKey(e.target.value)}>
                        <option value="">-- Select --</option>
                        {numericKeys.map(k => <option key={k} value={k}>{k}</option>)}
                      </Select>
                    </Field>
                  </div>
                )}

                <Field label="Optional 'materials' field (select/radio/checkbox)">
                  <Select value={materialKey} onChange={(e)=>setMaterialKey(e.target.value)}>
                    <option value="">-- None --</option>
                    {optionFields.map(f => <option key={f.key} value={f.key}>{f.key}</option>)}
                  </Select>
                </Field>

                <div className="rounded-lg bg-gray-50 p-3">
                  <div className="text-sm font-medium mb-2">Conditional surcharge (optional)</div>
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    <Field label="When field equals">
                      <Select value={surchargeField} onChange={(e)=>{ setSurchargeField(e.target.value); setSurchargeValue(""); }}>
                        <option value="">-- None --</option>
                        {optionFields.map(f => <option key={f.key} value={f.key}>{f.key}</option>)}
                      </Select>
                    </Field>
                    <Field label="Value">
                      <Select value={surchargeValue} onChange={(e)=>setSurchargeValue(e.target.value)} disabled={!selectedSurchargeField}>
                        <option value="">-- Select value --</option>
                        {selectedSurchargeField?.options?.map(o => <option key={o.value} value={o.value}>{o.value}</option>)}
                      </Select>
                    </Field>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Btn onClick={createPricingModel}
                       disabled={!!pricingModelId || loading || (baseType==="per_hour_per_cleaner" && (!durationKey || !quantityKey))}>
                    {pricingModelId ? "Pricing model created ✓" : "Create Pricing Model"}
                  </Btn>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <GhostBtn onClick={back}>Back</GhostBtn>
                <Btn onClick={next} disabled={!pricingModelId}>Continue</Btn>
              </div>
            </div>
          )}

          {/* STEP 4: REVIEW */}
          {step === 4 && (
            <div>
              <div className="rounded-lg bg-gray-50 p-3 text-sm">
                <div className="grid grid-cols-1 gap-2">
                  <div><div className="text-gray-500">Category</div><div className="font-medium">{categories.find(c=>c._id===catId)?.name || "—"}</div></div>
                  <div><div className="text-gray-500">Service</div><div className="font-medium">{name} <span className="text-gray-400">({slug})</span></div></div>
                  <div><div className="text-gray-500">Form Template</div><div className="font-medium">{formTemplateId || "—"}</div></div>
                  <div><div className="text-gray-500">Pricing Model</div><div className="font-medium">{pricingModelId || "—"}</div></div>
                </div>
                <div className="mt-3">
                  <div className="text-gray-500 mb-1">Fields</div>
                  <ul className="list-disc pl-5">
                    {fields.map(f => <li key={f.key}><b>{f.label}</b> <span className="text-gray-500">({f.type})</span></li>)}
                  </ul>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <GhostBtn onClick={back}>Back</GhostBtn>
                <Btn onClick={createService} disabled={!formTemplateId || !pricingModelId || !catId || !name}>
                  {createdService ? "Service Created ✓" : "Create Service"}
                </Btn>
              </div>

              {createdService && (
                <div className="mt-4 rounded-lg bg-emerald-50 p-3 text-sm">
                  <div className="font-medium text-emerald-800">All set! 🎉</div>
                  <div className="mt-1 text-emerald-900">Service ID: {createdService._id}</div>
                  <div className="mt-1 text-emerald-900">Name: {createdService.name}</div>
                </div>
              )}
            </div>
          )}
        </ModalShell>

        {toast && (
          <div
            className={
              "fixed bottom-4 right-4 z-50 rounded-lg px-4 py-3 text-sm shadow-md " +
              (toast.kind === "ok" ? "bg-emerald-600 text-white" : "bg-rose-600 text-white")
            }
          >
            <div className="flex items-center gap-3">
              <span>{toast.text}</span>
              <button className="underline" onClick={() => setToast(null)}>Close</button>
            </div>
          </div>
        )}
      </>
    );
  }

  return { Trigger, Modal };
})();

export default AdminServiceWizard;
