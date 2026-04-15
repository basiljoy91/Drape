import { ContentPanel, PageHero, SectionTitle } from "../../components/brand-ui";
import { SiteFrame } from "../../components/site-frame";
import { createMetadata } from "../../lib/metadata";
import { shippingPolicy, trustBadges } from "../../lib/site-data";

export const metadata = createMetadata({
  title: "Shipping",
  description: "Review Drape shipping timelines, dispatch guidance, and delivery information.",
  path: "/shipping",
});

export default function ShippingPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Shipping"
        title="Delivery timelines and dispatch expectations."
        description="Clear shipping guidance for ready pieces, custom finishing, bridal timelines, and international orders."
      />

      <section className="shell faq-list">
        {shippingPolicy.map((item) => (
          <ContentPanel key={item.title}>
            <SectionTitle eyebrow="Shipping" title={item.title} description={item.text} />
          </ContentPanel>
        ))}
      </section>

      <section className="shell info-grid">
        {trustBadges.slice(1, 3).map((badge) => (
          <ContentPanel key={badge.title}>
            <SectionTitle eyebrow="Service" title={badge.title} description={badge.text} />
          </ContentPanel>
        ))}
      </section>
    </SiteFrame>
  );
}
