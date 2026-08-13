import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { blogPosts, getBlogPostByHandle } from "@/lib/mock-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ handle: post.handle }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;
  const post = getBlogPostByHandle(handle);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      images: [{ url: post.image.src }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const post = getBlogPostByHandle(handle);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);
  const formattedDate = new Date(post.date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <Container className="py-10 sm:py-14">
        <div className="mx-auto max-w-2xl text-center">
          <Link
            href="/blog"
            className="mb-6 inline-block text-xs font-medium uppercase tracking-wide text-ink/50 hover:text-ink"
          >
            ← Tous les guides
          </Link>
          <span className="mb-4 inline-block rounded-full bg-cream px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink">
            {post.category}
          </span>
          <Heading as="h1" size="section" className="mb-4">
            {post.title}
          </Heading>
          <p className="text-sm text-ink/60">
            {post.author} · {formattedDate} · {post.readingTime} de lecture
          </p>
        </div>

        <div className="relative mx-auto mt-10 aspect-[16/9] w-full max-w-3xl overflow-hidden rounded-3xl">
          <Image
            src={post.image.src}
            alt={post.image.alt}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            priority
            className="object-cover"
          />
        </div>

        <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-5">
          {post.content.map((paragraph, index) => (
            <p key={index} className="text-sm leading-relaxed text-ink/80">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>

      {related.length > 0 && (
        <Container className="border-t border-ink/10 py-14 sm:py-20">
          <Heading size="sub" className="mb-8 text-center">
            À lire aussi
          </Heading>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((relatedPost) => (
              <BlogPostCard key={relatedPost.id} post={relatedPost} />
            ))}
          </div>
        </Container>
      )}
    </>
  );
}
