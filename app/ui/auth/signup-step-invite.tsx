"use client";

import { useState } from "react";
import AuthInput from "./auth-input";
import { Plus } from "lucide-react";

interface SignupStepInviteProps {
  onNext: () => void;
}

export default function SignupStepInvite({ onNext }: SignupStepInviteProps) {
  const [emails, setEmails] = useState(["", "", ""]);

  const addField = () => {
    setEmails((prev) => [...prev, ""]);
  };

  const updateEmail = (index: number, value: string) => {
    setEmails((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

  const handleSubmit = () => {
    const filled = emails.filter((e) => e.trim());
    if (filled.length > 0) {
      console.log("[Invite] Sending invites to:", filled);
    }
    onNext();
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-foreground">Invite your team</h1>
        <p className="text-sm text-muted mt-2">
          Start collaborating with your team.
        </p>
      </div>

      <div className="flex flex-col gap-3 mb-4">
        {emails.map((email, i) => (
          <AuthInput
            key={i}
            label={i === 0 ? "Email address" : ""}
            name={`invite-email-${i}`}
            type="email"
            placeholder="Enter an email address"
            value={email}
            onChange={(e) => updateEmail(i, e.target.value)}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={addField}
        className="flex items-center gap-1.5 text-sm font-medium text-accent
          mb-6 cursor-pointer bg-transparent border-none hover:opacity-80 transition-opacity"
      >
        <Plus size={16} />
        Add more
      </button>

      <button
        type="button"
        onClick={handleSubmit}
        className="w-full py-2.5 px-4 rounded-(--radius-small)
          bg-accent text-accent-foreground font-medium text-sm
          hover:opacity-90 transition-opacity cursor-pointer"
      >
        Continue
      </button>
    </div>
  );
}
