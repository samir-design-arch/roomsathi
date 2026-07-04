import { Sidebar } from "@/components/layout/Sidebar";
import { PropertyCard } from "@/components/search/PropertyCard";
import { listings } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Heart } from "lucide-react";
import Link from "next/link";

export default function StudentDashboardPage() {
  const savedProperties = listings.slice(0, 3);
  const recommended = listings.slice(0, 3);

  return (
    <section className="container py-16">
      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <Sidebar role="student" />

        <div className="space-y-8">
          <div className="flex flex-col gap-4 rounded-3xl border bg-background p-8 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">Student dashboard</p>
                <h1 className="text-3xl font-bold tracking-tight">Dashboard for students</h1>
              </div>
              <Button asChild>
                <Link href="/search">
                  Explore rooms
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border bg-muted p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Saved</p>
                <p className="mt-4 text-3xl font-bold">{savedProperties.length}</p>
              </div>
              <div className="rounded-3xl border bg-muted p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Matches</p>
                <p className="mt-4 text-3xl font-bold">{recommended.length}</p>
              </div>
              <div className="rounded-3xl border bg-muted p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Notifications</p>
                <p className="mt-4 text-3xl font-bold">3</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border bg-background p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Your top matches</p>
                  <h2 className="mt-2 text-2xl font-bold">Recommended rooms</h2>
                </div>
                <Badge className="bg-primary text-primary-foreground">AI powered</Badge>
              </div>
              <div className="mt-6 space-y-4">
                {recommended.map((listing) => (
                  <div key={listing.id} className="rounded-3xl border bg-muted p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-semibold">{listing.title}</p>
                        <p className="text-sm text-muted-foreground">{listing.location}</p>
                      </div>
                      <p className="text-lg font-bold">NPR {listing.price.toLocaleString("en-IN")}</p>
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                      <Heart className="h-3.5 w-3.5 text-destructive" />
                      {listing.gender}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border bg-background p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Activity</p>
                  <h2 className="mt-2 text-2xl font-bold">Recent updates</h2>
                </div>
                <Badge className="bg-secondary text-secondary-foreground">Live</Badge>
              </div>
              <div className="mt-6 space-y-4 text-sm text-muted-foreground">
                <div className="rounded-3xl bg-muted p-4">
                  <p className="font-semibold text-foreground">New listing near Pulchowk</p>
                  <p className="mt-1">A verified hostel has just become available within walking distance.</p>
                </div>
                <div className="rounded-3xl bg-muted p-4">
                  <p className="font-semibold text-foreground">Safety score update</p>
                  <p className="mt-1">We added new CCTV verified rooms with safety 90+ across Lalitpur.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border bg-background p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Saved properties</p>
                <h2 className="mt-2 text-2xl font-bold">Your wishlist</h2>
              </div>
              <Badge className="bg-primary text-primary-foreground">{savedProperties.length} saved</Badge>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {savedProperties.map((listing) => (
                <PropertyCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
