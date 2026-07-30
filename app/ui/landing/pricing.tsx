"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@heroui/react";
import Link from "next/link";
import { actionRoutes } from "../../lib/routes";

const plans = {
  individual: [
    {
      name: "Free",
      tagline: "Get started with Raygust",
      price: "$0",
      period: "/per month",
      features: [
        "5 documents",
        "100 queries/month",
        "1 API key",
        "Chat playground",
        "Community support",
      ],
    },
    {
      name: "Pro",
      tagline: "For everyday productivity",
      price: "$29",
      period: "/per month",
      features: [
        "Unlimited documents",
        "10,000 queries/month",
        "10 API keys",
        "Chat playground + SDK access",
        "Priority support + Metrics dashboard",
      ],
      featurePrefix: "Everything in Free, plus:",
    },
    {
      name: "Enterprise",
      tagline: "For large-scale deployments",
      price: "Custom",
      period: "",
      features: [
        "Unlimited documents",
        "Unlimited queries",
        "Unlimited API keys",
        "Custom LLM providers",
        "Dedicated support + SLA",
      ],
      featurePrefix: "Everything in Pro, plus:",
    },
  ],
  team: [
    {
      name: "Team Starter",
      tagline: "For small teams",
      price: "$19",
      period: "/per user/month",
      features: [
        "Shared knowledge base",
        "500 queries/user/month",
        "5 API keys",
        "Chat playground",
        "Email support",
      ],
    },
    {
      name: "Team Pro",
      tagline: "For growing teams",
      price: "$49",
      period: "/per user/month",
      features: [
        "Unlimited shared documents",
        "25,000 queries/user/month",
        "Unlimited API keys",
        "SDK access + Admin dashboard",
        "Priority support + Analytics",
      ],
      featurePrefix: "Everything in Starter, plus:",
    },
    {
      name: "Enterprise",
      tagline: "Custom solutions for your org",
      price: "Custom",
      period: "",
      features: [
        "SSO & SAML authentication",
        "Unlimited everything",
        "Custom LLM providers",
        "Audit logs & compliance",
        "Dedicated account manager",
      ],
      featurePrefix: "Everything in Team Pro, plus:",
    },
  ],
};

type PlanType = "individual" | "team";

export default function Pricing() {
  const [planType, setPlanType] = useState<PlanType>("individual");
  const currentPlans = plans[planType];

  return (
    <section className="py-28 overflow-hidden bg-white px-6 md:px-12 lg:px-28">
      <div className="flex flex-col items-center text-center">
        {/* Section label */}
        <div className="pricing-header inline-block">
          <span className="section-header">Pricing</span>
        </div>

        {/* Headline */}
        <h2 className="pricing-title mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.15]">
          Explore plans
        </h2>

        {/* Toggle */}
        <div className="pricing-toggle mt-10 inline-flex gap-1 items-center p-1.5 bg-gray-50 border border-gray-200 rounded-2xl">
          <button
            onClick={() => setPlanType("individual")}
            className={`px-6 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 cursor-pointer ${
              planType === "individual"
                ? "bg-white text-gray-900 shadow-sm border border-gray-200"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Individual
          </button>
          <button
            onClick={() => setPlanType("team")}
            className={`px-6 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 cursor-pointer ${
              planType === "team"
                ? "bg-white text-gray-900 shadow-sm border border-gray-200"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Team
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl items-stretch md:items-center">
          {currentPlans.map((plan, index) => {
            const isMiddle = index === 1;

            return (
              <div
                key={plan.name}
                className={`pricing-card-${index} relative flex flex-col rounded-2xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)] p-7 text-left cursor-default ${
                  isMiddle
                    ? "border border-accent scale-[1.05] z-10"
                    : "border border-gray-200 bg-white"
                }`}
              >
                {/* Plan name & tagline */}
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{plan.tagline}</p>

                {/* CTA Button */}
                {isMiddle ? (
                  <Link href={actionRoutes.signup} className="w-full mt-5">
                    <Button className="rounded-2xl w-full flex items-center justify-between font-semibold px-4 py-6 shadow-[inset_0_2px_1px_rgba(255,255,255,0.4),inset_2px_0_1px_rgba(255,255,255,0.3),inset_-2px_0_1px_rgba(255,255,255,0.3)]">
                      Get Plan
                      <div className="rounded-lg px-3 py-1 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4)] bg-white/10 backdrop-blur-md border-white/20">
                        <ArrowRight className="" />
                      </div>
                    </Button>
                  </Link>
                ) : (
                  <Link href={actionRoutes.signup} className="w-full mt-5">
                    <Button
                      variant="outline"
                      className="w-full inline-flex items-center justify-between gap-2 px-4 py-6 text-sm font-semibold text-gray-900 border-gray-200 rounded-2xl border-2 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
                    >
                      Get Plan
                      <div className="rounded-lg px-3 py-1 border-2 backdrop-blur-md border-gray-100">
                        <ArrowRight className="" />
                      </div>
                    </Button>
                  </Link>
                )}

                {/* Divider */}
                <div className="my-6 h-px bg-gray-100" />

                {/* Feature prefix */}
                {plan.featurePrefix && (
                  <p
                    className={`mb-4 text-sm italic transition-colors duration-300 ${
                      isMiddle ? "text-accent" : "text-gray-400"
                    }`}
                  >
                    {plan.featurePrefix}
                  </p>
                )}

                {/* Features list */}
                <ul className="flex flex-col gap-3.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-gray-600"
                    >
                      <Check
                        className={`w-4 h-4 mt-0.5 shrink-0 transition-colors duration-300 ${
                          isMiddle ? "text-accent" : "text-gray-400"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="mt-auto pt-8 border-t border-gray-100">
                  <span className="text-3xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-sm text-gray-500">{plan.period}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
