import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Accordion } from "@/components/ui/Accordion";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Réponses aux questions les plus fréquentes sur les produits, la livraison et les commandes BioFertMaroc.",
};

const faqSections = [
  {
    label: "Produits & Utilisation",
    items: [
      {
        question: "Combien de temps avant de voir des résultats ?",
        answer:
          "Nos formules sont pensées pour un protocole de 3 mois : un cycle complet de maturation des ovules ou des spermatozoïdes dure environ 90 jours. Il est rare de voir des résultats avant la fin du premier cycle de 3 mois — la régularité compte plus que la vitesse.",
      },
      {
        question: "Vos produits sont-ils sûrs et certifiés ?",
        answer:
          "Oui. Tous nos compléments sont 100% naturels, fabriqués dans des sites certifiés GMP, sans additifs artificiels.",
      },
      {
        question: "Puis-je prendre BellaFert et FertiMen en couple ?",
        answer:
          "Tout à fait — c'est exactement l'objectif du Pack Couple, qui réunit BellaFert et FertiMen pour accompagner les deux partenaires en même temps.",
      },
      {
        question: "Dois-je consulter un médecin avant de commencer ?",
        answer:
          "Nous recommandons de demander conseil à votre médecin en cas de grossesse, d'allaitement ou de traitement en cours. Chaque fiche produit détaille les précautions spécifiques.",
      },
    ],
  },
  {
    label: "Livraison & Paiement",
    items: [
      {
        question: "Quels sont les délais de livraison ?",
        answer: "Nous livrons partout au Maroc en 24 à 48h ouvrées.",
      },
      {
        question: "Quels moyens de paiement acceptez-vous ?",
        answer: "Vous pouvez payer à la livraison ou par carte bancaire, selon votre préférence.",
      },
      {
        question: "Livrez-vous en dehors du Maroc ?",
        answer:
          "Pour le moment, nos livraisons sont limitées au territoire marocain. Contactez-nous si vous avez une demande spécifique.",
      },
    ],
  },
  {
    label: "Commandes & Retours",
    items: [
      {
        question: "Que faire si je ne suis pas satisfait(e) ?",
        answer:
          "Tous nos produits sont couverts par notre garantie satisfait ou remboursé. Contactez-nous et nous trouverons une solution rapidement.",
      },
      {
        question: "Comment suivre ma commande ?",
        answer:
          "Un lien de suivi vous est envoyé dès l'expédition de votre commande. Pour toute question, notre équipe reste joignable à hello@biofertmaroc.com.",
      },
      {
        question: "Puis-je modifier ou annuler ma commande ?",
        answer:
          "Contactez-nous le plus tôt possible après votre achat — tant que la commande n'est pas expédiée, nous pouvons généralement la modifier ou l'annuler.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <div className="bg-blue-light py-12 sm:py-16">
        <Container className="flex flex-col items-center gap-3 text-center">
          <Heading as="h1" size="section">
            Questions Fréquentes
          </Heading>
          <p className="max-w-lg text-sm text-ink/70">
            Tout ce qu&apos;il faut savoir sur nos produits, la livraison et vos commandes.
          </p>
        </Container>
      </div>

      <Container className="flex flex-col gap-12 py-12 sm:gap-16 sm:py-16">
        {faqSections.map((section) => (
          <div key={section.label} className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-12">
            <Heading as="h2" size="sub">
              {section.label}
            </Heading>
            <Accordion items={section.items} />
          </div>
        ))}
      </Container>
    </>
  );
}
