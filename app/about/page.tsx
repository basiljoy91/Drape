import { ContentPanel, PageHero, SectionTitle } from "../../components/brand-ui";
import { SiteFrame } from "../../components/site-frame";
import { createMetadata } from "../../lib/metadata";
import { brandStory, socialProof, trustBadges } from "../../lib/site-data";

export const metadata = createMetadata({
  title: "About",
  description: "Learn about Drape, a premium occasionwear house focused on warm luxury and ceremonial fashion.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="About Drape"
        title="A premium house shaped around Indian occasion dressing."
        description="Drape presents sarees, bridal edits, and finishing pieces with the kind of clarity, trust, and textile respect clients expect from a premium label."
      />

      <section className="shell info-grid">
        <ContentPanel>
          <SectionTitle
            eyebrow={brandStory.eyebrow}
            title={brandStory.title}
            description={brandStory.intro}
          />
          <ul className="foundation-list">
            {brandStory.pillars.map((pillar) => (
              <li key={pillar}>{pillar}</li>
            ))}
          </ul>
        </ContentPanel>
        <ContentPanel>
          <SectionTitle
            eyebrow="Trust Markers"
            title="Luxury should also feel dependable."
            description="The house pairs editorial presentation with practical reassurance so clients can buy for important moments without guesswork."
          />
          <div className="promise-grid">
            {trustBadges.map((badge) => (
              <article key={badge.title} className="promise-card">
                <h3>{badge.title}</h3>
                <p>{badge.text}</p>
              </article>
            ))}
          </div>
        </ContentPanel>
      </section>

      <section className="shell social-proof-strip">
        {socialProof.map((item) => (
          <article key={item.label} className="social-proof-card">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>
    </SiteFrame>
  );
}
