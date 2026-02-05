import type { Metadata } from "next";
import { Lexend, Noto_Sans } from "next/font/google"; // Import fonts
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "SMK Mudita Singkawang",
  description: "Sekolah Menengah Kejuruan berbasis nilai luhur Buddhis dan profesionalisme modern.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${lexend.variable} ${notoSans.variable} font-body antialiased bg-background-light text-neutral-dark`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
