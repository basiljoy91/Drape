"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="brand-page">
      <section className="shell status-shell">
        <div className="content-panel status-panel">
          <span className="section-eyebrow">Something Went Wrong</span>
          <h1 className="status-title">The page hit an unexpected issue.</h1>
          <p>Please try againn or return to the storefront.</p>
          <div className="product-cta-row">
            <button className="cta-button" onClick={reset}>
              Try Again
            </button>
            <Link href="/" className="secondary-button">
              Back Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
