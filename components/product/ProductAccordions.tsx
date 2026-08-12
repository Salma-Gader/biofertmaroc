import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import type { Product } from "@/lib/types";

export function ProductAccordions({ product }: { product: Product }) {
  const items: AccordionItem[] = [
    {
      question: "Benefits",
      answer: product.benefits.join(" · ") || "No benefits listed.",
    },
    {
      question: "Ingredients",
      answer: product.ingredients?.join(", ") || "Full ingredient list available on request.",
    },
    {
      question: "Usage",
      answer: product.usage || "Follow the directions on the label.",
    },
    {
      question: "Precautions",
      answer: product.precautions || "Consult your doctor before use.",
    },
    {
      question: "Full description",
      answer: product.shortDescription || "",
    },
  ];

  return <Accordion items={items} />;
}
