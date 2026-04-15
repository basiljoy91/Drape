"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type LinkItem = {
  label: string;
  href: string;
};

type ProductCardProps = {
  title: string;
  subtitle: string;
  price: string;
  image: string;
};

type FilterBadgeProps = {
  label: string;
  active?: boolean;
};

type FormFieldProps = {
  label: string;
  type?: string;
  placeholder: string;
};

export function UtilityBar({ links }: { links: LinkItem[] }) {
  return (
    <div className="utility-bar">
      <div className="shell utility-inner">
        <div className="utility-links">
          {links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="utility-meta">
          <span>Bespoke Luxury</span>
          <span>Worldwide Delivery</span>
        </div>
      </div>
    </div>
  );
}

export function SiteHeader({ navigation }: { navigation: LinkItem[] }) {
  return (
    <header className="site-header shell">
      <div className="site-toolbar">
        <div className="header-icons">
          <button aria-label="Open menu">≡</button>
          <button aria-label="Search">⌕</button>
        </div>
        <div className="brand-lockup">
          <p className="brand-kicker">House of Modern Occasionwear</p>
          <h1 className="brand-name">Drape</h1>
          <p className="brand-monogram">DR</p>
        </div>
        <div className="header-icons header-icons-right">
          <button aria-label="Account">◌</button>
          <button aria-label="Wishlist">♡</button>
          <button aria-label="Cart">◔</button>
        </div>
      </div>

      <nav className="primary-nav">
        {navigation.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-title">
      <span className="section-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export function ProductCard({ title, subtitle, price, image }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-media">
        <Image src={image} alt={title} fill sizes="(max-width: 720px) 100vw, 25vw" />
      </div>
      <div className="product-copy">
        <span className="product-subtitle">{subtitle}</span>
        <h3>{title}</h3>
        <Badge>{price}</Badge>
      </div>
    </article>
  );
}

export function FilterBadge({ label, active = false }: FilterBadgeProps) {
  return <button className={`filter-badge${active ? " is-active" : ""}`}>{label}</button>;
}

export function Badge({ children }: { children: ReactNode }) {
  return <span className="price-badge">{children}</span>;
}

export function FormField({ label, type = "text", placeholder }: FormFieldProps) {
  return (
    <label className="form-field">
      <span>{label}</span>
      <input type={type} placeholder={placeholder} />
    </label>
  );
}

export function NewsletterCard() {
  return (
    <section className="newsletter-card">
      <SectionTitle
        eyebrow="Private List"
        title="Join the Drape circle"
        description="Receive first access to bridal edits, occasion capsules, and limited seasonal launches."
      />
      <form className="newsletter-form">
        <FormField label="Email Address" type="email" placeholder="Enter your email" />
        <FormField label="Occasion" placeholder="Wedding, festive, evening..." />
        <button type="submit" className="cta-button">
          Request Access
        </button>
      </form>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-column footer-brand">
          <p className="footer-logo">Drape</p>
          <p>
            Premium Indian occasionwear shaped through rich textiles, warm luxury, and a refined
            ceremonial storefront.
          </p>
        </div>
        <div className="footer-column">
          <h3>Shop</h3>
          <a href="#">Sarees</a>
          <a href="#">Bridal</a>
          <a href="#">Blouses</a>
          <a href="#">Accessories</a>
        </div>
        <div className="footer-column">
          <h3>About</h3>
          <a href="#">Brand Story</a>
          <a href="#">Craftsmanship</a>
          <a href="#">Journal</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <a href="#">Shipping</a>
          <a href="#">Returns</a>
          <a href="#">Appointments</a>
          <a href="#">FAQ</a>
        </div>
      </div>
    </footer>
  );
}

export function HeroPortraits({
  items,
}: {
  items: Array<{ title: string; image: string }>;
}) {
  return (
    <section className="hero-gallery">
      {items.map((item, index) => (
        <motion.article
          key={item.title}
          className="hero-portrait"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: index * 0.08 }}
        >
          <div className="hero-arch">
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority={index < 2}
              sizes="(max-width: 720px) 100vw, 22vw"
            />
          </div>
          <span>{item.title}</span>
        </motion.article>
      ))}
      <div className="hero-stamp">Drape Signature Edit</div>
    </section>
  );
}
