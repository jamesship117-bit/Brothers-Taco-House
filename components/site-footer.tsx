import { restaurantInfo } from "@/lib/menu-data";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-cacao/10 bg-white/60">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 text-sm text-cacao sm:grid-cols-2 sm:px-6">
        <div>
          <p className="font-bold">{restaurantInfo.name}</p>
          <p>{restaurantInfo.address}</p>
        </div>
        <div className="sm:text-right">
          <p className="font-bold">Open Daily</p>
          <p>{restaurantInfo.hours}</p>
        </div>
      </div>
    </footer>
  );
}
