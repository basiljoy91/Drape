export default function Loading() {
  return (
    <main className="brand-page">
      <div className="shell loading-shell" aria-busy="true" aria-live="polite">
        <div className="skeleton skeleton-hero" />
        <div className="loading-grid">
          <div className="skeleton skeleton-card" />
          <div className="skeleton skeleton-card" />
          <div className="skeleton skeleton-card" />
        </div>
      </div>
    </main>
  );
}
