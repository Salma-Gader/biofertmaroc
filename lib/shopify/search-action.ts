"use server";

import { searchProducts } from "./api";
import type { Product } from "@/lib/types";

export async function searchProductsAction(query: string): Promise<Product[]> {
  try {
    return await searchProducts(query, 8);
  } catch {
    // Search is a progressive enhancement — fail quietly to an empty
    // result set rather than breaking the search UI.
    return [];
  }
}
