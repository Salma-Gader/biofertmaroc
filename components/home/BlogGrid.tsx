import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
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
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href="/blog" variant="outline">
            View all guides
          </Button>
        </div>
      </Container>
    </section>
  );
}
