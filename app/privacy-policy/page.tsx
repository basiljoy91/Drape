import { ContentPanel, PageHero, SectionTitle } from "../../components/brand-ui";
import { SiteFrame } from "../../components/site-frame";

export default function PrivacyPolicyPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Privacy Policy"
        title="How Drape handles personal information."
        description="This page establishes baseline policy coverage for data collection, communication, and order-related information."
      />

      <section className="shell faq-list">
        <ContentPanel>
          <SectionTitle
            eyebrow="Collection"
            title="Information we collect"
            description="We may collect contact, order, shipping, and communication details needed to support purchases, appointments, and customer service."
          />
        </ContentPanel>
        <ContentPanel>
          <SectionTitle
            eyebrow="Usage"
            title="How the information is used"
            description="Information is used to process orders, manage support requests, improve service experience, and communicate relevant updates."
          />
        </ContentPanel>
      </section>
    </SiteFrame>
  );
}
