import { Shell } from "@/components/layout/Shell";
import { Hero } from "@/components/home/Hero";
import { FeaturedListings } from "@/components/home/FeaturedListings";
import { AIMatchSection } from "@/components/home/AIMatchSection";

export default function HomePage() {
  return (
    <Shell>
      <Hero />
      <FeaturedListings />
      <AIMatchSection />
      <section className="border-t bg-muted/30 py-16">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border bg-background p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">Verified</p>
              <h2 className="mt-4 text-2xl font-bold">Trusted listings</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                All properties go through verification so students can book with confidence.
              </p>
            </div>
            <div className="rounded-3xl border bg-background p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">No broker fees</p>
              <h2 className="mt-4 text-2xl font-bold">Transparent pricing</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Rent directly from verified hosts and avoid hidden broker commissions.
              </p>
            </div>
            <div className="rounded-3xl border bg-background p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">Local support</p>
              <h2 className="mt-4 text-2xl font-bold">Designed for Nepal</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Built for Kathmandu Valley students, with trusted hostels, flats, and PGs nearby.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
