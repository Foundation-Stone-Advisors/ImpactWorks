import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Impact Works — Connecting Communities to Critical Services",
    template: "%s | Impact Works",
  },
  description:
    "Impact Works develops data-driven solutions that connect people with the help they need while strengthening collaboration between organizations that serve the community.",
  openGraph: {
    title: "Impact Works — Connecting Communities to Critical Services",
    description: "Data-driven solutions connecting people with the help they need.",
    type: "website",
    locale: "en_US",
    siteName: "Impact Works",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakarta.variable} ${jetbrainsMono.variable} font-display antialiased flex flex-col min-h-screen bg-white text-slate-800`}
      >
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
