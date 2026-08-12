"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/Button";

const FREE_SHIPPING_THRESHOLD = 60;

export function CartDrawer() {
  const { lines, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } =
    useCart();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeCart();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeCart]);

  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  return (
    <>
      <div
        className={`fixed inset-0 z-[70] bg-ink/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`fixed right-0 top-0 z-[71] flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
          <h2 className="font-display text-xl font-semibold">
            Your Cart {itemCount > 0 && `(${itemCount})`}
          </h2>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="rounded-full p-2 hover:bg-cream"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="border-b border-ink/10 bg-pale-yellow px-5 py-3">
          <p className="text-xs font-medium text-ink">
            {remaining > 0 ? (
              <>
                You&apos;re <strong>${remaining.toFixed(2)}</strong> away from free
                shipping
              </>
            ) : (
              "You've unlocked free shipping!"
            )}
          </p>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/70">
            <div
              className="h-full rounded-full bg-lime-dark transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {lines.length === 0 ? (
            <p className="py-12 text-center text-sm text-ink/60">
              Your cart is empty.
            </p>
          ) : (
            <ul className="flex flex-col gap-4">
              {lines.map((line) => (
                <li key={line.lineId} className="flex gap-3">
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-cream">
                    <Image
                      src={line.image}
                      alt={line.productTitle}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="text-sm font-medium">{line.productTitle}</p>
                      <p className="text-xs text-ink/60">{line.variantTitle}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-ink/20">
                        <button
                          className="px-2 py-1 text-sm"
                          aria-label={`Decrease quantity of ${line.productTitle}`}
                          onClick={() => updateQuantity(line.lineId, line.quantity - 1)}
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-sm">{line.quantity}</span>
                        <button
                          className="px-2 py-1 text-sm"
                          aria-label={`Increase quantity of ${line.productTitle}`}
                          onClick={() => updateQuantity(line.lineId, line.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <span className="text-sm font-semibold">
                        ${(line.price.amount * line.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(line.lineId)}
                    aria-label={`Remove ${line.productTitle} from cart`}
                    className="self-start text-xs text-ink/40 hover:text-terracotta"
                  >
                    <CloseIcon small />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <div className="border-t border-ink/10 px-5 py-4">
            <label htmlFor="promo-code" className="sr-only">
              Promo code
            </label>
            <div className="mb-4 flex gap-2">
              <input
                id="promo-code"
                type="text"
                placeholder="Promo code"
                className="flex-1 rounded-full border border-ink/20 px-4 py-2 text-sm focus-visible:outline-2 focus-visible:outline-navy"
              />
              <Button variant="outline" size="sm">
                Apply
              </Button>
            </div>
            <div className="mb-4 flex items-center justify-between text-sm">
              <span className="text-ink/60">Subtotal</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            <Button variant="primary" size="lg" className="w-full">
              Checkout
            </Button>
            <p className="mt-2 text-center text-[11px] text-ink/50">
              Taxes and shipping calculated at checkout.
            </p>
          </div>
        )}
      </aside>
    </>
  );
}

function CloseIcon({ small }: { small?: boolean }) {
  const size = small ? 14 : 20;
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M4 4l12 12M16 4L4 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
