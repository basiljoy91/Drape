import { ContentPanel, PageHero, SectionTitle } from "../../components/brand-ui";
import { SiteFrame } from "../../components/site-frame";

export default function ReturnsPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Returns"
        title="Return and exchange guidance for Drape orders."
        description="This page provides a standard public reference for eligible returns, conditions, and support."
      />

      <section className="shell faq-list">
        <ContentPanel>
          <SectionTitle
            eyebrow="Eligibility"
            title="Return conditions"
            description="Eligible items must be unworn, unused, and returned in original condition with applicable tags or packaging."
          />
        </ContentPanel>
        <ContentPanel>
          <SectionTitle
            eyebrow="Support"
            title="How to request a return"
            description="Customers can contact the support team with their order details to begin the return review process and receive next steps."
          />
        </ContentPanel>
      </section>
    </SiteFrame>
  );
}
