import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CollectionHeader } from "@/components/collection/CollectionHeader";
import { CollectionView } from "@/components/collection/CollectionView";
import { Container } from "@/components/ui/Container";
import { collections, getProductsForCollection } from "@/lib/mock-data";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: [c.handle] }));
}

function resolveCollection(slug: string[]) {
  return (
    collections.find((c) => c.handle === slug[slug.length - 1]) ??
    collections.find((c) => c.handle === slug[0])
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = resolveCollection(slug);
  if (!collection) return {};
  return {
    title: collection.title,
    description: collection.description,
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const collection = resolveCollection(slug);
  if (!collection) notFound();

  const products = getProductsForCollection(collection.handle);

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
