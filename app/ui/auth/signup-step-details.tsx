"use client";
import { useState } from "react";
import AuthInput from "./auth-input";
import PasswordStrength from "./password-strength";
import OAuthButtons from "./oauth-buttons";

interface SignupStepDetailsProps {
  formAction: (formData: FormData) => void;
  isPending: boolean;
  error?: string;
  fieldErrors?: Record<string, string>;
  onEmailCapture: (email: string) => void;
}

export default function SignupStepDetails({
  formAction,
  isPending,
  error,
  fieldErrors,
  onEmailCapture,
}: SignupStepDetailsProps) {
  const [password, setPassword] = useState("");
  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-foreground">
          Create a free account
        </h1>
        <p className="text-sm text-muted mt-2">
          Provide your email and choose a password.
        </p>
      </div>
      <form
        action={(formData) => {
          onEmailCapture(formData.get("email") as string);
          formAction(formData);
        }}
        className="flex flex-col gap-5"
      >
        <AuthInput
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          required
          error={fieldErrors?.email}
          autoComplete="email"
        />
        <div>
          <AuthInput
            label="Password"
            name="password"
            type="password"
            placeholder="Choose a password"
            required
            error={fieldErrors?.password}
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <PasswordStrength password={password} />
        </div>
        {error && (
          <div className="text-sm text-danger bg-danger/10 px-4 py-3 rounded-(--radius-small)">
            {error}
          </div>
        )}
        <OAuthButtons action="sign-up" />
        <button
          type="submit"
          disabled={isPending}
          className="w-full py-2.5 px-4 rounded-(--radius-small)
            bg-accent text-accent-foreground font-medium text-sm
            hover:opacity-90 transition-opacity
            disabled:opacity-50 disabled:cursor-not-allowed
            cursor-pointer"
        >
          {isPending ? "Creating account..." : "Continue"}
        </button>
      </form>
    </div>
  );
}
