"use client";

import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { Button } from "@heroui/react";

const faqs = [
  {
    question: "What is Raygust?",
    answer:
      "Raygust lets you upload documents and ask questions about them using AI. It uses a technique called RAG (Retrieval-Augmented Generation) to give you accurate answers based on your actual files — not generic AI guesses.",
  },
  {
    question: "Do I need to be a developer to use it?",
    answer:
      "No. You can upload documents, manage your knowledge base, and ask questions entirely through the dashboard — no coding required. If you are a developer, we also offer Python and TypeScript SDKs for integration.",
  },
  {
    question: "Which AI models power it?",
    answer:
      "OpenAI (GPT-4o, GPT-4o-mini) and Anthropic (Claude 3). Our system automatically switches to a backup model if the primary one goes down.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes. Every account's documents and data are completely isolated. No other user can access or search your files.",
  },
  {
    question: "What file formats can I upload?",
    answer:
      "PDF, plain text (.txt), and Markdown (.md). Support for DOCX, CSV, and web URLs is coming soon.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes. The free plan includes 5 documents, 100 queries per month, and 1 API key. No credit card required to get started.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 overflow-hidden bg-white px-28">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start">
        {/* Left side - Title + CTA */}
        <div className="flex flex-col items-start gap-6">
          <span className="section-header">FAQ</span>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.15]">
            Frequently Asked
            <br />
            Questions
          </h2>

          <div className="mt-auto pt-12">
            <p className="text-sm text-gray-500 leading-relaxed max-w-[260px]">
              Didn&apos;t get the answer you were looking for from your
              questions?
            </p>

            <Button className=" mt-4  rounded-2xl font-semibold px-4 py-6 shadow-[inset_0_2px_1px_rgba(255,255,255,0.4),inset_2px_0_1px_rgba(255,255,255,0.3),inset_-2px_0_1px_rgba(255,255,255,0.3)]">
              Contact Us
              <div className="rounded-lg px-3 py-1 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4)]  bg-white/10 backdrop-blur-md border-white/20">
                <ArrowRight className="" />
              </div>
            </Button>
          </div>
        </div>

        {/* Right side - Accordion */}
        <div className="flex flex-col">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-gray-200 last:border-b-0"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center gap-4 py-6 text-left cursor-pointer group"
                >
                  <div
                    className={`w-6 h-6 flex items-center justify-center shrink-0 transition-colors duration-200 ${
                      isOpen
                        ? "text-accent"
                        : "text-gray-400 group-hover:text-gray-600"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                  <span
                    className={`text-base font-semibold transition-colors duration-200 ${
                      isOpen
                        ? "text-gray-900"
                        : "text-gray-700 group-hover:text-gray-900"
                    }`}
                  >
                    {faq.question}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pl-10 pb-6 text-sm text-gray-500 leading-relaxed max-w-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
