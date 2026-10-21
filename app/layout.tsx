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
  metadataBase: new URL("https://brauliodeleon.com"),
  title: {
    default: "Braulio De Leon - Senior / Staff Frontend Engineer",
    template: "%s | Braulio De Leon",
  },
  description:
    "Senior / Staff Frontend Engineer focused on payments, auth and checkout. 15+ years building enterprise frontends in React and TypeScript for US companies, including American Express and Toyota.",
  keywords: [
    "staff frontend engineer",
    "senior frontend engineer",
    "react",
    "typescript",
    "nextjs",
    "payments",
    "3d secure",
    "checkout",
  ],
  authors: [{ name: "Braulio De Leon" }],
  creator: "Braulio De Leon",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brauliodeleon.com",
    title: "Braulio De Leon - Senior / Staff Frontend Engineer",
    description:
      "Senior / Staff Frontend Engineer · Payments, Auth & Checkout · React · TypeScript",
    siteName: "Braulio De Leon",
  },
  twitter: {
    card: "summary_large_image",
    title: "Braulio De Leon - Senior / Staff Frontend Engineer",
    description:
      "Senior / Staff Frontend Engineer · Payments, Auth & Checkout · React · TypeScript",
  },
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
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
