"use client";

import { cn } from "@/lib/utils";

import { CaseStudies } from "./case-studies";
import { Contact } from "./contact";
import { almarai, instrumentSerif } from "./fonts";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { Process } from "./process";
import { RiskReversal } from "./risk-reversal";
import { Solutions } from "./solutions";
import { Testimonials } from "./testimonials";
import { Thesis } from "./thesis";

const CREATIVE_STUDIO_CSS = `
.creative-studio {
  --cs-cream: #e1e0cc;
  --cs-ink: #dedbc8;
  --cs-muted: #8b8a80;
}
`;

export default function CreativeStudio() {
  return (
    <div
      className={cn(
        "creative-studio",
        almarai.variable,
        instrumentSerif.variable,
        "bg-black text-(--cs-ink) antialiased selection:bg-(--cs-cream) selection:text-black",
      )}
      style={{
        fontFamily: "var(--font-almarai), ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: CREATIVE_STUDIO_CSS }} />
      {/* 01 & 02: Navigation & Hero */}
      <Hero />

      {/* 03: The Thesis */}
      <Thesis />

      {/* 04: Solutions Bento */}
      <Solutions />

      {/* 05: Case Studies (Selected Work) */}
      <CaseStudies />

      {/* 06: Client Voices (Testimonials) */}
      <Testimonials />

      {/* 07: Process (How We Work) */}
      <Process />

      {/* 08: Risk Reversal (The Commitment) */}
      <RiskReversal />

      {/* 09: Engagement / Contact */}
      <Contact />

      {/* 10: Footer */}
      <Footer />
    </div>
  );
}
