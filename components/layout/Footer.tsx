import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { NewsletterForm } from "./NewsletterForm";
import { footerNav, siteConfig } from "@/lib/site-config";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "TikTok", href: "https://tiktok.com" },
  { label: "Pinterest", href: "https://pinterest.com" },
];

const paymentMethods = ["Visa", "Mastercard", "Amex", "PayPal", "Alma"];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-ink">
        {title}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-ink hover:underline underline-offset-4"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-ink"
      style={{ backgroundColor: "#f7f3f2" }}
    >
      <Container className="relative z-10 py-14 sm:py-16">
        <div className="mb-12 flex flex-col items-start gap-6 border-b border-ink/10 pb-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-medium">Rejoignez la newsletter</h2>
            <p className="mt-1 text-sm text-ink">
              Des conseils fertilité, pour elle et pour lui, directement dans votre boîte mail.
            </p>
          </div>
          <NewsletterForm />
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <FooterColumn title="Nos Produits" links={footerNav.shop} />
          <FooterColumn title="À propos" links={footerNav.company} />
          <FooterColumn title="Aide" links={footerNav.help} />
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-ink">
              Contact
            </h3>
            <address className="not-italic text-sm leading-relaxed text-ink">
              123 Avenue Wellness
              <br />
              Casablanca, Maroc
              <br />
              <a href="mailto:hello@biofertmaroc.com" className="hover:underline underline-offset-4">
                hello@biofertmaroc.com
              </a>
            </address>
            <ul className="mt-4 flex gap-4">
              {socialLinks.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink hover:underline underline-offset-4"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-ink/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-3 text-xs text-ink">
            {footerNav.legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-ink hover:underline underline-offset-4">
                {link.label}
              </Link>
            ))}
            <span>&copy; {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.</span>
          </div>
          <ul className="flex gap-3 text-xs text-ink">
            {paymentMethods.map((method) => (
              <li key={method} className="rounded border border-ink/20 px-2 py-1">
                {method}
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-0 select-none whitespace-nowrap text-[28vw] font-semibold leading-none text-ink/5 sm:text-[16rem]"
        style={{
          fontFamily: "var(--font-logo)",
          fontVariationSettings: '"SOFT" 60, "WONK" 0, "opsz" 144',
          transform: "rotate(-8deg) translateX(-20%)",
        }}
      >
        BM
        <span style={{ display: "inline-block", fontStyle: "italic", transform: "skew(-12deg)" }}>
          !
        </span>
      </span>
    </footer>
  );
}
