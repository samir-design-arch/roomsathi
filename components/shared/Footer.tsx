import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Home } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" },
  ],
  students: [
    { label: "Browse Rooms", href: "/search" },
    { label: "AI Room Finder", href: "/#ai" },
    { label: "Roommate Matching", href: "#" },
    { label: "Student Reviews", href: "/#reviews" },
  ],
  landlords: [
    { label: "List Property", href: "/dashboard/landlord" },
    { label: "Landlord Dashboard", href: "/dashboard/landlord" },
    { label: "Pricing", href: "#" },
    { label: "Resources", href: "#" },
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "Safety Tips", href: "#" },
    { label: "Scam Reporting", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-heading text-xl font-bold">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Home className="h-4 w-4" />
              </div>
              RoomSathi
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Nepal&apos;s most trusted platform for finding rooms, hostels, and flats. No broker fees,
              verified properties, AI-powered matching.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              Made with care in Kathmandu, Nepal
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">For Students</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {footerLinks.students.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p>© 2026 RoomSathi. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
