"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Listing } from "@/lib/data";
import { cn } from "@/lib/utils";
import {
  MapPin,
  Shield,
  Clock,
  Heart,
  Check,
  Star,
  Sparkles,
} from "lucide-react";

interface PropertyCardProps {
  listing: Listing;
  className?: string;
}

export function PropertyCard({ listing, className }: PropertyCardProps) {
  return (
    <Card
      className={cn(
        "group overflow-hidden transition-all hover:shadow-md",
        className
      )}
    >
      <Link href={`/property/${listing.id}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={listing.image}
            alt={listing.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute left-3 top-3 flex flex-wrap gap-2">
            {listing.badge === "verified" && (
              <Badge className="bg-primary text-primary-foreground hover:bg-primary">
                <Check className="mr-1 h-3 w-3" /> Verified
              </Badge>
            )}
            {listing.badge === "premium" && (
              <Badge className="bg-steel-800 text-white hover:bg-steel-800">
                <Star className="mr-1 h-3 w-3" /> Premium
              </Badge>
            )}
            {listing.badge === "discount" && (
              <Badge variant="destructive">Offer</Badge>
            )}
            {!listing.available && (
              <Badge variant="secondary">Booked</Badge>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-3 top-3 h-8 w-8 rounded-full bg-white/90 text-muted-foreground hover:text-destructive"
            onClick={(e) => e.preventDefault()}
            aria-label="Save property"
          >
            <Heart className="h-4 w-4" />
          </Button>
          {typeof listing.aiMatch === "number" && (
            <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-background/95 px-2.5 py-1 text-xs font-semibold text-primary shadow-sm">
              <Sparkles className="h-3 w-3" />
              {listing.aiMatch}% match
            </div>
          )}
        </div>
      </Link>

      <CardContent className="p-4">
        <div className="mb-2 flex items-start justify-between gap-2">
          <div>
            <p className="text-lg font-semibold leading-tight">
              NPR {listing.price.toLocaleString("en-IN")}
              <span className="text-sm font-normal text-muted-foreground">/month</span>
            </p>
            <p className="mt-1 line-clamp-1 text-sm font-medium">{listing.title}</p>
          </div>
        </div>

        <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {listing.location}
          </span>
          <span>•</span>
          <span>{listing.distance}</span>
          <span>•</span>
          <span>{listing.type}</span>
        </div>

        <div className="mb-3 flex flex-wrap gap-2">
          {listing.amenities.slice(0, 3).map((amenity) => (
            <span
              key={amenity}
              className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
            >
              {amenity}
            </span>
          ))}
          {listing.amenities.length > 3 && (
            <span className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">
              +{listing.amenities.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between border-t pt-3">
          <div className="flex items-center gap-3 text-xs">
            {listing.verified && (
              <span className="flex items-center gap-1 text-primary">
                <Shield className="h-3.5 w-3.5" /> ID verified
              </span>
            )}
            <span className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-3.5 w-3.5" /> {listing.host?.responseTime}
            </span>
          </div>
          <div className="flex h-7 items-center rounded-full bg-teal-50 px-2 text-xs font-semibold text-teal-700 dark:bg-teal-950 dark:text-teal-300">
            {listing.safety}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
