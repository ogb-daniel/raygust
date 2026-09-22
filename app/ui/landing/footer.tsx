import { Button } from "@heroui/react";
import Link from "next/link";
import { footerColumns, actionRoutes, Route } from "../../lib/routes";

export default function Footer() {
  return (
    <footer className="pt-16 sm:pt-28 pb-8 bg-white px-6 md:px-12 lg:px-28 ">
      {/* Top section: Newsletter + Link Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24">
        {/* Left: Newsletter */}
        <div className="footer-newsletter flex flex-col items-start">
          <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
            Newsletter
          </h3>
          <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-[300px]">
            Sign up to be first to know about the latest trends & events in the
            business world.
          </p>

          <div className="mt-auto flex flex-col gap-3 w-full max-w-[320px]">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-xl outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all placeholder:text-gray-400"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-xl outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all placeholder:text-gray-400"
            />
            <Button className="w-full rounded-xl font-semibold py-5 shadow-[inset_0_2px_1px_rgba(255,255,255,0.4),inset_2px_0_1px_rgba(255,255,255,0.3),inset_-2px_0_1px_rgba(255,255,255,0.3)]">
              Join newsletter
            </Button>
          </div>
        </div>

        {/* Right: Link Columns in bordered cards - gallery layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Column 1: Product (tall) + Company (short) */}
          <div className="flex flex-col gap-4">
            {[footerColumns[0], footerColumns[1]].map((column, i) => (
              <div
                key={column.title}
                className={`footer-card-${column.title} rounded-2xl border border-gray-200 p-6 ${i === 1 ? "flex-1" : ""}`}
              >
                <h4 className="text-xs font-bold tracking-widest text-accent uppercase mb-5">
                  {column.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link: Route) => (
                    <li key={link.name}>
                      <Link
                        href={link.url}
                        className="text-sm text-gray-600 no-underline hover:text-gray-900 transition-colors"
                        onClick={(e) => {
                          if (link.isAnchor && link.step !== undefined) {
                            e.preventDefault();
                            window.dispatchEvent(
                              new CustomEvent("navToStep", {
                                detail: { step: link.step },
                              }),
                            );
                          }
                        }}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Column 2: Support (tall) + Resources (short) */}
          <div className="flex flex-col gap-4">
            {[footerColumns[2], footerColumns[3]].map((column, i) => (
              <div
                key={column.title}
                className={`footer-card-${column.title} rounded-2xl border border-gray-200 p-6 ${i === 1 ? "flex-1" : ""}`}
              >
                <h4 className="text-xs font-bold tracking-widest text-accent uppercase mb-5">
                  {column.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link: Route) => (
                    <li key={link.name}>
                      <Link
                        href={link.url}
                        className="text-sm text-gray-600 no-underline hover:text-gray-900 transition-colors"
                        target={link.external ? "_blank" : "_self"}
                        onClick={(e) => {
                          if (link.isAnchor && link.step !== undefined) {
                            e.preventDefault();
                            window.dispatchEvent(
                              new CustomEvent("navToStep", {
                                detail: { step: link.step },
                              }),
                            );
                          }
                        }}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom: Brand watermark + copyright */}
      <div className="mt-10  relative">
        {/* Large brand watermark */}
        <div className="footer-watermark relative flex items-end overflow-hidden ">
          <span className="text-[18vw] sm:text-[21vw]  stroked-text font-black leading-none text-transparent bg-clip-text select-none whitespace-nowrap">
            Raygust
          </span>
        </div>

        {/* Copyright */}
        <div className="footer-bottom pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center sm:justify-between gap-3 sm:gap-0">
          <p className="text-xs text-gray-400">
            © 2026 Raygust. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href={actionRoutes.privacy}
              className="text-xs text-gray-400 no-underline hover:text-gray-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href={actionRoutes.terms}
              className="text-xs text-gray-400 no-underline hover:text-gray-600 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
