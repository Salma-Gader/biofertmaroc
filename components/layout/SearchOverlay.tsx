"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SearchIcon, CloseXIcon } from "@/components/ui/Icons";
import { products } from "@/lib/mock-data";
import { blogPosts } from "@/lib/mock-data";

export function SearchOverlay({
  onClose,
}: {
  onClose: () => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const featured = products.slice(0, 4);
  const articles = blogPosts.slice(0, 2);

  return (
    <div className="absolute inset-x-0 top-full z-40 border-t border-ink/10 bg-white shadow-lg">
      <Container className="py-6">
        <div className="mb-6 flex items-center gap-3 border-b border-ink/15 pb-3">
          <SearchIcon className="text-ink/50" />
          <input
            ref={inputRef}
            type="search"
            placeholder="Search products, guides…"
            className="flex-1 bg-transparent text-lg outline-none placeholder:text-ink/40"
          />
          <button onClick={onClose} aria-label="Close search" className="rounded-full p-2 hover:bg-cream">
            <CloseXIcon />
          </button>
        </div>

        <div className="grid gap-8 sm:grid-cols-[2fr_1fr]">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink/50">
              Selection of the moment
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {featured.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.handle}`}
                  onClick={onClose}
                  className="group"
                >
                  <div className="aspect-square overflow-hidden rounded-xl bg-cream">
                    <Image
                      src={product.featuredImage.src}
                      alt={product.featuredImage.alt}
                      width={200}
                      height={200}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-2 text-xs font-medium text-ink/80">{product.title}</p>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink/50">
              Related articles
            </p>
            <ul className="flex flex-col gap-3">
              {articles.map((post) => (
                <li key={post.id}>
                  <Link
                    href={`/blog/${post.handle}`}
                    onClick={onClose}
                    className="text-sm text-ink/80 hover:text-ink hover:underline underline-offset-4"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
