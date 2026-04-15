import { SiteFrame } from "../components/site-frame";
import { AtelierHome } from "../components/atelier-home";
import { createMetadata } from "../lib/metadata";

export const metadata = createMetadata({
  title: "Home",
  description: "Discover Drape premium sarees, bridal edits, occasionwear, and boutique shopping experiences.",
  path: "/",
});

export default function Home() {
  return (
    <SiteFrame>
      <AtelierHome />
    </SiteFrame>
  );
}
