"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { StarRating } from "@/components/ui/StarRating";
import { AddToCartButton } from "./AddToCartButton";
import type { Product } from "@/lib/types";

export function StickyBuyBar({ product }: { product: Product }) {
  const [visible, setVisible] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: "-96px 0px 0px 0px" }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const variant = product.variants[0];

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" />
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-white/95 backdrop-blur transition-transform duration-300 sm:top-[73px] sm:bottom-auto ${
          visible ? "translate-y-0" : "translate-y-full sm:-translate-y-full"
        }`}
      >
        <div className="mx-auto flex max-w-[1360px] items-center gap-4 px-5 py-3 sm:px-8 lg:px-12">
          <div className="relative hidden h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-cream sm:block">
            <Image src={product.featuredImage.src} alt="" fill sizes="48px" className="object-cover" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{product.title}</p>
            <StarRating rating={product.rating} reviewCount={product.reviewCount} />
          </div>
          <span className="hidden text-sm font-semibold sm:block">
            ${variant.price.amount.toFixed(2)}
          </span>
          <div className="w-40 shrink-0">
            <AddToCartButton product={product} variant={variant} />
          </div>
        </div>
      </div>
    </>
  );
}
