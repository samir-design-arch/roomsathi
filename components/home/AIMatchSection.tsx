"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { listings, colleges } from "@/lib/data";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export function AIMatchSection() {
  const [budget, setBudget] = useState("15000");
  const [college, setCollege] = useState("Pulchowk Engineering Campus");
  const [food, setFood] = useState("yes");
  const [furnished, setFurnished] = useState("yes");
  const [result, setResult] = useState<(typeof listings)[0] | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const budgetNum = parseInt(budget);
    const scored = listings.map((item) => {
      let score = 0;
      if (item.price <= budgetNum) {
        score += 30;
        if (item.price <= budgetNum * 0.7) score += 10;
      } else {
        score -= 20;
      }
      if (food === "yes" && item.food) score += 15;
      if (food === "no" && !item.food) score += 10;
      if (furnished === "yes" && item.furnished) score += 15;
      if (furnished === "no" && !item.furnished) score += 10;
      score += item.safety * 0.2;
      if (item.verified) score += 10;
      if (item.available) score += 15;
      return { ...item, score };
    });
    scored.sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
    setResult(scored[0]);
  };

  return (
    <section className="border-y bg-muted/30 py-16 md:py-24" id="ai">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              AI Room Finder
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              Let AI find your perfect room
            </h2>
            <p className="mt-4 text-muted-foreground">
              Answer a few questions and our AI will recommend the best room for you based on your
              budget, college, and lifestyle preferences.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Monthly Budget</Label>
                  <Select value={budget} onValueChange={setBudget}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5000">Under NPR 5,000</SelectItem>
                      <SelectItem value="10000">NPR 5,000 - 10,000</SelectItem>
                      <SelectItem value="15000">NPR 10,000 - 15,000</SelectItem>
                      <SelectItem value="25000">NPR 15,000 - 25,000</SelectItem>
                      <SelectItem value="35000">NPR 25,000 - 35,000</SelectItem>
                      <SelectItem value="50000">NPR 35,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Your College</Label>
                  <Select value={college} onValueChange={setCollege}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {colleges.slice(1).map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Food Preference</Label>
                  <Select value={food} onValueChange={setFood}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Want food included</SelectItem>
                      <SelectItem value="no">Self-cook / Outside</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Furnished?</Label>
                  <Select value={furnished} onValueChange={setFurnished}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Fully Furnished</SelectItem>
                      <SelectItem value="no">Unfurnished</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                <Sparkles className="mr-2 h-4 w-4" />
                Find My Perfect Room
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {result ? (
              <Card className="overflow-hidden border-primary/20">
                <CardContent className="p-0">
                  <div className="bg-primary p-6 text-primary-foreground">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <Sparkles className="h-4 w-4" /> AI Top Pick
                    </div>
                    <h3 className="mt-2 font-heading text-2xl font-bold">{result.title}</h3>
                    <p className="text-primary-foreground/80">{result.location}</p>
                  </div>
                  <div className="p-6">
                    <p className="text-3xl font-bold text-foreground">
                      NPR {result.price.toLocaleString("en-IN")}
                      <span className="text-base font-normal text-muted-foreground">/month</span>
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">{result.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {result.amenities.map((a) => (
                        <span
                          key={a}
                          className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                    <Button className="mt-6" asChild>
                      <Link href={`/property/${result.id}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="flex h-full min-h-[320px] items-center justify-center rounded-2xl border border-dashed bg-background p-8 text-center">
                <div>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Sparkles className="h-8 w-8" />
                  </div>
                  <p className="mt-4 font-heading text-lg font-semibold">Your AI match awaits</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Fill the form and we&apos;ll find the best room for you.
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
