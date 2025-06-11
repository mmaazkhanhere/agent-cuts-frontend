import type { Metadata } from "next";
import { Roboto, Afacad } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

const afacad = Afacad({
  weight: "400",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClipGenius",
  description:
    "Automatically convert long-form videos into engaging short clips for TikTok, YouTube Shorts, and Reels with AI precision",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${afacad.className} ${roboto.className}`}>
        <main className="min-h-screen flex bg-gray-900 text-white flex-col">
          <Navbar />
          {children}
          <Toaster />

          <Footer />
        </main>
      </body>
    </html>
  );
}
