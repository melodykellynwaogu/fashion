import clothsImage from "../assets/cloth1.jpg";
import clothsImage2 from "../assets/cloth2.jpg";
import clothsImage3 from "../assets/cloth3.jpg";
import clothsImage4 from "../assets/cloth4.jpg";
import clothsImage5 from "../assets/cloth5.jpg";
if (!clothsImage) {
    console.error("Failed to load clothsImage:", clothsImage);
}

export default function Cloths() {
    return `
        <section class="cloths-section">
            <h2>Our Collection</h2>
            <p>Explore our wide range of clothing options, from casual wear to formal attire. We have something for everyone!</p>

            <div class="cloths-grid">
                <div class="cloth-item">
                    <img src="${clothsImage}" alt="Cloth 1">
                    <h3>Cloth 1</h3>
                    <p>$29.99</p>
                </div>

                <div class="cloth-item">
                    <img src="${clothsImage2}" alt="Cloth 2">
                    <h3>Cloth 2</h3>
                    <p>$39.99</p>
                </div>

                <div class="cloth-item">
                    <img src="${clothsImage3}" alt="Cloth 3">
                    <h3>Cloth 3</h3>
                    <p>$49.99</p>
                </div>

                <div class="cloth-item">
                    <img src="${clothsImage4}" alt="Cloth 4">
                    <h3>Cloth 4</h3>
                    <p>$59.99</p>
                </div>

              <div class="cloth-item">
                    <img src="${clothsImage5}" alt="Cloth 4">
                    <h3>Cloth 5</h3>
                    <p>$59.99</p>
                </div>
//ou
                <!-- I'll Add more cloth items as needed -->
            </div>
        </section>
    `
}