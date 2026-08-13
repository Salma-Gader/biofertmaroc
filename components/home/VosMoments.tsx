import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { products } from "@/lib/mock-data";

const categoryContent: Record<string, { title: string; image: string }> = {
  bellafert: {
    title: "Fertilité féminine",
    image: "/placeholders/category-bellafert.png",
  },
  fertimen: {
    title: "Fertilité masculine",
    image: "/placeholders/category-fertimen.png",
  },
  "pack-couple": {
    title: "Duo Fertilité",
    image: "/placeholders/category-pack-couple.png",
  },
  "ferti-power": {
    title: "Vitalité masculine",
    image: "/placeholders/category-ferti-power.png",
  },
  powermen: {
    title: "Énergie & Performance",
    image: "/placeholders/category-powermen.png",
  },
  "smokeclean-men": {
    title: "Détox & Respiration",
    image: "/placeholders/category-smokeclean.png",
  },
  "relaxes-woman": {
    title: "Sérénité féminine",
    image: "/placeholders/category-relaxeswoman.png",
  },
  cyclecare: {
    title: "Confort menstruel",
    image: "/placeholders/category-cyclecare.png",
  },
};

export function VosMoments() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <h2 className="font-display text-4xl font-bold text-ink sm:text-5xl">
          Nos catégories
        </h2>
        <p className="mt-3 text-sm text-ink/70">FR</p>
        <p className="mt-2 max-w-2xl text-base font-semibold text-brown sm:text-lg">
          Un accompagnement naturel pour elle, pour lui, et pour vous deux.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:grid-cols-4 sm:gap-5">
          {products.map((product) => {
            const content = categoryContent[product.handle];
            if (!content) return null;
            return (
              <Link
                key={product.id}
                href={`/products/${product.handle}`}
                className="group relative block aspect-[3/4] overflow-hidden rounded-2xl bg-cream"
              >
                <Image
                  src={content.image}
                  alt={content.title}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-medium text-ink shadow-sm">
                  {content.title}
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
