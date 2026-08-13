"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ArrowIcon } from "@/components/ui/Icons";

interface HeroSlide {
  id: string;
  title: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  image: string;
  badge?: string;
}

const slides: HeroSlide[] = [
  {
    id: "slide-1",
    title: "Devenir Parents.",
    description: "Boostez votre fertilité naturellement.",
    primaryCtaLabel: "Découvrir BellaFert",
    primaryCtaHref: "/products/bellafert",
    secondaryCtaLabel: "Découvrir FertiMen",
    secondaryCtaHref: "/products/fertimen",
    image: "/header/ChatGPT Image 13 أغسطس 2026، 01_35_55 م (3).png",
    badge: "-50%",
  },
  {
    id: "slide-2",
    title: "Le Duo Fertilité",
    description: "BellaFert + FertiMen, pour les deux partenaires — livraison gratuite.",
    primaryCtaLabel: "Voir le Pack Couple",
    primaryCtaHref: "/products/pack-couple",
    secondaryCtaLabel: "En savoir plus",
    secondaryCtaHref: "/products/pack-couple",
    image: "/header/ChatGPT Image 13 أغسطس 2026، 01_47_10 م.png",
  },
];

function HeroPillButton({
  href,
  variant,
  children,
}: {
  href: string;
  variant: "accent" | "outline";
  children: React.ReactNode;
}) {
  const styles =
    variant === "accent"
      ? "bg-[#e0f2fe] text-ink hover:bg-[#c9e7fb]"
      : "bg-white text-ink hover:bg-cream";

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-4 rounded-full py-1.5 pl-6 pr-1.5 text-sm font-semibold transition-colors ${styles}`}
    >
      {children}
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-white">
        <ArrowIcon size={14} />
      </span>
    </Link>
  );
}

export function Hero() {
  const [index, setIndex] = useState(0);

  const goTo = useCallback((i: number) => {
    setIndex((i + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => goTo(index + 1), 6000);
    return () => clearInterval(timer);
  }, [index, goTo]);

  const slide = slides[index];

  return (
    <section className="relative h-[calc(100dvh-7.5rem)] w-full overflow-hidden">
      {slides.map((s, i) => (
        <Image
          key={s.id}
          src={s.image}
          alt=""
          fill
          priority={i === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink/25 via-ink/5 to-transparent"
      />

      {slide.badge && (
        <span className="absolute right-6 top-6 flex h-16 w-16 items-center justify-center rounded-full bg-navy font-display text-lg font-bold text-white sm:right-10 sm:top-10">
          {slide.badge}
        </span>
      )}

      <div className="relative flex h-full items-center">
        <div className="ml-20 mr-5 flex max-w-lg flex-col items-start gap-5 sm:ml-24 sm:mr-10 lg:ml-28 lg:mr-16">
          <h1 className="font-display text-[2.25rem] font-semibold leading-[1.08] text-white sm:text-[3rem] lg:text-[3.5rem]">
            {slide.title}
          </h1>
          <p className="text-base text-white/90">{slide.description}</p>
          <div className="flex flex-wrap items-center gap-3">
            <HeroPillButton href={slide.primaryCtaHref} variant="accent">
              {slide.primaryCtaLabel}
            </HeroPillButton>
            <HeroPillButton href={slide.secondaryCtaHref} variant="outline">
              {slide.secondaryCtaLabel}
            </HeroPillButton>
          </div>
        </div>
      </div>

      <button
        onClick={() => goTo(index - 1)}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-white transition-opacity hover:opacity-70 sm:left-6"
      >
        <ArrowIcon direction="left" size={20} />
      </button>
      <button
        onClick={() => goTo(index + 1)}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-white transition-opacity hover:opacity-70 sm:right-6"
      >
        <ArrowIcon size={20} />
      </button>

      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2 sm:bottom-8">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
