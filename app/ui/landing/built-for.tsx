"use client";

import { useState, useRef } from "react";
import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { actionRoutes } from "../../lib/routes";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

const tabs = [
  {
    label: "Business Teams",
    description:
      "Upload company handbooks, policies, and SOPs. Let your team ask questions and get instant, accurate answers from your own documents.",
  },
  {
    label: "Customer Support",
    description:
      "Turn your help docs into an AI assistant that answers customer questions accurately",
  },
  {
    label: "Developers",
    description:
      "Skip the boilerplate. Our SDK handles chunking, embedding, storage, and LLM routing so you can ship faster.",
  },
  {
    label: "Agencies & Consultants",
    description:
      "Manage isolated knowledge bases for each client. Multi-tenant by default",
  },
];

export default function BuiltFor() {
  const [activeTab, setActiveTab] = useState(0);
  const isFirstRender = useRef(true);

  useGSAP(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const split = new SplitText(".built-desc", { type: "words" });
    gsap.fromTo(
      split.words,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.015, ease: "power2.out" }
    );
  }, { dependencies: [activeTab], revertOnUpdate: true });

  return (
    <section className="py-28 overflow-hidden bg-white relative">
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

      <div className="flex flex-col items-center text-center relative z-10 px-6 md:px-12 lg:px-28">
        {/* Section label */}
        <div className="built-header opacity-0 translate-y-[20px] inline-block">
          <span className="section-header">Built For</span>
        </div>

        {/* Headline */}
        <h2 className="built-title mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.15]">
          For teams, builders,
          <br />
          and everyone in between
        </h2>

        {/* Tabs */}
        <div className="built-tabs opacity-0 -translate-x-[30px] mt-8 sm:mt-10 flex flex-wrap justify-center gap-1.5 p-1.5 bg-gray-50 border border-gray-200 rounded-2xl">
          {tabs.map((tab, index) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(index)}
              className={`px-3 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 cursor-pointer ${
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
        <div className="relative w-full mt-10 sm:mt-12 h-[220px] sm:h-[300px] md:h-[350px] lg:h-[420px] flex items-center justify-center overflow-hidden">
          {/* Circular images + floating orbs */}
          <div className="relative z-[2] w-full max-w-4xl h-full">
            {/* Image circle 1 - left */}
            <div className="built-orb opacity-0 scale-0 absolute left-[2%] top-[18%] w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px]">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform duration-500 hover:scale-105">
                <div
                  // style={{
                  //   backgroundImage: `url('https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp')`,
                  // }}
                  className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 bg-cover bg-center"
                />
              </div>
            </div>

            {/* Image circle 2 - center-left */}
            <div className="built-orb opacity-0 scale-0 absolute left-[22%] top-[8%] w-[90px] h-[90px] sm:w-[130px] sm:h-[130px] md:w-[170px] md:h-[170px] lg:w-[200px] lg:h-[200px]">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform duration-500 hover:scale-105">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
              </div>
            </div>

            {/* Image circle 3 - center */}
            <div className="built-orb opacity-0 scale-0 absolute left-[42%] top-[14%] w-[85px] h-[85px] sm:w-[125px] sm:h-[125px] md:w-[160px] md:h-[160px] lg:w-[190px] lg:h-[190px]">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform duration-500 hover:scale-105">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-350" />
              </div>
            </div>

            {/* Image circle 4 - center-right */}
            <div className="built-orb opacity-0 scale-0 absolute right-[18%] top-[6%] w-[82px] h-[82px] sm:w-[120px] sm:h-[120px] md:w-[155px] md:h-[155px] lg:w-[185px] lg:h-[185px]">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform duration-500 hover:scale-105">
                <div className="w-full h-full bg-gradient-to-br from-gray-250 to-gray-400" />
              </div>
            </div>

            {/* Image circle 5 - right */}
            <div className="built-orb opacity-0 scale-0 absolute right-[0%] top-[20%] w-[75px] h-[75px] sm:w-[110px] sm:h-[110px] md:w-[140px] md:h-[140px] lg:w-[170px] lg:h-[170px]">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform duration-500 hover:scale-105">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
              </div>
            </div>

            {/* Floating accent orbs - scaled down on mobile */}
            <div className="built-orb opacity-0 scale-0 absolute left-[8%] bottom-[15%] w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] lg:w-[90px] lg:h-[90px] rounded-full bg-accent opacity-90" />
            <div className="built-orb opacity-0 scale-0 absolute left-[18%] top-[5%] w-[25px] h-[25px] sm:w-[35px] sm:h-[35px] lg:w-[50px] lg:h-[50px] rounded-full bg-accent opacity-80" />
            <div className="built-orb opacity-0 scale-0 absolute left-[38%] bottom-[22%] w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] lg:w-[75px] lg:h-[75px] rounded-full bg-accent opacity-85" />
            <div className="built-orb opacity-0 scale-0 absolute right-[25%] top-[2%] w-[30px] h-[30px] sm:w-[45px] sm:h-[45px] lg:w-[65px] lg:h-[65px] rounded-full bg-gradient-to-br from-accent via-pink-400 to-blue-400 opacity-90" />
            <div className="built-orb opacity-0 scale-0 absolute right-[8%] top-[8%] w-[25px] h-[25px] sm:w-[38px] sm:h-[38px] lg:w-[55px] lg:h-[55px] rounded-full bg-accent opacity-80" />

            {/* Small iridescent orb */}
            <div className="built-orb opacity-0 scale-0 absolute left-[40%] top-[2%] w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] lg:w-[40px] lg:h-[40px] rounded-full bg-gradient-to-br from-pink-300 via-purple-200 to-blue-300 opacity-70 blur-[1px]" />
          </div>
        </div>

        {/* Description text */}
        <p key={activeTab} className="built-desc mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
          {tabs[activeTab].description}
        </p>

        <div className="built-btn opacity-0 translate-y-[20px] mt-6 sm:mt-8">
          <Link href={actionRoutes.signup}>
            <Button
              className="inline-flex items-center justify-center gap-2 px-6 py-6 text-sm font-semibold text-gray-900 bg-white border-gray-200 rounded-2xl border-2 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
              variant="outline"
            >
              Start Building
              <div className="rounded-lg px-3 py-1 border-2 backdrop-blur-md border-gray-100">
                <ArrowRight />
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
