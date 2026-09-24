import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service | ElevateFlow",
  description: "Terms of Service and Engagement standards for ElevateFlow.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-black text-[#dedbc8] px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl rounded-2xl bg-[#101010] p-8 sm:p-12 border border-white/5">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#8b8a80] hover:text-[#e1e0cc] transition-colors mb-8"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Return to Studio</span>
        </Link>

        <h1 className="text-3xl font-medium tracking-tight text-[#e1e0cc] sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-xs font-mono text-[#8b8a80]">
          Last Updated: July 17, 2026
        </p>

        <div className="mt-8 space-y-6 text-xs sm:text-sm text-[#dedbc8]/80 leading-relaxed border-t border-white/10 pt-6">
          <section>
            <h2 className="text-base font-semibold text-[#e1e0cc] mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the services provided by ElevateFlow (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;), you agree to be bound by these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#e1e0cc] mb-2">
              2. Scope of Services
            </h2>
            <p>
              ElevateFlow provides bespoke web development, workflow automation, messaging integrations, CRM webhooks, and digital systems architecture on a project-by-project basis. Deliverables and system specifications are scoped during initial diagnostic consultations.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#e1e0cc] mb-2">
              3. Outcome Transparency
            </h2>
            <p>
              While our systems are engineered to reduce manual workload and increase inquiry capture, business outcomes remain dependent on individual operational factors, market conditions, and client execution. Case studies shared represent documented results from specific client deployments.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#e1e0cc] mb-2">
              4. Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms shall be governed by and interpreted in accordance with the laws of India. Any legal dispute or proceeding shall be subject to the exclusive jurisdiction of the courts located in New Delhi, India.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#e1e0cc] mb-2">
              5. Inquiries
            </h2>
            <p>
              Questions regarding service terms should be directed to:{" "}
              <a
                href="mailto:hello@elevateflow.in"
                className="text-[#e1e0cc] underline"
              >
                hello@elevateflow.in
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
