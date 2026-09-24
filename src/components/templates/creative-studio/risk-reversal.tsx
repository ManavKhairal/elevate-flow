"use client";

import { motion, useReducedMotion } from "motion/react";

import { WordsPullUpMultiStyle } from "./primitives";

const HEADLINE_SEGMENTS = [
  { text: "Technology should prove", className: "font-normal" },
  {
    text: "its value first.",
    className: "italic [font-family:var(--font-instrument-serif)]",
  },
];

const PRINCIPLES = [
  {
    title: "Zero Upfront Financial Risk",
    desc: "No credit card required to begin your diagnostic consultation and bespoke system architecture.",
  },
  {
    title: "Milestone-Vetted Delivery",
    desc: "We deploy the tool directly to solve your operational bottlenecks. You only pay after you love the result.",
  },
  {
    title: "Plain-English Team Handover",
    desc: "We walk you and your staff through every workflow in plain language with zero confusing tech jargon.",
  },
];

export function RiskReversal() {
  const reduce = useReducedMotion();

  return (
    <section className="relative bg-black py-20 sm:py-28 md:py-36 border-t border-white/5">
      <div className="container flex flex-col gap-14 md:gap-20">
        {/* Central Authoritative Statement */}
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-(--cs-ink) sm:text-sm">
            Studio Charter
          </span>

          <h2 className="text-3xl leading-[1.05] text-(--cs-cream) sm:text-4xl md:text-5xl lg:text-6xl">
            <WordsPullUpMultiStyle segments={HEADLINE_SEGMENTS} />
          </h2>

          <p className="max-w-2xl text-sm leading-relaxed text-(--cs-muted) sm:text-base md:text-lg">
            Too many business owners have been burned by rigid software subscriptions
            and broken agency promises. We stand behind our engineering with a simple,
            transparent commitment.
          </p>

          <div className="mt-2 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm sm:text-base font-mono text-(--cs-cream)">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>No credit card required. Pay only if you love it.</span>
          </div>
        </div>

        {/* 3 Text Columns Separated by Thin Vertical Hairlines (Card-Free) */}
        <div className="grid grid-cols-1 divide-y divide-white/10 border-t border-b border-white/10 py-10 md:grid-cols-3 md:divide-y-0 md:divide-x md:divide-white/10 md:py-12">
          {PRINCIPLES.map((principle, idx) => (
            <motion.div
              key={principle.title}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-3 py-6 md:py-0 md:px-8 first:md:pl-0 last:md:pr-0"
            >
              <span className="font-mono text-sm text-(--cs-ink)/60">
                0{idx + 1}
              </span>
              <h3 className="text-base font-medium text-(--cs-cream)">
                {principle.title}
              </h3>
              <p className="text-sm leading-relaxed text-(--cs-muted) sm:text-base">
                {principle.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
