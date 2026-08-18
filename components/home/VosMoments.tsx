import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import type { Product } from "@/lib/types";

const categoryContent: Record<string, { title: string; image: string }> = {
  bellafert: {
    title: "Fertilité Elle",
    image: "/placeholders/Katie-19.webp",
  },
  fertimen: {
    title: "Fertilité Lui",
    image: "/placeholders/acc6681798d84408f49df7075930f68d.jpg",
  },
  "pack-couple": {
    title: "Duo Fertilité",
    image: "/placeholders/JM_SHOOTING_CELINE-0620.webp",
  },
  "ferti-power": {
    title: "Vitalité Lui",
    image: "/placeholders/11271a6c6c5659120631072b7da58036.jpg",
  },
  powermen: {
    title: "Performance",
    image: "/placeholders/da4159e3377b9b7552fb4ef9e35a3da6.jpg",
  },
  "smokeclean-men": {
    title: "Détox",
    image: "/placeholders/893ad68020bb0ac7f38673363d0a7d9e.jpg",
  },
  "relaxes-woman": {
    title: "Sérénité Elle",
    image: "/placeholders/pexels-aliona-zueva-42707571-11554690.jpg",
  },
  cyclecare: {
    title: "Confort Cycle",
    image: "/placeholders/143d96aee1fec0c6151129078e6d985e.jpg",
  },
};

export function VosMoments({ products }: { products: Product[] }) {
  return (
    <section className="bg-pink-pale py-10 sm:py-20">
      <Container>
        <Heading as="h2" size="section">
          Nos catégories
        </Heading>
        <p className="mt-3 max-w-2xl text-base font-semibold text-brown sm:text-lg">
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
                className="group relative block aspect-square overflow-hidden rounded-lg bg-cream"
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
