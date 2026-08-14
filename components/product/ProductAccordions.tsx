import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import type { Product } from "@/lib/types";

export function ProductAccordions({ product }: { product: Product }) {
  const items: AccordionItem[] = [
    {
      question: "Bienfaits",
      answer: product.benefits.join(" · ") || "Aucun bienfait renseigné.",
    },
    {
      question: "Ingrédients",
      answer: product.ingredients?.join(", ") || "Liste complète des ingrédients disponible sur demande.",
    },
    {
      question: "Utilisation",
      answer: product.usage || "Suivez les indications sur l'étiquette.",
    },
    {
      question: "Précautions",
      answer: product.precautions || "Demandez conseil à votre médecin avant utilisation.",
    },
    {
      question: "Description complète",
      answer: product.shortDescription || "",
    },
  ];

  return <Accordion items={items} />;
}
