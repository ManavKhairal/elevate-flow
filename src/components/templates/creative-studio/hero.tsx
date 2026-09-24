"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Navigation } from "./navigation";
import { CinematicBackground, NoiseOverlay, WordsPullUp } from "./primitives";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Hero({
  videoSrc,
  posterSrc,
}: {
  videoSrc?: string;
  posterSrc?: string;
}) {
  const reduce = useReducedMotion();

  const fade = (delay: number) => ({
    initial: reduce ? false : { y: 12, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.65, delay, ease: EASE_OUT_EXPO },
  });

  return (
    <section className="relative h-dvh w-full bg-black p-4 md:p-6" id="top">
      <div className="relative flex h-[calc(100dvh-2rem)] w-full flex-col overflow-hidden rounded-2xl bg-black md:h-[calc(100dvh-3rem)] md:rounded-[2rem] border border-white/5">
        {videoSrc ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={videoSrc}
            poster={posterSrc}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <CinematicBackground variant="hero" />
        )}

        <NoiseOverlay className="opacity-[0.7] mix-blend-overlay" />

        {/* Faint Architectural Telemetry Grid (Restrained Systems Texture) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden select-none opacity-[0.09]"
        >
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="hero-grid-pattern"
                width="120"
                height="120"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 120 0 L 0 0 0 120"
                  fill="none"
                  stroke="#E1E0CC"
                  strokeWidth="0.5"
                  strokeDasharray="2 6"
                />
                <circle cx="0" cy="0" r="1" fill="#E1E0CC" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid-pattern)" />
            {/* Architectural Grid Markers */}
            <g className="font-mono text-[9px] fill-[#E1E0CC]/40">
              <text x="8%" y="45%">COORD: 28°36&apos;N 77°12&apos;E</text>
              <text x="85%" y="45%">STUDIO ED. 2026</text>
            </g>
          </svg>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/75"
        />

        {/* Floating Capsule Navigation */}
        <Navigation />

        {/* Subtle Operational System Status Bar (Restrained Telemetry) */}
        <div className="relative z-10 hidden items-center justify-between px-6 pt-16 text-[11px] font-mono tracking-wider text-(--cs-muted) sm:flex md:px-10 md:pt-20">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="uppercase text-(--cs-ink)/80">
              NOW ACCEPTING SELECT PROJECTS
            </span>
          </div>

          <div className="hidden items-center gap-6 lg:flex">
            <span>BOUTIQUE DIGITAL SYSTEMS STUDIO</span>
            <span className="text-white/20">/</span>
            <span>NEW DELHI · GLOBAL REACH</span>
          </div>
        </div>

        {/* Hero Main Content */}
        <div className="relative z-10 mt-auto p-4 sm:p-6 md:p-8 lg:p-10">
          <div className="grid grid-cols-12 items-end gap-6 md:gap-8">
            {/* Monolithic Display Title */}
            <div className="col-span-12 lg:col-span-7 xl:col-span-8">
              <div className="mb-3 flex items-center gap-2 sm:hidden">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-(--cs-muted)">
                  NOW ACCEPTING SELECT PROJECTS
                </span>
              </div>

              <h1 className="whitespace-nowrap text-[17vw] font-medium leading-[0.85] tracking-[-0.07em] text-(--cs-cream) sm:text-[16vw] md:text-[15vw] lg:text-[10vw] xl:text-[12vw] 2xl:text-[12.5vw]">
                <WordsPullUp
                  text="ElevateFlow"
                  showAsterisk
                  className="flex-nowrap whitespace-nowrap"
                  wordClassName="whitespace-nowrap"
                />
              </h1>

              <motion.p
                {...fade(0.3)}
                className="mt-3 text-base font-normal tracking-tight text-(--cs-cream) sm:text-lg md:text-xl lg:text-2xl"
              >
                High-performance digital front doors. Self-driving business systems.
              </motion.p>
            </div>

            {/* Narrative & Actions */}
            <div className="col-span-12 flex flex-col gap-4 md:gap-6 lg:col-span-5 xl:col-span-4">
              <motion.p
                {...fade(0.5)}
                className="max-w-md text-xs leading-relaxed text-(--cs-ink)/75 sm:text-sm md:text-base"
              >
                We architect high-speed web presences, intelligent WhatsApp
                flows, and self-driving booking systems that capture every lead
                and scale your business without operational drag.
              </motion.p>

              <motion.div
                {...fade(0.7)}
                className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
              >
                <a
                  href="#contact"
                  className="group inline-flex w-fit items-center gap-2 rounded-full bg-(--cs-ink) py-1.5 pe-1.5 ps-5 text-sm font-medium text-black transition-all duration-300 hover:bg-(--cs-cream) hover:gap-3 sm:text-base"
                >
                  Start a Project
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10">
                    <ArrowRight className="h-4 w-4 text-(--cs-cream)" />
                  </span>
                </a>

                <a
                  href="#systems"
                  className="group inline-flex w-fit items-center gap-1.5 rounded-full border border-white/20 px-5 py-3 text-xs font-medium text-(--cs-cream)/90 transition-colors hover:border-white/50 hover:text-(--cs-cream) sm:text-sm"
                >
                  <span>Explore Systems</span>
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
                </a>
              </motion.div>

              <motion.div
                {...fade(0.85)}
                className="flex items-center gap-2 text-xs text-(--cs-muted)"
              >
                <span className="h-1 w-1 rounded-full bg-white/40" />
                <span>No credit card required. Pay only if you love it.</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
