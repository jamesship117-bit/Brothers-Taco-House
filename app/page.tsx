import Link from "next/link";
import { Logo } from "@/components/logo";
import { restaurantInfo } from "@/lib/menu-data";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <section className="grid items-center gap-8 rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-cacao/10 md:grid-cols-2 md:p-10">
        <div className="space-y-5">
          <p className="inline-block rounded-full bg-cilantro/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cilantro">
            Authentic {restaurantInfo.cuisine}
          </p>
          <h1 className="text-4xl font-black tracking-tight text-cacao sm:text-5xl">
            Brothers Taco House
          </h1>
          <p className="text-lg text-cacao/80">
            A Houston staple serving hearty breakfast tacos, lunch classics, and bold house flavors made for busy
            mornings and satisfying midday meals.
          </p>
          <Link
            href="/menu"
            className="inline-flex rounded-full bg-chili px-6 py-3 text-sm font-bold uppercase tracking-wide text-crema transition hover:bg-salsa"
          >
            View Menu
          </Link>
        </div>
        <div className="flex items-center justify-center rounded-2xl bg-crema p-4 ring-1 ring-cacao/10">
          <Logo className="mx-auto h-44 w-auto" />
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-cacao/10">
          <h2 className="text-xl font-extrabold text-cacao">Location</h2>
          <p className="mt-2 text-cacao/80">{restaurantInfo.address}</p>
        </article>
        <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-cacao/10">
          <h2 className="text-xl font-extrabold text-cacao">Hours of Operation</h2>
          <ul className="mt-2 list-disc pl-5 text-cacao/80">
            <li>Monday: {restaurantInfo.hours}</li>
            <li>Tuesday: {restaurantInfo.hours}</li>
            <li>Wednesday: {restaurantInfo.hours}</li>
            <li>Thursday: {restaurantInfo.hours}</li>
            <li>Friday: {restaurantInfo.hours}</li>
            <li>Saturday: {restaurantInfo.hours}</li>
            <li>Sunday: {restaurantInfo.hours}</li>
          </ul>
        </article>
      </section>

      <section className="mt-10 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-cacao/10">
        <h2 className="text-2xl font-black text-cacao">About Brothers Taco House</h2>
        <p className="mt-3 leading-7 text-cacao/80">
          Brothers Taco House celebrates simple, satisfying cooking rooted in Mexican and Latin American traditions.
          Known for quick service and familiar comfort, the kitchen focuses on flavorful tacos, breakfast favorites, and
          daily lunch plates that keep regulars coming back.
        </p>
      </section>
    </main>
  );
}
