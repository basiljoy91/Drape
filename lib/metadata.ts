import type { Metadata } from "next";

const siteName = "Drape";
const siteUrl = "https://drape-house.com";
const defaultDescription = "Premium Indian occasionwear with bridal edits, sarees, blouses, accessories, and refined ceremonial styling.";

export const sharedMetadata = {
  siteName,
  siteUrl,
  defaultDescription,
};

export function createMetadata({
  title,
  description = defaultDescription,
  path = "/",
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const absoluteUrl = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl,
      siteName,
      type: "website",
      images: [
        {
          url: new URL("/opengraph-image", siteUrl).toString(),
          width: 1200,
          height: 630,
          alt: `${siteName} open graph image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [new URL("/opengraph-image", siteUrl).toString()],
    },
  };
}
