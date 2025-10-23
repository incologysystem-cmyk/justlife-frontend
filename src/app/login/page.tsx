"use client";
import React, { useState } from "react";
import { loginWithEmailPassword, startOtp, verifyOtp } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto mt-16 w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      {children}
    </div>
  );
}

export default function LoginPage() {
  const router = useRouter();
  const search = useSearchParams();
  const next = search.get("next") || "/admin";

  const [tab, setTab] = useState<"password" | "otp">("password");

  // password
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("");

  // otp
  const [phone, setPhone] = useState("+923001234567");
  const [requestId, setRequestId] = useState("");
  const [code, setCode] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onPasswordLogin = async () => {
    setLoading(true); setError("");
    try {
      const out = await loginWithEmailPassword(email, password);
      if (out.success) router.replace(next);
    } catch (e: any) { setError(e.message); } finally { setLoading(false); }
  };

  const onStartOtp = async () => {
    setLoading(true); setError("");
    try {
      const out = await startOtp(phone);
      if (out.success) setRequestId(out.requestId);
    } catch (e: any) { setError(e.message); } finally { setLoading(false); }
  };

  const onVerifyOtp = async () => {
    setLoading(true); setError("");
    try {
      const out = await verifyOtp(requestId, code);
      if (out.success) router.replace(next);
    } catch (e: any) { setError(e.message); } finally { setLoading(false); }
  };

  return (
    <Card>
      <h1 className="mb-4 text-center text-2xl font-bold">Admin Login</h1>

      <div className="mb-4 flex gap-2">
        <button
          className={`rounded-lg px-3 py-2 text-sm ${tab === "password" ? "bg-indigo-600 text-white" : "bg-gray-200"}`}
          onClick={() => setTab("password")}
        >
          Email / Password
        </button>
        <button
          className={`rounded-lg px-3 py-2 text-sm ${tab === "otp" ? "bg-indigo-600 text-white" : "bg-gray-200"}`}
          onClick={() => setTab("otp")}
        >
          Phone OTP
        </button>
      </div>

      {tab === "password" ? (
        // ✅ Only the password tab uses a <form>
        <form
          className="space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            onPasswordLogin();
          }}
        >
          <label className="block text-sm">Email</label>
          <input
            className="w-full rounded-lg border px-3 py-2"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type="email"
            autoComplete="username"
          />

          <label className="block text-sm">Password</label>
          <input
            type="password"
            className="w-full rounded-lg border px-3 py-2"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            autoComplete="current-password"
          />

          <button disabled={loading} type="submit" className="mt-2 w-full rounded-lg bg-indigo-600 py-2 text-white">
            Login
          </button>
        </form>
      ) : (
        // ✅ OTP tab has NO <form> and NO password fields
        <div className="space-y-3">
          {!requestId ? (
            <>
              <label className="block text-sm">Phone (E.164)</label>
              <input
                className="w-full rounded-lg border px-3 py-2"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                type="tel"
                inputMode="tel"
                autoComplete="tel"
              />
              <button disabled={loading} onClick={onStartOtp} className="mt-2 w-full rounded-lg bg-indigo-600 py-2 text-white">
                Send Code
              </button>
            </>
          ) : (
            <>
              <label className="block text-sm">Enter Code</label>
              <input
                className="w-full rounded-lg border px-3 py-2"
                value={code}
                onChange={(e)=>setCode(e.target.value)}
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
              />
              <button disabled={loading} onClick={onVerifyOtp} className="mt-2 w-full rounded-lg bg-indigo-600 py-2 text-white">
                Verify & Login
              </button>
            </>
          )}
        </div>
      )}

      {error && <p className="mt-3 text-center text-sm text-rose-600">{error}</p>}
    </Card>
  );
}
