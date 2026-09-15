"use client";

import Link from "next/link";
import Logo from "@/app/ui/logo";
import StepIndicator, { StepConfig } from "./step-indicator";
import { actionRoutes } from "@/app/lib/routes";
import { MoveLeft } from "lucide-react";

interface AuthLayoutProps {
  children: React.ReactNode;
  steps?: StepConfig[];
  currentStep?: number;
  totalSteps?: number;
  altAction?: {
    label: string;
    href: string;
  };
}

export default function AuthLayout({
  children,
  steps,
  currentStep = 0,
  totalSteps,
  altAction = { label: "Sign in", href: actionRoutes.login },
}: AuthLayoutProps) {
  const total = totalSteps ?? steps?.length ?? 1;

  return (
    <div className="flex min-h-screen">
      <aside className="hidden lg:flex lg:w-[320px] xl:w-[360px] flex-col justify-between bg-surface p-8 border-r border-border">
        <div>
          <div className="mb-10">
            <Logo />
          </div>
          {steps && <StepIndicator steps={steps} currentStep={currentStep} />}
        </div>
        <div className="flex items-center justify-between text-sm">
          <Link
            href="/"
            className="text-muted hover:text-foreground transition-colors no-underline"
          >
            <MoveLeft /> Back to home
          </Link>
          <Link
            href={altAction.href}
            className="font-medium text-foreground hover:text-accent transition-colors no-underline"
          >
            {altAction.label}
          </Link>
        </div>
      </aside>
      <main className="flex-1 flex flex-col">
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-border">
          <Logo />
          <Link
            href={altAction.href}
            className="text-sm font-medium text-accent no-underline"
          >
            {altAction.label}
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-[440px]">{children}</div>
        </div>
        <div className="px-6 pb-8 flex justify-center">
          <div className="flex gap-2">
            {Array.from({ length: total }).map((_, i) => (
              <div
                key={i}
                className={`h-1 w-16 rounded-full transition-colors duration-300 ${
                  i <= currentStep ? "bg-accent" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
