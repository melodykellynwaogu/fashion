import "../styles/productcard.css";

export default function ProductCard(product) {

    return `

        <a
            href="/product?id=${product.id}"
            class="product-card"
        >

            <span class="sale-badge">
                ${product.badge || ""}
            </span>

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.title}"
                >

            </div>

            <div class="product-info">

                <h3>${product.title}</h3>

                <p class="old-price">
                    ${product.oldPrice}
                </p>

                <p class="new-price">
                    ${product.newPrice}
                </p>

                <button class="buy-button">
                    View Details
                </button>

            </div>

        </a>

    `;

}