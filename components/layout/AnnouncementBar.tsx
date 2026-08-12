"use client";

import { useEffect, useState } from "react";

const messages = [
  (
    <>
      Nouveau !{" "}
      <strong className="font-semibold">Hydra Mama</strong> : 4 électrolytes
      pour soutenir l&apos;hydratation 🍯💧💦
    </>
  ),
  (
    <>
      🎁 -15% dès 3 produits achetés -{" "}
      <em className="italic">
        Offre valable hors lots et packs jusqu&apos;au 09 août
      </em>
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
