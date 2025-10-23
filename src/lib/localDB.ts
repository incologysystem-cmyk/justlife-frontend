import { ServiceDraft } from "@/types/service";

const KEY = "service_builder_data:v1";
export type DBShape = { categories: string[]; services: ServiceDraft[] };

function read(): DBShape {
  if (typeof window === "undefined") return { categories: [], services: [] };
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as DBShape) : { categories: [], services: [] };
  } catch {
    return { categories: [], services: [] };
  }
}

function write(data: DBShape) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(data));
}

export const localDB = {
  all(): DBShape {
    return read();
  },
  saveService(svc: ServiceDraft) {
    const db = read();
    const idx = db.services.findIndex((s) => s.id === svc.id);
    if (idx >= 0) db.services[idx] = svc;
    else db.services.unshift(svc);
    if (svc.category && !db.categories.includes(svc.category)) db.categories.push(svc.category);
    write(db);
  },
  deleteService(id: string) {
    const db = read();
    db.services = db.services.filter((s) => s.id !== id);
    write(db);
  },
  saveCategories(cats: string[]) {
    const db = read();
    db.categories = Array.from(new Set([...db.categories, ...cats]));
    write(db);
  },
  export(): string {
    return JSON.stringify(read(), null, 2);
  },
  import(json: string) {
    const parsed = JSON.parse(json) as DBShape;
    write(parsed);
  },
};
