"use server";

/**
 * Server Actions for cart mutations. These are the only way the client-side
 * CartContext talks to Shopify: Next.js compiles each exported function
 * here into a POST endpoint and only ships a reference to the client
 * bundle, never this file's code or the Storefront token it uses via
 * shopifyFetch. This is what keeps SHOPIFY_STOREFRONT_ACCESS_TOKEN out of
 * the browser per the project's security requirements.
 */
import { shopifyFetch, ShopifyApiError } from "./client";
import {
  CART_CREATE_MUTATION,
  CART_LINES_ADD_MUTATION,
  CART_LINES_REMOVE_MUTATION,
  CART_LINES_UPDATE_MUTATION,
  GET_CART_QUERY,
} from "./queries";
import { mapShopifyCart } from "./mappers";
import type { ShopifyCart, ShopifyUserError } from "./types";

export type MappedCart = ReturnType<typeof mapShopifyCart>;

function assertNoUserErrors(userErrors: ShopifyUserError[]) {
  if (userErrors.length > 0) {
    throw new ShopifyApiError(userErrors.map((e) => e.message).join("; "));
  }
}

export async function getCartAction(cartId: string): Promise<MappedCart | null> {
  const data = await shopifyFetch<{ cart: ShopifyCart | null }>(
    GET_CART_QUERY,
    { cartId },
    false
  );
  return data.cart ? mapShopifyCart(data.cart) : null;
}

export async function createCartAction(
  variantId: string,
  quantity: number
): Promise<MappedCart> {
  const data = await shopifyFetch<{
    cartCreate: { cart: ShopifyCart | null; userErrors: ShopifyUserError[] };
  }>(
    CART_CREATE_MUTATION,
    { lines: [{ merchandiseId: variantId, quantity }] },
    false
  );
  assertNoUserErrors(data.cartCreate.userErrors);
  if (!data.cartCreate.cart) {
    throw new ShopifyApiError("Shopify did not return a cart.");
  }
  return mapShopifyCart(data.cartCreate.cart);
}

export async function addToCartAction(
  cartId: string,
  variantId: string,
  quantity: number
): Promise<MappedCart> {
  const data = await shopifyFetch<{
    cartLinesAdd: { cart: ShopifyCart | null; userErrors: ShopifyUserError[] };
  }>(
    CART_LINES_ADD_MUTATION,
    { cartId, lines: [{ merchandiseId: variantId, quantity }] },
    false
  );
  assertNoUserErrors(data.cartLinesAdd.userErrors);
  if (!data.cartLinesAdd.cart) {
    throw new ShopifyApiError("Shopify did not return a cart.");
  }
  return mapShopifyCart(data.cartLinesAdd.cart);
}

export async function updateCartLineAction(
  cartId: string,
  lineId: string,
  quantity: number
): Promise<MappedCart> {
  const data = await shopifyFetch<{
    cartLinesUpdate: { cart: ShopifyCart | null; userErrors: ShopifyUserError[] };
  }>(
    CART_LINES_UPDATE_MUTATION,
    { cartId, lines: [{ id: lineId, quantity }] },
    false
  );
  assertNoUserErrors(data.cartLinesUpdate.userErrors);
  if (!data.cartLinesUpdate.cart) {
    throw new ShopifyApiError("Shopify did not return a cart.");
  }
  return mapShopifyCart(data.cartLinesUpdate.cart);
}

export async function removeFromCartAction(
  cartId: string,
  lineId: string
): Promise<MappedCart> {
  const data = await shopifyFetch<{
    cartLinesRemove: { cart: ShopifyCart | null; userErrors: ShopifyUserError[] };
  }>(CART_LINES_REMOVE_MUTATION, { cartId, lineIds: [lineId] }, false);
  assertNoUserErrors(data.cartLinesRemove.userErrors);
  if (!data.cartLinesRemove.cart) {
    throw new ShopifyApiError("Shopify did not return a cart.");
  }
  return mapShopifyCart(data.cartLinesRemove.cart);
}
