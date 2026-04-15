import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "../../../components/brand-ui";
import { ProductDetailExperience } from "../../../components/product-detail-experience";
import { SiteFrame } from "../../../components/site-frame";
import { createMetadata } from "../../../lib/metadata";
import { getProduct, products } from "../../../lib/site-data";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return createMetadata({
      title: "Product",
      path: `/product/${slug}`,
    });
  }

  return createMetadata({
    title: product.title,
    description: product.description,
    path: `/product/${slug}`,
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3);
  const recentlyViewedPool = products.filter((item) => item.slug !== product.slug);

  return (
    <SiteFrame>
      <PageHero
        eyebrow={product.subtitle}
        title={product.title}
        description={product.description}
      />

      <ProductDetailExperience
        product={product}
        related={related}
        recentlyViewedPool={recentlyViewedPool}
      />
    </SiteFrame>
  );
}
