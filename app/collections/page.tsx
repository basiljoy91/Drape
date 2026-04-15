import { CategoryCard, PageHero, SectionTitle } from "../../components/brand-ui";
import { ProductBrowser } from "../../components/product-browser";
import { SiteFrame } from "../../components/site-frame";
import { categories, products } from "../../lib/site-data";

export default function CollectionsPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Collections"
        title="Explore the full Drape storefront."
        description="Browse signature categories, seasonal highlights, and premium occasion pieces across the house."
      />

      <section className="shell category-section">
        <SectionTitle
          eyebrow="Departments"
          title="A complete shopping map for the brand."
          description="Each department leads into a dedicated category page with curated product stories and premium visuals."
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

      <ProductBrowser
        products={products}
        categories={categories}
        title="Browse products like a real ecommerce storefront."
        description="Switch between grid and list layouts, filter by category, price, color, fabric, and occasion, sort results, and load more products without losing the premium storefront feel."
      />
    </SiteFrame>
  );
}
