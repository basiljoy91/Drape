import { PageHero } from "../../components/brand-ui";
import { ProductBrowser } from "../../components/product-browser";
import { SiteFrame } from "../../components/site-frame";
import { createMetadata } from "../../lib/metadata";
import { categories, products } from "../../lib/site-data";

export const metadata = createMetadata({
  title: "Search",
  description: "Search the Drape catalog by product, color, fabric, price, and occasion.",
  path: "/search",
});

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = await searchParams;
  const query = params.q ?? "";

  return (
    <SiteFrame>
      <PageHero
        eyebrow="Search Results"
        title={query ? `Results for “${query}”` : "Search the Drape catalog"}
        description="Browse matching products with the same standard ecommerce filters, sorting, layout toggle, and mobile-friendly browse behavior."
      />

      <ProductBrowser
        products={products}
        categories={categories}
        initialSearch={query}
        title="Search results"
        description="Use search together with browse filters to narrow by category, price, color, fabric, and occasion."
        showSearchHeader={false}
      />
    </SiteFrame>
  );
}
