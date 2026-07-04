"use client";

import { useMemo, useState } from "react";
import { Shell } from "@/components/layout/Shell";
import { PropertyCard } from "@/components/search/PropertyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { listings, locations, propertyTypes, genderOptions } from "@/lib/data";
import { Filter, MapPin, Search as SearchIcon } from "lucide-react";

const priceRanges = [
  { value: "all", label: "All prices" },
  { value: "0-10000", label: "Under NPR 10,000" },
  { value: "10000-20000", label: "NPR 10,000 - 20,000" },
  { value: "20000-999999", label: "NPR 20,000+" },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("All Kathmandu Valley");
  const [type, setType] = useState("All Types");
  const [gender, setGender] = useState("Any");
  const [priceRange, setPriceRange] = useState("all");
  const [availableOnly, setAvailableOnly] = useState("yes");

  const filtered = useMemo(
    () =>
      listings.filter((listing) => {
        const normalizedQuery = query.trim().toLowerCase();
        const matchQuery =
          !normalizedQuery ||
          [listing.title, listing.location, listing.type, listing.host?.name]
            .join(" ")
            .toLowerCase()
            .includes(normalizedQuery);
        const matchLocation =
          location === "All Kathmandu Valley" ||
          listing.location.toLowerCase().includes(location.toLowerCase());
        const matchType = type === "All Types" || listing.type === type;
        const matchGender =
          gender === "Any" ||
          listing.gender.toLowerCase().includes(gender.toLowerCase());
        const matchAvailable = availableOnly === "no" || listing.available;
        const [min, max] = priceRange === "all" ? [0, Number.MAX_SAFE_INTEGER] : priceRange.split("-").map(Number);
        const matchPrice = listing.price >= min && listing.price <= max;
        return matchQuery && matchLocation && matchType && matchGender && matchAvailable && matchPrice;
      }),
    [query, location, type, gender, priceRange, availableOnly]
  );

  return (
    <Shell>
      <section className="container py-16">
        <div className="mb-10 space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Browse Rooms</p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight">Verified student housing across Kathmandu Valley</h1>
          <p className="max-w-2xl text-base text-muted-foreground">
            Filter by price, gender, availability, and campus to find the right room or flat for your budget.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          <aside className="rounded-3xl border bg-background p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3 rounded-2xl bg-primary/10 p-4">
              <Filter className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-semibold">Smart Filters</p>
                <p className="text-sm text-muted-foreground">Refine results instantly.</p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="search-query">Search</Label>
                <Input
                  id="search-query"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search by room, hostel, owner..."
                />
              </div>

              <div className="space-y-2">
                <Label>Location</Label>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((loc) => (
                      <SelectItem key={loc} value={loc}>
                        {loc}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Property type</Label>
                <Select value={type} onValueChange={setType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {propertyTypes.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Gender preference</Label>
                <Select value={gender} onValueChange={setGender}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {genderOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Monthly budget</Label>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {priceRanges.map((range) => (
                      <SelectItem key={range.value} value={range.value}>
                        {range.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Availability</Label>
                <Select value={availableOnly} onValueChange={setAvailableOnly}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Only available now</SelectItem>
                    <SelectItem value="no">Include booked rooms</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </aside>

          <div className="space-y-6">
            <div className="flex flex-col gap-4 rounded-3xl border bg-background p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Search results</p>
                <h2 className="text-2xl font-bold">{filtered.length} properties found</h2>
              </div>
              <Button variant="outline" className="w-full sm:w-auto">
                <SearchIcon className="mr-2 h-4 w-4" />
                Refine filters
              </Button>
            </div>

            {filtered.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-muted p-10 text-center text-muted-foreground">
                <p className="text-lg font-semibold text-foreground">No matching rooms found</p>
                <p className="mt-2">Try widening your search or changing budget and location filters.</p>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((listing) => (
                  <PropertyCard key={listing.id} listing={listing} />
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          Showing rooms across Kathmandu Valley with verified host details and safety scores.
        </div>
      </section>
    </Shell>
  );
}
