import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, MapPin, Shield, Clock, Sparkles } from "lucide-react";
import { Shell } from "@/components/layout/Shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { listings } from "@/lib/data";

export function generateStaticParams() {
  return listings.map((listing) => ({
    id: listing.id.toString(),
  }));
}

interface PropertyPageProps {
  params: { id: string };
}

export default function PropertyPage({ params }: PropertyPageProps) {
  const listing = listings.find((item) => item.id === Number(params.id));

  if (!listing) {
    notFound();
  }

  return (
    <Shell>
      <section className="container py-16">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Property Details</p>
            <h1 className="text-4xl font-bold tracking-tight">{listing.title}</h1>
            <p className="mt-2 text-sm text-muted-foreground">{listing.location} • {listing.distance} away</p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/search">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to search
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="space-y-6">
            <div className="rounded-3xl overflow-hidden border bg-background shadow-sm">
              <Image
                src={listing.image}
                alt={listing.title}
                width={1200}
                height={720}
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="grid gap-2 p-6 sm:grid-cols-3">
                {listing.gallery?.slice(0, 3).map((src, index) => (
                  <div key={index} className="overflow-hidden rounded-3xl border bg-muted">
                    <Image src={src} alt={`${listing.title} ${index + 1}`} width={400} height={260} className="h-28 w-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 rounded-3xl border bg-background p-6 shadow-sm">
              <div className="flex flex-wrap items-center gap-2">
                {listing.badge === "verified" && (
                  <Badge className="bg-primary text-primary-foreground">Verified</Badge>
                )}
                {listing.badge === "premium" && (
                  <Badge className="bg-steel-800 text-white">Premium</Badge>
                )}
                {listing.badge === "discount" && <Badge variant="destructive">Offer</Badge>}
                {!listing.available && <Badge variant="secondary">Booked</Badge>}
                <span className="rounded-full bg-muted px-3 py-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {listing.type}
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Monthly rent</p>
                  <p className="mt-2 text-3xl font-bold">NPR {listing.price.toLocaleString("en-IN")}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Host response</p>
                  <p className="mt-2 text-sm text-foreground">{listing.host?.responseTime} • {listing.host?.responseRate}% response</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-muted p-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <MapPin className="h-4 w-4" /> Location
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{listing.location}</p>
                </div>
                <div className="rounded-3xl bg-muted p-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Shield className="h-4 w-4" /> Safety
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">Score {listing.safety} / 100</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border bg-background p-6 shadow-sm">
              <h2 className="text-xl font-semibold">About this room</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{listing.description}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl bg-muted p-4 text-sm">
                  <p className="font-semibold">Gender</p>
                  <p className="mt-2 text-muted-foreground">{listing.gender}</p>
                </div>
                <div className="rounded-3xl bg-muted p-4 text-sm">
                  <p className="font-semibold">Furnished</p>
                  <p className="mt-2 text-muted-foreground">{listing.furnished ? "Yes" : "No"}</p>
                </div>
                <div className="rounded-3xl bg-muted p-4 text-sm">
                  <p className="font-semibold">Food included</p>
                  <p className="mt-2 text-muted-foreground">{listing.food ? "Yes" : "No"}</p>
                </div>
                <div className="rounded-3xl bg-muted p-4 text-sm">
                  <p className="font-semibold">Attached bathroom</p>
                  <p className="mt-2 text-muted-foreground">{listing.attachedBathroom ? "Yes" : "No"}</p>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <Card className="rounded-3xl border shadow-sm">
              <CardContent className="space-y-5 p-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Booking</p>
                  <p className="mt-2 text-3xl font-bold">NPR {listing.price.toLocaleString("en-IN")}/month</p>
                </div>
                <div className="flex items-center gap-2 rounded-3xl bg-muted p-4 text-sm text-muted-foreground">
                  <Sparkles className="h-4 w-4 text-primary" /> Verified student friendly property
                </div>
                <Button className="w-full">Contact host</Button>
                <div className="space-y-3 rounded-3xl bg-muted p-4 text-sm">
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="h-4 w-4" /> Instant booking request
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Clock className="h-4 w-4" /> Quick response guarantee
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border shadow-sm">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-lg font-semibold">Host</h2>
                <div className="rounded-3xl bg-muted p-4">
                  <p className="font-semibold">{listing.host?.name}</p>
                  <p className="text-sm text-muted-foreground">Verified host</p>
                  <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="rounded-full bg-background px-3 py-2">{listing.host?.avatar}</span>
                    <span>{listing.host?.responseRate}% response rate</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>
    </Shell>
  );
}
