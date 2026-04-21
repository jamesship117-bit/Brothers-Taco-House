import Link from "next/link";
import { restaurantInfo } from "@/lib/menu-data";
import { Logo } from "@/components/logo";

export function SiteHeader() {
  return (
    <header className="border-b border-cacao/10 bg-crema">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Go home">
          <Logo className="h-12 w-auto" />
          <span className="hidden text-sm font-semibold tracking-wide text-cacao sm:block">
            {restaurantInfo.name}
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm font-semibold text-cacao">
          <Link href="/" className="transition hover:text-chili">
            Home
          </Link>
          <Link href="/menu" className="rounded-full bg-chili px-4 py-2 text-crema transition hover:bg-salsa">
            Menu
          </Link>
        </nav>
      </div>
    </header>
  );
}
