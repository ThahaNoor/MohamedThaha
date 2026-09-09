"use client";

import { profile } from "@/lib/profile";
import { scrollToSection } from "@/lib/motion";

function FooterLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="text-sm text-muted transition-colors hover:text-accent"
      >
        {label}
      </button>
    );
  }

  return (
    <a
      href={href}
      className="text-sm text-muted transition-colors hover:text-accent"
    >
      {label}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="section-container section-padding !py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[0.12em] text-foreground">
              {profile.name}
            </p>
            <div className="mt-3 space-y-1">
              {profile.footerTagline.map((line) => (
                <p key={line} className="text-sm text-muted">
                  {line}
                </p>
              ))}
            </div>
          </div>

          <nav
            className="flex flex-wrap gap-x-6 gap-y-2"
            aria-label="Footer navigation"
          >
            <FooterLink
              href="#resume"
              label="Resume"
              onClick={() => scrollToSection("#resume")}
            />
            <FooterLink
              href="#contact"
              label="Contact"
              onClick={() => scrollToSection("#contact")}
            />
            <FooterLink href={profile.linkedinUrl} label="LinkedIn" />
          </nav>
        </div>

        <p className="mt-8 border-t border-border pt-6 text-sm text-muted">
          © 2026 {profile.shortName}
        </p>
      </div>
    </footer>
  );
}
