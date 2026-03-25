import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harbor Point Marketing",
  description:
    "Harbor Point Marketing Services helps businesses grow with marketing strategy, automation, and digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#f7f7f8] text-[#111111]`}
      >
        <header className="border-b border-gray-200 bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Harbor Point Marketing Services"
                className="h-12 w-auto object-contain"
              />
              <div className="leading-tight">
                <div className="text-xl font-semibold tracking-tight text-slate-900">
                  Harbor Point
                </div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  Marketing Services
                </div>
              </div>
            </div>

            <nav className="hidden items-center gap-10 md:flex">
              <Link href="/" className="text-[15px] text-gray-700 hover:text-black">
                Home
              </Link>
              <Link href="/#services" className="text-[15px] text-gray-700 hover:text-black">
                Services
              </Link>
              <Link href="/#about" className="text-[15px] text-gray-700 hover:text-black">
                About
              </Link>
              <Link
                href="/terms-and-conditions"
                className="text-[15px] text-gray-700 hover:text-black"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                className="text-[15px] text-gray-700 hover:text-black"
              >
                Privacy
              </Link>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}