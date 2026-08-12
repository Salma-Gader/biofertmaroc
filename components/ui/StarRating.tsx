import { useId } from "react";

function Star({ fill, id }: { fill: number; id: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" aria-hidden="true">
      <defs>
        <clipPath id={id}>
          <rect x="0" y="0" width={20 * fill} height="20" />
        </clipPath>
      </defs>
      <path
        d="M10 1.5l2.59 5.25 5.79.84-4.19 4.08.99 5.77L10 14.7l-5.18 2.72.99-5.77L1.62 7.6l5.79-.84L10 1.5z"
        fill="none"
        stroke="var(--terracotta)"
        strokeWidth="1"
      />
      <path
        d="M10 1.5l2.59 5.25 5.79.84-4.19 4.08.99 5.77L10 14.7l-5.18 2.72.99-5.77L1.62 7.6l5.79-.84L10 1.5z"
        fill="var(--terracotta)"
        clipPath={`url(#${id})`}
      />
    </svg>
  );
}

export function StarRating({
  rating,
  reviewCount,
  size = "sm",
}: {
  rating: number;
  reviewCount?: number;
  size?: "sm" | "md";
}) {
  const uid = useId();
  const stars = [0, 1, 2, 3, 4].map((i) => Math.min(1, Math.max(0, rating - i)));
  return (
    <div
      className={`inline-flex items-center gap-1.5 ${size === "md" ? "text-sm" : "text-xs"}`}
      aria-label={`Rated ${rating} out of 5${reviewCount ? ` from ${reviewCount} reviews` : ""}`}
    >
      <span className="flex items-center gap-0.5" aria-hidden="true">
        {stars.map((fill, i) => (
          <Star key={i} fill={fill} id={`star-clip-${uid}-${i}`} />
        ))}
      </span>
      {reviewCount !== undefined && (
        <span className="text-ink/60">({reviewCount})</span>
      )}
    </div>
  );
}
