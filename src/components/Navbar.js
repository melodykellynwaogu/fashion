import "../styles/navbar.css";
import logoImg from "../assets/logo.png";
import { getCartCount } from "../utils/cart";

export default function Navbar() {
    const cartCount = getCartCount();

    return `
        <header class="navbar-container">

            <nav class="navbar">

                <div class="logo">

                    <a href="/" class="logo-link">

                        <img src="${logoImg}" alt="Jonadab Fashion">

                        <span>Jonadab Fashion</span>

                    </a>

                </div>

                <ul class="nav-links">

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

                <div class="contact-btn">

                    <a href="/contact">
                        Contact Us
                    </a>

                </div>

                <div class="cart-btn">
                
                    <a href="/cart" class="cart-link">
                        Cart
                        <span class="cart-count">${cartCount}</span>
                    </a>
                </div>

            </nav>

        </header>
    `;
}
