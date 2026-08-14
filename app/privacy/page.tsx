import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description: "Politique de confidentialité de BioFertMaroc.",
};

const sections = [
  {
    title: "1. Données collectées",
    body: `Lorsque vous passez commande ou vous inscrivez à notre newsletter, ${siteConfig.name} collecte des informations telles que votre nom, votre adresse email, votre adresse de livraison et votre numéro de téléphone.`,
  },
  {
    title: "2. Utilisation des données",
    body: "Vos données sont utilisées pour traiter vos commandes, vous contacter au sujet de votre livraison, et, si vous y avez consenti, vous envoyer notre newsletter. Nous ne vendons jamais vos données à des tiers.",
  },
  {
    title: "3. Conservation des données",
    body: "Vos données sont conservées pendant la durée nécessaire à la gestion de la relation commerciale, puis archivées conformément aux obligations légales applicables.",
  },
  {
    title: "4. Vos droits",
    body: "Vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Pour exercer ces droits, contactez-nous à hello@biofertmaroc.com.",
  },
  {
    title: "5. Cookies",
    body: "Ce site utilise des cookies nécessaires à son bon fonctionnement (panier, préférences) ainsi que des cookies de mesure d'audience.",
  },
  {
    title: "6. Contact",
    body: "Pour toute question relative à cette politique de confidentialité, contactez-nous à hello@biofertmaroc.com.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <div className="bg-cream py-12 sm:py-16">
        <Container className="flex flex-col items-center gap-3 text-center">
          <Heading as="h1" size="section">
            Politique de Confidentialité
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
