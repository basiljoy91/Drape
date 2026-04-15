import { ContentPanel, PageHero, SectionTitle } from "../../components/brand-ui";
import { SiteFrame } from "../../components/site-frame";
import { createMetadata } from "../../lib/metadata";
import { faqs, trustBadges } from "../../lib/site-data";

export const metadata = createMetadata({
  title: "FAQ",
  description: "Find answers to common Drape questions about shipping, styling, bridal support, and returns.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="FAQ"
        title="Answers for shopping, styling, shipping, and returns."
        description="Useful answers for the questions that matter most before buying occasionwear online."
      />

      <section className="shell faq-list">
        {faqs.map((item) => (
          <ContentPanel key={item.question}>
            <SectionTitle eyebrow="Question" title={item.question} description={item.answer} />
          </ContentPanel>
        ))}
      </section>

      <section className="shell info-grid">
        {trustBadges.slice(0, 2).map((badge) => (
          <ContentPanel key={badge.title}>
            <SectionTitle eyebrow="Support" title={badge.title} description={badge.text} />
          </ContentPanel>
        ))}
      </section>
    </SiteFrame>
  );
}
