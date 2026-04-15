"use client";

import { motion } from "framer-motion";
import {
  Badge,
  CategoryCard,
  ContentPanel,
  FilterBadge,
  HeroPortraits,
  JournalCard,
  NewsletterCard,
  ProductCard,
  SectionTitle,
} from "./brand-ui";
import { categories, journalPosts, products } from "../lib/site-data";

const heroItems = [
  {
    title: "Ivory Ceremony",
    image: "/catalog/11.jpg",
  },
  {
    title: "Gold Loom",
    image: "/catalog/14.jpg",
  },
  {
    title: "Rose Drape",
    image: "/catalog/20.jpg",
  },
  {
    title: "Festive Ruby",
    image: "/catalog/1.jpg",
  },
];

const newArrivals = [
  {
    title: "Twilight Veil",
    subtitle: "New Arrival",
    price: "INR 16,800",
    image: "/catalog/17.jpg",
    href: "/product/gulnaar-zari-veil",
  },
  {
    title: "Rose Court Blouse",
    subtitle: "New Arrival",
    price: "INR 7,400",
    image: "/catalog/7.jpg",
    href: "/product/rose-court-blouse",
  },
  {
    title: "Golden Vermilion",
    subtitle: "New Arrival",
    price: "INR 21,300",
    image: "/catalog/14.jpg",
    href: "/product/golden-vermilion-heritage",
  },
  {
    title: "Peach Temple",
    subtitle: "New Arrival",
    price: "INR 12,800",
    image: "/catalog/17.jpg",
    href: "/product/peach-temple-mist",
  },
];

const testimonials = [
  {
    quote:
      "The site finally feels like a premium boutique. The bridal edit and product storytelling make the collection feel valuable before checkout.",
    name: "Rhea Menon",
    role: "Bridal Client",
  },
  {
    quote:
      "Drape now reads like a real fashion house, not a template. The category flow, support pages, and homepage depth feel production-ready.",
    name: "Nikita Shah",
    role: "Styling Consultant",
  },
  {
    quote:
      "The warm maroon and cream language carries beautifully across every section. It feels focused, premium, and editorial.",
    name: "Aarav Khanna",
    role: "Brand Partner",
  },
];

const galleryImages = [
  "/catalog/1.jpg",
  "/catalog/10.jpg",
  "/catalog/14.jpg",
  "/catalog/17.jpg",
  "/catalog/20.jpg",
];

const promises = [
  {
    title: "Assured Authenticity",
    text: "Premium materials, rich finishing, and a brand presentation designed to feel trustworthy.",
  },
  {
    title: "Shipping Support",
    text: "Clear delivery and dispatch expectations for occasionwear timelines and important dates.",
  },
  {
    title: "Concierge Care",
    text: "Styling help, pre-purchase guidance, and support paths that keep the storefront usable.",
  },
];

