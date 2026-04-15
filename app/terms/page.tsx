import { ContentPanel, PageHero, SectionTitle } from "../../components/brand-ui";
import { SiteFrame } from "../../components/site-frame";
import { createMetadata } from "../../lib/metadata";

export const metadata = createMetadata({
  title: "Terms",
  description: "Read the storefront terms for browsing, shopping, and interacting with Drape online.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Terms"
        title="The basic terms for using the Drape storefront."
        description="The terms below explain how orders, product information, and store content are handled across the Drape website."
      />

      <section className="shell faq-list">
        <ContentPanel>
          <SectionTitle
            eyebrow="Orders"
            title="Order acceptance and availability"
            description="All orders are subject to stock availability, payment review, and confirmation. We aim to present product imagery, tones, and descriptions as accurately as possible, while acknowledging that handcrafted textiles may show minor variation."
          />
        </ContentPanel>
        <ContentPanel>
          <SectionTitle
            eyebrow="Usage"
            title="Use of site content"
            description="All site visuals, product copy, layouts, and brand assets are intended for personal shopping use and may not be copied, republished, or commercially reused without written permission."
          />
        </ContentPanel>
      </section>
    </SiteFrame>
  );
}
