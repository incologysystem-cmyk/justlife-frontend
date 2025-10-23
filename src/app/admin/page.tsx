import ServiceBuilder from "@/components/ServiceBuilder";

export default function AdminPage() {
  return (
    <main className="mx-auto max-w-6xl p-5">
      <h1 className="mb-6 text-2xl font-bold">Admin — Quick Service Builder</h1>
      <p className="mb-4 text-sm text-gray-600">
        This page works entirely in your browser. Create services, customize fields & pricing,
        save to local storage, and export JSON. When you connect a backend, use “Sync to API”.
      </p>
      <ServiceBuilder />
    </main>
  );
}
