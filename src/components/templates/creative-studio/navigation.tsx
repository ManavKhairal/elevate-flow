"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Systems", href: "#systems" },
  { label: "Results", href: "#results" },
  { label: "Process", href: "#process" },
];

export function Navigation() {
  return (
    <nav
      aria-label="Main Navigation"
      className="absolute left-1/2 top-0 z-30 flex w-[calc(100%-1.5rem)] max-w-4xl -translate-x-1/2 items-center justify-between rounded-b-2xl bg-black/90 px-3.5 py-2 backdrop-blur-md border-b border-x border-white/10 md:w-auto md:max-w-none md:rounded-b-3xl md:px-6 md:py-2.5"
    >
      <div className="flex items-center gap-3 sm:gap-6 md:gap-8 overflow-hidden">
        <ul
          className="flex items-center gap-3.5 overflow-x-auto whitespace-nowrap text-xs sm:gap-6 md:gap-7 md:text-sm [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
        >
          {NAV_ITEMS.map((item) => (
            <li key={item.label} className="shrink-0">
              <a
                href={item.href}
                className="text-(--cs-cream)/70 transition-colors hover:text-(--cs-cream)"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-2 pl-2 shrink-0">
        <div className="hidden h-3 w-px bg-white/15 sm:block" aria-hidden />

        <a
          href="#contact"
          className="group inline-flex items-center gap-1 rounded-full bg-(--cs-ink) px-2.5 py-1 text-[11px] font-medium text-black transition-all hover:bg-(--cs-cream) sm:px-3.5 sm:py-1.5 sm:text-xs"
        >
          <span>Consult</span>
          <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </nav>
  );
}
