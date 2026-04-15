import type { ReactNode } from "react";
import { SiteChrome, SiteHeader, UtilityBar } from "./brand-ui";
import { mainNavigation, utilityLinks } from "../lib/site-data";

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <SiteChrome>
      <UtilityBar links={utilityLinks} />
      <SiteHeader navigation={mainNavigation} />
      {children}
    </SiteChrome>
  );
}
