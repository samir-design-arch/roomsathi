import type { Metadata } from "next";
import { Urbanist, Public_Sans, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RoomSathi - Find Your Perfect Room in Nepal",
  description: "Verified rooms, hostels, and flats across Kathmandu with real-time availability and AI-powered recommendations. No broker fees.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${urbanist.variable} ${publicSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <TooltipProvider delayDuration={100}>
            {children}
            <Toaster position="bottom-right" richColors />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
