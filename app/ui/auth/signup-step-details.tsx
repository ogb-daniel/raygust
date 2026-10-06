"use client";
import { useState, useEffect } from "react";
import AuthInput from "./auth-input";
import PasswordStrength from "./password-strength";
import OAuthButtons from "./oauth-buttons";
import { registerSchema } from "@/lib/validation/auth";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [localErrors, setLocalErrors] = useState<Record<string, string> | undefined>(fieldErrors);

  // Sync with server errors on form submission
  useEffect(() => {
    setLocalErrors(fieldErrors);
  }, [fieldErrors]);

  // Real-time validation, but only active after the user has tried to submit at least once
  const validateField = (newEmail: string, newPassword: string, newConfirm: string) => {
    if (!fieldErrors) return; // don't show errors before first submit

    const parsed = registerSchema.safeParse({
      email: newEmail,
      password: newPassword,
      confirmPassword: newConfirm,
    });

    if (!parsed.success) {
      const newErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0]?.toString() ?? "unknown";
        if (!newErrors[field]) {
          newErrors[field] = issue.message;
        }
      }
      setLocalErrors(newErrors);
    } else {
      setLocalErrors({});
    }
  };

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
          error={localErrors?.email}
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateField(e.target.value, password, confirmPassword);
          }}
        />
        <div>
          <AuthInput
            label="Password"
            name="password"
            type="password"
            placeholder="Choose a password"
            required
            error={localErrors?.password}
            autoComplete="new-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validateField(email, e.target.value, confirmPassword);
            }}
          />
          <PasswordStrength password={password} />
        </div>

        <AuthInput
          label="Confirm password"
          name="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          required
          error={localErrors?.confirmPassword}
          autoComplete="new-password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            validateField(email, password, e.target.value);
          }}
        />

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
