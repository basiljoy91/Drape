import { ContentPanel, PageHero, SectionTitle } from "../../components/brand-ui";
import { SiteFrame } from "../../components/site-frame";
import { faqs } from "../../lib/site-data";

export default function FAQPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="FAQ"
        title="Answers for shopping, styling, shipping, and returns."
        description="A standard storefront needs a support layer that answers the most common customer questions clearly."
      />

      <section className="shell faq-list">
        {faqs.map((item) => (
          <ContentPanel key={item.question}>
            <SectionTitle eyebrow="Question" title={item.question} description={item.answer} />
          </ContentPanel>
        ))}
      </section>
    </SiteFrame>
  );
}
