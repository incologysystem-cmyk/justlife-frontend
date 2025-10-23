// /lib/auth-client.ts
import { api, postJson } from "./api";

export async function loginWithEmailPassword(email: string, password: string) {
  // POST /api/auth/login (cookie set by server)
  return postJson<{ success: boolean; user: any; token?: string }>("/auth/login", { email, password });
}

export async function startOtp(phone: string) {
  // POST /api/auth/otp/start
  return postJson<{ success: boolean; requestId: string; expiresInSec: number }>("/auth/otp/start", { phone });
}

export async function verifyOtp(requestId: string, code: string) {
  // POST /api/auth/otp/verify (cookie set by server)
  return postJson<{ success: boolean; user: any; token?: string }>("/auth/otp/verify", { requestId, code });
}

export async function me() {
  // GET /api/auth/me
  return api<{ success: boolean; user: any }>("/auth/me", { method: "GET" });
}
