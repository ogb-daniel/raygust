"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";

const tabs = [
  {
    label: "Business Teams",
    description:
      "Upload company handbooks, policies, and SOPs. Let your team ask questions and get instant, accurate answers from your own documents.",
  },
  {
    label: "Customer Support",
    description:
      "Turn your help docs into an AI assistant that answers customer questions accurately — grounded in your actual knowledge base.",
  },
  {
    label: "Developers",
    description:
      "Skip the boilerplate. Our SDK handles chunking, embedding, storage, and LLM routing so you can ship faster.",
  },
  {
    label: "Agencies & Consultants",
    description:
      "Manage isolated knowledge bases for each client. Multi-tenant by default — every API key gets its own secure data silo.",
  },
];

export default function BuiltFor() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 overflow-hidden bg-white relative">
      <div className="absolute inset-3 bg-accent-soft rounded-xl opacity-40 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-1/2">
          <div className="absolute inset-0 grid-pattern-accent opacity-[0.15]" />
          <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white to-transparent z-[1]" />
          <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-accent-soft to-transparent z-[1]" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white to-transparent z-[1]" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-accent-soft to-transparent z-[1]" />
          <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent z-[1]" />
          <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-accent-soft to-transparent z-[1]" />
          <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white to-transparent z-[1]" />
          <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-accent-soft to-transparent z-[1]" />
        </div>
      </div>

      <div className="flex flex-col items-center text-center relative z-10">
        {/* Section label */}
        <span className="section-header">Built For</span>

        {/* Headline */}
        <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.15]">
          For teams, builders,
          <br />
          and everyone in between
        </h2>

        {/* Tabs */}
        <div className="mt-10 inline-flex items-center gap-1 p-1.5 bg-gray-50 border border-gray-200 rounded-2xl">
          {tabs.map((tab, index) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(index)}
              className={`px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 cursor-pointer ${
                activeTab === index
                  ? "bg-white text-gray-900 shadow-sm border border-gray-200"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Image Collage Area */}
        <div className="relative w-full mt-12 h-[420px] flex items-center justify-center overflow-hidden">
          {/* Grid pattern background */}

          {/* Circular images + floating orbs */}
          <div className="relative z-[2] w-full max-w-4xl h-full">
            {/* Image circle 1 - left */}
            <div className="absolute left-[2%] top-[18%] w-[180px] h-[180px] rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform duration-500 hover:scale-105">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
            </div>

            {/* Image circle 2 - center-left */}
            <div className="absolute left-[22%] top-[8%] w-[200px] h-[200px] rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform duration-500 hover:scale-105">
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
            </div>

            {/* Image circle 3 - center */}
            <div className="absolute left-[42%] top-[14%] w-[190px] h-[190px] rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform duration-500 hover:scale-105">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-350" />
            </div>

            {/* Image circle 4 - center-right */}
            <div className="absolute right-[18%] top-[6%] w-[185px] h-[185px] rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform duration-500 hover:scale-105">
              <div className="w-full h-full bg-gradient-to-br from-gray-250 to-gray-400" />
            </div>

            {/* Image circle 5 - right */}
            <div className="absolute right-[0%] top-[20%] w-[170px] h-[170px] rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform duration-500 hover:scale-105">
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
            </div>

            {/* Floating accent orbs */}
            <div className="absolute left-[8%] bottom-[15%] w-[90px] h-[90px] rounded-full bg-accent opacity-90" />
            <div className="absolute left-[18%] top-[5%] w-[50px] h-[50px] rounded-full bg-accent opacity-80" />
            <div className="absolute left-[38%] bottom-[22%] w-[75px] h-[75px] rounded-full bg-accent opacity-85" />
            <div className="absolute right-[25%] top-[2%] w-[65px] h-[65px] rounded-full bg-gradient-to-br from-accent via-pink-400 to-blue-400 opacity-90" />
            <div className="absolute right-[8%] top-[8%] w-[55px] h-[55px] rounded-full bg-accent opacity-80" />

            {/* Small iridescent orb */}
            <div className="absolute left-[40%] top-[2%] w-[40px] h-[40px] rounded-full bg-gradient-to-br from-pink-300 via-purple-200 to-blue-300 opacity-70 blur-[1px]" />
          </div>
        </div>

        {/* Description text */}
        <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-xl transition-all duration-300">
          {tabs[activeTab].description}
        </p>

        {/* CTA Button */}
        <Button
          className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-6 text-sm font-semibold text-gray-900 bg-white border-gray-200 rounded-2xl border-2 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
          variant="outline"
        >
          Start Building
          <div className="rounded-lg px-3 py-1 border-2 backdrop-blur-md border-gray-100">
            <ArrowRight />
          </div>
        </Button>
      </div>
    </section>
  );
}
