import "../styles/about.css";
import aboutImage from "../assets/cloth5.jpg";

export default function About() {
    return `
        <section class="about-section" id="about">

            <div class="about-container">

                <div class="about-text">

                    <span class="about-subtitle">
                        ABOUT PRISCILLA FASHION
                    </span>

                    <h2 class="about-title">
                        Pick Your Best
                        <br>
                        Fashion Style
                    </h2>

                    <p class="about-description">
                        Welcome to Priscilla Beauty Fashion, where culture meets elegance.
                        We specialize in beautifully crafted African fashion that
                        blends tradition with modern style for every occasion.
                    </p>

                    <p class="about-description">
                        From native dresses to carefully selected
                        Nigerian home essentials, we are committed to providing
                        quality products that celebrate African heritage.
                    </p>

                    <a href="/collection" class="about-btn">
                        Explore Collection
                    </a>

                </div>

                <div class="about-image">

                    <img src="${aboutImage}" alt="African Fashion">

                </div>

            </div>

        </section>
    `;
}