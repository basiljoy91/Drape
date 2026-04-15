"use client";

import { motion } from "framer-motion";
import {
  FilterBadge,
  HeroPortraits,
  NewsletterCard,
  ProductCard,
  SectionTitle,
  SiteFooter,
  SiteHeader,
  UtilityBar,
} from "./brand-ui";

const utilityLinks = [
  { label: "Orders", href: "#" },
  { label: "Billing", href: "#" },
  { label: "Store Policy", href: "#" },
  { label: "Appointments", href: "#" },
  { label: "Contact", href: "#" },
];

const navigation = [
  { label: "Home", href: "#" },
  { label: "New Arrivals", href: "#" },
  { label: "Sarees", href: "#" },
  { label: "Bridal", href: "#" },
  { label: "Blouses", href: "#" },
  { label: "Accessories", href: "#" },
  { label: "Journal", href: "#" },
];

const heroItems = [
  {
    title: "Ivory Ceremony",
    image:
      "https://images.unsplash.com/photo-1610189020382-6688c0f708c5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Gold Loom",
    image:
      "https://images.unsplash.com/photo-1610030469668-710c1c9067cb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Rose Drape",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Festive Ruby",
    image:
      "https://images.unsplash.com/photo-1583391733981-849840c5a0d6?auto=format&fit=crop&w=1200&q=80",
  },
];

const products = [
  {
    title: "Banarasi Ivory Bloom",
    subtitle: "Heirloom Saree",
    price: "INR 18,900",
    image:
      "https://images.unsplash.com/photo-1610030469678-8c5f6c86b2d2?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Peony Silk Drape",
    subtitle: "Occasion Saree",
    price: "INR 14,400",
    image:
      "https://images.unsplash.com/photo-1610030469132-99d6e4dd98ec?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Marigold Edit Blouse",
    subtitle: "Statement Blouse",
    price: "INR 6,200",
    image:
      "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Saffron Wedding Weave",
    subtitle: "Bridal Highlight",
    price: "INR 24,500",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
  },
];

const principles = [
  {
    title: "Palette",
    text: "Maroon, cream, muted gold, soft parchment surfaces, and warm text contrast.",
  },
  {
    title: "Typography",
    text: "Cormorant Garamond for luxury headlines, Manrope for polished readable interface copy.",
  },
  {
    title: "Components",
    text: "Buttons, badges, forms, cards, nav, section titles, and footer now share one design language.",
  },
];

export function AtelierHome() {
  return (
    <main className="brand-page">
      <UtilityBar links={utilityLinks} />
      <SiteHeader navigation={navigation} />

      <section className="shell hero-section">
        <div className="hero-copy">
          <SectionTitle
            eyebrow="Brand Foundation"
            title="Drape now has a real premium design system."
            description="Phase 1 establishes the visual rules, reusable components, and luxury storefront foundation for every future page."
          />
          <div className="filter-row">
            <FilterBadge label="Maroon Luxe" active />
            <FilterBadge label="Cream Paper" />
            <FilterBadge label="Gold Detail" />
            <FilterBadge label="Arch Frames" />
          </div>
          <div className="principles-grid">
            {principles.map((item) => (
              <article key={item.title} className="principle-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <HeroPortraits items={heroItems} />
      </section>

      <section className="shell products-section">
        <div className="section-row">
          <SectionTitle
            eyebrow="Reusable Cards"
            title="Foundational product blocks for every collection page."
            description="These shared product cards establish image treatment, copy hierarchy, pricing badges, and hover behavior for the rest of the storefront."
          />
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="shell foundation-grid">
        <div className="foundation-panel">
          <SectionTitle
            eyebrow="System Rules"
            title="What Phase 1 now standardizes."
            description="This makes the next phases easier because every new page can reuse the same luxury patterns instead of inventing new UI each time."
          />
          <ul className="foundation-list">
            <li>Shared header and navigation structure</li>
            <li>Standard footer columns and support links</li>
            <li>Luxury card, badge, and surface treatment</li>
            <li>Consistent spacing, borders, and form styling</li>
            <li>Brand naming updated to Drape</li>
          </ul>
        </div>

        <NewsletterCard />
      </section>

      <SiteFooter />
    </main>
  );
}
