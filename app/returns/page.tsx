import { ContentPanel, PageHero, SectionTitle } from "../../components/brand-ui";
import { SiteFrame } from "../../components/site-frame";
import { createMetadata } from "../../lib/metadata";
import { returnsPolicy, trustBadges } from "../../lib/site-data";

export const metadata = createMetadata({
  title: "Returns",
  description: "Understand Drape return conditions, eligibility, and support for exchanges and reviews.",
  path: "/returns",
});

export default function ReturnsPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Returns"
        title="Return and exchange guidance for Drape orders."
        description="A clear reference for eligible returns, custom-order exclusions, and exchange support."
      />

      <section className="shell faq-list">
        {returnsPolicy.map((item) => (
          <ContentPanel key={item.title}>
            <SectionTitle eyebrow="Returns" title={item.title} description={item.text} />
          </ContentPanel>
        ))}
      </section>

      <section className="shell info-grid">
        {trustBadges.slice(0, 2).map((badge) => (
          <ContentPanel key={badge.title}>
            <SectionTitle eyebrow="Assurance" title={badge.title} description={badge.text} />
          </ContentPanel>
        ))}
      </section>
    </SiteFrame>
  );
}
