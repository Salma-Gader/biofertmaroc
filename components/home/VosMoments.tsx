import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { momentTiles } from "@/lib/site-config";

const frenchLabels = [
  "Projet bébé",
  "Grossesse",
  "Accouchement",
  "Post-partum",
  "Allaitement",
  "(Péri)ménopause",
  "Perte de grossesse",
  "Toutes les mamans",
];

export function VosMoments() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <h2 className="font-display text-4xl font-bold text-ink sm:text-5xl">
          Vos moments
        </h2>
        <p className="mt-3 text-sm text-ink/70">FR</p>
        <p className="mt-2 max-w-2xl text-base font-semibold text-brown sm:text-lg">
          Chaque étape de votre vie mérite un accompagnement qui vous
          ressemble.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:grid-cols-4 sm:gap-5">
          {momentTiles.map((tile, i) => (
            <Link
              key={tile.label}
              href={tile.href}
              className="group relative block aspect-[3/4] overflow-hidden rounded-2xl bg-cream"
            >
              <Image
                src={tile.image}
                alt=""
                width={400}
                height={533}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-medium text-ink shadow-sm">
                {frenchLabels[i] ?? tile.label}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
