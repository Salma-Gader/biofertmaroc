"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProductImage } from "@/lib/types";

export function ProductGallery({ images }: { images: ProductImage[] }) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  return (
    <div className="flex flex-col gap-4 sm:flex-row-reverse lg:sticky lg:top-24 lg:self-start">
      <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-cream">
        <Image
          src={current.src}
          alt={current.alt}
          fill
          priority
          sizes="(min-width: 1024px) 44vw, 100vw"
          className="object-cover"
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-3 sm:flex-col">
          {images.map((image, i) => (
            <button
              key={image.id}
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              aria-current={i === active}
              className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-cream ring-1 transition-all ${
                i === active ? "ring-2 ring-ink" : "ring-ink/10 hover:ring-ink/30"
              }`}
            >
              <Image src={image.src} alt="" fill sizes="64px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
