import products from "../data/ArrivalProducts";
import "../styles/arrival.css";

function shuffleItems(items) {
    return [...items].sort(() => Math.random() - 0.5);
}

export default function Arrival() {
  const sortedProducts = window.__arrivalShuffle ? shuffleItems(products) : products;

  return `
    <section class="arrival-page">
        <div class="arrival-hero">
            <p class="arrival-kicker">Fresh drop</p>
            <h1 class="arrival-title">New Arrivals</h1>
            <p class="arrival-intro">
                Explore the latest additions to our collection. Each piece is designed to feel elegant, modern, and effortless.
            </p>
        </div>

        <div class="arrival-toolbar">
            <div class="arrival-count">
                ${products.length} designs
            </div>

            <button class="shuffle-btn" type="button" data-action="shuffle-arrivals">
                Shuffle Collection
            </button>
        </div>

        <div class="arrival-grid">
            ${sortedProducts
              .map(
                (product) => `
                    <article class="arrival-card">
                        ${product.badge ? `<span class="arrival-badge">${product.badge}</span>` : ""}

                        <div class="arrival-image">
                            <img src="${product.image}" alt="${product.title}">
                        </div>

                        <div class="arrival-details">
                            <p class="arrival-category">${product.category}</p>
                            <h3 class="arrival-name">${product.title}</h3>
                            <p class="arrival-description">
                                ${product.description || "A fresh design from our latest fashion drop."}
                            </p>

                            <div class="arrival-price">
                                <span class="old-price">${product.oldPrice}</span>
                                <span class="new-price">${product.newPrice}</span>
                            </div>

                            <div class="arrival-actions">
                                <button
                                    class="arrival-btn arrival-btn-primary"
                                    type="button"
                                    data-action="add-to-cart"
                                    data-product-id="${product.id}"
                                >
                                    Add to Cart
                                </button>

                                <a href="/product?id=${product.id}" class="arrival-btn arrival-btn-secondary">
                                    View
                                </a>
                            </div>
                        </div>
                    </article>
                `
              )
              .join("")}
        </div>
    </section>
  `;
}
