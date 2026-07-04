"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CommandPalette } from "@/components/shared/CommandPalette";
import { Sparkles, ArrowRight } from "lucide-react";

const stats = [
  { value: "5,000+", label: "Students Housed" },
  { value: "2,500+", label: "Verified Properties" },
  { value: "50+", label: "College Partnerships" },
  { value: "NPR 0", label: "Broker Fees" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b bg-muted/30 py-16 md:py-24 lg:py-32">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background px-4 py-1.5 text-sm font-medium text-foreground shadow-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            Trusted by 5,000+ Students in Kathmandu Valley
          </div>

          <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Find your next room{" "}
            <span className="text-primary">without paying a broker</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Verified rooms, hostels, and flats across Kathmandu with real-time availability and
            AI-powered recommendations.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/search">
                Browse Rooms
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/dashboard/landlord">List Your Property</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-12 max-w-2xl"
        >
          <div className="rounded-2xl border bg-background p-4 shadow-lg">
            <p className="mb-3 text-center text-sm font-medium text-muted-foreground">
              Search rooms, locations, or jump to a page
            </p>
            <div className="flex justify-center">
              <CommandPalette />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
