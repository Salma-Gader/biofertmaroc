"use client";

import { useRef } from "react";
import { ProductCard } from "./ProductCard";
import { ArrowIcon } from "@/components/ui/Icons";
import type { Product } from "@/lib/types";

export function ProductCarousel({ products }: { products: Product[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2"
      >
        {products.map((product) => (
          <div key={product.id} className="w-64 shrink-0 snap-start sm:w-72">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <button
        onClick={() => scrollBy("right")}
        aria-label="Next products"
        className="absolute right-0 top-[calc(50%-1.5rem)] hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-soft transition-colors hover:bg-ink hover:text-cream sm:flex"
      >
        <ArrowIcon direction="right" />
      </button>
    </div>
  );
}
