"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { motion, useInView, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";
import { CinematicBackground, NoiseOverlay, WordsPullUp } from "./primitives";

const EASE_CARD: [number, number, number, number] = [0.22, 1, 0.36, 1];

function IconAcquire({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m4.93 4.93 4.24 4.24" />
      <path d="m14.83 9.17 4.24-4.24" />
      <path d="m14.83 14.83 4.24 4.24" />
      <path d="m9.17 14.83-4.24 4.24" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function IconConvert({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <path d="M8 12h.01M12 12h.01M16 12h.01" />
    </svg>
  );
}

function IconOperate({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="m7 8 3 3-3 3" />
      <path d="M13 14h4" />
    </svg>
  );
}

type SolutionCard = {
  index: number;
  number: string;
  pillar: string;
  title: string;
  isHeroPillar?: boolean;
  tag?: string;
  Icon: (props: { className?: string }) => React.ReactElement;
  items: string[];
};

const SOLUTION_CARDS: SolutionCard[] = [
  {
    index: 1,
    number: "01",
    pillar: "ACQUIRE",
    title: "Digital Front Doors & Demand Capture.",
    Icon: IconAcquire,
    items: [
      "High-conversion bespoke web architecture",
      "Local SEO & structured entity schema",
      "Inbound lead capture & instant routing",
      "Webhook pipelines from ads & aggregators",
    ],
  },
  {
    index: 2,
    number: "02",
    pillar: "CONVERT",
    title: "Conversational Sales & Smart Booking.",
    isHeroPillar: true,
    tag: "CORE SYSTEM",
    Icon: IconConvert,
    items: [
      "24/7 intelligent WhatsApp automation",
      "Self-driving appointment scheduling",
      "Automated SMS & WhatsApp reminders",
      "Upfront deposit collection & QR dining systems",
    ],
  },
  {
    index: 3,
    number: "03",
    pillar: "OPERATE",
    title: "Automated Workflows & Back-Office Sync.",
    Icon: IconOperate,
    items: [
      "Business process automation across apps",
      "Automated invoice triggers & bank sync",
      "Direct CRM & spreadsheet sync",
      "Operational KPI dashboards & clinic records",
    ],
  },
];

function FeatureCard({
  index,
  className,
  children,
}: {
  index: number;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const show = reduce || inView;

  return (
    <motion.div
      ref={ref}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={show ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.65, delay: index * 0.09, ease: EASE_CARD }}
      className={cn("relative overflow-hidden rounded-2xl", className)}
    >
      {children}
    </motion.div>
  );
}

export function Solutions({ videoSrc }: { videoSrc?: string }) {
  return (
    <section
      id="solutions"
      className="relative min-h-screen overflow-hidden bg-black py-20 sm:py-28 md:py-32"
    >
      <NoiseOverlay variant="bg" className="opacity-[0.15]" />

      <div className="relative container flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="text-xs font-mono uppercase tracking-[0.24em] text-(--cs-ink) sm:text-sm">
            Core Architecture
          </span>
          <WordsPullUp
            text="Engineered systems for daily operations."
            className="justify-center text-xl font-normal text-(--cs-cream) sm:text-2xl md:text-3xl lg:text-4xl"
          />
          <WordsPullUp
            text="Three interconnected pillars. Zero generic templates."
            className="justify-center text-xl font-normal text-(--cs-muted) sm:text-2xl md:text-3xl lg:text-4xl"
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-4 lg:min-h-[520px]">
          {/* Ambient Studio Card */}
          <FeatureCard
            index={0}
            className="min-h-[320px] lg:h-full lg:min-h-0 bg-[#0a0a0a] border border-white/[0.03] sm:border-white/5"
          >
            {videoSrc ? (
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <CinematicBackground variant="card" />
            )}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-2.5">
              <span className="text-[9px] font-mono uppercase tracking-widest text-(--cs-muted)">
                PHILOSOPHY
              </span>
              <p className="text-xl font-medium tracking-tight text-(--cs-cream)">
                Bespoke Digital Infrastructure.
              </p>
              <p className="text-sm leading-relaxed text-(--cs-muted)">
                Every workflow, interface, and automation is engineered around
                how the business actually operates—never forced into rigid SaaS
                templates.
              </p>
            </div>
          </FeatureCard>

          {/* 3 Pillar Cards with Editorial Typography */}
          {SOLUTION_CARDS.map((card) => (
            <FeatureCard
              key={card.number}
              index={card.index}
              className={cn(
                "min-h-[340px] lg:h-full lg:min-h-0 transition-all duration-300",
                card.isHeroPillar
                  ? "bg-[#161616] border border-white/15 shadow-[0_0_30px_rgba(225,224,204,0.03)]"
                  : "bg-[#111111] border border-white/5 hover:border-white/10",
              )}
            >
              <div className="flex h-full flex-col justify-between p-6">
                <div>
                  <div className="flex items-start justify-between border-b border-white/5 pb-4 mb-4">
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-xl",
                        card.isHeroPillar
                          ? "bg-white/10 text-(--cs-cream) border border-white/20"
                          : "bg-black/50 text-(--cs-ink) border border-white/5",
                      )}
                    >
                      <card.Icon className="h-5 w-5" />
                    </div>
                    <div className="text-right">
                      {card.tag && (
                        <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-400 block mb-0.5">
                          {card.tag}
                        </span>
                      )}
                      <span className="font-mono text-xs uppercase tracking-wider text-(--cs-muted) block">
                        {card.pillar}
                      </span>
                      <span className="font-mono text-sm tabular-nums text-(--cs-ink)">
                        {card.number}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base font-medium leading-snug text-(--cs-cream) sm:text-lg">
                    {card.title}
                  </h3>

                  {/* Restrained Typographic List without standard checkmarks */}
                  <ul className="mt-5 flex flex-col gap-3">
                    {card.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-(--cs-muted) leading-relaxed"
                      >
                        <span
                          className={cn(
                            "font-mono select-none text-sm",
                            card.isHeroPillar ? "text-(--cs-cream)/70" : "text-white/30",
                          )}
                          aria-hidden
                        >
                          —
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-white/5 mt-6">
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-(--cs-ink) transition-colors hover:text-(--cs-cream)"
                  >
                    <span>Scope this system</span>
                    <ArrowRight className="h-3 w-3 -rotate-45 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export const Features = Solutions;
