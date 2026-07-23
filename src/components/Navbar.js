import "../styles/navbar.css";
import logoImg from "../assets/originallogo.png";
import { getCartCount } from "../utils/cart";
 
const personIcon = `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 12a4.5 4.5 0 1 0-4.5-4.5A4.5 4.5 0 0 0 12 12Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z"></path>
    </svg>
`;

const searchIcon = `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M10.5 4a6.5 6.5 0 1 0 4.02 11.61l4.44 4.44 1.41-1.41-4.44-4.44A6.5 6.5 0 0 0 10.5 4Zm0 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z"></path>
    </svg>
`;

export default function Navbar() {
    const cartCount = getCartCount();

    return `
        <header class="navbar-container">
            <nav class="navbar" role="navigation">
                <div class="navbar-top">
                    <div class="logo">
                        <a href="/" class="logo-link">
                            <img src="${logoImg}" alt="Jonadab Fashion">
                            <span>Prisca Fashion</span>
                        </a>
                    </div>

                    <button class="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false">
                        ☰
                    </button>
                </div>

                <div class="nav-drawer">
                    <div class="drawer-head">
                        <span class="drawer-title">Menu</span>

                        <button
                            class="menu-toggle drawer-close"
                            type="button"
                            aria-label="Close navigation"
                            aria-expanded="true"
                        >
                            ×
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
                            <a href="#arrival">New Arrival</a>
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

                    <div class="action-red">
                        <a href="/login" class="icon-link login-link" aria-label="Login">
                            ${personIcon}
                        </a>

                        <button
                            type="button"
                            class="icon-button search-btn"
                            aria-label="Search"
                            data-action="toggle-search"
                        >
                            ${searchIcon}
                        </button>

                        <form class="search-form" data-search-form>
                            <input
                                type="search"
                                name="q"
                                class="search-input"
                                placeholder="Search products..."
                                aria-label="Search products"
                            >
                        </form>
                    </div>
                </div>
            </nav>

            <button class="nav-backdrop" type="button" aria-label="Close navigation"></button>
        </header>
    `;
}
