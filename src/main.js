import "./style.css";

import Home from "./page/Home";
import Contact from "./page/Contact";
import Collection from "./page/Collection";
import Product from "./page/Product";
import Cart from "./page/Cart";
import products from "./data/products";
import About from "./components/About";
import Policy from "./data/Policy";
import Footer from "./components/Footer";
import Refund from "./data/Refund";
import Terms from "./data/Terms";
import Navbar from "./components/Navbar";


import {
    addToCart,
    clearCart,
    getCart,
    removeFromCart,
    updateQuantity
} from "./utils/cart";

const contactRecipient = "priscillafashion@email.com";

const routes = {
    "/": Home,
    "/contact": Contact,
    "/collection": Collection,
    "/product": Product,
    "/cart": Cart,
    "/policy": Policy,
    "/refund": Refund,
    "/terms": Terms,

};

function render() {

    const Page = routes[window.location.pathname] || Home;

    document.querySelector("#app").innerHTML = 
    `
        ${Page()};
        ${Navbar()}
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

    const menuToggle = e.target.closest(".menu-toggle");
    if (menuToggle) {
        const navbarHeader = menuToggle.closest(".navbar-container");
        const isOpen = navbarHeader.classList.toggle("mobile-open");
        menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        return;
    }

    const link = e.target.closest("a");

    if (!link) return;

    const href = link.getAttribute("href");

    const navHeader = e.target.closest(".navbar-container");
    if (navHeader?.classList.contains("mobile-open")) {
        navHeader.classList.remove("mobile-open");
        const toggle = navHeader.querySelector(".menu-toggle");
        if (toggle) toggle.setAttribute("aria-expanded", "false");
    }

    if (!href.startsWith("/")) return;

    e.preventDefault();

    history.pushState({}, "", href);

    render();

});

document.addEventListener("submit", e => {
    const form = e.target.closest("[data-contact-form]");

    if (!form) return;

    e.preventDefault();

    const name = form.querySelector("#contact-name")?.value.trim() || "";
    const email = form.querySelector("#contact-email")?.value.trim() || "";
    const message = form.querySelector("#contact-message")?.value.trim() || "";

    const subject = `Contact form message from ${name || "Website visitor"}`;
    const bodyLines = [
        `Name: ${name || "N/A"}`,
        `Email: ${email || "N/A"}`,
        "",
        message || "No message provided."
    ];
    const body = bodyLines.join("\n");

    const isMobile = /Android|iPhone|iPad|iPod|webOS|BlackBerry|Windows Phone/i.test(navigator.userAgent);
    const gmailComposeUrl =
        `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactRecipient)}` +
        `&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const mailtoUrl =
        `mailto:${encodeURIComponent(contactRecipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    if (isMobile) {
        window.location.href = mailtoUrl;
        return;
    }

    const opened = window.open(gmailComposeUrl, "_blank", "noopener,noreferrer");

    if (!opened) {
        window.location.href = mailtoUrl;
    }
});

window.addEventListener("popstate", render);

render();
