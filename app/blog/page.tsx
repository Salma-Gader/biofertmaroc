import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { blogPosts } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides on fertility, pregnancy, postpartum and menopause from the BioFertMaroc team.",
};

export default function BlogPage() {
  return (
    <>
      <div className="bg-pale-yellow py-12 sm:py-16">
        <Container className="flex flex-col items-center gap-3 text-center">
          <Heading as="h1" size="section">
            Our Essential Guides
          </Heading>
          <p className="max-w-lg text-sm text-ink/70">
            Fertility, pregnancy, postpartum and menopause — explained simply,
            backed by science.
          </p>
          <span className="text-xs font-medium uppercase tracking-wide text-ink/50">
            {blogPosts.length} {blogPosts.length === 1 ? "guide" : "guides"}
          </span>
        </Container>
      </div>

      <Container className="py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </Container>
    </>
  );
}
