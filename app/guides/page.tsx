import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { blogPosts, getBlogPostByHandle } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Nos guides sur la fertilité féminine, masculine et le parcours à deux, écrits par l'équipe BioFertMaroc.",
};

const guideSections = [
  {
    label: "Pour Elle",
    description: "Cycle, ovulation et équilibre hormonal.",
    handles: ["comprendre-cycle-ovulation", "sopk-fertilite-solutions"],
  },
  {
    label: "Pour Lui",
    description: "Fertilité masculine et habitudes qui comptent.",
    handles: ["fertilite-masculine-guide"],
  },
  {
    label: "Pour Vous Deux",
    description: "Nutrition, préconception et le protocole 3 mois.",
    handles: ["10-conseils-naturels-fertilite", "complements-preconception", "protocole-3-mois"],
  },
];

export default function GuidesPage() {
  return (
    <>
      <div className="bg-pale-yellow py-12 sm:py-16">
        <Container className="flex flex-col items-center gap-3 text-center">
          <Heading as="h1" size="section">
            Nos Guides
          </Heading>
          <p className="max-w-lg text-sm text-ink/70">
            Des conseils pratiques et naturels pour soutenir votre fertilité, seul(e) ou à deux —
            écrits par l&apos;équipe BioFertMaroc.
          </p>
          <span className="text-xs font-medium uppercase tracking-wide text-ink/50">
            {blogPosts.length} guides
          </span>
        </Container>
      </div>

      <Container className="flex flex-col gap-12 py-12 sm:gap-16 sm:py-16">
        {guideSections.map((section) => {
          const posts = section.handles
            .map((handle) => getBlogPostByHandle(handle))
            .filter((post): post is NonNullable<typeof post> => Boolean(post));
          if (posts.length === 0) return null;
          return (
            <div key={section.label}>
              <div className="mb-6 flex flex-col gap-1 sm:mb-8">
                <Heading as="h2" size="sub">
                  {section.label}
                </Heading>
                <p className="text-sm text-ink/60">{section.description}</p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          );
        })}
      </Container>
    </>
  );
}
