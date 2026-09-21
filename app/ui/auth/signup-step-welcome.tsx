"use client";

import { PartyPopper } from "lucide-react";

interface SignupStepWelcomeProps {
  onFinish: () => void;
}

export default function SignupStepWelcome({
  onFinish,
}: SignupStepWelcomeProps) {
  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-foreground">
          Welcome to Raygust!
        </h1>
        <p className="text-sm text-muted mt-2">
          Get up and running in 3 minutes.
        </p>
      </div>

      <div className="flex items-center justify-center mb-8">
        <div className="w-full aspect-video rounded-(--radius-large) bg-surface border border-border flex items-center justify-center">
          <div className="text-center">
            <PartyPopper size={48} className="text-accent mx-auto mb-3" />
            <p className="text-sm text-muted">
              Your account is ready. Let&apos;s build something great.
            </p>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={onFinish}
        className="w-full py-2.5 px-4 rounded-(--radius-small)
          bg-accent text-accent-foreground font-medium text-sm
          hover:opacity-90 transition-opacity cursor-pointer"
      >
        Finish up
      </button>
    </div>
  );
}
