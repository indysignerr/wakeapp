import { WakeMark } from "@/components/icons";
import { site } from "@/lib/site";

const productLinks = [
  { label: "Features", href: "/#features" },
  { label: "Themes", href: "/#themes" },
  { label: "Focus", href: "/#focus" },
  { label: "Blackout", href: "/#blackout" },
  { label: "Ranks", href: "/#ranks" },
];

const companyLinks = [
  { label: "Manifesto", href: "/#manifesto" },
  { label: "FAQ", href: "/#faq" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy/" },
  { label: "Terms", href: "/terms/" },
  { label: "Account Deletion", href: "/account-deletion/" },
  { label: "Support", href: "/support/" },
  { label: "Contact", href: `mailto:${site.contactEmail}` },
];

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-bg overflow-hidden">
      <div className="container-wide py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="/" className="inline-flex items-center gap-2.5">
              <WakeMark className="h-7 w-7" />
              <span className="font-sans text-[17px] font-bold tracking-tight-2 text-ink">
                {site.name}
              </span>
            </a>
            <p className="mt-4 max-w-[36ch] text-[14px] leading-relaxed text-ink-muted">
              A personal execution system for attention, discipline, and the
              long, quiet work of staying in command of yourself.
            </p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-dim">
              English · Français
            </p>
          </div>

          <FooterColumn title="Product" links={productLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Legal" links={legalLinks} />
        </div>

        <div className="mt-16 flex flex-col-reverse items-start gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-ink-dim font-mono">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-[12px] text-ink-dim">
            Designed for those who refuse to drift.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-[11px] uppercase tracking-[0.18em] text-ink-dim font-mono">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-[14px] text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
