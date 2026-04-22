"use client";

import { useEffect } from "react";
import Link from "next/link";
import { menuSections, restaurantInfo } from "@/lib/menu-data";

export default function HomePage() {
  useEffect(() => {
    const revealNodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
    );
    revealNodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <section className="hero" id="top">
        <div className="hero__layer" />
        <div className="hero__content" data-reveal>
          <p className="hero__script">{restaurantInfo.scriptTagline}</p>
          <h1>{restaurantInfo.name}</h1>
          <p>{restaurantInfo.tagline}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#menu">
              View Menu
            </a>
            <a className="btn btn--secondary" href="#contact">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section className="section about-section reveal-on-scroll" id="about" data-reveal>
        <div className="section-heading">
          <p className="section-script">Our Story</p>
          <h2>Rooted in Family, Built on Flavor</h2>
        </div>
        <div className="about-grid">
          <div className="photo-card">
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=80"
              alt="Warm Mexican dishes prepared family style"
            />
          </div>
          <div className="about-copy">
            <p>
              Brothers Taco House began with one small kitchen, a handwritten menu, and recipes carried through
              generations. We cook with patience and pride: dried chiles toasted by hand, masa pressed fresh, and salsas
              balanced for depth, heat, and soul.
            </p>
            <p>
              Our dining room is a daily celebration of neighborhood life, where families gather, friends reconnect, and
              every plate is treated like a house favorite.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" aria-hidden="true">
        <span />
      </div>

      <section className="section menu-section reveal-on-scroll" id="menu" data-reveal>
        <div className="section-heading">
          <p className="section-script">Flavor of the Day</p>
          <h2>Menu</h2>
        </div>
        <div className="menu-grid">
          {menuSections.map((section) => (
            <article key={section.title} className="menu-card">
              <h3>{section.title}</h3>
              {section.subtitle ? <p className="menu-card__subtitle">{section.subtitle}</p> : null}
              <ul>
                {section.items.map((item) => (
                  <li key={item.name} className="menu-item">
                    <div>
                      <p className="menu-item__name">{item.name}</p>
                      <p className="menu-item__description">{item.description}</p>
                    </div>
                    <span className="menu-item__price">{item.price}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="menu-link-row">
          <Link href="/menu">Open Full Menu Page</Link>
        </div>
      </section>

    </main>
  );
}
