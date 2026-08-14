import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez l'équipe BioFertMaroc pour toute question sur nos produits ou votre commande.",
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-pink-light py-12 sm:py-16">
        <Container className="flex flex-col items-center gap-3 text-center">
          <Heading as="h1" size="section">
            Contactez-Nous
          </Heading>
          <p className="max-w-lg text-sm text-ink/70">
            Une question sur un produit, une commande ou un partenariat ? Notre équipe vous répond
            sous 24 à 48h.
          </p>
        </Container>
      </div>

      <Container className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink/50">
              Email
            </h2>
            <a
              href="mailto:hello@biofertmaroc.com"
              className="text-sm text-ink/80 hover:text-ink hover:underline underline-offset-4"
            >
              hello@biofertmaroc.com
            </a>
          </div>
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink/50">
              Adresse
            </h2>
            <address className="not-italic text-sm leading-relaxed text-ink/80">
              123 Wellness Ave
              <br />
              Casablanca, Morocco
            </address>
          </div>
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink/50">
              Livraison & Paiement
            </h2>
            <p className="text-sm leading-relaxed text-ink/80">
              Livraison partout au Maroc en 24 à 48h. Paiement à la livraison ou par carte.
            </p>
          </div>
        </div>

        <ContactForm />
      </Container>
    </>
  );
}
