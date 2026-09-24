"use client";

import { ScrollRevealText, WordsPullUpMultiStyle } from "./primitives";

const HEADING_SEGMENTS = [
  { text: "We solve the silent bottlenecks", className: "font-normal" },
  {
    text: "that cap business growth.",
    className: "italic [font-family:var(--font-instrument-serif)]",
  },
];

const BODY =
  "Most businesses do not have a traffic problem—they have a systems bottleneck. We replace manual friction, missed calls, and data entry with custom tools engineered around your daily reality.";

export function Thesis() {
  return (
    <section id="about" className="bg-black px-4 py-20 sm:px-6 sm:py-28 md:py-32">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 rounded-[2rem] bg-[#101010] border border-white/5 px-6 py-16 text-center sm:px-10 sm:py-20 md:px-16 md:py-24">
        <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-(--cs-ink) sm:text-xs">
          Operational Craft
        </span>

        <h2
          className="mx-auto max-w-3xl text-3xl leading-[0.95] sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl"
          style={{ color: "#E1E0CC" }}
        >
          <WordsPullUpMultiStyle segments={HEADING_SEGMENTS} />
        </h2>

        <ScrollRevealText
          text={BODY}
          className="mx-auto max-w-2xl text-sm leading-relaxed text-[#DEDBC8] sm:text-base md:text-lg"
        />

        <div className="flex items-center gap-6 pt-4 text-xs font-mono uppercase tracking-widest text-(--cs-muted)">
          <span>DIAGNOSTIC FIRST</span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span>BESPOKE ENGINEERING</span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span>ZERO JARGON</span>
        </div>
      </div>
    </section>
  );
}

// Re-export as About for backward compatibility if imported elsewhere
export const About = Thesis;
