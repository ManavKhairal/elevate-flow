"use client";

import * as React from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

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
  const [isMoreOpen, setIsMoreOpen] = React.useState(false);

  // Close dropdown when clicking outside
  const dropdownRef = React.useRef<HTMLLIElement>(null);
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      aria-label="Main Navigation"
      className="absolute left-1/2 top-0 z-30 flex w-[calc(100%-1.5rem)] max-w-4xl -translate-x-1/2 items-center justify-between rounded-b-2xl bg-black/90 px-3.5 py-2 backdrop-blur-md border-b border-x border-white/10 md:w-auto md:max-w-none md:rounded-b-3xl md:px-6 md:py-2.5"
    >
      <div className="flex items-center gap-3 sm:gap-6 md:gap-8">
        <ul
          className="flex items-center gap-3.5 whitespace-nowrap text-sm sm:gap-6 md:gap-7 md:text-base"
        >
          {NAV_ITEMS.map((item, i) => (
            <li key={item.label} className={`shrink-0 ${i >= 3 ? "hidden md:block" : ""}`}>
              <a
                href={item.href}
                className="text-(--cs-cream)/70 transition-colors hover:text-(--cs-cream)"
              >
                {item.label}
              </a>
            </li>
          ))}

          {/* Mobile "More" Dropdown */}
          <li className="shrink-0 md:hidden relative" ref={dropdownRef}>
            <button
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              className="flex items-center gap-1 text-(--cs-cream)/70 transition-colors hover:text-(--cs-cream)"
            >
              More
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isMoreOpen ? "rotate-180" : ""}`} />
            </button>
            
            {isMoreOpen && (
              <div className="absolute right-0 top-full mt-4 flex flex-col gap-3 rounded-xl bg-[#0f0f0f] border border-white/10 p-4 shadow-xl shadow-black/50 backdrop-blur-xl">
                {NAV_ITEMS.slice(3).map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMoreOpen(false)}
                    className="text-(--cs-cream)/70 transition-colors hover:text-(--cs-cream)"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-2 pl-2 shrink-0">
        <div className="hidden h-3 w-px bg-white/15 sm:block" aria-hidden />

        <a
          href="#contact"
          className="group inline-flex items-center gap-1 rounded-full bg-(--cs-ink) px-2.5 py-1 text-sm font-medium text-black transition-all hover:bg-(--cs-cream) sm:px-3.5 sm:py-1.5 sm:text-sm"
        >
          <span>Consult</span>
          <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </nav>
  );
}
