/**
 * Server-only read functions. Import these from Server Components only
 * (never from a "use client" file) — see the note at the top of client.ts.
 */
import { shopifyFetch } from "./client";
import {
  GET_COLLECTION_BY_HANDLE_QUERY,
  GET_COLLECTIONS_QUERY,
  GET_PRODUCT_BY_HANDLE_QUERY,
  GET_PRODUCT_RECOMMENDATIONS_QUERY,
  GET_PRODUCTS_QUERY,
  SEARCH_PRODUCTS_QUERY,
} from "./queries";
import { mapShopifyCollection, mapShopifyProduct } from "./mappers";
import type { ShopifyCollection, ShopifyProduct } from "./types";
import type { Collection, Product } from "@/lib/types";

/**
 * Next.js cache tags for on-demand invalidation via `revalidateTag()`.
 * Invalidated by the Shopify webhook handler in
 * `app/api/webhooks/shopify/route.ts` — keep these two files in sync if
 * either tag name changes.
 */
export const SHOPIFY_PRODUCT_TAG = "shopify-products";
export const SHOPIFY_COLLECTION_TAG = "shopify-collections";

export async function getProducts(options?: { first?: number; query?: string }): Promise<Product[]> {
  const data = await shopifyFetch<{ products: { edges: { node: ShopifyProduct }[] } }>(
    GET_PRODUCTS_QUERY,
    { first: options?.first ?? 50, query: options?.query },
    60,
    [SHOPIFY_PRODUCT_TAG]
  );
  return data.products.edges.map(({ node }) => mapShopifyProduct(node));
}

export async function getProductByHandle(handle: string): Promise<Product | null> {
  const data = await shopifyFetch<{ product: ShopifyProduct | null }>(
    GET_PRODUCT_BY_HANDLE_QUERY,
    { handle },
    60,
    [SHOPIFY_PRODUCT_TAG]
  );
  return data.product ? mapShopifyProduct(data.product) : null;
}

export async function getProductRecommendations(productId: string): Promise<Product[]> {
  const data = await shopifyFetch<{ productRecommendations: ShopifyProduct[] | null }>(
    GET_PRODUCT_RECOMMENDATIONS_QUERY,
    { productId },
    60,
    [SHOPIFY_PRODUCT_TAG]
  );
  return (data.productRecommendations ?? []).map((product) => mapShopifyProduct(product));
}

export async function searchProducts(query: string, first = 8): Promise<Product[]> {
  if (!query.trim()) return [];
  const data = await shopifyFetch<{ products: { edges: { node: ShopifyProduct }[] } }>(
    SEARCH_PRODUCTS_QUERY,
    { query, first },
    60,
    [SHOPIFY_PRODUCT_TAG]
  );
  return data.products.edges.map(({ node }) => mapShopifyProduct(node));
}

export async function getCollections(first = 50): Promise<Collection[]> {
  const data = await shopifyFetch<{
    collections: { edges: { node: Omit<ShopifyCollection, "products"> }[] };
  }>(GET_COLLECTIONS_QUERY, { first }, 60, [SHOPIFY_COLLECTION_TAG]);
  return data.collections.edges.map(({ node }) => ({
    id: node.id,
    handle: node.handle,
    title: node.title,
    description: node.description || undefined,
    productIds: [],
  }));
}

export async function getCollectionByHandle(
  handle: string,
  first = 50
): Promise<{ collection: Collection; products: Product[] } | null> {
  // Tagged with both: this query embeds full product data (title, price,
  // images) alongside the collection itself, so a product-only edit must
  // invalidate collection pages too, not just the product page.
  const data = await shopifyFetch<{ collection: ShopifyCollection | null }>(
    GET_COLLECTION_BY_HANDLE_QUERY,
    { handle, first },
    60,
    [SHOPIFY_COLLECTION_TAG, SHOPIFY_PRODUCT_TAG]
  );
  return data.collection ? mapShopifyCollection(data.collection) : null;
}
