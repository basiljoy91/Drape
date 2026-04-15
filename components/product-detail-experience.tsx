"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Badge, ProductCard, SectionTitle } from "./brand-ui";
import type { Product } from "../lib/site-data";

type TabKey = "details" | "delivery" | "care";

const sizeOptions = ["Free Size", "Custom Fall", "Petite Drape"];

function makeReviews(product: Product) {
  return [
    {
      name: "Ananya Rao",
      rating: 5,
      text: `The ${product.title} looks even richer in person. The color and fall felt premium from the first drape.`,
    },
    {
      name: "Meera Nair",
      rating: 5,
      text: "The blouse guidance and styling support made the purchase feel boutique-level rather than transactional.",
    },
    {
      name: "Sanya Iyer",
      rating: 4,
      text: "Beautiful finish and great event presence. Delivery support was especially helpful before my ceremony.",
    },
  ];
}

export function ProductDetailExperience({
  product,
  related,
  recentlyViewedPool,
}: {
  product: Product;
  related: Product[];
  recentlyViewedPool: Product[];
}) {
  const gallery = product.gallery?.length ? product.gallery : [product.image];
  const [activeImage, setActiveImage] = useState(gallery[0]);
  const [hovered, setHovered] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const [selectedSize, setSelectedSize] = useState(sizeOptions[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0] ?? "Default");
  const [selectedBlouse, setSelectedBlouse] = useState("Signature blouse suggestion");
  const [selectedFabric, setSelectedFabric] = useState(product.fabric);
  const [activeTab, setActiveTab] = useState<TabKey>("details");
  const [wishlist, setWishlist] = useState(false);
  const [recentItems, setRecentItems] = useState<Product[]>([]);
  const reviews = useMemo(() => makeReviews(product), [product]);

  useEffect(() => {
    const key = "drape_recently_viewed";
    const existing = typeof window !== "undefined" ? window.localStorage.getItem(key) : null;
    const parsed: string[] = existing ? JSON.parse(existing) : [];
    const next = [product.slug, ...parsed.filter((slug) => slug !== product.slug)].slice(0, 6);
    window.localStorage.setItem(key, JSON.stringify(next));
    setRecentItems(recentlyViewedPool.filter((item) => next.includes(item.slug) && item.slug !== product.slug));
  }, [product.slug, recentlyViewedPool]);

  return (
    <>
      <section className="shell product-detail-grid product-detail-grid-rich">
        <div className="product-gallery-shell">
          <div
            className={`product-detail-media product-zoom-surface${hovered ? " is-zoomed" : ""}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseMove={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              const x = ((event.clientX - rect.left) / rect.width) * 100;
              const y = ((event.clientY - rect.top) / rect.height) * 100;
              setZoomPosition({ x, y });
            }}
          >
            <Image
              src={activeImage}
              alt={product.title}
              fill
              sizes="(max-width: 720px) 100vw, 46vw"
              style={{
                transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
              }}
              className="zoomable-image"
            />
            <span className="zoom-hint">Hover to zoom</span>
          </div>

          <div className="thumbnail-row">
            {gallery.map((image) => (
              <button
                key={image}
                type="button"
                className={`thumbnail-button${image === activeImage ? " is-active" : ""}`}
                onClick={() => setActiveImage(image)}
              >
                <Image src={image} alt={product.title} fill sizes="120px" />
              </button>
            ))}
          </div>
        </div>

        <div className="product-detail-stack">
          <div className="content-panel">
            <div className="product-detail-copy">
              <span className="section-eyebrow">{product.subtitle}</span>
              <h2 className="product-detail-title">{product.title}</h2>
              <div className="product-price-row">
                <Badge>{product.price}</Badge>
                <span className="product-tax-note">Inclusive of estimated taxes</span>
              </div>
              <p className="product-detail-text">{product.description}</p>

              <div className="variant-grid">
                <div className="variant-block">
                  <span className="variant-label">Size</span>
                  <div className="variant-chip-row">
                    {sizeOptions.map((size) => (
                      <button
                        key={size}
                        type="button"
                        className={`variant-chip${selectedSize === size ? " is-active" : ""}`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="variant-block">
                  <span className="variant-label">Color</span>
                  <div className="variant-chip-row">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        type="button"
                        className={`variant-chip${selectedColor === color ? " is-active" : ""}`}
                        onClick={() => setSelectedColor(color)}
                      >
                        {capitalize(color)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="variant-block">
                  <span className="variant-label">Blouse Option</span>
                  <div className="variant-chip-row">
                    {["Signature blouse suggestion", "Custom blouse tailoring", "Saree only"].map((option) => (
                      <button
                        key={option}
                        type="button"
                        className={`variant-chip${selectedBlouse === option ? " is-active" : ""}`}
                        onClick={() => setSelectedBlouse(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="variant-block">
                  <span className="variant-label">Fabric</span>
                  <div className="variant-chip-row">
                    {[product.fabric, "Premium finish"].map((fabric) => (
                      <button
                        key={fabric}
                        type="button"
                        className={`variant-chip${selectedFabric === fabric ? " is-active" : ""}`}
                        onClick={() => setSelectedFabric(fabric)}
                      >
                        {capitalize(fabric)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="delivery-box">
                <strong>Delivery & Support</strong>
                <p>Dispatch in 3 to 5 business days. Bridal and custom blouse options may extend timelines.</p>
                <p>Need event help? <Link href="/contact">Book styling support</Link>.</p>
              </div>

              <div className="product-cta-row">
                <button className="cta-button">Add to Cart</button>
                <button
                  type="button"
                  className={`secondary-button${wishlist ? " is-wishlisted" : ""}`}
                  onClick={() => setWishlist((value) => !value)}
                >
                  {wishlist ? "Wishlisted" : "Add to Wishlist"}
                </button>
              </div>
            </div>
          </div>

          <div className="content-panel">
            <div className="tab-row">
              {(["details", "delivery", "care"] as TabKey[]).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  className={`tab-button${activeTab === tab ? " is-active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {capitalize(tab)}
                </button>
              ))}
            </div>

            {activeTab === "details" ? (
              <div className="tab-panel">
                <ul className="foundation-list">
                  {product.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {activeTab === "delivery" ? (
              <div className="tab-panel">
                <p>Standard delivery: 3 to 5 business days for ready pieces.</p>
                <p>Custom blouse or fall finishing: additional 4 to 7 business days.</p>
                <p>Concierge assistance available for urgent event orders.</p>
              </div>
            ) : null}

            {activeTab === "care" ? (
              <div className="tab-panel">
                <p>Dry clean recommended for premium occasionwear.</p>
                <p>Store folded in muslin and keep away from direct light for long-term preservation.</p>
                <p>Steam lightly before wear to restore drape and finish.</p>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="shell products-section">
        <SectionTitle
          eyebrow="Reviews"
          title="Customer feedback that supports the buying decision."
          description="Reviews help premium fashion purchases feel less risky, especially for occasionwear."
        />
        <div className="testimonial-grid">
          {reviews.map((review) => (
            <article key={review.name} className="testimonial-card">
              <span className="review-stars">{"★".repeat(review.rating)}</span>
              <p className="testimonial-quote">“{review.text}”</p>
              <strong>{review.name}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="shell products-section">
        <SectionTitle
          eyebrow="Related"
          title="More from the Drape house."
          description="Related products keep the product detail page connected to the wider catalog."
        />
        <div className="product-grid">
          {related.map((item) => (
            <ProductCard key={item.slug} {...item} href={`/product/${item.slug}`} />
          ))}
        </div>
      </section>

      {recentItems.length > 0 ? (
        <section className="shell products-section">
          <SectionTitle
            eyebrow="Recently Viewed"
            title="Pick up where you left off."
            description="Recently viewed items make the shopping journey feel continuous across the catalog."
          />
          <div className="product-grid">
            {recentItems.slice(0, 4).map((item) => (
              <ProductCard key={item.slug} {...item} href={`/product/${item.slug}`} />
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}

function capitalize(value: string) {
  return value
    .split(" ")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
