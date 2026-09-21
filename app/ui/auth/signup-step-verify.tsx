"use client";
import { useState } from "react";
import OtpInput from "./otp-input";
interface SignupStepVerifyProps {
  email: string;
  onNext: () => void;
}

export default function SignupStepVerify({
  email,
  onNext,
}: SignupStepVerifyProps) {
  const [code, setCode] = useState("");
  const handleResend = () => {
    console.log("[Verify] Resend code — not implemented yet");
  };
  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-foreground">
          Verify your email
        </h1>
        <p className="text-sm text-muted mt-2">
          We sent a code to{" "}
          <span className="font-medium text-foreground">
            {email || "your email"}
          </span>
        </p>
      </div>
      <div className="mb-6">
        <OtpInput onComplete={(c) => setCode(c)} />
      </div>
      <p className="text-sm text-center text-muted mb-6">
        Didn&apos;t get a code?{" "}
        <button
          type="button"
          onClick={handleResend}
          className="font-medium text-accent underline underline-offset-2 cursor-pointer bg-transparent border-none"
        >
          Click to resend
        </button>
      </p>
      <button
        type="button"
        onClick={onNext}
        className="w-full py-2.5 px-4 rounded-(--radius-small)
          bg-accent text-accent-foreground font-medium text-sm
          hover:opacity-90 transition-opacity cursor-pointer"
      >
        Continue
      </button>
    </div>
  );
}
