import products from "../data/products";
import "../styles/product.css";

export default function Product() {
    const params = new URLSearchParams(window.location.search);
    const productId = Number(params.get("id"));
    const product = products.find(item => item.id === productId);

    if (!product) {
        return `
            <section class="product-page">
                <a href="/collection" class="page-back-link">← Back to collection</a>
                <div class="product-empty-state">
                    <h1>Product not found</h1>
                    <p>This item may have been removed or the link is invalid.</p>
                </div>
            </section>
        `;
    }

    return `
        <section class="product-page">
            <a href="/" class="page-back-link">← Back Home</a>

            <div class="product-layout">
                <div class="product-visual">
                    <img src="${product.image}" alt="${product.title}">
                    <span class="product-badge">${product.badge || ""}</span>
                </div>

                <div class="product-details">
                    <p class="product-category">${product.category}</p>
                    <h1>${product.title}</h1>
                    <p class="product-description">${product.description}</p>

                    <div class="price-row">
                        <span class="old-price">${product.oldPrice}</span>
                        <span class="new-price">${product.newPrice}</span>
                    </div>

                    <div class="product-actions">
                        <button
                            type="button"
                            class="add-cart-button"
                            data-action="add-to-cart"
                            data-product-id="${product.id}"
                        >
                            Add to Cart
                        </button>

                        <a href="/cart" class="view-cart-link">View Cart</a>
                    </div>

                    <div>
                        <button
                            type="button"
                            class="buy-now-button"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    `;
}
