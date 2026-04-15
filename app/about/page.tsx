import { ContentPanel, PageHero, SectionTitle } from "../../components/brand-ui";
import { SiteFrame } from "../../components/site-frame";

export default function AboutPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="About Drape"
        title="A premium house shaped around occasion dressing."
        description="Drape blends warm luxury, handcrafted sensibility, and a ceremonial visual language into a modern fashion storefront."
      />

      <section className="shell info-grid">
        <ContentPanel>
          <SectionTitle
            eyebrow="Story"
            title="Built for heirloom moods and modern rituals."
            description="The brand direction pairs rich maroon, cream, muted gold, framed imagery, and structured editorial layouts to present occasionwear with clarity and depth."
          />
        </ContentPanel>
        <ContentPanel>
          <SectionTitle
            eyebrow="Craft"
            title="Designing beyond the catalog."
            description="Drape is intended to feel like a boutique house: considered typography, collectible product storytelling, and trust-building support pages alongside the shop."
          />
        </ContentPanel>
      </section>
    </SiteFrame>
  );
}
