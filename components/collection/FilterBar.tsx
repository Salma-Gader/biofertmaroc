"use client";

type SortKey = "featured" | "price-asc" | "price-desc" | "rating";

export function FilterBar({
  useCases,
  activeUseCase,
  onUseCaseChange,
  sort,
  onSortChange,
}: {
  useCases: string[];
  activeUseCase: string | null;
  onUseCaseChange: (useCase: string | null) => void;
  sort: SortKey;
  onSortChange: (sort: SortKey) => void;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink/50">
          Use case
        </h2>
        <ul className="flex flex-col gap-1">
          <li>
            <button
              onClick={() => onUseCaseChange(null)}
              className={`w-full rounded-lg px-2 py-1.5 text-left text-sm ${
                activeUseCase === null ? "bg-cream font-medium text-ink" : "text-ink/70 hover:bg-cream/60"
              }`}
            >
              All
            </button>
          </li>
          {useCases.map((useCase) => (
            <li key={useCase}>
              <button
                onClick={() => onUseCaseChange(useCase)}
                className={`w-full rounded-lg px-2 py-1.5 text-left text-sm ${
                  activeUseCase === useCase
                    ? "bg-cream font-medium text-ink"
                    : "text-ink/70 hover:bg-cream/60"
                }`}
              >
                {useCase}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink/50">
          Sort by
        </h2>
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value as SortKey)}
          className="w-full rounded-lg border border-ink/15 bg-white px-3 py-2 text-sm"
        >
          <option value="featured">Featured</option>
          <option value="price-asc">Price: low to high</option>
          <option value="price-desc">Price: high to low</option>
          <option value="rating">Top rated</option>
        </select>
      </div>
    </div>
  );
}
