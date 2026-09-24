"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { WordsPullUp } from "./primitives";

function ConceptualHealthcare() {
  return (
    <div className="flex h-full w-full flex-col justify-between rounded-xl bg-black/60 p-5 font-mono text-sm border border-white/5">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-sm text-(--cs-ink)">
            WHATSAPP AUTOMATION PIPELINE
          </span>
        </div>
        <span className="text-xs text-(--cs-muted)">LATENCY: 140ms</span>
      </div>

      <div className="flex flex-col gap-3 py-4">
        <div className="max-w-[85%] rounded-lg bg-white/5 p-3 text-white/80">
          <p className="text-[9px] uppercase tracking-wider text-(--cs-muted) mb-1">
            SYSTEM TRIGGER · 24H CONFIRMATION DISPATCH
          </p>
          <p className="font-sans text-sm text-(--cs-cream)">
            &quot;Dr. Kumar Clinic: Reminder for checkup tomorrow at 2:00 PM. Reply
            Y to confirm, N to reschedule.&quot;
          </p>
        </div>
        <div className="self-end max-w-[50%] rounded-lg bg-white/10 p-2.5 text-right">
          <span className="font-sans text-sm text-(--cs-cream)">
            &quot;Y — confirmed&quot;
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-md bg-white/5 px-3 py-2 text-xs text-(--cs-muted)">
        <span>CALENDAR: SYNCHRONIZED</span>
        <span className="text-emerald-400">NO-SHOW RISK: NEUTRALIZED</span>
      </div>
    </div>
  );
}

function ConceptualHospitality() {
  return (
    <div className="flex h-full w-full flex-col justify-between rounded-xl bg-black/60 p-5 font-mono text-sm border border-white/5">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          <span className="text-sm text-(--cs-ink)">
            TABLE QR ROUTING ENGINE
          </span>
        </div>
        <span className="text-xs text-(--cs-muted)">COMMISSION: 0%</span>
      </div>

      <div className="flex flex-col gap-2.5 py-4">
        <div className="flex items-center justify-between rounded bg-white/5 px-3 py-2">
          <span className="text-(--cs-cream)">Table 04 · Live Session</span>
          <span className="text-emerald-400">Order #184 Direct</span>
        </div>
        <div className="flex items-center justify-between text-sm text-(--cs-muted) px-1">
          <span>Auto Upsell: Activated</span>
          <span className="text-(--cs-ink)">AOV +20%</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-3/4 bg-(--cs-ink)" />
        </div>
      </div>

      <div className="flex items-center justify-between rounded-md bg-white/5 px-3 py-2 text-xs text-(--cs-muted)">
        <span>KITCHEN PRINTER: DISPATCHED</span>
        <span className="text-(--cs-cream)">TABLE TURN: 30% FASTER</span>
      </div>
    </div>
  );
}

function ConceptualB2B() {
  return (
    <div className="flex h-full w-full flex-col justify-between rounded-xl bg-black/60 p-5 font-mono text-sm border border-white/5">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-blue-400" />
          <span className="text-sm text-(--cs-ink)">
            RECONCILIATION PIPELINE
          </span>
        </div>
        <span className="text-xs text-(--cs-muted)">AUTO-MATCH</span>
      </div>

      <div className="grid grid-cols-3 gap-2 py-4 text-center">
        <div className="rounded bg-white/5 p-2">
          <span className="text-[9px] text-(--cs-muted) block">1. TRIGGER</span>
          <span className="text-xs text-(--cs-cream)">CRM Milestone</span>
        </div>
        <div className="rounded bg-white/5 p-2 border border-white/20">
          <span className="text-[9px] text-(--cs-muted) block">2. INVOICE</span>
          <span className="text-xs text-emerald-400">Auto Generated</span>
        </div>
        <div className="rounded bg-white/5 p-2">
          <span className="text-[9px] text-(--cs-muted) block">3. BANK</span>
          <span className="text-xs text-(--cs-cream)">Ledger Synced</span>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-md bg-white/5 px-3 py-2 text-xs text-(--cs-muted)">
        <span>CYCLE: 50% ACCELERATED</span>
        <span className="text-emerald-400">ERRORS: &lt; 0.01%</span>
      </div>
    </div>
  );
}

