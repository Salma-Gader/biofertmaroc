import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
  description: "Conditions générales de vente de BioFertMaroc.",
};

const sections = [
  {
    title: "1. Objet",
    body: `Les présentes conditions générales de vente régissent les ventes de compléments alimentaires réalisées par ${siteConfig.name} sur ce site. Toute commande implique l'acceptation sans réserve de ces conditions.`,
  },
  {
    title: "2. Produits",
    body: "Nos produits sont des compléments alimentaires 100% naturels, fabriqués dans des sites certifiés GMP. Ils ne se substituent pas à un traitement médical et ne remplacent pas un avis médical.",
  },
  {
    title: "3. Commandes",
    body: "Toute commande passée sur le site vaut acceptation des prix et descriptions des produits disponibles à la vente. Nous nous réservons le droit d'annuler ou de refuser toute commande d'un client avec lequel il existerait un litige.",
  },
  {
    title: "4. Prix et paiement",
    body: "Les prix sont indiqués en dirhams marocains (DH), toutes taxes comprises. Le paiement s'effectue à la livraison ou par carte bancaire selon les options proposées lors de la commande.",
  },
  {
    title: "5. Livraison",
    body: "Nous livrons partout au Maroc en 24 à 48h ouvrées. Les délais sont donnés à titre indicatif et peuvent varier selon la localisation.",
  },
  {
    title: "6. Retours et remboursement",
    body: "Conformément à notre garantie satisfait ou remboursé, contactez-nous pour toute demande de retour ou de remboursement. Nous trouverons une solution adaptée à votre situation.",
  },
  {
    title: "7. Contact",
    body: "Pour toute question relative à ces conditions générales de vente, contactez-nous à hello@biofertmaroc.com.",
  },
];

export default function TermsPage() {
  return (
    <>
      <div className="bg-cream py-12 sm:py-16">
        <Container className="flex flex-col items-center gap-3 text-center">
          <Heading as="h1" size="section">
            Conditions Générales de Vente
          </Heading>
          <p className="max-w-lg text-sm text-ink/70">
            Dernière mise à jour : janvier 2026
          </p>
        </Container>
      </div>

      <Container className="py-12 sm:py-16">
        <div className="mx-auto flex max-w-2xl flex-col gap-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-2 font-display text-lg font-medium text-ink">{section.title}</h2>
              <p className="text-sm leading-relaxed text-ink/70">{section.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
