"use client";
import Link from "next/link";
import { navRoutes, actionRoutes, Route } from "../lib/routes";
import Logo from "./logo";
import { Button } from "@heroui/react";
import { ArrowRight } from "@gravity-ui/icons";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

function Navbar() {
  const ref = useRef<HTMLElement>(null);
  const [offScreen, setOffScreen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleEl = () => {
    const rect = ref.current!.getBoundingClientRect();
    if (window.scrollY <= 0) {
      setOffScreen(false);
    }
    setOffScreen((prev) => (prev ? prev : rect.y < 0));
  };
  useEffect(() => {
    const handleVirtualScroll = (e: Event) => {
      const customEvent = e as CustomEvent<{ step: number }>;

      setOffScreen(customEvent.detail.step > 0);
    };
    window.addEventListener("virtualScroll", handleVirtualScroll);
    return () =>
      window.removeEventListener("virtualScroll", handleVirtualScroll);
  }, []);
  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      ref={ref}
      className={clsx(
        "flex justify-between items-center transition-[margin,padding,top,background-color,border-color,box-shadow,border-radius] duration-300",
        {
          "fixed top-5 left-0 right-0 z-50 mx-4 md:mx-8 lg:mx-28 bg-background border px-3 py-2 border-gray-200 rounded-xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.3)]":
            offScreen,
          "absolute top-0 left-0 right-0 z-50 py-6 mx-4 md:mx-8 lg:mx-16 border-none": !offScreen,
        },
      )}
    >
      <Logo />

      {/* Desktop nav links */}
      <ul className="hidden lg:flex gap-6 text-center">
        {navRoutes.map((route: Route) => (
          <li key={route.name} className="font-medium">
            <Link
              href={route.url}
              className="text-black"
              onClick={(e) => {
                if (route.isAnchor && route.step !== undefined) {
                  e.preventDefault();
                  window.dispatchEvent(
                    new CustomEvent("navToStep", {
                      detail: { step: route.step },
                    })
                  );
                }
              }}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop auth buttons */}
      <div className="hidden lg:flex items-center space-x-4">
        <Link href={actionRoutes.login}>
          <Button
            variant="ghost"
            className="text-black rounded-xl hover:text-accent hover:bg-transparent"
          >
            Login
          </Button>
        </Link>
        <Link href={actionRoutes.signup}>
          <Button className="text-black transition-colors hover:text-white relative border rounded-xl shadow bg-white group overflow-hidden">
            <p className=" z-10">Get Started</p>
            <ArrowRight className=" z-10" />
            <div className="absolute inset-0 bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </Button>
        </Link>
      </div>

      {/* Mobile hamburger button */}
      <button
        className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? (
          <X className="w-5 h-5 text-gray-700" />
        ) : (
          <Menu className="w-5 h-5 text-gray-700" />
        )}
      </button>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 mx-0 bg-white border border-gray-200 rounded-2xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.15)] p-6 z-50 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navRoutes.map((route: Route) => (
              <li key={route.name}>
                <Link
                  href={route.url}
                  className="block px-4 py-3 text-base font-medium text-gray-700 rounded-xl hover:bg-gray-50 hover:text-gray-900 transition-colors no-underline"
                  onClick={(e) => {
                    if (route.isAnchor && route.step !== undefined) {
                      e.preventDefault();
                      window.dispatchEvent(
                        new CustomEvent("navToStep", {
                          detail: { step: route.step },
                        })
                      );
                    }
                    setMobileMenuOpen(false);
                  }}
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
            <Link href={actionRoutes.login} className="w-full" onClick={() => setMobileMenuOpen(false)}>
              <Button
                variant="ghost"
                className="w-full text-black rounded-xl hover:text-accent hover:bg-transparent justify-center"
              >
                Login
              </Button>
            </Link>
            <Link href={actionRoutes.signup} className="w-full" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full text-black transition-colors hover:text-white relative border rounded-xl shadow bg-white group overflow-hidden justify-center">
                <p className="z-10">Get Started</p>
                <ArrowRight className="z-10" />
                <div className="absolute inset-0 bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
