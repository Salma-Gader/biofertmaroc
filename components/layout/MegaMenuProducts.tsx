"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { productMegaMenu } from "@/lib/site-config";

export function MegaMenuProducts({ onNavigate }: { onNavigate: () => void }) {
  const [active, setActive] = useState(productMegaMenu[0].label);
  const activeCategory =
    productMegaMenu.find((c) => c.label === active) ?? productMegaMenu[0];

  return (
    <div className="border-t border-ink/10 bg-white shadow-lg">
      <Container className="grid grid-cols-[220px_1fr] gap-10 py-8">
        <ul className="flex flex-col gap-1 border-r border-ink/10 pr-6">
          {productMegaMenu.map((category) => (
            <li key={category.label}>
              <button
                onMouseEnter={() => setActive(category.label)}
                onFocus={() => setActive(category.label)}
                className={`w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                  active === category.label
                    ? "bg-cream text-ink"
                    : "text-ink/70 hover:bg-cream/60"
                }`}
              >
                <Link href={category.href} onClick={onNavigate}>
                  {category.label}
                </Link>
              </button>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-[1fr_auto] gap-10">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink/50">
              {activeCategory.label}
            </p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
              {activeCategory.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onNavigate}
                    className="text-sm text-ink/80 hover:text-ink hover:underline underline-offset-4"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4">
            {["/placeholders/lifestyle-1.svg", "/placeholders/lifestyle-6.svg"].map(
              (src) => (
                <Link
                  key={src}
                  href={activeCategory.href}
                  onClick={onNavigate}
                  className="block h-40 w-32 shrink-0 overflow-hidden rounded-xl bg-cream"
                >
                  <Image
                    src={src}
                    alt=""
                    width={128}
                    height={160}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </Link>
              )
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
