"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";

export default function SmoothScrollSection({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current || !contentRef.current) return;

    // Initialize a local Lenis instance for this specific container
    const lenis = new Lenis({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      prevent: () => false, // Ensure local Lenis doesn't ignore the scroll event
    });

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      id={id}
      data-lenis-prevent="true" // Stops the global window Lenis from intercepting
      className={className}
    >
      <div ref={contentRef}>{children}</div>
    </div>
  );
}
