import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | ElevateFlow",
  description: "Privacy Policy and Data Protection standards for ElevateFlow.",
};

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>
        <p className="mt-2 text-xs font-mono text-[#8b8a80]">
          Last Updated: July 17, 2026
        </p>

        <div className="mt-8 space-y-6 text-xs sm:text-sm text-[#dedbc8]/80 leading-relaxed border-t border-white/10 pt-6">
          <section>
            <h2 className="text-base font-semibold text-[#e1e0cc] mb-2">
              1. Information We Collect
            </h2>
            <p>
              When you request a diagnostic consultation or engage with ElevateFlow (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;), we collect business information (company name, industry, operational bottlenecks), personal contact details (full name, work email, phone number), and communication records needed to assess and deploy custom digital systems.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#e1e0cc] mb-2">
              2. How We Use Your Information
            </h2>
            <p>
              Your data is utilized strictly to provide diagnostic analysis, engineer custom automation workflows, tailor digital systems to your operational reality, and provide ongoing technical support. We do not sell, rent, or trade your personal or business data.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#e1e0cc] mb-2">
              3. Data Security & Storage
            </h2>
            <p>
              We implement industry-standard encryption and operational access controls. Client credentials and system webhooks are stored using secure environment configurations.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#e1e0cc] mb-2">
              4. Governing Law & Jurisdiction
            </h2>
            <p>
              This policy is governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#e1e0cc] mb-2">
              5. Contact Us
            </h2>
            <p>
              For inquiries regarding data privacy:{" "}
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
