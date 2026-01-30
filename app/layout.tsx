import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Braulio De Leon - Software Engineer & Tech Leader",
    template: "%s | Braulio De Leon",
  },
  description:
    "Building the digital future, one line of code at a time. Personal website and blog of Braulio De Leon, software engineer and technology leader.",
  keywords: [
    "software engineer",
    "tech leader",
    "web development",
    "nextjs",
    "typescript",
    "react",
  ],
  authors: [{ name: "Braulio De Leon" }],
  creator: "Braulio De Leon",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brauliodeleon.com",
    title: "Braulio De Leon - Software Engineer & Tech Leader",
    description: "Building the digital future, one line of code at a time",
    siteName: "Braulio De Leon",
  },
  twitter: {
    card: "summary_large_image",
    title: "Braulio De Leon - Software Engineer & Tech Leader",
    description: "Building the digital future, one line of code at a time",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
