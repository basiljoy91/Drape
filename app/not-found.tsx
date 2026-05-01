import Link from "next/link";
import { SiteFrame } from "../components/site-frame";

export default function NotFound() {
  return (
    <SiteFrame>
      <section className="shell status-shell">
        <div className="content-panel status-panel">
          <span className="section-eyebrow">404</span>
          <h1 className="status-title">This page could not be found.</h1>
          <p>The collection may have moved, or the link may no longer be available.</p>
          <div className="product-cta-row">
            <Link href="/" className="cta-button status-link">
              Go Home
            </Link>
            <Link href="/collections" className="secondary-button">
              Browse Collecti
            </Link>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
