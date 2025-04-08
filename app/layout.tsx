import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "./shared/ui/layout";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ClipPilot – AI Video Tools for Captions, Hooks & Hashtags",
  description:
    "ClipPilot is an AI-powered platform that auto-generates captions, attention-grabbing hooks, and trending hashtags for video content creators. Save time, boost reach, and grow your audience effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${fontSans.variable}  antialiased bg-slate-950`}
      >
        <div className="relative flex flex-col min-h-screen">
          <Header />
          <main className="flex-1"> {children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
