import './globals.css';
import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sasha Persholja — Official Site",
  description: "Funk • Blues • Alt-Electronica from Slovenia",
  openGraph: {
    title: "Sasha Persholja — Official Site",
    description: "Funk • Blues • Alt-Electronica from Slovenia",
    url: "https://sasha-persholja-site.vercel.app/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sasha Persholja — Official Site",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
