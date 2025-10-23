export type FieldType =
  | "text"
  | "textarea"
  | "number"
  | "stepper"
  | "radio"
  | "select"
  | "checkbox"
  | "date"
  | "time"
  | "address";

export interface FormField {
  key: string;          // machine key, e.g. "durationHours"
  label: string;        // human label
  type: FieldType;
  required?: boolean;
  min?: number;         // number/stepper
  max?: number;         // number/stepper
  options?: { value: string; label: string }[]; // radio/select
}

export type BasePricingType = "flat" | "per_hour_per_cleaner";

export interface PricingModel {
  currency: string;           // e.g., "AED"
  baseType: BasePricingType;  // flat OR per_hour_per_cleaner
  base: number;               // base price
  inputs?: {
    durationKey?: string;
    quantityKey?: string;
    materialKey?: string;
  };
  taxes?: { percent?: number };
  surcharges?: Array<{
    name: string;
    when?: { when: string; op: "eq" | "ne"; value: any };
    type: "flat" | "percent";
    amount: number;
  }>;
}

export interface ServiceDraft {
  id: string;                   // uuid
  category: string;             // category name (simple string)
  name: string;
  slug: string;
  description?: string;
  form: {
    title: string;
    fields: FormField[];
  };
  pricing: PricingModel;
  createdAt: number;
  updatedAt: number;
}
