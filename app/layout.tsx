import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Braulio De Leon - Staff Frontend Engineer",
    template: "%s | Braulio De Leon",
  },
  description:
    "Staff Frontend Engineer focused on payments, auth and checkout. 15+ years building enterprise frontends in React and TypeScript for US companies, including American Express and Toyota.",
  keywords: [
    "staff frontend engineer",
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
    title: "Braulio De Leon - Staff Frontend Engineer",
    description:
      "Staff Frontend Engineer · Payments, Auth & Checkout · React · TypeScript",
    siteName: "Braulio De Leon",
  },
  twitter: {
    card: "summary_large_image",
    title: "Braulio De Leon - Staff Frontend Engineer",
    description:
      "Staff Frontend Engineer · Payments, Auth & Checkout · React · TypeScript",
  },
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
