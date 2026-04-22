"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { restaurantInfo } from "@/lib/menu-data";
import { Logo } from "@/components/logo";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}>
      <div className="site-header__inner">
        <Link href="/" className="site-header__brand" aria-label="Go home">
          <Logo className="site-header__logo" />
          <span className="site-header__name">{restaurantInfo.name}</span>
        </Link>
        <nav className="site-header__nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#contact">Contact Us</a>
        </nav>
        <button
          className="site-header__mobile-cta"
          type="button"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Contact Us
        </button>
      </div>
      <div className="section-divider section-divider--header" aria-hidden="true">
        <span />
      </div>
    </header>
  );
}
