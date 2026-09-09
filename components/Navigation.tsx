"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigation, profile } from "@/lib/profile";
import { scrollToSection } from "@/lib/motion";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    scrollToSection(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-border bg-background/95 py-3 shadow-subtle backdrop-blur-sm"
          : "border-transparent bg-background/80 py-4 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <button
          type="button"
          onClick={() => handleNavClick("#hero")}
          className="text-left text-sm font-semibold tracking-[0.12em] text-foreground transition-colors hover:text-accent sm:text-base"
          aria-label="Scroll to top"
        >
          {profile.name}
        </button>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => handleNavClick(item.href)}
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-border p-2 text-foreground md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-border bg-background md:hidden"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-1 px-5 py-4 sm:px-8">
              {navigation.map((item) => (
                <li key={item.href}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    className="w-full rounded-lg px-3 py-3 text-left text-base text-muted transition-colors hover:bg-accent-light hover:text-accent"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
