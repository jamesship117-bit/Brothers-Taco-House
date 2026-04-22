import { menuSections } from "@/lib/menu-data";

export default function MenuPage() {
  return (
    <main className="section menu-page-shell">
      <div className="section-heading">
        <p className="section-script">Full Menu</p>
        <h1>Menu & Pricing</h1>
      </div>
      <section className="menu-grid">
        {menuSections.map((section) => (
          <article key={section.title} className="menu-card">
            <h2>{section.title}</h2>
            {section.subtitle ? <p className="menu-card__subtitle">{section.subtitle}</p> : null}
            <ul>
              {section.items.map((item) => (
                <li key={item.name} className="menu-item">
                  <span>
                    {item.name}
                    <span className="menu-item__description">{item.description}</span>
                  </span>
                  <span className="menu-item__price">{item.price}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
