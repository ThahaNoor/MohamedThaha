import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/profile";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: profile.seo.title,
  description: profile.seo.description,
  openGraph: {
    title: profile.seo.title,
    description: profile.seo.description,
    siteName: profile.seo.siteName,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: profile.seo.title,
    description: profile.seo.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
