"use client";

import * as React from "react";
import { ArrowUpRight, Check, MessageSquare, Send } from "lucide-react";

import { WordsPullUpMultiStyle } from "./primitives";

const HEADLINE_SEGMENTS = [
  { text: "Let us put your business", className: "font-normal" },
  {
    text: "on autopilot.",
    className: "italic [font-family:var(--font-instrument-serif)]",
  },
];

export function Contact() {
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    
    fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      // @ts-ignore
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setLoading(false);
        setSubmitted(true);
      })
      .catch((error) => {
        console.error("Form submission error", error);
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="relative bg-black py-20 sm:py-28 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-[#101010] p-6 sm:p-10 md:p-16 border border-white/5">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Narrative & Direct Channels */}
            <div className="flex flex-col justify-between lg:col-span-5">
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-(--cs-ink) sm:text-xs">
                  Start A Project
                </span>

                <h2 className="text-3xl leading-[1.05] text-(--cs-cream) sm:text-4xl md:text-5xl">
                  <WordsPullUpMultiStyle
                    segments={HEADLINE_SEGMENTS}
                    className="justify-start"
                  />
                </h2>

                <p className="mt-2 text-xs leading-relaxed text-(--cs-muted) sm:text-sm">
                  Schedule a 15-minute diagnostic conversation. Tell us what is
                  wasting your staff&apos;s time, and we will outline whether a custom
                  system can automate it.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-(--cs-muted)">
                    DIRECT EMAIL
                  </span>
                  <a
                    href="mailto:hello@elevateflow.in"
                    className="mt-1 block text-sm font-medium text-(--cs-cream) transition-colors hover:text-(--cs-ink) sm:text-base"
                  >
                    hello@elevateflow.in
                  </a>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-(--cs-muted)">
                    WHATSAPP CONCIERGE HOTLINE
                  </span>
                  <div className="mt-1.5 flex items-center gap-3">
                    <a
                      href="https://wa.me/918527738145"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-400 border border-emerald-500/20 transition-all hover:bg-emerald-500/20"
                    >
                      <MessageSquare className="h-3.5 w-3.5" />
                      <span>Chat on WhatsApp (+91 85277 38145)</span>
                      <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>

                <div className="rounded-xl bg-white/5 p-4 text-[11px] text-(--cs-muted) border border-white/5">
                  <span className="font-medium text-(--cs-ink) block mb-0.5">
                    Zero Risk Guarantee
                  </span>
                  No credit card required. Pay only if you love the deployed system.
                </div>
              </div>
            </div>

            {/* Right Column: Diagnostic Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-black/60 p-6 sm:p-8 border border-white/5">
                {submitted ? (
                  <div className="flex min-h-[360px] flex-col items-center justify-center gap-4 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      <Check className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-medium text-(--cs-cream)">
                      Diagnostic Request Received
                    </h3>
                    <p className="max-w-md text-xs leading-relaxed text-(--cs-muted) sm:text-sm">
                      Thank you. We will review your business bottlenecks and contact
                      you within 24 hours to confirm your 15-minute diagnostic call.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-2 text-xs font-medium text-(--cs-ink) underline hover:text-(--cs-cream)"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4" name="consultation">
                    <input type="hidden" name="form-name" value="consultation" />
                    <p className="hidden">
                      <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                    </p>
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-medium text-(--cs-cream) mb-1.5"
                      >
                        Full Name <span className="text-white/40">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        placeholder="e.g. Dr. Rajesh Kumar"
                        className="w-full rounded-xl bg-white/5 px-4 py-3 text-xs text-(--cs-cream) placeholder:text-(--cs-muted)/60 border border-white/10 transition-colors focus:border-white/30 focus:outline-none sm:text-sm"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="workEmail"
                        className="block text-xs font-medium text-(--cs-cream) mb-1.5"
                      >
                        Work Email <span className="text-white/40">*</span>
                      </label>
                      <input
                        type="email"
                        id="workEmail"
                        name="workEmail"
                        required
                        placeholder="rajesh@clinic.com"
                        className="w-full rounded-xl bg-white/5 px-4 py-3 text-xs text-(--cs-cream) placeholder:text-(--cs-muted)/60 border border-white/10 transition-colors focus:border-white/30 focus:outline-none sm:text-sm"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="industry"
                        className="block text-xs font-medium text-(--cs-cream) mb-1.5"
                      >
                        Business Type / Industry <span className="text-white/40">*</span>
                      </label>
                      <input
                        type="text"
                        id="industry"
                        name="industry"
                        required
                        placeholder="e.g. Healthcare, Hospitality, B2B Distribution"
                        className="w-full rounded-xl bg-white/5 px-4 py-3 text-xs text-(--cs-cream) placeholder:text-(--cs-muted)/60 border border-white/10 transition-colors focus:border-white/30 focus:outline-none sm:text-sm"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="bottleneck"
                        className="block text-xs font-medium text-(--cs-cream) mb-1.5"
                      >
                        What is your biggest operational bottleneck right now?
                      </label>
                      <textarea
                        id="bottleneck"
                        name="bottleneck"
                        rows={3}
                        placeholder="e.g. Too many patient no-shows, manual spreadsheet invoicing, or missed after-hours leads..."
                        className="w-full rounded-xl bg-white/5 px-4 py-3 text-xs text-(--cs-cream) placeholder:text-(--cs-muted)/60 border border-white/10 transition-colors focus:border-white/30 focus:outline-none sm:text-sm resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-(--cs-ink) py-3.5 px-6 text-sm font-medium text-black transition-all hover:bg-(--cs-cream) disabled:opacity-50"
                      >
                        <span>{loading ? "Submitting..." : "Request Diagnostic Call"}</span>
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </button>
                    </div>

                    <p className="text-center text-[11px] text-(--cs-muted)">
                      We respect your privacy. No spam, ever.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
