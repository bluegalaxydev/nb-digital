import type { Metadata } from "next";
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

export const metadata = {
  title: "Harbor Point Marketing",
  description:
    "Harbor Point Marketing Services helps businesses grow with marketing strategy, automation, and digital solutions.",
  keywords:
    "Harbor Point Marketing Services, digital marketing agency, marketing automation, lead generation, small business marketing",

  openGraph: {
    title: "Harbor Point Marketing Services",
    description:
      "Marketing strategy, automation, and digital solutions for growing businesses.",
    url: "https://nb-digital-viw1.vercel.app",
    siteName: "Harbor Point Marketing Services",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
