import "../styles/hero.css";

import hero1 from "../assets/cloth1.jpg";
import hero2 from "../assets/cloth2.jpg";

const heroImages = [
    hero1,
    hero2
];

let currentImage = 0;

function startHeroSlider() {

    const hero = document.querySelector(".hero-section");

    if (!hero) return;

    if (window.heroSlider) {
        clearInterval(window.heroSlider);
    }

    window.heroSlider = setInterval(() => {

        currentImage = (currentImage + 1) % heroImages.length;

        hero.style.backgroundImage = `url('${heroImages[currentImage]}')`;

    }, 5000);

}

export default function Hero() {

    setTimeout(startHeroSlider, 100);

    return `
        <section
            class="hero-section"
            style="background-image:url('${heroImages[0]}')"
        >

            <div class="hero-overlay">

                <div class="hero-container">

                    <div class="hero-content">

                        <span class="hero-subtitle">
                            AFRICAN FASHION
                        </span>

                        <h1>
                            Prisca Classic 
                            <br>
                            Nigerian Wears
                        </h1>

                        <p>
                            Discover handcrafted African wear designed with
                            elegance, quality and timeless tradition.
                            Every outfit is tailored to celebrate culture,
                            confidence and individuality.
                        </p>

                        <div class="hero-buttons">

                            <a
                                href="/collection"
                                class="shop-btn"
                            >
                                Shop Collection
                            </a>

                            <a
                                href="/contact"
                                class="outline-btn"
                            >
                                Book Consultation
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    `;
}