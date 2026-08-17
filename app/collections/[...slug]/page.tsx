import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CollectionHeader } from "@/components/collection/CollectionHeader";
import { CollectionView } from "@/components/collection/CollectionView";
import { Container } from "@/components/ui/Container";
import { getCollectionByHandle } from "@/lib/shopify/api";

// Rendered on-demand per request (no build-time Shopify calls), so a
// missing/invalid Storefront token never breaks `next build`.
export const dynamicParams = true;

function resolveHandle(slug: string[]) {
  return slug[slug.length - 1];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const result = await getCollectionByHandle(resolveHandle(slug)).catch(() => null);
  if (!result) return {};
  return {
    title: result.collection.title,
    description: result.collection.description,
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const result = await getCollectionByHandle(resolveHandle(slug));
  if (!result) notFound();

  const { collection, products } = result;

  return (
    <>
      <CollectionHeader
        title={collection.title}
        description={collection.description}
        count={products.length}
      />
      <Container className="py-12 sm:py-16">
        <CollectionView products={products} />
      </Container>
    </>
  );
}
