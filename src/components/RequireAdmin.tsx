// /components/RequireAdmin.tsx
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { API_BASE } from "@/lib/api";

export default async function RequireAdmin({
  children,
}: { children: React.ReactNode }) {
  // Forward the user's Cookie header to your API
  const hdrs = await headers();
  const cookieHeader = hdrs.get("cookie") ?? "";

  const res = await fetch(`${API_BASE}/auth/me`, {
    method: "GET",
    cache: "no-store",
    // Important: pass browser cookies to the API
    headers: {
      cookie: cookieHeader,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) redirect("/login?next=/admin");
  const json = await res.json();
  if (!json?.user || json.user.role !== "admin") redirect("/login?next=/admin");

  return <>{children}</>;
}
