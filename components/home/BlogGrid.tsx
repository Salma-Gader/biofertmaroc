"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { ArrowIcon } from "@/components/ui/Icons";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { blogPosts } from "@/lib/mock-data";

export function BlogGrid() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-10 sm:py-20">
      <Container>
        <Heading size="section" className="mb-10 text-center">
          Nos Guides Essentiels
        </Heading>
        <div className="relative">
          <div
            ref={scrollerRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
          >
            {blogPosts.map((post) => (
              <div key={post.id} className="w-64 shrink-0 snap-start sm:w-72 lg:w-80">
                <BlogPostCard post={post} />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollBy("left")}
            aria-label="Guides précédents"
            className="absolute left-0 top-[38%] z-10 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ink/10 bg-white shadow-md hover:bg-ink hover:text-cream lg:flex"
            style={{ width: 44, height: 44 }}
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy("right")}
            aria-label="Guides suivants"
            className="absolute right-0 top-[38%] z-10 hidden -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-ink/10 bg-white shadow-md hover:bg-ink hover:text-cream lg:flex"
            style={{ width: 44, height: 44 }}
          >
            <ArrowIcon />
          </button>
        </div>
        <div className="mt-10 flex justify-center">
          <Button href="/blog" variant="outline">
            Voir tous les guides
          </Button>
        </div>
      </Container>
    </section>
  );
}
