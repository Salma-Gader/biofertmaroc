import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { blogPosts } from "@/lib/mock-data";

export function BlogGrid() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <Heading size="section" className="mb-10 text-center">
          Our Essential Guides
        </Heading>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.handle}`} className="group flex flex-col gap-3">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-cream">
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink">
                  {post.category}
                </span>
                <span className="absolute bottom-3 right-3 rounded-full bg-ink/80 px-3 py-1 text-[11px] font-medium text-cream">
                  {post.readingTime}
                </span>
              </div>
              <h3 className="font-display text-base font-semibold leading-snug">
                {post.title}
              </h3>
              <p className="text-xs text-ink/60">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
