import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Accordion } from "@/components/ui/Accordion";

const faqItems = [
  {
    question: "Vos formules sont-elles sûres et certifiées ?",
    answer:
      "Oui. Tous nos compléments sont 100% naturels, fabriqués dans des sites certifiés GMP, sans additifs artificiels.",
  },
  {
    question: "En quoi BioFertMaroc est différent ?",
    answer:
      "Nous formulons pour elle, pour lui, et pour le couple — plutôt qu'un seul complément générique — pour accompagner la fertilité des deux partenaires.",
  },
  {
    question: "Combien de temps avant de voir des résultats ?",
    answer:
      "Nos protocoles sont pensés sur 3 mois, le temps que prend un cycle complet de maturation des ovules ou des spermatozoïdes.",
  },
  {
    question: "Où sont fabriqués vos produits ?",
    answer:
      "En petits lots, avec des ingrédients responsables et une traçabilité complète.",
  },
];

export function BrandStoryFaq() {
  return (
    <section className="bg-pink-pale py-10 sm:py-20">
      <Container className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:items-center">
        <div>
          <Heading size="section" className="mb-4">
            Pourquoi BioFertMaroc
          </Heading>
          <p className="mb-8 max-w-md text-sm leading-relaxed text-ink/70">
            Nous avons créé la marque que nous aurions aimé trouver — pensée pour elle et pour
            lui, sans tabou et sans jargon, avec des formules naturelles qui accompagnent
            vraiment votre parcours de fertilité.
          </p>
          <Accordion items={faqItems} />
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
          <Image
            src="/placeholders/bd9eb223-2057-4905-9449-5f8c8478d9b1.jpg"
            alt=""
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
