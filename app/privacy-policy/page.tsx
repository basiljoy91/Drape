import { ContentPanel, PageHero, SectionTitle } from "../../components/brand-ui";
import { SiteFrame } from "../../components/site-frame";
import { createMetadata } from "../../lib/metadata";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "Review how Drape handles personal information, communications, and customer data.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Privacy Policy"
        title="How Drape handles personal information."
        description="A plain-language summary of how customer details are collected, used, and protected across orders, consultations, and service requests."
      />

      <section className="shell faq-list">
        <ContentPanel>
          <SectionTitle
            eyebrow="Collection"
            title="Information we collect"
            description="We collect the details needed to serve you properly, including name, email, phone number, shipping address, order history, and any sizing or styling information you choose to share."
          />
        </ContentPanel>
        <ContentPanel>
          <SectionTitle
            eyebrow="Usage"
            title="How the information is used"
            description="Your information is used to process purchases, coordinate delivery, respond to support queries, schedule consultations, and share order-related updates. We do not sell personal information to outside parties."
          />
        </ContentPanel>
      </section>
    </SiteFrame>
  );
}