export function AtelierHome() {
  return (
    <>
      <section className="shell visual-hero-shell">
        <div className="hero-desktop-visual">
          <HeroPortraits items={heroItems} showLabels={false} showStamp={false} />
        </div>
        <div className="hero-mobile-visual">
          <img src="/catalog/brand-campaign.jpg" alt="Drape campaign hero" />
        </div>
      </section>

      <section className="shell products-section">
        <div className="section-row">
          <SectionTitle
            eyebrow="Featured Collections"
            title="Signature edits"
            description="Curated pieces from the house."
          />
        </div>

        <div className="product-grid">
          {products.slice(0, 4).map((product, index) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <ProductCard {...product} href={`/product/${product.slug}`} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="shell campaign-attraction">
        <div className="campaign-copy">
          <SectionTitle
            eyebrow="Brand Attraction"
            title="Campaign highlight"
            description="A branded moment between the shop edits."
          />
          <div className="showcase-copy">
            <Badge>Campaign Highlight</Badge>
          </div>
        </div>
        <div className="campaign-art">
          <img src="/catalog/brand-campaign.jpg" alt="Drape campaign composition" />
        </div>
      </section>

      <section className="shell split-showcase">
        <ContentPanel>
          <SectionTitle
            eyebrow="Bridal Spotlight"
            title="Bridal spotlight"
            description="Wedding and ceremony edits."
          />
          <div className="showcase-copy">
            <Badge>Bridal Capsule</Badge>
          </div>
        </ContentPanel>
        <div className="showcase-media">
          <img src="/catalog/10.jpg" alt="Bridal spotlight" />
        </div>
      </section>

      <section className="shell products-section">
        <SectionTitle
          eyebrow="New Arrivals"
          title="New arrivals"
          description="Fresh pieces this week."
        />
        <div className="product-grid">
          {newArrivals.map((item) => (
            <ProductCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="shell split-showcase split-showcase-reverse">
        <div className="showcase-media">
          <img src="/catalog/20.jpg" alt="Occasion wear spotlight" />
        </div>
        <ContentPanel>
          <SectionTitle
            eyebrow="Occasion Wear"
            title="Occasion wear"
            description="Reception, festive, and family dressing."
          />
          <div className="filter-row">
            <FilterBadge label="Reception" active />
            <FilterBadge label="Festive" />
            <FilterBadge label="Family Events" />
          </div>
        </ContentPanel>
      </section>

      <section className="shell products-section">
        <SectionTitle
          eyebrow="Best Sellers"
          title="Best sellers"
          description="Most loved pieces."
        />
        <div className="product-grid">
          {products.slice(2, 6).map((product) => (
            <ProductCard key={product.slug} {...product} href={`/product/${product.slug}`} />
          ))}
        </div>
      </section>

      <section className="shell category-section">
        <SectionTitle
          eyebrow="Categories"
          title="Shop by category"
          description="Sarees, bridal, blouses, men, accessories."
        />
        <div className="category-grid">
          {categories.map((category) => (
            <CategoryCard
              key={category.slug}
              name={category.name}
              description={category.description}
              image={category.hero}
              href={`/categories/${category.slug}`}
            />
          ))}
        </div>
      </section>

      <section className="shell artisan-section">
        <div className="craft-image-panel">
          <img src="/catalog/11.jpg" alt="Craftsmanship detail" />
        </div>
        <ContentPanel>
          <SectionTitle
            eyebrow="Craftsmanship"
            title="Craftsmanship"
            description="Silk, zari, finish, and drape."
          />
        </ContentPanel>
        <ContentPanel>
          <SectionTitle
            eyebrow="Store Promise"
            title="Store promise"
            description="Authenticity, delivery, and concierge support."
          />
          <div className="promise-grid">
            {promises.map((item) => (
              <article key={item.title} className="promise-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </ContentPanel>
      </section>

      <section className="shell testimonials-section">
        <SectionTitle
          eyebrow="Testimonials"
          title="Client notes"
          description="A few words from shoppers."
        />
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article key={item.name} className="testimonial-card">
              <p className="testimonial-quote">“{item.quote}”</p>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="shell foundation-grid">
        <ContentPanel>
          <SectionTitle
            eyebrow="Brand Pages"
            title="About, contact, FAQ, and policy pages now fit the same system."
            description="Support, story, and trust-building pages use the same premium spacing, copy hierarchy, and panel language as commerce pages."
          />
          <ul className="foundation-list">
            <li>About and journal pages strengthen the brand story</li>
            <li>Contact and FAQ pages improve usability and trust</li>
            <li>Privacy, terms, shipping, and returns create standard ecommerce coverage</li>
          </ul>
        </ContentPanel>

        <NewsletterCard />
      </section>

      <section className="shell gallery-section">
        <SectionTitle
          eyebrow="Instagram / Gallery"
          title="Gallery"
          description="Latest visual moments."
        />
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={image} className={`gallery-tile gallery-tile-${(index % 5) + 1}`}>
              <img src={image} alt={`Drape gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      <section className="shell journal-section">
        <SectionTitle
          eyebrow="Journal"
          title="Journal"
          description="Style notes and stories."
        />
        <div className="journal-grid">
          {journalPosts.map((post) => (
            <JournalCard key={post.slug} {...post} />
          ))}
        </div>
      </section>
    </>
  );
}
