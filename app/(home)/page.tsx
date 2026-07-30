"use client";
import Intro from "../ui/landing/intro";
import Features from "../ui/landing/features";
import Works from "../ui/landing/works";
import Powered from "../ui/landing/powered";
import BuiltFor from "../ui/landing/built-for";
import Pricing from "../ui/landing/pricing";
import Testimonials from "../ui/landing/testimonials";
import FAQ from "../ui/landing/faq";
import Footer from "../ui/landing/footer";
import SmoothScrollSection from "../ui/smooth-scroll-section";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";
import { Observer } from "gsap/Observer";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}
interface GlobRef {
  height: number | undefined;
}
export default function HomePage() {
  const poweredRef = useRef<GlobRef>(null);
  useGSAP(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    let currentStep = 0;
    let isAnimating = false;

    // Initialize SplitText
    const featuresSplit = new SplitText(".features-title", { type: "words" });
    const worksSplit = new SplitText(".works-title", { type: "words" });
    const builtSplit = new SplitText(".built-title", { type: "words" });
    const builtDescSplit = new SplitText(".built-desc", { type: "words" });
    const pricingSplit = new SplitText(".pricing-title", { type: "words" });
    const faqSplit = new SplitText(".faq-title", { type: "words" });

    gsap.set(
      [
        featuresSplit.words,
        worksSplit.words,
        builtSplit.words,
        builtDescSplit.words,
        pricingSplit.words,
        faqSplit.words,
      ],
      { opacity: 0, y: 20 }
    );

    function goToStep(direction: string | number) {
      if (isAnimating) return;

      const totalSteps = 8; // Currently steps 0, 1, 2, 3, 4, 5, 6, 7
      let nextStep = currentStep;

      if (typeof direction === "number") {
        if (
          direction >= 0 &&
          direction < totalSteps &&
          direction !== currentStep
        ) {
          nextStep = direction;
        } else {
          return;
        }
      } else if (direction === "down") {
        if (currentStep < totalSteps - 1) nextStep++;
      } else if (direction === "up") {
        if (currentStep > 0) nextStep--;
      }

      if (nextStep === currentStep) {
        return;
      }
      isAnimating = true;

      let targetY = 0;
      if (nextStep === 1) {
        targetY = -((poweredRef.current?.height || 0) + 192);
      } else if (nextStep >= 2) {
        const section = document.getElementById(`step-${nextStep}`);
        if (section) {
          targetY = -section.offsetTop;
        }
      }

      gsap.to(".main-wrapper", {
        y: targetY,
        duration: 1,
        ease: "power3.inOut",
      });
      gsap.to(".layout-bg", {
        y: targetY,
        duration: 1,
        ease: "power3.inOut",
      });

      if (nextStep === 1 && currentStep === 0) {
        gsap.fromTo(
          ".logo-item",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.8, ease: "power2.out" },
        );
      }

      if (nextStep === 2) {
        gsap.fromTo(
          ".features-header",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.8, ease: "power2.out" },
        );
        gsap.fromTo(
          featuresSplit.words,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 1,
            stagger: 0.1,
            ease: "power2.out",
          },
        );
      }

      if (nextStep === 3) {
        gsap.fromTo(
          ".works-header",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.8, ease: "power3.out" },
        );

        const tl = gsap.timeline({ delay: 1.0 });
        tl.fromTo(
          worksSplit.words,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.05,
            ease: "power3.out",
          },
        )
          .fromTo(
            ".works-desc",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
            "-=0.4",
          )
          .fromTo(
            ".works-grid",
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" },
            "-=0.4",
          )
          .fromTo(
            ".works-bg",
            { opacity: 0 },
            { opacity: 1, duration: 0.6, ease: "power3.out" },
            "-=0.4",
          )
          .fromTo(
            ".works-ui",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
            "-=0.6",
          )
          .fromTo(
            ".works-btn",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
            "-=0.2",
          );
      }

      if (nextStep === 4) {
        gsap.fromTo(
          ".built-header",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.8, ease: "power3.out" },
        );

        const tl = gsap.timeline({ delay: 1.0 });
        tl.fromTo(
          builtSplit.words,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.05,
            ease: "power3.out",
          },
        )
          .fromTo(
            ".built-tabs",
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" },
            "-=0.4",
          )
          .fromTo(
            ".built-orb",
            { opacity: 0, scale: 0, rotation: -180 },
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 0.8,
              stagger: 0.05,
              ease: "back.out(1.2)",
            },
            "-=0.4",
          )
          .fromTo(
            builtDescSplit.words,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.02,
              ease: "power3.out",
            },
            "-=0.6",
          )
          .fromTo(
            ".built-btn",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
            "-=0.2",
          );
      }

      if (nextStep === 5) {
        gsap.fromTo(
          ".pricing-header",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.8, ease: "power3.out" },
        );

        const tl = gsap.timeline({ delay: 1.0 });
        tl.fromTo(
          pricingSplit.words,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.05,
            ease: "power3.out",
          },
        )
          .fromTo(
            ".pricing-toggle",
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" },
            "-=0.4",
          )
          .fromTo(
            ".pricing-card-0",
            { opacity: 0, y: 80 },
            { opacity: 1, y: 0, duration: 1.0, ease: "power3.out" },
            "-=0.4",
          )
          .fromTo(
            ".pricing-card-2",
            { opacity: 0, y: 80 },
            { opacity: 1, y: 0, duration: 1.0, ease: "power3.out" },
            "-=0.7",
          )
          .fromTo(
            ".pricing-card-1",
            { opacity: 0, y: 80 },
            { opacity: 1, y: 0, duration: 1.0, ease: "power3.out" },
            "-=0.7",
          );
      }

      if (nextStep === 6) {
        gsap.fromTo(
          ".faq-header",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.8, ease: "power3.out" },
        );

        const tl = gsap.timeline({ delay: 1.0 });
        tl.fromTo(
          faqSplit.words,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.05,
            ease: "power3.out",
          },
        )
          .fromTo(
            ".faq-item",
            { opacity: 0, x: -80 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              stagger: 0.05,
              ease: "power3.out",
            },
            "-=0.4",
          )
          .fromTo(
            ".faq-desc",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
            "-=0.4",
          )
          .fromTo(
            ".faq-btn",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
            "-=0.4",
          );
      }

      if (nextStep === 7) {
        gsap.fromTo(
          ".footer-newsletter",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.8, ease: "power3.out" },
        );

        const tl = gsap.timeline({ delay: 1.0 });
        tl.fromTo(
          [".footer-card-Product", ".footer-card-Support"],
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" },
        )
          .fromTo(
            [".footer-card-Company", ".footer-card-Resources"],
            { opacity: 0, y: -40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3.out",
            },
            "-=0.6",
          )
          .fromTo(
            ".footer-watermark",
            { opacity: 0, x: -200 },
            { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" },
            "-=0.4",
          )
          .fromTo(
            ".footer-bottom",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
            "-=0.8",
          );
      }

      currentStep = nextStep;
      setTimeout(() => {
        isAnimating = false;
      }, 1000);

      window.dispatchEvent(
        new CustomEvent("virtualScroll", { detail: { step: currentStep } }),
      );
    }

    // 3. The Doorman: Listen for a single scroll event
    Observer.create({
      target: window,
      type: "wheel,touch",
      onChangeY: (self) => {
        const currentSection = document.getElementById(`step-${currentStep}`);

        if (
          currentSection &&
          currentSection.scrollHeight > currentSection.clientHeight
        ) {
          const { scrollTop, scrollHeight, clientHeight } = currentSection;

          if (self.deltaY > 10) {
            const isAtBottom =
              Math.ceil(scrollTop + clientHeight) >= scrollHeight - 1;
            if (!isAtBottom) return; // Allow native scroll, local Lenis will catch it
            goToStep("down");
          } else if (self.deltaY < -10) {
            const isAtTop = scrollTop <= 0;
            if (!isAtTop) return; // Allow native scroll, local Lenis will catch it
            goToStep("up");
          }
        } else {
          if (self.deltaY > 10) {
            goToStep("down");
          } else if (self.deltaY < -10) {
            goToStep("up");
          }
        }
      },
    });

    const handleNavToStep = (e: Event) => {
      const customEvent = e as CustomEvent<{ step: number }>;
      goToStep(customEvent.detail.step);
    };
    window.addEventListener("navToStep", handleNavToStep);

    return () => {
      window.removeEventListener("navToStep", handleNavToStep);
    };
  });
  return (
    <div className={`overflow-hidden h-[100dvh]`}>
      <div className="main-wrapper h-full translate-y-0 space-y-16 md:space-y-24">
        <Intro />
        <Powered ref={poweredRef} />
        <SmoothScrollSection
          id="step-2"
          className="h-[100dvh] overflow-y-auto no-scrollbar"
        >
          <Features />
        </SmoothScrollSection>
        <SmoothScrollSection
          id="step-3"
          className="h-[100dvh] overflow-y-auto no-scrollbar"
        >
          <Works />
        </SmoothScrollSection>
        <SmoothScrollSection
          id="step-4"
          className="h-[100dvh] overflow-y-auto no-scrollbar"
        >
          <BuiltFor />
        </SmoothScrollSection>
        <SmoothScrollSection
          id="step-5"
          className="h-[100dvh] overflow-y-auto no-scrollbar"
        >
          <Pricing />
        </SmoothScrollSection>
        <SmoothScrollSection
          id="step-6"
          className="h-[100dvh] overflow-y-auto no-scrollbar"
        >
          <FAQ />
        </SmoothScrollSection>
        <SmoothScrollSection
          id="step-7"
          className="h-[100dvh] overflow-y-auto no-scrollbar"
        >
          <Footer />
        </SmoothScrollSection>
      </div>
    </div>
  );
}
