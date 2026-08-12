"use client";

import Link from "next/link";
import { useState } from "react";
import { CloseXIcon, ChevronDownIcon } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import {
  productMegaMenu,
  resourcesMenu,
  momentTiles,
} from "@/lib/site-config";

export function MobileNav({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggle = (label: string) =>
    setOpenSection((prev) => (prev === label ? null : label));

  return (
    <>
      <div
        className={`fixed inset-0 z-[80] bg-ink/40 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`fixed left-0 top-0 z-[81] h-full w-full max-w-sm overflow-y-auto bg-white transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
          <span className="font-display text-lg font-semibold">Menu</span>
          <button onClick={onClose} aria-label="Close menu" className="rounded-full p-2 hover:bg-cream">
            <CloseXIcon />
          </button>
        </div>

        <nav className="flex flex-col gap-1 p-5">
          <MobileSection
            label="Shop"
            open={openSection === "Shop"}
            onToggle={() => toggle("Shop")}
          >
            {productMegaMenu.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                onClick={onClose}
                className="block py-2 text-sm text-ink/80"
              >
                {category.label}
              </Link>
            ))}
          </MobileSection>

          <MobileSection
            label="Life Moments"
            open={openSection === "Life Moments"}
            onToggle={() => toggle("Life Moments")}
          >
            {momentTiles.map((tile) => (
              <Link
                key={tile.href}
                href={tile.href}
                onClick={onClose}
                className="block py-2 text-sm text-ink/80"
              >
                {tile.label}
              </Link>
            ))}
          </MobileSection>

          <MobileSection
            label="Resources"
            open={openSection === "Resources"}
            onToggle={() => toggle("Resources")}
          >
            {resourcesMenu.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="block py-2 text-sm text-ink/80"
              >
                {link.label}
              </Link>
            ))}
          </MobileSection>

          <div className="mt-4 flex flex-col gap-3">
            <Button href="/collections/bundles" variant="accent" size="md" onClick={onClose}>
              Subscribe & Save 15%
            </Button>
            <Button href="/account" variant="outline" size="md" onClick={onClose}>
              Account
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}

function MobileSection({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-ink/10 py-1">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-3 text-left font-display text-base font-medium"
      >
        {label}
        <ChevronDownIcon
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <div className="pb-3 pl-2">{children}</div>}
    </div>
  );
}
