import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Values } from "@/components/home/Values";
import { TrustBadges } from "@/components/home/TrustBadges";

export const metadata: Metadata = {
  title: "À Propos",
  description:
    "L'histoire de BioFertMaroc : des compléments naturels pensés pour accompagner la fertilité, pour elle, pour lui et pour vous deux.",
};

export default function AboutPage() {
  return (
    <>
      <div className="bg-cream py-12 sm:py-16">
        <Container className="flex flex-col items-center gap-3 text-center">
          <Heading as="h1" size="section">
            Notre Histoire
          </Heading>
          <p className="max-w-lg text-sm text-ink/70">
            Des compléments 100% naturels, pensés au Maroc pour accompagner chaque étape du
            parcours de fertilité — seul(e) ou à deux.
          </p>
        </Container>
      </div>

      <Container className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
          <Image
            src="/products/pack-couple.png"
            alt="Pack Couple BellaFert et FertiMen"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <Heading size="sub" className="mb-4">
            Pourquoi BioFertMaroc ?
          </Heading>
          <div className="flex flex-col gap-4 text-sm leading-relaxed text-ink/70">
            <p>
              BioFertMaroc est né d&apos;un constat simple : la fertilité concerne les deux
              partenaires, et pourtant l&apos;accompagnement masculin reste souvent oublié. Nous
              avons voulu créer des formules pensées spécifiquement pour elle et pour lui, à
              prendre seul(e) ou ensemble.
            </p>
            <p>
              Chaque produit — BellaFert, FertiMen, Ferti Power, PowerMen, SmokeClean Men, Relaxes
              Woman, CycleCare — est formulé à partir d&apos;actifs naturels, fabriqué dans des
              sites certifiés GMP, sans additifs artificiels.
            </p>
            <p>
              Nos protocoles sont pensés sur 3 mois, le temps que prend un cycle complet de
              maturation des ovules ou des spermatozoïdes. Pas de raccourci, juste de la
              régularité et des formules qui fonctionnent.
            </p>
          </div>
        </div>
      </Container>

      <Values />
      <TrustBadges />
    </>
  );
}
