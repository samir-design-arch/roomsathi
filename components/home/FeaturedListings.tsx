"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PropertyCard } from "@/components/search/PropertyCard";
import { listings } from "@/lib/data";
import { ArrowRight } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function FeaturedListings() {
  const featured = listings.slice(0, 6);

  return (
    <section className="py-16 md:py-24" id="listings">
      <div className="container">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Featured
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight">
              Popular Near Your Campus
            </h2>
            <p className="mt-2 text-muted-foreground">
              Handpicked verified properties with the best value for students
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/search">
              View All Properties
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((listing) => (
            <motion.div key={listing.id} variants={item}>
              <PropertyCard listing={listing} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
