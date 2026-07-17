import "../styles/navbar.css";
import logoImg from "../assets/FB.png";
import { getCartCount } from "../utils/cart";

export default function Navbar() {
    const cartCount = getCartCount();

    return `
        <header class="navbar-container">
            <nav class="navbar" role="navigation">
                <div class="navbar-top">
                    <div class="logo">
                        <a href="/" class="logo-link">
                            <img src="${logoImg}" alt="Jonadab Fashion">
                            <span>Priscilla Beauty</span>
                        </a>
                    </div>

                    <button class="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false">
                        ☰
                    </button>
                </div>

                <ul class="nav-links" id="navbar-menu">
                    <li>
                        <a href="/">Home</a>
                    </li>

                    <li>
                        <a href="/collection">Collection</a>
                    </li>

                    <li>
                        <a href="#services">Services</a>
                    </li>
                </ul>

                <div class="nav-actions">
                    <div class="contact-btn">
                        <a href="/contact">Contact Us</a>
                    </div>

                    <div class="cart-btn">
                        <a href="/cart" class="cart-link">
                            Cart
                            <span class="cart-count">${cartCount}</span>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    `;
}
