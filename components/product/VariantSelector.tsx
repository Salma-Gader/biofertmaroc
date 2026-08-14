import { CheckIcon } from "@/components/ui/Icons";
import { formatMoney } from "./ProductPrice";
import type { ProductVariant } from "@/lib/types";

function percentOff(price: number, compareAt?: number) {
  if (!compareAt || compareAt <= price) return 0;
  return Math.round(((compareAt - price) / compareAt) * 100);
}

export function VariantSelector({
  variants,
  selectedId,
  onSelect,
}: {
  variants: ProductVariant[];
  selectedId: string;
  onSelect: (variantId: string) => void;
}) {
  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="mb-1 text-xs font-semibold uppercase tracking-wide text-ink/50">
        Option d&apos;achat
      </legend>
      {variants.map((variant) => {
        const isSubscription = variant.title.toLowerCase().includes("subscription");
        const selected = variant.id === selectedId;
        const discount = percentOff(variant.price.amount, variant.compareAtPrice?.amount);

        return (
          <label
            key={variant.id}
            className={`flex cursor-pointer items-center justify-between gap-3 rounded-2xl border px-4 py-3 transition-colors ${
              selected ? "border-ink bg-cream" : "border-ink/15 hover:border-ink/40"
            }`}
          >
            <span className="flex items-center gap-3">
              <input
                type="radio"
                name="variant"
                value={variant.id}
                checked={selected}
                onChange={() => onSelect(variant.id)}
                className="h-4 w-4 accent-ink"
              />
              <span>
                <span className="block text-sm font-medium">{variant.title}</span>
                {isSubscription && (
                  <span className="mt-0.5 flex items-center gap-1 text-xs text-lime-dark">
                    <CheckIcon /> Le plus économique
                  </span>
                )}
              </span>
            </span>
            <span className="text-right">
              <span className="block text-sm font-semibold">
                {formatMoney(variant.price)}
              </span>
              {discount > 0 && (
                <span className="text-xs text-terracotta">-{discount}%</span>
              )}
            </span>
          </label>
        );
      })}
    </fieldset>
  );
}
