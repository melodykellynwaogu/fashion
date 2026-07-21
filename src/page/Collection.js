import products from "../data/products";
import ProductCard from "../components/ProductCard";

import "../styles/collection.css";

export default function Collection(includeNavbar = true){
    return `
        <section class="cloths-section">

            <div class="collection-header">

                <h2 class="cloths-title">
                    Our Collection
                </h2>

            </div>

            <p class="cloths-description">
                Explore Your Best In African Fashion Collection.

            </p>

            <div class="cloths-grid">

                ${products.map(ProductCard).join("")}

            </div>

        </section>

    `;

}
