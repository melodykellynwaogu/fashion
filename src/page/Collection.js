import products from "../data/products";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

import "../styles/collection.css";

export default function Collection(){

    return `
        ${Navbar()}

        <section class="cloths-section">

            <div class="collection-header">

                <h2 class="cloths-title">
                    Our Collection
                </h2>

            </div>

            <p class="cloths-description">

                Explore our premium African fashion collection.

            </p>

            <div class="cloths-grid">

                ${products.map(ProductCard).join("")}

            </div>

        </section>

    `;

}
