import { ContentPanel, PageHero, SectionTitle } from "../../components/brand-ui";
import { SiteFrame } from "../../components/site-frame";

export default function ShippingPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Shipping"
        title="Delivery timelines and dispatch expectations."
        description="A complete ecommerce storefront should present shipping details clearly before checkout."
      />

      <section className="shell faq-list">
        <ContentPanel>
          <SectionTitle
            eyebrow="Dispatch"
            title="Processing and dispatch"
            description="Ready-to-ship orders typically dispatch within 3 to 5 business days. Made-to-order or bridal pieces may require longer preparation windows."
          />
        </ContentPanel>
        <ContentPanel>
          <SectionTitle
            eyebrow="Delivery"
            title="Domestic and international delivery"
            description="Shipping timelines vary by region. Tracking is provided when available, and premium support can help with urgent occasionwear timelines."
          />
        </ContentPanel>
      </section>
    </SiteFrame>
  );
}
