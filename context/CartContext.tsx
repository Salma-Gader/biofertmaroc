"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import type { Money, Product, ProductVariant } from "@/lib/types";
import {
  addToCartAction,
  createCartAction,
  getCartAction,
  removeFromCartAction,
  updateCartLineAction,
} from "@/lib/shopify/cart-actions";

export interface CartLine {
  lineId: string;
  productHandle: string;
  productTitle: string;
  variantId: string;
  variantTitle: string;
  image: string;
  price: Money;
  quantity: number;
}

interface CartContextValue {
  lines: CartLine[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, variant: ProductVariant, quantity?: number) => void;
  removeItem: (lineId: string) => void;
  updateQuantity: (lineId: string, quantity: number) => void;
  subtotal: number;
  itemCount: number;
  /** Shopify's hosted checkout URL for the current cart, or null until a cart exists. */
  checkoutUrl: string | null;
  /** True while a cart mutation is in flight. */
  isLoading: boolean;
  /** Message from the last failed cart operation, if any. */
  error: string | null;
}

const CartContext = createContext<CartContextValue | null>(null);

const CART_ID_STORAGE_KEY = "biofertmaroc_shopify_cart_id";

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartId, setCartId] = useState<string | null>(null);
  const [lines, setLines] = useState<CartLine[]>([]);
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const [subtotal, setSubtotal] = useState(0);
  const [itemCount, setItemCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const applyCart = useCallback(
    (cart: { id: string; checkoutUrl: string; subtotal: number; itemCount: number; lines: CartLine[] } | null) => {
      if (!cart) {
        setCartId(null);
        setLines([]);
        setCheckoutUrl(null);
        setSubtotal(0);
        setItemCount(0);
        if (typeof window !== "undefined") {
          window.localStorage.removeItem(CART_ID_STORAGE_KEY);
        }
        return;
      }
      setCartId(cart.id);
      setLines(cart.lines);
      setCheckoutUrl(cart.checkoutUrl);
      setSubtotal(cart.subtotal);
      setItemCount(cart.itemCount);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(CART_ID_STORAGE_KEY, cart.id);
      }
    },
    []
  );

  // Hydrate an existing Shopify cart from localStorage on first mount so
  // the cart survives page refreshes.
  useEffect(() => {
    const storedId = window.localStorage.getItem(CART_ID_STORAGE_KEY);
    if (!storedId) return;
    getCartAction(storedId)
      .then((cart) => {
        // A null cart means it was completed or expired on Shopify's side.
        if (cart) applyCart(cart);
        else window.localStorage.removeItem(CART_ID_STORAGE_KEY);
      })
      .catch(() => {
        // Stale/invalid cart id — drop it silently and start fresh on next add.
        window.localStorage.removeItem(CART_ID_STORAGE_KEY);
      });
  }, [applyCart]);

  const addItem = useCallback(
    (product: Product, variant: ProductVariant, quantity = 1) => {
      setIsOpen(true);
      setIsLoading(true);
      setError(null);
      const run = cartId
        ? addToCartAction(cartId, variant.id, quantity)
        : createCartAction(variant.id, quantity);
      run
        .then(applyCart)
        .catch((err: unknown) => {
          setError(err instanceof Error ? err.message : "Impossible d'ajouter ce produit au panier.");
        })
        .finally(() => setIsLoading(false));
    },
    [cartId, applyCart]
  );

  const removeItem = useCallback(
    (lineId: string) => {
      if (!cartId) return;
      setIsLoading(true);
      setError(null);
      removeFromCartAction(cartId, lineId)
        .then(applyCart)
        .catch((err: unknown) => {
          setError(err instanceof Error ? err.message : "Impossible de retirer ce produit.");
        })
        .finally(() => setIsLoading(false));
    },
    [cartId, applyCart]
  );

  const updateQuantity = useCallback(
    (lineId: string, quantity: number) => {
      if (!cartId) return;
      setIsLoading(true);
      setError(null);
      const run =
        quantity <= 0
          ? removeFromCartAction(cartId, lineId)
          : updateCartLineAction(cartId, lineId, quantity);
      run
        .then(applyCart)
        .catch((err: unknown) => {
          setError(err instanceof Error ? err.message : "Impossible de mettre à jour la quantité.");
        })
        .finally(() => setIsLoading(false));
    },
    [cartId, applyCart]
  );

  const value = useMemo(
    () => ({
      lines,
      isOpen,
      openCart,
      closeCart,
      addItem,
      removeItem,
      updateQuantity,
      subtotal,
      itemCount,
      checkoutUrl,
      isLoading,
      error,
    }),
    [
      lines,
      isOpen,
      openCart,
      closeCart,
      addItem,
      removeItem,
      updateQuantity,
      subtotal,
      itemCount,
      checkoutUrl,
      isLoading,
      error,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
