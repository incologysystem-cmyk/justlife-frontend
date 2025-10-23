// /lib/api.ts
export const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE?.replace(/\/+$/, "") || "http://localhost:4000/api";

type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

/**
 * Only prefix `/services` for service routes.
 * If the caller passes `/auth/...` or `/services/...`, don't add another prefix.
 */
function buildUrl(path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  if (p.startsWith("/auth") || p.startsWith("/services")) {
    return `${API_BASE}${p}`;
  }
  // default to services namespace
  return `${API_BASE}/services${p}`;
}

export async function api<T>(path: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(buildUrl(path), {
    ...init,
    credentials: "include",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
  });
  if (!res.ok) {
    let msg = `HTTP ${res.status}`;
    try {
      const j = await res.json();
      msg = j.message || JSON.stringify(j);
    } catch {}
    throw new Error(msg);
  }
  return res.json() as Promise<T>;
}

export async function postJson<T>(
  path: string,
  body: any,
  method: Method = "POST"
): Promise<T> {
  return api<T>(path, {
    method,
    body: JSON.stringify(body),
  });
}
