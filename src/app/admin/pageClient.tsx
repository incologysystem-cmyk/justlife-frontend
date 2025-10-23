// /app/admin/pageClient.tsx
"use client";
import React from "react";
// import AdminServiceWizard from "@/components/AdminServiceWizard";
import AdminServiceWizard from "../Components/AdminServiceWizard";

export default function AdminDashboardClient() {
  return (
    <main className="mx-auto max-w-6xl p-5">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Services</h1>
        <AdminServiceWizard.Trigger />
      </div>

      {/* (optional) You can list services here later */}
      <AdminServiceWizard.Modal />
    </main>
  );
}
