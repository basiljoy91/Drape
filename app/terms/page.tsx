import { ContentPanel, PageHero, SectionTitle } from "../../components/brand-ui";
import { SiteFrame } from "../../components/site-frame";

export default function TermsPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Terms"
        title="The basic terms for using the Drape storefront."
        description="This page sets the general rules for shopping, content usage, and order interactions on the website."
      />

      <section className="shell faq-list">
        <ContentPanel>
          <SectionTitle
            eyebrow="Orders"
            title="Order acceptance and availability"
            description="All orders are subject to availability, verification, and review. Product visuals and descriptions are presented as accurately as possible."
          />
        </ContentPanel>
        <ContentPanel>
          <SectionTitle
            eyebrow="Usage"
            title="Use of site content"
            description="All store content, visuals, design systems, and brand materials are intended for personal browsing and may not be reused without permission."
          />
        </ContentPanel>
      </section>
    </SiteFrame>
  );
}
