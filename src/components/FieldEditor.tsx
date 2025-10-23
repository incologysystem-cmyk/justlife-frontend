"use client";
import React from "react";
import { FieldType, FormField } from "@/types/service";

const Input = (p: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input {...p} className={"w-full rounded border px-3 py-2 text-sm " + (p.className || "")} />
);
const Select = (p: React.SelectHTMLAttributes<HTMLSelectElement>) => (
  <select {...p} className={"w-full rounded border px-3 py-2 text-sm bg-white " + (p.className || "")} />
);

export default function FieldEditor({
  value,
  onChange,
  onRemove,
  onMoveUp,
  onMoveDown,
  canUp,
  canDown,
}: {
  value: FormField;
  onChange: (v: FormField) => void;
  onRemove: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  canUp: boolean;
  canDown: boolean;
}) {
  const update = (patch: Partial<FormField>) => onChange({ ...value, ...patch });

  const type = value.type;
  const showMinMax = type === "number" || type === "stepper";
  const showOptions = type === "radio" || type === "select";

  return (
    <div className="rounded-xl border p-3">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-6">
        <div className="md:col-span-2">
          <label className="text-xs font-medium text-gray-600">Label</label>
          <Input value={value.label} onChange={(e) => update({ label: e.target.value })} placeholder="e.g., Duration (hours)" />
        </div>
        <div className="md:col-span-2">
          <label className="text-xs font-medium text-gray-600">Key</label>
          <Input value={value.key} onChange={(e) => update({ key: e.target.value })} placeholder="e.g., durationHours" />
        </div>
        <div>
          <label className="text-xs font-medium text-gray-600">Type</label>
          <Select
            value={value.type}
            onChange={(e) => update({ type: e.target.value as FieldType, min: undefined, max: undefined, options: undefined })}
          >
            {["text","textarea","number","stepper","radio","select","checkbox","date","time","address"].map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </Select>
        </div>
        <div>
          <label className="text-xs font-medium text-gray-600">Required</label>
          <Select value={value.required ? "1" : "0"} onChange={(e) => update({ required: e.target.value === "1" })}>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </Select>
        </div>

        {showMinMax && (
          <>
            <div>
              <label className="text-xs font-medium text-gray-600">Min</label>
              <Input type="number" value={value.min ?? ""} onChange={(e) => update({ min: e.target.value ? Number(e.target.value) : undefined })} />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600">Max</label>
              <Input type="number" value={value.max ?? ""} onChange={(e) => update({ max: e.target.value ? Number(e.target.value) : undefined })} />
            </div>
          </>
        )}
      </div>

      {showOptions && (
        <div className="mt-3">
          <label className="text-xs font-medium text-gray-600">Options</label>
          <OptionEditor
            options={value.options || []}
            onChange={(opts) => update({ options: opts })}
          />
        </div>
      )}

      <div className="mt-3 flex items-center justify-between">
        <div className="flex gap-2">
          <button onClick={onMoveUp} disabled={!canUp} className="rounded bg-gray-100 px-3 py-1 text-xs">↑ Up</button>
          <button onClick={onMoveDown} disabled={!canDown} className="rounded bg-gray-100 px-3 py-1 text-xs">↓ Down</button>
        </div>
        <button onClick={onRemove} className="rounded bg-rose-600 px-3 py-1 text-xs text-white">Remove</button>
      </div>
    </div>
  );
}

function OptionEditor({
  options,
  onChange,
}: { options: { value: string; label: string }[]; onChange: (opts: { value: string; label: string }[]) => void }) {
  const add = () => onChange([...options, { value: "", label: "" }]);
  const set = (i: number, patch: Partial<{ value: string; label: string }>) => {
    const copy = options.slice();
    copy[i] = { ...copy[i], ...patch };
    onChange(copy);
  };
  const remove = (i: number) => onChange(options.filter((_, idx) => idx !== i));

  return (
    <div className="rounded bg-gray-50 p-2">
      {options.map((opt, i) => (
        <div key={i} className="mb-2 grid grid-cols-1 gap-2 md:grid-cols-3">
          <Input placeholder="value" value={opt.value} onChange={(e) => set(i, { value: e.target.value })} />
          <Input placeholder="label" value={opt.label} onChange={(e) => set(i, { label: e.target.value })} />
          <button onClick={() => remove(i)} className="rounded bg-gray-200 px-3 py-2 text-xs">Remove</button>
        </div>
      ))}
      <button onClick={add} className="rounded bg-indigo-600 px-3 py-2 text-xs text-white">+ Add option</button>
    </div>
  );
}
