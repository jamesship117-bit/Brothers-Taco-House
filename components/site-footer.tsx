import { restaurantInfo } from "@/lib/menu-data";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="section-divider section-divider--footer" aria-hidden="true">
        <span />
      </div>
      <div className="site-footer__inner">
        <div>
          <p className="section-script">Visit Us</p>
          <h2>Contact & Hours</h2>
          <p className="site-footer__line">{restaurantInfo.address}</p>
          <p className="site-footer__line">{restaurantInfo.phone}</p>
          <p className="site-footer__line">{restaurantInfo.hours}</p>
          <div className="site-footer__socials">
            <a href={restaurantInfo.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={restaurantInfo.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="mailto:hola@brotherstacohouse.com">Email</a>
          </div>
        </div>
        <div className="map-shell">
          <iframe
            title="Brothers Taco House map"
            src="https://www.google.com/maps?q=1604%20Emancipation%2C%20Houston%2C%20Texas%2077003&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <p className="site-footer__copyright">
        {restaurantInfo.name} - Crafted with heritage, spice, and hospitality.
      </p>
    </footer>
  );
}
