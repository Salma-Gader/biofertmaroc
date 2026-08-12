"use client";

import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/Button";
import type { Product, ProductVariant } from "@/lib/types";

export function AddToCartButton({
  product,
  variant,
  className = "",
}: {
  product: Product;
  variant: ProductVariant;
  className?: string;
}) {
  const { addItem } = useCart();

  return (
    <Button
      variant="primary"
      size="lg"
      className={`w-full ${className}`}
      onClick={() => addItem(product, variant)}
      disabled={!variant.available}
    >
      {variant.available ? "Add to Cart" : "Sold Out"}
    </Button>
  );
}
