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
      className="rounded-full border border-ink bg-white px-5 py-2 text-sm font-semibold text-ink shadow-soft transition-colors hover:bg-ink hover:text-cream"
      aria-label={`Ajouter ${product.title} au panier`}
    >
      Ajouter
    </button>
  );
}
