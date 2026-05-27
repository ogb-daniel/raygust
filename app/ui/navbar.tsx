import Link from "next/link";
import { routes } from "../lib/routes";
import Logo from "./logo";
import { Button } from "@heroui/react";
import { ArrowRight } from "@gravity-ui/icons";

function Navbar() {
  return (
    <nav className="flex justify-between py-8 items-center px-16">
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
