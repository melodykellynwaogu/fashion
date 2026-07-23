import products from "../data/ArrivalProducts";
import "../styles/arrival.css";

export default function Arrival() {
  return `
    <section class="arrival-page">

        <div class="arrival-header">
            <h1 class="arrival-title">New Arrivals</h1>
        </div>

        <div class="arrival-toolbar">

            <div class="arrival-count">
                ${products.length} Products
            </div>

            <button class="shuffle-btn">
                Shuffle Products
            </button>

        </div>

        <div class="arrival-grid">

            ${products
              .map(
                (product) => `
                    <article class="arrival-card">

                        ${
                          product.badge
                            ? `<span class="arrival-badge">${product.badge}</span>`
                            : ""
                        }

                        <div class="arrival-image">
                            <img src="${product.image}" alt="${product.title}">
                        </div>

                        <div class="arrival-details">

                            <p class="arrival-category">
                                ${product.category}
                            </p>

                            <h3 class="arrival-name">
                                ${product.title}
                            </h3>

                            <div class="arrival-price">
                                <span class="old-price">
                                    ${product.oldPrice}
                                </span>

                                <span class="new-price">
                                    ${product.newPrice}
                                </span>
                            </div>

                            <button class="arrival-btn">
                                Buy Now
                            </button>

                        </div>

                    </article>
                `
              )
              .join("")}

        </div>

    </section>
  `;
}