"use client";
import { Check } from "lucide-react";
import type { ReactNode } from "react";

export interface StepConfig {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

interface StepIndicatorProps {
  steps: StepConfig[];
  currentStep: number;
}

export default function StepIndicator({
  steps,
  currentStep,
}: StepIndicatorProps) {
  return (
    <nav className="flex flex-col gap-0">
      {steps.map((step, i) => {
        const status =
          i < currentStep
            ? "completed"
            : i === currentStep
              ? "active"
              : "upcoming";
        return (
          <div key={i} className="flex items-start gap-3">
            <div className="flex flex-col items-center">
              <div
                className={`
                  flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all
                  ${
                    status === "completed"
                      ? "bg-accent border-accent text-accent-foreground"
                      : status === "active"
                        ? "border-accent text-accent bg-transparent"
                        : "border-border text-muted bg-transparent"
                  }
                `}
              >
                {status === "completed" ? (
                  <Check size={18} strokeWidth={2.5} />
                ) : (
                  <span className="[&>svg]:w-4.5 [&>svg]:h-4.5">
                    {step.icon}
                  </span>
                )}
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`w-0.5 h-8 mt-1 transition-colors ${
                    i < currentStep ? "bg-accent" : "bg-border"
                  }`}
                />
              )}
            </div>
            <div className="pt-2">
              <p
                className={`text-sm font-semibold leading-tight ${
                  status === "active" ? "text-foreground" : "text-muted"
                }`}
              >
                {step.title}
              </p>
              <p className="text-xs text-muted mt-0.5">{step.subtitle}</p>
            </div>
          </div>
        );
      })}
    </nav>
  );
}
