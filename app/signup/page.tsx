"use client";
import { useState, useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { User, Mail, Users, Rocket } from "lucide-react";
import AuthLayout from "@/app/ui/auth/auth-layout";
import type { StepConfig } from "@/app/ui/auth/step-indicator";
import SignupStepDetails from "@/app/ui/auth/signup-step-details";
import SignupStepVerify from "@/app/ui/auth/signup-step-verify";
import SignupStepInvite from "@/app/ui/auth/signup-step-invite";
import SignupStepWelcome from "@/app/ui/auth/signup-step-welcome";
import { registerAction } from "@/lib/auth/actions";
const STEPS: StepConfig[] = [
  {
    icon: <User size={18} />,
    title: "Your details",
    subtitle: "Provide an email and password",
  },
  {
    icon: <Mail size={18} />,
    title: "Verify your email",
    subtitle: "Enter your verification code",
  },
  {
    icon: <Users size={18} />,
    title: "Invite your team",
    subtitle: "Start collaborating with your team",
  },
  {
    icon: <Rocket size={18} />,
    title: "Welcome to Raygust!",
    subtitle: "Get up and running in 3 minutes",
  },
];
export default function SignupPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [email, setEmail] = useState("");
  const router = useRouter();

  const [state, formAction, isPending] = useActionState(registerAction, {
    success: false,
  });

  useEffect(() => {
    if (state.success && currentStep === 0) {
      setCurrentStep(1);
    }
  }, [state.success, currentStep]);

  const goToNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep((s) => s + 1);
    }
  };
  const handleFinish = () => {
    router.push("/dashboard");
  };

  return (
    <AuthLayout
      steps={STEPS}
      currentStep={currentStep}
      altAction={{ label: "Sign in", href: "/login" }}
    >
      {currentStep === 0 && (
        <SignupStepDetails
          formAction={formAction}
          isPending={isPending}
          error={state.error}
          fieldErrors={state.fieldErrors}
          onEmailCapture={setEmail}
        />
      )}
      {currentStep === 1 && (
        <SignupStepVerify email={email} onNext={goToNext} />
      )}
      {currentStep === 2 && <SignupStepInvite onNext={goToNext} />}
      {currentStep === 3 && <SignupStepWelcome onFinish={handleFinish} />}
    </AuthLayout>
  );
}
