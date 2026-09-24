"use client";

import { ArrowUpRight } from "lucide-react";

import { NoiseOverlay, WordsPullUpMultiStyle } from "./primitives";

const HEADLINE = [
  { text: "Let us architect", className: "font-normal" },
  {
    text: "something exceptional.",
    className: "italic [font-family:var(--font-instrument-serif)]",
  },
];

const LINK_COLUMNS = [
  {
    heading: "Solutions",
    links: [
      { label: "Digital Front Doors", href: "#solutions" },
      { label: "WhatsApp Automations", href: "#solutions" },
      { label: "Smart Booking Engines", href: "#solutions" },
      { label: "Back-Office Sync", href: "#solutions" },
    ],
  },
  {
    heading: "Studio",
    links: [
      { label: "About Thesis", href: "#about" },
      { label: "Selected Work", href: "#systems" },
      { label: "Client Results", href: "#results" },
      { label: "How We Work", href: "#process" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "WhatsApp Hotline", href: "https://wa.me/918527738145" },
      { label: "Diagnostic Inquiries", href: "#contact" },
      { label: "hello@elevateflow.in", href: "mailto:hello@elevateflow.in" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black pb-8 pt-20 sm:pt-28 md:pt-32">
      <NoiseOverlay variant="bg" className="opacity-[0.12]" />

      <div className="relative container">
        {/* Top Call to Action Row */}
        <div className="flex flex-col gap-8 border-b border-white/10 pb-12 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-mono uppercase tracking-[0.24em] text-(--cs-ink) sm:text-sm">
              Boutique Digital Systems Studio
            </span>
            <h2 className="max-w-xl text-3xl leading-[0.95] tracking-[-0.02em] text-(--cs-cream) sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl">
              <WordsPullUpMultiStyle
                segments={HEADLINE}
                className="justify-start"
              />
            </h2>
          </div>

          <a
            href="#contact"
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-(--cs-ink) py-1.5 pe-1.5 ps-5 text-sm font-medium text-black transition-all duration-300 hover:gap-3 hover:bg-(--cs-cream) sm:text-base"
          >
            Start a project
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10">
              <ArrowUpRight className="h-4 w-4 text-(--cs-cream)" />
            </span>
          </a>
        </div>

        {/* Navigation Columns */}
        <nav
          aria-label="Footer Navigation"
          className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 sm:grid-cols-4"
        >
          {LINK_COLUMNS.map((col) => (
            <div key={col.heading} className="flex flex-col gap-3">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-(--cs-muted)">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-(--cs-cream)/70 transition-colors hover:text-(--cs-cream) sm:text-base"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 flex flex-col gap-3 sm:col-span-1">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-(--cs-muted)">
              Studio HQ
            </h3>
            <p className="text-sm leading-relaxed text-(--cs-cream)/70 sm:text-base">
              New Delhi, India.
              <br />
              Deploying systems globally.
              <br />
              hello@elevateflow.in
            </p>
          </div>
        </nav>

        {/* Giant Monolithic Watermark (Faint) */}
        <div
          aria-hidden
          className="pointer-events-none select-none border-t border-white/10 pt-8 overflow-hidden"
        >
          <p className="text-[18vw] font-medium leading-[0.8] tracking-[-0.07em] text-(--cs-cream)/5">
            ElevateFlow
          </p>
        </div>

        {/* Sub-Footer Legal & Copyright */}
        <div className="flex flex-col gap-4 pt-6 pb-6 sm:flex-row sm:items-center sm:justify-between border-t border-white/5">
          <p className="text-sm text-(--cs-muted)">
            © 2026 ElevateFlow. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="/privacy-policy"
              className="text-sm text-(--cs-muted) transition-colors hover:text-(--cs-cream)"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-sm text-(--cs-muted) transition-colors hover:text-(--cs-cream)"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
