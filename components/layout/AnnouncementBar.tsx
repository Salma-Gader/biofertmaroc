"use client";

import { useEffect, useState } from "react";

const messages = [
  (
    <>
      🚚 Livraison en 24–48h partout au Maroc — Paiement à la livraison
      disponible
    </>
  ),
  (
    <>
      🎁 -50% sur <strong className="font-semibold">BellaFert</strong> &{" "}
      <strong className="font-semibold">FertiMen</strong> — Satisfait ou
      remboursé
    </>
  ),
];

export function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-pale-yellow py-2.5 text-ink">
      <p className="px-4 text-center text-[11px] font-normal tracking-wide sm:text-xs">
        {messages[index]}
      </p>
    </div>
  );
}
