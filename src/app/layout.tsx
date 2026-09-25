import type { Metadata } from "next";
import "./globals.css";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export const metadata: Metadata = {
  title: "ElevateFlow — Tailored Digital Systems Firm",
  description:
    "We architect high-performance digital front doors and self-driving business systems for growing independent companies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-black antialiased" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="bg-black text-[#dedbc8] min-h-screen" suppressHydrationWarning>
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
