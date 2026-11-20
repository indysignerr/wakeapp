"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WakeMark } from "@/components/icons";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-line/60 backdrop-blur-xl bg-bg/70"
          : "border-b border-transparent backdrop-blur-0",
      )}
    >
      <div className="container-wide flex h-16 items-center justify-between">
        <a
          href="/"
          className="group flex items-center gap-2.5 transition-opacity hover:opacity-80"
          aria-label={`${site.name} home`}
        >
          <WakeMark className="h-7 w-7" />
          <span className="font-sans text-[17px] font-medium tracking-tight-2">
            {site.name}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-[14px] text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button href={site.appStore} size="sm" variant="primary">
            Download
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-line bg-surface/60 text-ink-muted hover:text-ink transition-colors"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden absolute inset-x-0 top-16 origin-top transition-all duration-300",
          open ? "scale-y-100 opacity-100" : "pointer-events-none scale-y-95 opacity-0",
        )}
      >
        <div className="mx-5 mt-2 rounded-2xl border border-line bg-bg-subtle/95 backdrop-blur-xl shadow-elevated">
          <nav className="flex flex-col p-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-[15px] text-ink-muted transition-colors hover:bg-surface-raised hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 border-t border-line p-2">
              <Button
                href={site.appStore}
                size="md"
                variant="primary"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Download on the App Store
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
