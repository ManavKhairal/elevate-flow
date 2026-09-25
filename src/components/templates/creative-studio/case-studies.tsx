"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { WordsPullUp } from "./primitives";

function ConceptualHealthcare() {
  const [step, setStep] = React.useState(0);
  const reduce = useReducedMotion();
  const chatBoxRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let isMounted = true;
    const timeouts: NodeJS.Timeout[] = [];

    const addTimeout = (fn: () => void, ms: number) => {
      const id = setTimeout(() => {
        if (isMounted) fn();
      }, ms);
      timeouts.push(id);
    };

    const runSequence = () => {
      if (!isMounted) return;
      setStep(0);

      addTimeout(() => setStep(1), 500);
      addTimeout(() => setStep(2), 1800);
      addTimeout(() => setStep(3), 3200);
      addTimeout(() => setStep(4), 4800);
      addTimeout(() => setStep(5), 6200);
      addTimeout(() => runSequence(), 9500);
    };

    runSequence();

    return () => {
      isMounted = false;
      timeouts.forEach(clearTimeout);
    };
  }, []);

  React.useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [step]);

  // Framer Motion variants
  const popIn = {
    hidden: { opacity: 0, y: 8, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25, ease: "easeOut" as const } }
  };

  return (
    <div className="flex h-full w-full flex-col justify-between rounded-xl bg-black/60 p-3 sm:p-3.5 font-mono text-xs sm:text-sm border border-white/5 relative">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-2 gap-1 sm:gap-0 shrink-0">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
          <span className="text-xs sm:text-sm text-(--cs-ink) truncate">
            WHATSAPP AUTOMATION PIPELINE
          </span>
        </div>
        <span className="text-[10px] sm:text-xs text-(--cs-muted)">LATENCY: 140ms</span>
      </div>

      <div ref={chatBoxRef} className="flex flex-col gap-1.5 py-1.5 overflow-y-auto relative grow justify-start scroll-smooth">
        {/* Msg 1: System Reminder */}
        {step >= 1 && (
          <motion.div
            initial={reduce ? { opacity: 0 } : "hidden"}
            animate="visible"
            variants={popIn}
            className="max-w-[88%] rounded-lg rounded-tl-none bg-[#202c33] p-2 sm:p-2.5 text-[#e9edef] shadow-sm relative"
          >
            <svg viewBox="0 0 8 13" width="8" height="13" className="absolute -left-2 top-0 text-[#202c33] fill-current">
              <path opacity=".55" d="M1.533 3.118L8 12.114V1H2.812C1.042 1 .474 2.156 1.533 3.118z" />
              <path d="M1.533 2.118L8 11.114V0H2.812C1.042 0 .474 1.156 1.533 2.118z" />
            </svg>
            <p className="font-sans text-[11.5px] sm:text-[12.5px] leading-snug">
              Dr. Kumar Clinic: Reminder for checkup tomorrow at 2:00 PM. Reply Y to confirm, N to reschedule.
            </p>
            <div className="flex justify-end gap-1 mt-0.5">
              <span className="text-[9px] text-[#8696a0]">14:00</span>
            </div>
          </motion.div>
        )}

        {/* User Typing Indicator */}
        {step === 2 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="self-end flex gap-1 items-center px-2.5 py-1.5 bg-[#005c4b] rounded-full rounded-tr-none w-fit shadow-sm relative">
             <svg viewBox="0 0 8 13" width="8" height="13" className="absolute -right-2 top-0 text-[#005c4b] fill-current">
                <path opacity=".55" d="M5.188 1H0v11.114l6.467-8.996C7.526 2.156 6.958 1 5.188 1z" />
                <path d="M5.188 0H0v11.114l6.467-8.996C7.526 1.156 6.958 0 5.188 0z" />
              </svg>
             <motion.div className="w-1.5 h-1.5 rounded-full bg-[#8696a0]" animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
             <motion.div className="w-1.5 h-1.5 rounded-full bg-[#8696a0]" animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
             <motion.div className="w-1.5 h-1.5 rounded-full bg-[#8696a0]" animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
          </motion.div>
        )}

        {/* Msg 2: User Reply */}
        {step >= 3 && (
          <motion.div
            initial={reduce ? { opacity: 0 } : "hidden"}
            animate="visible"
            variants={popIn}
            className="self-end max-w-[88%] rounded-lg rounded-tr-none bg-[#005c4b] p-2 sm:p-2.5 text-[#e9edef] shadow-sm relative"
          >
            <svg viewBox="0 0 8 13" width="8" height="13" className="absolute -right-2 top-0 text-[#005c4b] fill-current">
              <path opacity=".55" d="M5.188 1H0v11.114l6.467-8.996C7.526 2.156 6.958 1 5.188 1z" />
              <path d="M5.188 0H0v11.114l6.467-8.996C7.526 1.156 6.958 0 5.188 0z" />
            </svg>
            <p className="font-sans text-[11.5px] sm:text-[12.5px] leading-snug">
              Y — confirmed
            </p>
            <div className="flex justify-end items-center gap-1 mt-0.5">
              <span className="text-[9px] text-[#8696a0]">14:02</span>
              <svg viewBox="0 0 16 11" width="13" height="9" className="text-[#53bdeb] fill-current">
                <path d="M11.832 0L4.542 7.29l-2.616-2.617L0 6.6l4.542 4.542L13.76 1.926 11.832 0z" />
                <path d="M16 1.926L14.072 0l-3.376 3.376 1.928 1.928L16 1.926z" />
              </svg>
            </div>
          </motion.div>
        )}

        {/* System Typing Indicator */}
        {step === 4 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-1 items-center px-2.5 py-1.5 bg-[#202c33] rounded-full rounded-tl-none w-fit shadow-sm relative">
             <svg viewBox="0 0 8 13" width="8" height="13" className="absolute -left-2 top-0 text-[#202c33] fill-current">
              <path opacity=".55" d="M1.533 3.118L8 12.114V1H2.812C1.042 1 .474 2.156 1.533 3.118z" />
              <path d="M1.533 2.118L8 11.114V0H2.812C1.042 0 .474 1.156 1.533 2.118z" />
            </svg>
             <motion.div className="w-1.5 h-1.5 rounded-full bg-[#8696a0]" animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
             <motion.div className="w-1.5 h-1.5 rounded-full bg-[#8696a0]" animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
             <motion.div className="w-1.5 h-1.5 rounded-full bg-[#8696a0]" animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
          </motion.div>
        )}

        {/* Msg 3: System Confirmation */}
        {step >= 5 && (
          <motion.div
            initial={reduce ? { opacity: 0 } : "hidden"}
            animate="visible"
            variants={popIn}
            className="max-w-[88%] rounded-lg rounded-tl-none bg-[#202c33] p-2 sm:p-2.5 text-[#e9edef] shadow-sm relative"
          >
            <svg viewBox="0 0 8 13" width="8" height="13" className="absolute -left-2 top-0 text-[#202c33] fill-current">
              <path opacity=".55" d="M1.533 3.118L8 12.114V1H2.812C1.042 1 .474 2.156 1.533 3.118z" />
              <path d="M1.533 2.118L8 11.114V0H2.812C1.042 0 .474 1.156 1.533 2.118z" />
            </svg>
            <p className="font-sans text-[11.5px] sm:text-[12.5px] leading-snug">
              Appointment confirmed for tomorrow at 2:00 PM. See you then! ✅
            </p>
            <div className="flex justify-end gap-1 mt-0.5">
              <span className="text-[9px] text-[#8696a0]">14:02</span>
            </div>
          </motion.div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between rounded-md bg-white/5 px-2.5 py-1.5 text-[10px] sm:text-xs text-(--cs-muted) gap-1 sm:gap-0 shrink-0 mt-1">
        <span>CALENDAR: SYNCHRONIZED</span>
        <span className="text-emerald-400 font-semibold">NO-SHOW RISK: NEUTRALIZED</span>
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

              <div className="h-[340px] sm:h-[360px] lg:h-[370px] lg:col-span-6 overflow-hidden rounded-xl">
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
