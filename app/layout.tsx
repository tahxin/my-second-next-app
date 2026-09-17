import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextApp",
  description: "A modern Next.js application",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1 mx-auto w-full max-w-6xl px-6 py-10">
          {children}
        </main>
        <footer className="border-t border-border/60 py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} NextApp. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
