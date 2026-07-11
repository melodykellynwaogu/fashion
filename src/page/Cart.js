import Navbar from "../components/Navbar";
import "../styles/cart.css";
import { getCart, getCartTotal } from "../utils/cart";

function formatMoney(value) {
    return Number(value).toFixed(2);
}

export default function Cart() {
    const cart = getCart();
    const total = getCartTotal();

    if (!cart.length) {
        return `
            ${Navbar()}
            <section class="cart-page">
                <div class="cart-header">
                    <a href="/collection" class="page-back-link">← Continue shopping</a>
                    <h1>Your Cart</h1>
                </div>

                <div class="cart-empty-state">
                    <h2>Your cart is empty</h2>
                    <p>Add an item from the collection to start building your order.</p>
                    <a href="/collection" class="checkout-link">Browse Collection</a>
                </div>
            </section>
        `;
    }

    return `
        ${Navbar()}
        <section class="cart-page">
            <div class="cart-header">
                <a href="/collection" class="page-back-link">← Continue shopping</a>
                <h1>Your Cart</h1>
            </div>

            <div class="cart-layout">
                <div class="cart-items">
                    ${cart
                        .map(
                            item => `
                                <article class="cart-item">
                                    <img src="${item.image}" alt="${item.title}">

                                    <div class="cart-item-details">
                                        <h3>${item.title}</h3>
                                        <p class="cart-item-price">${item.newPrice}</p>

                                        <div class="quantity-row">
                                            <button
                                                type="button"
                                                data-action="decrease-quantity"
                                                data-id="${item.id}"
                                            >
                                                -
                                            </button>

                                            <span>${item.quantity}</span>

                                            <button
                                                type="button"
                                                data-action="increase-quantity"
                                                data-id="${item.id}"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        class="remove-item-button"
                                        data-action="remove-from-cart"
                                        data-id="${item.id}"
                                    >
                                        Remove
                                    </button>
                                </article>
                            `
                        )
                        .join("")}
                </div>

                <aside class="cart-summary">
                    <h2>Order Summary</h2>

                    <div class="summary-row">
                        <span>Items</span>
                        <span>${cart.reduce((count, item) => count + item.quantity, 0)}</span>
                    </div>

                    <div class="summary-row total-row">
                        <span>Total</span>
                        <strong>$${formatMoney(total)}</strong>
                    </div>

                    <button
                        type="button"
                        class="clear-cart-button"
                        data-action="clear-cart"
                    >
                        Clear Cart
                    </button>

                    <a href="/contact" class="checkout-link">Checkout</a>
                </aside>
            </div>
        </section>
    `;
}
