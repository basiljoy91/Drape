"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { FilterBadge, ProductCard, SectionTitle } from "./brand-ui";
import type { Category, Product } from "../lib/site-data";

type ProductBrowserProps = {
  products: Product[];
  categories: Category[];
  title: string;
  description: string;
  initialCategory?: string;
  initialSearch?: string;
  showSearchHeader?: boolean;
};

const PAGE_SIZE = 6;

function formatINR(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function ProductBrowser({
  products,
  categories,
  title,
  description,
  initialCategory = "all",
  initialSearch = "",
  showSearchHeader = true,
}: ProductBrowserProps) {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState("popularity");
  const [search, setSearch] = useState(initialSearch);
  const [maxPrice, setMaxPrice] = useState(30000);
  const [selectedColor, setSelectedColor] = useState("all");
  const [selectedFabric, setSelectedFabric] = useState("all");
  const [selectedOccasion, setSelectedOccasion] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const colors = useMemo(
    () => ["all", ...new Set(products.flatMap((product) => product.colors))],
    [products],
  );
  const fabrics = useMemo(
    () => ["all", ...new Set(products.map((product) => product.fabric))],
    [products],
  );
  const occasions = useMemo(
    () => ["all", ...new Set(products.map((product) => product.occasion))],
    [products],
  );

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    const result = products
      .filter((product) => selectedCategory === "all" || product.category === selectedCategory)
      .filter((product) => product.priceValue <= maxPrice)
      .filter((product) => selectedColor === "all" || product.colors.includes(selectedColor))
      .filter((product) => selectedFabric === "all" || product.fabric === selectedFabric)
      .filter((product) => selectedOccasion === "all" || product.occasion === selectedOccasion)
      .filter((product) => {
        if (!query) return true;
        return [
          product.title,
          product.subtitle,
          product.description,
          product.fabric,
          product.occasion,
          ...product.colors,
        ]
          .join(" ")
          .toLowerCase()
          .includes(query);
      });

    return [...result].sort((left, right) => {
      if (sortBy === "price-asc") return left.priceValue - right.priceValue;
      if (sortBy === "price-desc") return right.priceValue - left.priceValue;
      if (sortBy === "newest") return left.newestRank - right.newestRank;
      return right.popularity - left.popularity;
    });
  }, [maxPrice, products, search, selectedCategory, selectedColor, selectedFabric, selectedOccasion, sortBy]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const canLoadMore = visibleCount < filteredProducts.length;

  const resetFilters = () => {
    setSelectedCategory(initialCategory);
    setSortBy("popularity");
    setSearch(initialSearch);
    setMaxPrice(30000);
    setSelectedColor("all");
    setSelectedFabric("all");
    setSelectedOccasion("all");
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <section className="shell browse-shell">
      <div className="browse-head">
        <SectionTitle eyebrow="Shop Browser" title={title} description={description} />
        {showSearchHeader ? (
          <form className="browse-search-form" action="/search">
            <input
              name="q"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setVisibleCount(PAGE_SIZE);
              }}
              placeholder="Search sarees, colors, fabrics, occasions..."
            />
            <button className="cta-button" type="submit">
              Search
            </button>
          </form>
        ) : null}
      </div>

      <div className="browse-layout">
        <aside className="browse-filters">
          <div className="filter-block">
            <h3>Category</h3>
            <div className="filter-chip-grid">
              <FilterBadge
                label="All"
                active={selectedCategory === "all"}
                onClick={() => {
                  setSelectedCategory("all");
                  setVisibleCount(PAGE_SIZE);
                }}
              />
              {categories.map((category) => (
                <FilterBadge
                  key={category.slug}
                  label={category.name}
                  active={selectedCategory === category.slug}
                  onClick={() => {
                    setSelectedCategory(category.slug);
                    setVisibleCount(PAGE_SIZE);
                  }}
                />
              ))}
            </div>
          </div>

          <div className="filter-block">
            <label className="filter-label" htmlFor="sort-by">
              Sort By
            </label>
            <select
              id="sort-by"
              value={sortBy}
              onChange={(event) => {
                setSortBy(event.target.value);
                setVisibleCount(PAGE_SIZE);
              }}
            >
              <option value="popularity">Popularity</option>
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>

          <div className="filter-block">
            <label className="filter-label" htmlFor="price-range">
              Price Range: {formatINR(maxPrice)}
            </label>
            <input
              id="price-range"
              type="range"
              min="5000"
              max="30000"
              step="500"
              value={maxPrice}
              onChange={(event) => {
                setMaxPrice(Number(event.target.value));
                setVisibleCount(PAGE_SIZE);
              }}
            />
          </div>

          <div className="filter-block">
            <label className="filter-label" htmlFor="color-filter">
              Color
            </label>
            <select
              id="color-filter"
              value={selectedColor}
              onChange={(event) => {
                setSelectedColor(event.target.value);
                setVisibleCount(PAGE_SIZE);
              }}
            >
              {colors.map((color) => (
                <option key={color} value={color}>
                  {capitalize(color)}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-block">
            <label className="filter-label" htmlFor="fabric-filter">
              Fabric
            </label>
            <select
              id="fabric-filter"
              value={selectedFabric}
              onChange={(event) => {
                setSelectedFabric(event.target.value);
                setVisibleCount(PAGE_SIZE);
              }}
            >
              {fabrics.map((fabric) => (
                <option key={fabric} value={fabric}>
                  {capitalize(fabric)}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-block">
            <label className="filter-label" htmlFor="occasion-filter">
              Occasion
            </label>
            <select
              id="occasion-filter"
              value={selectedOccasion}
              onChange={(event) => {
                setSelectedOccasion(event.target.value);
                setVisibleCount(PAGE_SIZE);
              }}
            >
              {occasions.map((occasion) => (
                <option key={occasion} value={occasion}>
                  {capitalize(occasion)}
                </option>
              ))}
            </select>
          </div>

          <button type="button" className="secondary-button" onClick={resetFilters}>
            Reset Filters
          </button>
        </aside>

        <div className="browse-results">
          <div className="browse-toolbar">
            <p>
              Showing <strong>{visibleProducts.length}</strong> of <strong>{filteredProducts.length}</strong> products
            </p>
            <div className="view-toggle">
              <button
                type="button"
                className={view === "grid" ? "is-active" : ""}
                onClick={() => setView("grid")}
              >
                Grid
              </button>
              <button
                type="button"
                className={view === "list" ? "is-active" : ""}
                onClick={() => setView("list")}
              >
                List
              </button>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="empty-state">
              <h3>No products matched your filters.</h3>
              <p>Try widening the price range, changing the color, or clearing the search term.</p>
              <button type="button" className="cta-button" onClick={resetFilters}>
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <div className={`browser-products ${view === "list" ? "browser-products-list" : ""}`}>
                {visibleProducts.map((product) => (
                  <div key={product.slug} className="browser-product-item">
                    <ProductCard {...product} href={`/product/${product.slug}`} view={view} />
                  </div>
                ))}
              </div>

              <div className="browse-footer">
                {canLoadMore ? (
                  <button
                    type="button"
                    className="cta-button"
                    onClick={() => setVisibleCount((current) => current + PAGE_SIZE)}
                  >
                    Load More
                  </button>
                ) : (
                  <p>You have reached the end of the current results.</p>
                )}

                <Link href="/collections" className="secondary-button">
                  View Full Collections
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function capitalize(value: string) {
  return value
    .split(" ")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
