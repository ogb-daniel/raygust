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
  return <nav className="flex flex-col gap-0"></nav>;
}
