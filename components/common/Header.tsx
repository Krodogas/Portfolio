"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Home, Briefcase, BookOpen, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/common/ThemeToggle";

const navLinks = [
  { href: "/", label: "HOME", icon: Home },
  { href: "/projects", label: "PROJECTS", icon: Briefcase },
  { href: "/blog", label: "BLOGS", icon: BookOpen },
  { href: "/contact", label: "CONTACT", icon: Mail },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      {/* Bar: Logo + nav + ThemeToggle + Menu — always on top, solid background */}
      <div className="relative z-10 container mx-auto flex h-28 items-center justify-between gap-4 bg-background px-4 sm:px-6">
        {/* Logo on left */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-foreground shrink-0">
          <div className="w-14 h-14 bg-foreground text-background flex items-center justify-center rounded-full font-bold text-base">
            JAB
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">JEFEL A. BAYUBAY</span>
          </div>
        </Link>

        {/* Navigation and controls on right */}
        <div className="flex items-center gap-6 ml-auto">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map(({ href, label, icon: Icon }) => {
                const isActive = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`flex items-center gap-2 text-base transition-colors ${isActive
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                      <Icon className="h-4 w-4" />
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Backdrop: only below the bar, dims the page */}
      {open && (
        <div
          className="md:hidden fixed inset-0 top-14 left-0 right-0 bottom-0 z-0 bg-black/50 backdrop-blur-sm"
          aria-hidden
          onClick={() => setOpen(false)}
        />
      )}

      {/* Menu panel: below the bar, above the backdrop */}
      {open && (
        <div className="md:hidden relative z-10 border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map(({ href, label, icon: Icon }) => {
                const isActive = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-2 rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground ${isActive
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground"
                        }`}
                    >
                      <Icon className="h-4 w-4" />
                      {label}
                    </Link>
                  </li>
                );
              })}
              <li className="mt-2 pt-2 border-t border-border">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  <Button size="sm" className="w-full justify-center">
                    Contact
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}