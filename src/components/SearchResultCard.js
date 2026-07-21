import "../styles/search-results.css";

export default function SearchResultCard(product) {
    return `
        <article class="search-result-card">
            <a href="/product?id=${product.id}" class="search-result-media">
                <img src="${product.image}" alt="${product.title}">
            </a>

            <div class="search-result-content">
                <span class="search-result-badge">${product.badge || "Featured"}</span>
                <h3 class="search-result-title">${product.title}</h3>
                <p class="search-result-category">${product.category}</p>
                <p class="search-result-description">${product.description}</p>

                <div class="search-result-prices">
                    <span class="search-result-old">${product.oldPrice}</span>
                    <span class="search-result-new">${product.newPrice}</span>
                </div>

                <div class="search-result-actions">
                    <a href="/product?id=${product.id}" class="search-result-button search-result-secondary">
                        View Details
                    </a>

                    <button
                        type="button"
                        class="search-result-button search-result-primary"
                        data-action="add-to-cart"
                        data-product-id="${product.id}"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </article>
    `;
}
