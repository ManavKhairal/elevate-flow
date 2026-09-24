"use client";

import { motion, useReducedMotion } from "motion/react";

import { WordsPullUp } from "./primitives";

interface Testimonial {
  index: string;
  initials: string;
  quote: string;
  name: string;
  role: string;
  vertical: string;
  highlight: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    index: "01",
    initials: "RK",
    quote:
      "ElevateFlow built a patient portal for my clinic. Now my patients can book appointments online and get automated reminders. My staff saves 10+ hours a week.",
    name: "Dr. Rajesh Kumar",
    role: "Cardiologist & Clinic Director",
    vertical: "HEALTHCARE",
    highlight: "10+ Hours/Wk Saved · 40% No-Show Reduction",
  },
  {
    index: "02",
    initials: "SP",
    quote:
      "The QR code menu and online ordering system increased my table turnover by 30%. I wish I had done this sooner.",
    name: "Sneha Patel",
    role: "Restaurant Owner",
    vertical: "HOSPITALITY",
    highlight: "+30% Table Turnover · Direct Kitchen Dispatch",
  },
  {
    index: "03",
    initials: "RR",
    quote:
      "ElevateFlow completely transformed our digital presence. The new website perfectly captures our premium vibe and the integrated booking has streamlined our sessions.",
    name: "Rajneesh Rana",
    role: "Founder, Studio.wav",
    vertical: "CREATIVE PRODUCTION",
    highlight: "High-Fidelity Studio Aesthetic · 24/7 Session Engine",
  },
];

export function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <section id="results" className="relative bg-black py-20 sm:py-28 md:py-36">
      <div className="container flex flex-col gap-12 md:gap-16">
        {/* Section Header with Editorial Journal Style */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between border-b border-white/10 pb-8">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-(--cs-ink) sm:text-sm">
              Client Voices · Case Journal
            </span>
            <h2 className="text-3xl leading-tight text-(--cs-cream) sm:text-4xl md:text-5xl">
              <WordsPullUp text="Endorsed by operators who value their time." />
            </h2>
          </div>
          <p className="max-w-md text-sm text-(--cs-muted) sm:text-base">
            Documented perspectives from business owners after deploying custom
            ElevateFlow automated operational systems.
          </p>
        </div>

        {/* Open Editorial Quotation Spread (Card-Free) */}
        <div className="flex flex-col divide-y divide-white/10">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="py-10 sm:py-14 md:py-16 first:pt-4"
            >
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start lg:gap-12">
                {/* Meta Column (Understated Index, Initial, Vertical) */}
                <div className="flex items-center gap-3 font-mono text-sm text-(--cs-muted) lg:col-span-3 lg:flex-col lg:items-start lg:gap-2">
                  <span className="text-(--cs-ink) font-medium tracking-wider">
                    [{item.index} / {item.initials}]
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-(--cs-muted)/80">
                    {item.vertical}
                  </span>
                  <span className="hidden text-[11px] text-emerald-400/90 lg:block mt-2">
                    {item.highlight}
                  </span>
                </div>

                {/* Primary Large-Scale Editorial Quote */}
                <div className="lg:col-span-9 flex flex-col gap-6">
                  <blockquote className="font-serif italic text-2xl leading-[1.25] text-(--cs-cream) sm:text-3xl md:text-4xl lg:text-[2.6rem]">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>

                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between pt-2">
                    <div>
                      <span className="text-sm font-medium text-(--cs-cream) sm:text-base">
                        {item.name}
                      </span>
                      <span className="text-sm text-(--cs-muted) block sm:inline sm:before:content-['·'] sm:before:mx-2">
                        {item.role}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono text-emerald-400/90 lg:hidden mt-2">
                      {item.highlight}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
