"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { ProductCarousel } from "@/components/product/ProductCarousel";
import type { Product } from "@/lib/types";

const tabs = [
  { label: "Best sellers", tag: "populaire" },
  { label: "Elle", tag: "femme" },
  { label: "Lui", tag: "homme" },
  { label: "Duo", tag: "duo" },
  { label: "Nos essentiels", tag: "essentiels" },
];

export function BestSellers({ products }: { products: Product[] }) {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  const filtered = useMemo(() => {
    const tab = tabs.find((t) => t.label === activeTab);
    if (!tab?.tag) return products;
    return products.filter((p) => p.tags.includes(tab.tag as string));
  }, [activeTab, products]);

  return (
    <section className="bg-white py-10 sm:py-20">
      <Container>
        <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Heading size="section">Best sellers</Heading>
          <div className="no-scrollbar flex gap-2 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === tab.label
                    ? "border-blue-light bg-blue-light text-ink"
                    : "border-ink/20 bg-white text-ink/70 hover:bg-cream-dark"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <ProductCarousel products={filtered} />
      </Container>
    </section>
  );
}
