import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { ProductAccordions } from "@/components/product/ProductAccordions";
import { AskAboutProduct } from "@/components/product/AskAboutProduct";
import { StickyBuyBar } from "@/components/product/StickyBuyBar";
import { ProductCarousel } from "@/components/product/ProductCarousel";
import { TrustBadges } from "@/components/home/TrustBadges";
import { getProductByHandle, products } from "@/lib/mock-data";

export function generateStaticParams() {
  return products.map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;
  const product = getProductByHandle(handle);
  if (!product) return {};
  return {
    title: product.title,
    description: product.shortDescription,
    openGraph: {
      images: [{ url: product.featuredImage.src }],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const product = getProductByHandle(handle);
  if (!product) notFound();

  const related = products
    .filter((p) => p.id !== product.id && p.tags.some((tag) => product.tags.includes(tag)))
    .slice(0, 4);

  return (
    <>
      <StickyBuyBar product={product} />

      <Container className="py-10 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <ProductGallery images={product.images} />
          <ProductInfo product={product} />
        </div>
      </Container>

      <Container className="pb-10 sm:pb-14">
        <AskAboutProduct productTitle={product.title} />
      </Container>

      {related.length > 0 && (
        <Container className="pb-10 sm:pb-14">
          <Heading size="sub" className="mb-6">
            Complétez votre routine
          </Heading>
          <ProductCarousel products={related} />
        </Container>
      )}

      <Container className="pb-14 sm:pb-20">
        <Heading size="sub" className="mb-6">
          Bon à savoir
        </Heading>
        <ProductAccordions product={product} />
      </Container>

      <TrustBadges />
    </>
  );
}
