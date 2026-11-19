import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PetRescue.id - Donasi & Adopsi Hewan Terlantar",
  description: "Platform penggalangan dana dan adopsi hewan terlantar terpercaya di Indonesia.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-20"> {/* Padding top untuk menghindari bentrok dengan fixed navbar */}
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}