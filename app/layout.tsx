import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Braulio De Leon",
  description: "Building the digital future, one line of code at a time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
