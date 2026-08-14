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
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-ink/50">
        {title}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-ink/80 hover:text-ink hover:underline underline-offset-4"
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
            <h2 className="font-display text-2xl font-medium">Join the newsletter</h2>
            <p className="mt-1 text-sm text-ink/60">
              Tips for every season of motherhood, straight to your inbox.
            </p>
          </div>
          <NewsletterForm />
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <FooterColumn title="Shop" links={footerNav.shop} />
          <FooterColumn title="Company" links={footerNav.company} />
          <FooterColumn title="Help" links={footerNav.help} />
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-ink/50">
              Contact
            </h3>
            <address className="not-italic text-sm leading-relaxed text-ink/80">
              123 Wellness Ave
              <br />
              Casablanca, Morocco
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
                    className="text-sm text-ink/80 hover:text-ink hover:underline underline-offset-4"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-ink/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-3 text-xs text-ink/50">
            {footerNav.legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-ink hover:underline underline-offset-4">
                {link.label}
              </Link>
            ))}
            <span>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
          </div>
          <ul className="flex gap-3 text-xs text-ink/50">
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
        className="pointer-events-none absolute -bottom-10 left-1/2 w-full -translate-x-1/2 select-none text-center font-display text-[18vw] font-semibold leading-none text-ink/5 sm:text-[12rem]"
      >
        {siteConfig.name}
      </span>
    </footer>
  );
}
