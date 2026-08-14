"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { SearchIcon, UserIcon, CartIcon, MenuIcon } from "@/components/ui/Icons";
import { MegaMenuProducts } from "./MegaMenuProducts";
import { MegaMenuMoments } from "./MegaMenuMoments";
import { ResourcesMenu } from "./ResourcesMenu";
import { SearchOverlay } from "./SearchOverlay";
import { MobileNav } from "./MobileNav";
import { useCart } from "@/context/CartContext";

type MenuKey = "products" | "moments" | "resources" | null;

export function Header() {
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const { itemCount, openCart } = useCart();
  const pathname = usePathname();

  const closeAll = () => {
    setActiveMenu(null);
    setSearchOpen(false);
  };

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        closeAll();
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeAll();
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const setHeight = () => {
      document.documentElement.style.setProperty("--header-height", `${header.offsetHeight}px`);
    };
    setHeight();
    const observer = new ResizeObserver(setHeight);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  const toggleMenu = (key: MenuKey) => {
    setSearchOpen(false);
    setActiveMenu((prev) => (prev === key ? null : key));
  };

  const toggleSearch = () => {
    setActiveMenu(null);
    setSearchOpen((prev) => !prev);
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-ink/10 bg-white px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
      <div className="relative mx-auto flex w-full max-w-none items-center justify-between gap-4 px-2 py-6 sm:px-3 sm:py-6">
        {/* Left cluster */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setMobileNavOpen(true)}
            aria-label="Ouvrir le menu"
            className="rounded-full p-2 hover:bg-cream 2xl:hidden"
          >
            <MenuIcon />
          </button>

          <nav className="hidden items-center gap-2 2xl:flex">
            <button
              onClick={() => toggleMenu("products")}
              aria-expanded={activeMenu === "products"}
              className="shrink-0 whitespace-nowrap rounded-full px-2 py-2 text-xs font-semibold uppercase tracking-normal text-brown hover:bg-cream"
            >
              Nos Produits
            </button>
            <button
              onClick={() => toggleMenu("moments")}
              aria-expanded={activeMenu === "moments"}
              className="shrink-0 whitespace-nowrap rounded-full px-2 py-2 text-xs font-semibold uppercase tracking-normal text-brown hover:bg-cream"
            >
              Moments de Vie
            </button>
            <div className="relative">
              <button
                onClick={() => toggleMenu("resources")}
                aria-expanded={activeMenu === "resources"}
                className="shrink-0 whitespace-nowrap rounded-full px-2 py-2 text-xs font-semibold uppercase tracking-normal text-brown hover:bg-cream"
              >
                Ressources
              </button>
              {activeMenu === "resources" && (
                <ResourcesMenu onNavigate={closeAll} />
              )}
            </div>
            <Link
              href="/collections/best-sellers"
              className="shrink-0 whitespace-nowrap rounded-none bg-[#e0f2fe] px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-ink"
            >
              Promo &minus;50%
            </Link>
          </nav>
        </div>

        {/* Center logo — absolutely centered on the header, independent of left/right content widths */}
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.location.reload();
            }
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl"
          style={{
            fontFamily: "var(--font-logo)",
            fontWeight: 600,
            fontStyle: "normal",
            letterSpacing: "-0.03em",
            wordSpacing: "0.15em",
            color: "#2B1008",
            fontVariationSettings: '"SOFT" 60, "WONK" 0, "opsz" 144',
          }}
        >
          Biofert Maroc
          <span
            style={{
              display: "inline-block",
              fontStyle: "italic",
              transform: "skew(-12deg)",
              marginLeft: "0.15em",
            }}
          >
            !
          </span>
        </Link>

        {/* Right cluster */}
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="hidden md:inline-flex">
            <Button href="/quiz" variant="primary" size="sm">
              Bilan personnalisé
            </Button>
          </div>
          <button
            onClick={toggleSearch}
            aria-label="Rechercher"
            aria-expanded={searchOpen}
            className="rounded-full p-2 hover:bg-cream"
          >
            <SearchIcon />
          </button>
          <Link href="/account" aria-label="Mon compte" className="hidden rounded-full p-2 hover:bg-cream sm:inline-flex">
            <UserIcon />
          </Link>
          <button
            onClick={openCart}
            aria-label={`Ouvrir le panier, ${itemCount} articles`}
            className="relative rounded-full p-2 hover:bg-cream"
          >
            <CartIcon size={22} />
            {itemCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-semibold text-white">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {activeMenu === "products" && <MegaMenuProducts onNavigate={closeAll} />}
      {activeMenu === "moments" && <MegaMenuMoments onNavigate={closeAll} />}
      {searchOpen && <SearchOverlay onClose={closeAll} />}

      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </header>
  );
}
