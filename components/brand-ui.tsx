"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { NewsletterSignupForm } from "./newsletter-signup-form";
import type { NavItem } from "../lib/site-data";

export function UtilityBar({ links }: { links: NavItem[] }) {
  return (
    <div className="utility-bar">
      <div className="shell utility-inner">
        <div className="utility-links">
          {links.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
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

export function SiteHeader({ navigation }: { navigation: NavItem[] }) {
  return (
    <header className="site-header shell">
      <div className="site-toolbar">
        <div className="header-icons">
          <button aria-label="Open menu">≡</button>
          <button aria-label="Search">⌕</button>
        </div>
        <div className="brand-lockup">
          <p className="brand-kicker">House of Modern Occasionwear</p>
          <Link href="/" className="brand-name brand-link">
            Drape
          </Link>
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
          <Link key={item.label} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <main className="brand-page" id="main-content">
      {children}
      <SiteFooter />
    </main>
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

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="shell page-hero">
      <SectionTitle eyebrow={eyebrow} title={title} description={description} />
    </section>
  );
}

export function ProductCard({
  title,
  subtitle,
  price,
  image,
  href,
  view = "grid",
}: {
  title: string;
  subtitle: string;
  price: string;
  image: string;
  href: string;
  view?: "grid" | "list";
}) {
  return (
    <Link href={href} className={`product-card${view === "list" ? " product-card-list" : ""}`}>
      <div className="product-media">
        <Image src={image} alt={title} fill sizes="(max-width: 720px) 100vw, 25vw" />
      </div>
      <div className="product-copy">
        <span className="product-subtitle">{subtitle}</span>
        <h3>{title}</h3>
        <Badge>{price}</Badge>
      </div>
    </Link>
  );
}

export function CategoryCard({
  name,
  description,
  image,
  href,
}: {
  name: string;
  description: string;
  image: string;
  href: string;
}) {
  return (
    <Link href={href} className="category-card">
      <div className="category-media">
        <Image src={image} alt={name} fill sizes="(max-width: 720px) 100vw, 33vw" />
      </div>
      <div className="category-copy">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export function FilterBadge({
  label,
  active = false,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button type="button" className={`filter-badge${active ? " is-active" : ""}`} onClick={onClick}>
      {label}
    </button>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return <span className="price-badge">{children}</span>;
}

export function FormField({
  label,
  type = "text",
  placeholder,
  textarea = false,
}: {
  label: string;
  type?: string;
  placeholder: string;
  textarea?: boolean;
}) {
  return (
    <label className="form-field">
      <span>{label}</span>
      {textarea ? <textarea placeholder={placeholder} rows={5} /> : <input type={type} placeholder={placeholder} />}
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
      <NewsletterSignupForm />
    </section>
  );
}

export function JournalCard({
  title,
  excerpt,
  image,
  date,
}: {
  title: string;
  excerpt: string;
  image: string;
  date: string;
}) {
  return (
    <article className="journal-card">
      <div className="journal-media">
        <Image src={image} alt={title} fill sizes="(max-width: 720px) 100vw, 33vw" />
      </div>
      <div className="journal-copy">
        <span className="product-subtitle">{date}</span>
        <h3>{title}</h3>
        <p>{excerpt}</p>
      </div>
    </article>
  );
}

export function ContentPanel({ children }: { children: ReactNode }) {
  return <section className="content-panel">{children}</section>;
}

export function HeroPortraits({
  items,
  showLabels = true,
  showStamp = true,
}: {
  items: Array<{ title: string; image: string }>;
  showLabels?: boolean;
  showStamp?: boolean;
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
          {showLabels ? <span>{item.title}</span> : null}
        </motion.article>
      ))}
      {showStamp ? <div className="hero-stamp">Drape Signature Edit</div> : null}
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
          <Link href="/categories/sarees">Sarees</Link>
          <Link href="/categories/bridal">Bridal</Link>
          <Link href="/categories/blouses">Blouses</Link>
          <Link href="/categories/accessories">Accessories</Link>
        </div>
        <div className="footer-column">
          <h3>Explore</h3>
          <Link href="/about">About</Link>
          <Link href="/journal">Journal</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-column">
          <h3>Policies</h3>
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/shipping">Shipping</Link>
          <Link href="/returns">Returns</Link>
        </div>
      </div>
    </footer>
  );
}
