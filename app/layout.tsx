import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://sashapersholja.com"),
  title: {
    default: "Sasha Persholja — Official Site",
    template: "%s — Sasha Persholja"
  },
  description: "The official website of musical artist Sasha Persholja. Music, tour dates, press kit, and contact.",
  openGraph: {
    title: "Sasha Persholja — Official Site",
    description: "Music, tour dates, press kit, and contact.",
    type: "website",
    url: "https://sashapersholja.com",
    siteName: "Sasha Persholja",
  },
  robots: { index: true, follow: true },
  twitter: {
    card: "summary_large_image",
    title: "Sasha Persholja — Official Site",
    description: "Music, tour dates, press kit, and contact.",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}