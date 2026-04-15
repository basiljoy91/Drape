import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "../../../components/brand-ui";
import { ProductBrowser } from "../../../components/product-browser";
import { SiteFrame } from "../../../components/site-frame";
import { createMetadata } from "../../../lib/metadata";
import { categories, getCategory, products } from "../../../lib/site-data";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    return createMetadata({
      title: "Category",
      path: `/categories/${slug}`,
    });
  }

  return createMetadata({
    title: category.name,
    description: category.description,
    path: `/categories/${slug}`,
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    notFound();
  }

  return (
    <SiteFrame>
      <PageHero eyebrow="Category" title={category.name} description={category.description} />

      <ProductBrowser
        products={products}
        categories={categories}
        initialCategory={slug}
        title={`Curated ${category.name.toLowerCase()} for premium dressing.`}
        description="Each category page now supports standard browse interactions including grid/list view, sorting, search, filtering, and load-more behavior."
      />
    </SiteFrame>
  );
}
