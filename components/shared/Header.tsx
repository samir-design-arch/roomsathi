"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { CommandPalette } from "./CommandPalette";
import { ThemeToggle } from "./ThemeToggle";
import { navLinks } from "@/lib/data";
import { Home, Menu, Bell, User } from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-heading text-xl font-bold tracking-tight">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Home className="h-4 w-4" />
          </div>
          RoomSathi
        </Link>

        {/* Desktop Command Search */}
        <div className="hidden flex-1 justify-center md:flex">
          <CommandPalette />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Button key={link.href} variant="ghost" size="sm" asChild>
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="relative" aria-label="Notifications">
            <Bell className="h-5 w-5" />
            <Badge
              variant="destructive"
              className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full p-0 text-[10px]"
            >
              3
            </Badge>
          </Button>
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="hidden md:flex" asChild aria-label="Account">
            <Link href="/auth">
              <User className="h-5 w-5" />
            </Link>
          </Button>
          <Button size="sm" className="hidden md:flex" asChild>
            <Link href="/auth">Sign In</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="flex flex-col gap-6 pt-6">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 font-heading text-xl font-bold"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Home className="h-4 w-4" />
                  </div>
                  RoomSathi
                </Link>
                <div className="px-1">
                  <CommandPalette />
                </div>
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Button
                      key={link.href}
                      variant="ghost"
                      className="justify-start"
                      asChild
                      onClick={() => setMobileOpen(false)}
                    >
                      <Link href={link.href}>{link.label}</Link>
                    </Button>
                  ))}
                </nav>
                <Button asChild onClick={() => setMobileOpen(false)}>
                  <Link href="/auth">Sign In</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
