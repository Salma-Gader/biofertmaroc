"use client";

import { useCart } from "@/context/CartContext";
import type { Product } from "@/lib/types";

export function QuickAddButton({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        addItem(product, product.variants[0]);
      }}
      className="shrink-0 rounded-full border border-ink bg-white px-3 py-1.5 text-xs font-semibold text-ink shadow-soft transition-colors hover:bg-ink hover:text-cream sm:px-5 sm:py-2 sm:text-sm"
      aria-label={`Ajouter ${product.title} au panier`}
    >
      Ajouter
    </button>
  );
}
