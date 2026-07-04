"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  LayoutDashboard,
  Building2,
  Heart,
  Search,
  MessageSquare,
  Settings,
  CreditCard,
  LogOut,
} from "lucide-react";

interface SidebarProps {
  role: "student" | "landlord";
}

const studentLinks = [
  { label: "Dashboard", href: "/dashboard/student", icon: LayoutDashboard },
  { label: "Saved Properties", href: "#", icon: Heart },
  { label: "My Searches", href: "#", icon: Search },
  { label: "Messages", href: "#", icon: MessageSquare },
];

const landlordLinks = [
  { label: "Dashboard", href: "/dashboard/landlord", icon: LayoutDashboard },
  { label: "My Listings", href: "#", icon: Building2 },
  { label: "Inquiries", href: "#", icon: MessageSquare },
  { label: "Payments", href: "#", icon: CreditCard },
];

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();
  const links = role === "student" ? studentLinks : landlordLinks;

  return (
    <aside className="hidden w-64 flex-col border-r bg-muted/30 lg:flex">
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {role === "student" ? "Student Portal" : "Landlord Portal"}
        </p>
      </div>
      <nav className="flex-1 space-y-1 px-4">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Button
              key={link.label}
              variant={active ? "secondary" : "ghost"}
              className={cn("w-full justify-start gap-3", active && "font-medium")}
              asChild
            >
              <Link href={link.href}>
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            </Button>
          );
        })}
      </nav>
      <Separator />
      <div className="space-y-1 p-4">
        <Button variant="ghost" className="w-full justify-start gap-3" asChild>
          <Link href="#">
            <Settings className="h-4 w-4" />
            Settings
          </Link>
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-3 text-destructive hover:text-destructive">
          <LogOut className="h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </aside>
  );
}
