import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { momentTiles } from "@/lib/site-config";

export function MegaMenuMoments({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="border-t border-ink/10 bg-white shadow-lg">
      <Container className="py-8">
        <div className="flex gap-4 overflow-x-auto no-scrollbar">
          {momentTiles.map((tile) => (
            <Link
              key={tile.label}
              href={tile.href}
              onClick={onNavigate}
              className="group flex w-32 shrink-0 flex-col items-center gap-3"
            >
              <div className="h-36 w-32 overflow-hidden rounded-2xl bg-cream">
                <Image
                  src={tile.image}
                  alt=""
                  width={128}
                  height={144}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-ink group-hover:bg-lime">
                {tile.label}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
