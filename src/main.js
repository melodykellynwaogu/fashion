import "./style.css";

import Home from "./page/Home";
import Contact from "./page/Contact";
import Collection from "./page/Collection";
import Product from "./page/Product";
import Cart from "./page/Cart";
import products from "./data/products";
import About from "./components/About";
import Footer from "./components/Footer";

import {
    addToCart,
    clearCart,
    getCart,
    removeFromCart,
    updateQuantity
} from "./utils/cart";

const routes = {
    "/": Home,
    "/contact": Contact,
    "/collection": Collection,
    "/product": Product,
    "/cart": Cart,

};

function render() {

    const Page = routes[window.location.pathname] || Home;

    document.querySelector("#app").innerHTML = 
    `
        ${Page()};
        ${Footer()}
    `
}

document.addEventListener("click", e => {

    const actionButton = e.target.closest("[data-action]");

    if (actionButton) {

        const action = actionButton.getAttribute("data-action");
        const id = Number(actionButton.getAttribute("data-id"));
        const productId = Number(actionButton.getAttribute("data-product-id"));

        if (action === "add-to-cart") {
            const product = products.find(item => item.id === productId);
            if (product) {
                addToCart(product);
            }
        }

        if (action === "increase-quantity") {
            const item = getCart().find(cartItem => cartItem.id === id);
            if (item) {
                updateQuantity(id, item.quantity + 1);
            }
        }

        if (action === "decrease-quantity") {
            const item = getCart().find(cartItem => cartItem.id === id);
            if (item) {
                if (item.quantity <= 1) {
                    removeFromCart(id);
                } else {
                    updateQuantity(id, item.quantity - 1);
                }
            }
        }

        if (action === "remove-from-cart") {
            removeFromCart(id);
        }

        if (action === "clear-cart") {
            clearCart();
        }

        window.dispatchEvent(new PopStateEvent("popstate"));

        return;
    }

    const link = e.target.closest("a");

    if (!link) return;

    const href = link.getAttribute("href");

    if (!href.startsWith("/")) return;

    e.preventDefault();

    history.pushState({}, "", href);

    render();

});

window.addEventListener("popstate", render);

render();
