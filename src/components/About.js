import "../styles/About.css";
import clothImg from "../assets/cloth1.jpg";

export default function About() {
    return `
    
        <section class="about-section" id="about">
            <div class="about-text-container">
                <h2 class="section-title">PICK YOUR BEST <br> FASHION</h2>
                <p class="section-description">Welcome to our fashion store! We specialize in providing the latest trends in clothing and accessories.</p>
                <p class="section-description">We deal with different types of native fashion dress - And other Nigerians home usage</p>
            </div>
            <div class="about-image">
                <img src="${clothImg}" alt="Fashion Store" />
            </div>
        </section>
    `;
}