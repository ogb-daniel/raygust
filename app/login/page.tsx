"use client";

import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AuthLayout from "@/app/ui/auth/auth-layout";
import AuthInput from "@/app/ui/auth/auth-input";
import OAuthButtons from "@/app/ui/auth/oauth-buttons";
import { loginAction } from "@/lib/auth/actions";
import { useAuthStore } from "@/lib/stores/auth";

export default function LoginPage() {
  const router = useRouter();
  const setAuth = useAuthStore((s) => s.setAuth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [state, formAction, isPending] = useActionState(loginAction, {
    success: false,
  });

  useEffect(() => {
    if (state.success) {
      if (state.user) {
        setAuth(state.user);
      }
      router.push("/dashboard");
    }
  }, [state.success, state.user, setAuth, router]);

  return (
    <AuthLayout altAction={{ label: "Sign up", href: "/signup" }}>
      <div>
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-foreground">
            Sign in to your account
          </h1>
          <p className="text-sm text-muted mt-2">
            Welcome back! Enter your credentials.
          </p>
        </div>

        <form action={formAction} className="flex flex-col gap-5">
          <AuthInput
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={state.fieldErrors?.email}
          />

          <div>
            <AuthInput
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={state.fieldErrors?.password}
            />
            <div className="flex justify-end mt-1.5">
              <a
                href="/forgot-password"
                className="text-xs font-medium text-accent hover:opacity-80 transition-opacity"
              >
                Forgot password?
              </a>
            </div>
          </div>

          {state.error && (
            <div className="text-sm text-danger bg-danger/10 px-4 py-3 rounded-(--radius-small)">
              {state.error}
            </div>
          )}

          <OAuthButtons action="sign-in" />

          <button
            type="submit"
            disabled={isPending}
            className="w-full py-2.5 px-4 rounded-(--radius-small)
              bg-accent text-accent-foreground font-medium text-sm
              hover:opacity-90 transition-opacity
              disabled:opacity-50 disabled:cursor-not-allowed
              cursor-pointer"
          >
            {isPending ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="text-sm text-center text-muted mt-6">
          Don&apos;t have an account?{" "}
          <a
            href="/signup"
            className="font-medium text-accent underline underline-offset-2"
          >
            Sign up
          </a>
        </p>
      </div>
    </AuthLayout>
  );
}
