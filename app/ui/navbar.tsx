"use client";
import Link from "next/link";
import { routes } from "../lib/routes";
import Logo from "./logo";
import { Button } from "@heroui/react";
import { ArrowRight } from "@gravity-ui/icons";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

function Navbar() {
  const ref = useRef<HTMLElement>(null);
  const [offScreen, setOffScreen] = useState<boolean>(false);
  console.log(offScreen);

  const handleEl = () => {
    const rect = ref.current!.getBoundingClientRect();
    if (window.scrollY <= 0) {
      setOffScreen(false);
    }
    setOffScreen((prev) => (prev ? prev : rect.y < 0));
  };
  useEffect(() => {
    window.addEventListener("scroll", handleEl);
    return () => {
      window.removeEventListener("scroll", handleEl);
    };
  }, []);
  return (
    <nav
      ref={ref}
      className={clsx("flex justify-between items-center ", {
        "sticky top-5 z-50 mx-28 bg-background border px-3 py-2 border-gray-200 rounded-xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.3)]":
          offScreen,
        "py-8 px-16": !offScreen,
      })}
    >
      <Logo />
      <ul className="flex gap-6 text-center">
        {routes.map((route) => (
          <li key={route.name} className="font-medium">
            <Link href={route.url} className="text-black">
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="space-x-4">
        <Button
          variant="ghost"
          className="text-black rounded-xl hover:text-accent hover:bg-transparent"
        >
          Login
        </Button>
        <Button className="text-black transition-colors hover:text-white relative border rounded-xl shadow bg-white group overflow-hidden">
          <p className=" z-10">Get Started</p>
          <ArrowRight className=" z-10" />
          <div className="absolute inset-0 bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