function AnimatedWaveform() {
  const reduce = useReducedMotion();
  const heights = [28, 65, 38, 92, 54, 78, 42, 88, 70, 35, 82, 95, 48, 62, 30, 85, 40, 72];

  return (
    <div className="flex h-full w-full flex-col justify-between rounded-xl bg-black/60 p-5 font-mono text-sm border border-white/5">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-purple-400" />
          <span className="text-sm text-(--cs-ink)">
            STUDIO SESSION ENGINE
          </span>
        </div>
        <span className="text-xs text-(--cs-muted)">ACOUSTIC FIDELITY</span>
      </div>

      <div className="flex flex-col gap-3 py-4">
        <div className="flex items-center justify-between text-sm text-(--cs-cream)">
          <span>Studio.wav · Safdarjung Enclave</span>
          <span className="text-purple-300 font-mono text-xs">
            ACTIVE FREQUENCY SPECTRUM
          </span>
        </div>

        {/* Subtle Animated Acoustic Waveform */}
        <div className="flex h-12 items-end gap-1.5 px-2">
          {heights.map((baseH, idx) => (
            <motion.span
              key={idx}
              className="w-full rounded-full bg-(--cs-ink)/50"
              animate={
                reduce
                  ? { height: `${baseH}%` }
                  : {
                      height: [
                        `${baseH}%`,
                        `${Math.max(15, (baseH * 1.3) % 100)}%`,
                        `${Math.max(20, (baseH * 0.7) % 100)}%`,
                        `${baseH}%`,
                      ],
                    }
              }
              transition={{
                duration: 2.2 + (idx % 4) * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between rounded-md bg-white/5 px-3 py-2 text-xs text-(--cs-muted)">
        <span>JSON-LD SCHEMA: ACTIVE</span>
        <span className="text-(--cs-cream)">DIRECT WHATSAPP BOOKING: 24/7</span>
      </div>
    </div>
  );
}

export function CaseStudies() {
  const reduce = useReducedMotion();

  return (
    <section id="systems" className="relative bg-black py-20 sm:py-28 md:py-32">
      <div className="container flex flex-col gap-12 md:gap-16">
        {/* Section Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between border-b border-white/5 pb-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono uppercase tracking-[0.24em] text-(--cs-ink) sm:text-sm">
              Selected Work
            </span>
            <h2 className="text-3xl leading-tight text-(--cs-cream) sm:text-4xl md:text-5xl">
              <WordsPullUp text="Real systems. Documented outcomes." />
            </h2>
          </div>
          <p className="max-w-md text-sm text-(--cs-muted) sm:text-base">
            We measure engineering craft not by subjective aesthetics alone,
            but by recovered hours and captured revenue.
          </p>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="flex flex-col gap-8">
          {/* 01 — Featured Healthcare Case (Dominant Footprint) */}
          <motion.article
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group rounded-[2rem] bg-[#101010] p-7 sm:p-10 border border-white/5 transition-all duration-300 hover:border-white/20"
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="flex flex-col justify-between lg:col-span-6">
                <div>
                  <div className="flex items-center justify-between pb-4">
                    <span className="text-xs font-mono tracking-widest text-(--cs-muted)">
                      01 / FEATURED DEPLOYMENT · HEALTHCARE
                    </span>
                    <span className="text-sm text-(--cs-ink)/80 font-mono">
                      CLIENT: Dr. Rajesh Kumar
                    </span>
                  </div>

                  <h3 className="text-2xl font-medium leading-snug text-(--cs-cream) sm:text-3xl">
                    Automated WhatsApp Booking &amp; No-Show Shield
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-(--cs-muted) sm:text-base">
                    Replaced manual front-desk phone tag and paper registers with an
                    automated 24/7 WhatsApp scheduling flow and two-way 24-hour
                    appointment confirmations.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
                  <div>
                    <span className="font-mono text-3xl font-semibold tracking-tight text-(--cs-cream) sm:text-4xl">
                      40%
                    </span>
                    <span className="mt-1 block text-xs uppercase tracking-wider text-(--cs-muted) sm:text-sm">
                      No-Show Reduction
                    </span>
                  </div>
                  <div>
                    <span className="font-mono text-3xl font-semibold tracking-tight text-(--cs-cream) sm:text-4xl">
                      15 hrs/wk
                    </span>
                    <span className="mt-1 block text-xs uppercase tracking-wider text-(--cs-muted) sm:text-sm">
                      Staff Hours Reclaimed
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-(--cs-ink) transition-colors hover:text-(--cs-cream)"
                  >
                    <span>Request healthcare briefing</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              <div className="h-64 lg:h-72 lg:col-span-6 overflow-hidden rounded-xl">
                <ConceptualHealthcare />
              </div>
            </div>
          </motion.article>

          {/* 02 & 03 — Split Grid (Hospitality & B2B) */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Hospitality */}
            <motion.article
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between rounded-[2rem] bg-[#101010] p-7 sm:p-8 border border-white/5 transition-all duration-300 hover:border-white/15"
            >
              <div>
                <div className="flex items-center justify-between pb-4">
                  <span className="text-xs font-mono tracking-widest text-(--cs-muted)">
                    02 / HOSPITALITY &amp; DINING
                  </span>
                  <span className="text-sm text-(--cs-ink)/80 font-mono">
                    CLIENT: Sneha&apos;s Restaurant
                  </span>
                </div>

                <h3 className="text-xl font-medium leading-snug text-(--cs-cream) sm:text-2xl">
                  QR Menu &amp; Direct Kitchen Ordering Architecture
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-(--cs-muted) sm:text-base">
                  Eliminated third-party aggregator commissions and waitstaff ordering
                  bottlenecks with high-speed table QR ordering routed directly to the
                  kitchen display.
                </p>
              </div>

              <div className="my-6 h-48 overflow-hidden rounded-xl">
                <ConceptualHospitality />
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-5">
                <div>
                  <span className="font-mono text-2xl font-semibold tracking-tight text-(--cs-cream) sm:text-3xl">
                    30%
                  </span>
                  <span className="mt-1 block text-xs uppercase tracking-wider text-(--cs-muted) sm:text-sm">
                    Faster Table Turn
                  </span>
                </div>
                <div>
                  <span className="font-mono text-2xl font-semibold tracking-tight text-(--cs-cream) sm:text-3xl">
                    +20%
                  </span>
                  <span className="mt-1 block text-xs uppercase tracking-wider text-(--cs-muted) sm:text-sm">
                    Average Order Value
                  </span>
                </div>
              </div>
            </motion.article>

            {/* B2B */}
            <motion.article
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between rounded-[2rem] bg-[#101010] p-7 sm:p-8 border border-white/5 transition-all duration-300 hover:border-white/15"
            >
              <div>
                <div className="flex items-center justify-between pb-4">
                  <span className="text-xs font-mono tracking-widest text-(--cs-muted)">
                    03 / B2B SERVICE OPERATIONS
                  </span>
                  <span className="text-sm text-(--cs-ink)/80 font-mono">
                    CLIENT: Amit&apos;s Business
                  </span>
                </div>

                <h3 className="text-xl font-medium leading-snug text-(--cs-cream) sm:text-2xl">
                  Automated Invoicing &amp; Payment Reconciliation Flow
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-(--cs-muted) sm:text-base">
                  Automated manual data entry between project completion, billing
                  triggers, and bank deposit reconciliation, eliminating 40+ hours of
                  monthly manual accounting.
                </p>
              </div>

              <div className="my-6 h-48 overflow-hidden rounded-xl">
                <ConceptualB2B />
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-5">
                <div>
                  <span className="font-mono text-2xl font-semibold tracking-tight text-(--cs-cream) sm:text-3xl">
                    50%
                  </span>
                  <span className="mt-1 block text-xs uppercase tracking-wider text-(--cs-muted) sm:text-sm">
                    Faster Payment Cycle
                  </span>
                </div>
                <div>
                  <span className="font-mono text-2xl font-semibold tracking-tight text-(--cs-cream) sm:text-3xl">
                    15 hrs/mo
                  </span>
                  <span className="mt-1 block text-xs uppercase tracking-wider text-(--cs-muted) sm:text-sm">
                    Bookkeeping Saved
                  </span>
                </div>
              </div>
            </motion.article>
          </div>

          {/* 04 — Wide Studio Showcase with Animated Waveform */}
          <motion.article
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group rounded-[2rem] bg-[#101010] p-7 sm:p-10 border border-white/5 transition-all duration-300 hover:border-white/20"
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="flex flex-col justify-between lg:col-span-6">
                <div>
                  <div className="flex items-center justify-between pb-4">
                    <span className="text-xs font-mono tracking-widest text-(--cs-muted)">
                      04 / CREATIVE &amp; AUDIO PRODUCTION
                    </span>
                    <span className="text-sm text-(--cs-ink)/80 font-mono">
                      CLIENT: Studio.wav
                    </span>
                  </div>

                  <h3 className="text-2xl font-medium leading-snug text-(--cs-cream) sm:text-3xl">
                    High-Fidelity Studio Web Presence &amp; Session Engine
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-(--cs-muted) sm:text-base">
                    Designed a sleek, dark-canvas digital experience for an elite New
                    Delhi studio in Safdarjung Enclave, pairing an embedded audio
                    portfolio with direct WhatsApp session reservations.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
                  <div>
                    <span className="font-mono text-base font-medium tracking-tight text-(--cs-cream) sm:text-xl block">
                      Integrated Booking Experience
                    </span>
                    <span className="mt-1 block text-xs uppercase tracking-wider text-(--cs-muted) sm:text-sm">
                      Core Deliverable
                    </span>
                  </div>
                  <div>
                    <span className="font-mono text-3xl font-semibold tracking-tight text-(--cs-cream) sm:text-4xl">
                      24/7
                    </span>
                    <span className="mt-1 block text-xs uppercase tracking-wider text-(--cs-muted) sm:text-sm">
                      Session Inflow Engine
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-(--cs-ink) transition-colors hover:text-(--cs-cream)"
                  >
                    <span>Request creative studio briefing</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              <div className="h-64 lg:h-72 lg:col-span-6 overflow-hidden rounded-xl">
                <AnimatedWaveform />
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
