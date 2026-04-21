import { menuSections } from "@/lib/menu-data";

export default function MenuPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <section className="rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-cacao/10 md:p-8">
        <h1 className="text-4xl font-black tracking-tight text-cacao sm:text-5xl">Menu & Pricing</h1>
        <p className="mt-3 max-w-2xl text-cacao/80">
          Fresh tacos and daily specials with straightforward pricing. Weekend items may vary by availability.
        </p>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        {menuSections.map((section) => (
          <article key={section.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-cacao/10">
            <h2 className="text-2xl font-extrabold text-chili">{section.title}</h2>
            {section.subtitle ? <p className="mt-1 text-sm font-semibold text-cacao/70">{section.subtitle}</p> : null}
            <ul className="mt-4 space-y-3">
              {section.items.map((item) => (
                <li key={item.name} className="flex items-start justify-between gap-4 border-b border-cacao/10 pb-2">
                  <span className="font-medium text-cacao">
                    {item.name}
                    {item.note ? <span className="block text-xs text-cacao/60">{item.note}</span> : null}
                  </span>
                  <span className="whitespace-nowrap font-bold text-cilantro">{item.price ?? "Market Price"}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
