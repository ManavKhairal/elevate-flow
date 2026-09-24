"use client";

import { motion, useReducedMotion } from "motion/react";

import { WordsPullUp } from "./primitives";

interface Step {
  number: string;
  phase: string;
  headline: string;
  description: string;
  deliverable: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    phase: "DIAGNOSTIC",
    headline: "We map your daily bottlenecks, manual leaks, and lost inquiry points.",
    description:
      "A candid 15-minute diagnostic call. No confusing tech jargon. We examine where your team is losing hours to repetitive tasks, where prospective clients are falling through cracks, and what software is currently failing you.",
    deliverable: "Custom Systems Blueprint & Scope",
  },
  {
    number: "02",
    phase: "ARCHITECTURE",
    headline: "We engineer bespoke web interfaces and connect automated WhatsApp and CRM flows.",
    description:
      "While you remain focused on operating your business, our engineering studio develops your high-speed front door, programs two-way conversational pipelines, and sets up webhook triggers across your backend stack.",
    deliverable: "Fully Integrated Production Environment",
  },
  {
    number: "03",
    phase: "DEPLOYMENT",
    headline: "Frictionless launch, comprehensive team onboarding, and immediate operational leverage.",
    description:
      "We walk you and your staff through the interface in plain English. The moment the switch is flipped, inquiries begin routing automatically, reminders dispatch on schedule, and manual workload drops immediately.",
    deliverable: "Live Self-Driving Operations & Handover",
  },
];

export function Process() {
  const reduce = useReducedMotion();

  return (
    <section id="process" className="relative bg-black py-20 sm:py-28 md:py-36">
      <div className="container flex flex-col gap-14 md:gap-20">
        {/* Section Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between border-b border-white/10 pb-8">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-(--cs-ink) sm:text-xs">
              Studio Methodology
            </span>
            <h2 className="text-3xl leading-tight text-(--cs-cream) sm:text-4xl md:text-5xl">
              <WordsPullUp text="From bottleneck diagnosis to self-driving system." />
            </h2>
          </div>
          <p className="max-w-md text-xs text-(--cs-muted) sm:text-sm">
            A disciplined, three-phase delivery model engineered to minimize leadership
            overhead while maximizing operational leverage.
          </p>
        </div>

        {/* Open Editorial Timeline (Card-Free with Hairline Dividers) */}
        <div className="grid grid-cols-1 divide-y divide-white/10 lg:grid-cols-3 lg:divide-y-0 lg:divide-x lg:divide-white/10">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between py-10 lg:py-0 lg:px-10 first:lg:pl-0 last:lg:pr-0"
            >
              <div>
                <div className="flex items-baseline justify-between mb-8">
                  <span className="font-mono text-5xl font-light text-(--cs-cream)/25 sm:text-6xl lg:text-7xl">
                    {step.number}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-(--cs-ink)">
                    PHASE / {step.phase}
                  </span>
                </div>

                <h3 className="text-xl font-medium leading-snug text-(--cs-cream) sm:text-2xl">
                  {step.headline}
                </h3>

                <p className="mt-4 text-xs leading-relaxed text-(--cs-muted) sm:text-sm">
                  {step.description}
                </p>
              </div>

              <div className="mt-10 border-t border-white/10 pt-4">
                <span className="text-[9px] font-mono uppercase tracking-wider text-(--cs-muted) block">
                  DELIVERABLE MILESTONE
                </span>
                <span className="text-xs font-mono font-medium text-(--cs-cream) block mt-1">
                  {step.deliverable}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
