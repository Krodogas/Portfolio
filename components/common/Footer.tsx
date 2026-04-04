import Link from "next/link";
import { Github, Instagram, Mail, Facebook } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blogs" },
  { href: "/contact", label: "Contact" },
] as const;

const socialLinks = [
  { href: "https://github.com/Krodogas", icon: Github, label: "GitHub" },
  { href: "https://www.instagram.com/jpil2.0?igsh=NXFoMGVscTdjaWU2", icon: Instagram, label: "Instagram" },
  { href: "https://www.facebook.com/rightclickk", icon: Facebook, label: "Facebook" },
] as const;

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-foreground text-background flex items-center justify-center rounded-full font-bold text-xs">
                JAB
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Building beautiful digital experiences.</p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Follow Me</h3>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2026 Jefel A. Bayubay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}