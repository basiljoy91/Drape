import { JournalCard, PageHero, SectionTitle } from "../../components/brand-ui";
import { SiteFrame } from "../../components/site-frame";
import { createMetadata } from "../../lib/metadata";
import { journalPosts } from "../../lib/site-data";

export const metadata = createMetadata({
  title: "Journal",
  description: "Read Drape journal stories on styling, bridal wardrobes, occasionwear, and fashion direction.",
  path: "/journal",
});

export default function JournalPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Journal"
        title="Editorial stories for a living storefront."
        description="The journal supports the brand with styling notes, bridal guidance, collection narratives, and seasonal fashion content."
      />

      <section className="shell journal-section">
        <SectionTitle
          eyebrow="Latest Stories"
          title="Writing that adds depth to the catalog."
          description="A premium fashion website feels more complete when editorial content sits beside commerce."
        />
        <div className="journal-grid">
          {journalPosts.map((post) => (
            <JournalCard key={post.slug} {...post} />
          ))}
        </div>
      </section>
    </SiteFrame>
  );
}
