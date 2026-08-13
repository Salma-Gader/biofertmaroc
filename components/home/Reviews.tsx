"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { StarRating } from "@/components/ui/StarRating";
import { ArrowIcon } from "@/components/ui/Icons";
import { reviews } from "@/lib/mock-data";

const aggregates = [
  { source: "BellaFert", rating: 4.8, count: 1247 },
  { source: "FertiMen", rating: 4.7, count: 863 },
  { source: "Pack Couple", rating: 4.9, count: 987 },
];

export function Reviews() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="py-16 sm:py-20" style={{ backgroundColor: "#ffffff" }}>
      <Container>
        <div className="mb-10 flex flex-col items-center gap-6 text-center">
          <Heading size="section">+2 000 avis vérifiés, note 4,8/5</Heading>
          <div className="flex flex-wrap justify-center gap-8">
            {aggregates.map((a) => (
              <div key={a.source} className="flex flex-col items-center gap-1">
                <span className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                  {a.source}
                </span>
                <StarRating rating={a.rating} />
                <span className="text-xs text-ink/60">{a.count.toLocaleString()} reviews</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div
            ref={scrollerRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2"
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex w-72 shrink-0 snap-start flex-col gap-3 rounded-2xl p-5 sm:w-80"
                style={{ backgroundColor: "#f7f3f2" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-semibold text-white"
                    style={{ backgroundColor: review.avatarColor }}
                    aria-hidden="true"
                  >
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{review.author}</p>
                    <StarRating rating={review.rating} />
                  </div>
                </div>
                <h3 className="font-display text-base font-semibold">{review.title}</h3>
                <p className="text-sm leading-relaxed text-ink/70">{review.body}</p>
                <span className="text-xs text-ink/40">via {review.source}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-end gap-2">
            <button
              onClick={() => scrollBy("left")}
              aria-label="Previous reviews"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 bg-white hover:bg-ink hover:text-cream"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              onClick={() => scrollBy("right")}
              aria-label="Next reviews"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 bg-white hover:bg-ink hover:text-cream"
            >
              <ArrowIcon />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
