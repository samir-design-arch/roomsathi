"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { navLinks } from "@/lib/data";
import {
  Search,
  Home,
  Building2,
  LayoutDashboard,
  UserCircle,
  Sparkles,
  Map,
} from "lucide-react";

const actions = [
  { label: "Browse all rooms", href: "/search", icon: Search },
  { label: "AI Room Finder", href: "/#ai", icon: Sparkles },
  { label: "Open map search", href: "/search?view=map", icon: Map },
  { label: "Student dashboard", href: "/dashboard/student", icon: LayoutDashboard },
  { label: "Landlord dashboard", href: "/dashboard/landlord", icon: Building2 },
  { label: "Sign in", href: "/auth", icon: UserCircle },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const run = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex h-9 w-full items-center justify-between rounded-md border border-steel-200 bg-muted px-3 py-2 text-sm text-muted-foreground shadow-sm hover:border-primary/50 hover:bg-accent hover:text-accent-foreground transition-colors md:w-64 lg:w-80"
        aria-label="Open command palette"
      >
        <span className="flex items-center gap-2">
          <Search className="h-4 w-4" />
          Search rooms, pages...
        </span>
        <kbd className="pointer-events-none hidden items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium opacity-100 md:inline-flex">
          <span className="text-xs">Ctrl</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            {navLinks.map((link) => (
              <CommandItem key={link.href} onSelect={() => run(link.href)}>
                {link.href === "/" ? (
                  <Home className="mr-2 h-4 w-4" />
                ) : link.href.includes("landlord") ? (
                  <Building2 className="mr-2 h-4 w-4" />
                ) : link.href.includes("dashboard") ? (
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                ) : (
                  <Search className="mr-2 h-4 w-4" />
                )}
                {link.label}
                <CommandShortcut>↵</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Actions">
            {actions.map((action) => (
              <CommandItem key={action.href} onSelect={() => run(action.href)}>
                <action.icon className="mr-2 h-4 w-4" />
                {action.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
