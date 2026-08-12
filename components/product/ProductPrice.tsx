import type { Money } from "@/lib/types";

function format(money: Money) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: money.currencyCode,
    minimumFractionDigits: money.amount % 1 === 0 ? 0 : 2,
  }).format(money.amount);
}

export function ProductPrice({
  price,
  compareAtPrice,
  from = false,
  size = "md",
}: {
  price: Money;
  compareAtPrice?: Money;
  from?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const sizeStyles = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-2xl",
  }[size];

  return (
    <div className={`flex items-baseline gap-2 ${sizeStyles}`}>
      <span className="font-semibold text-ink">
        {from && <span className="mr-1 font-sans text-xs font-normal text-ink/60">dès</span>}
        {format(price)}
      </span>
      {compareAtPrice && compareAtPrice.amount > price.amount && (
        <span className="text-ink/40 line-through">{format(compareAtPrice)}</span>
      )}
    </div>
  );
}
