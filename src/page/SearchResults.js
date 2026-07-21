import products from "../data/products";
import SearchResultCard from "../components/SearchResultCard";
import searchProducts from "../utils/searchProducts";
import "../styles/search-results.css";

export default function SearchResults() {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("q") || "";
    const results = searchProducts(products, query);

    return `
        <section class="search-page">
            <div class="search-page-header">
                <span class="search-page-kicker">Search Results</span>
                <h1>Results for "${query || "all products"}"</h1>
                <p>
                    ${results.length
                        ? `We found ${results.length} matching design${results.length === 1 ? "" : "s"} for your search.`
                        : "No products matched your search. Try a different name or browse the full collection."}
                </p>
            </div>

            <div class="search-page-actions">
                <a href="/collection" class="search-page-link">Browse all products</a>
            </div>

            <div class="search-results-list">
                ${results.length
                    ? results.map(SearchResultCard).join("")
                    : `
                        <div class="search-empty-state">
                            <h2>No results found</h2>
                            <p>Try another keyword, like a cloth name or category.</p>
                        </div>
                    `}
            </div>
        </section>
    `;
}
