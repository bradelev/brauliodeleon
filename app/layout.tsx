import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
    url: "/",
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
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:border focus:border-border focus:bg-background focus:px-4 focus:py-2 focus:font-mono focus:text-sm"
        >
          Skip to content
        </a>
        <Header />
        <main id="content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
