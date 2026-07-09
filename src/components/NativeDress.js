import products from "../data/products";
import "../styles/NativeDress.css";

export default function NativeDress() {
    return `
        <section class="cloths-section">

            <h2 class="cloths-title">Our Collection</h2>

            <p class="cloths-description">
                Explore our beautiful collection of premium native dresses designed
                with elegance, comfort and African culture in mind.
            </p>

            <div class="cloths-grid">

                ${products.map(product => `
                    <div class="cloth-item">

                        <span class="sale-badge">
                            ${product.badge}
                        </span>

                        <div class="cloth-image">
                            <img src="${product.image}" alt="${product.name}">
                        </div>

                        <div class="cloth-info">

                            <h3>${product.name}</h3>

                            <p class="old-price">
                                ${product.oldPrice}
                            </p>

                            <p class="new-price">
                                ${product.price}
                            </p>

                            <button class="buy-button">
                                Buy Now
                            </button>

                        </div>

                    </div>
                `).join("")}

            </div>

        </section>
    `;
}