import { Sidebar } from "@/components/layout/Sidebar";
import { listings } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Building2, CreditCard } from "lucide-react";

export default function LandlordDashboardPage() {
  const myListings = listings.slice(0, 4);

  return (
    <section className="container py-16">
      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <Sidebar role="landlord" />

        <div className="space-y-8">
          <div className="rounded-3xl border bg-background p-8 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">Landlord dashboard</p>
                <h1 className="text-3xl font-bold tracking-tight">Manage your listings</h1>
              </div>
              <Button asChild>
                <Link href="/auth">
                  Add a listing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border bg-muted p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Properties listed</p>
                <p className="mt-4 text-3xl font-bold">{myListings.length}</p>
              </div>
              <div className="rounded-3xl border bg-muted p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Active inquiries</p>
                <p className="mt-4 text-3xl font-bold">12</p>
              </div>
              <div className="rounded-3xl border bg-muted p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Monthly earnings</p>
                <p className="mt-4 text-3xl font-bold">NPR 120,000</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border bg-background p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Recent inquiries</p>
                  <h2 className="mt-2 text-2xl font-bold">New messages</h2>
                </div>
                <Badge className="bg-secondary text-secondary-foreground">Live</Badge>
              </div>
              <div className="mt-6 space-y-4 text-sm text-muted-foreground">
                <div className="rounded-3xl bg-muted p-4">
                  <p className="font-semibold text-foreground">New request for Baneshwor flat</p>
                  <p className="mt-1">Student asked about rent and move-in date.</p>
                </div>
                <div className="rounded-3xl bg-muted p-4">
                  <p className="font-semibold text-foreground">Booking confirmed</p>
                  <p className="mt-1">Guest confirmed for New Baneshwor premium unit.</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border bg-background p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Hosting health</p>
                  <h2 className="mt-2 text-2xl font-bold">Performance</h2>
                </div>
                <Badge className="bg-primary text-primary-foreground">Trusted</Badge>
              </div>
              <div className="mt-6 space-y-4 text-sm text-muted-foreground">
                <div className="rounded-3xl bg-muted p-4">
                  <div className="flex items-center gap-2 text-foreground">
                    <Building2 className="h-4 w-4" /> 96% verified listing score
                  </div>
                </div>
                <div className="rounded-3xl bg-muted p-4">
                  <div className="flex items-center gap-2 text-foreground">
                    <CreditCard className="h-4 w-4" /> 8 payments received this month
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border bg-background p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Your listings</p>
                <h2 className="mt-2 text-2xl font-bold">Active properties</h2>
              </div>
              <Link href="/search" className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                View marketplace
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-6 space-y-4">
              {myListings.map((listing) => (
                <div key={listing.id} className="rounded-3xl border bg-muted p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold">{listing.title}</p>
                      <p className="text-sm text-muted-foreground">{listing.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">NPR {listing.price.toLocaleString("en-IN")}</p>
                      <Badge className="mt-2 bg-primary text-primary-foreground">{listing.available ? "Active" : "Booked"}</Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
