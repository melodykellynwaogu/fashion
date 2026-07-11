import "../styles/services.css"

export default function Services() {
    return `
        <section class="services-section" id="services">

            <h2 class="section-title">Our Services</h2>

            <p class="section-description">
                We offer a variety of services to cater to your fashion needs.
                From custom tailoring to personal styling, we are here to help
                you look your best.
            </p>

            <div class="services-grid">

                <div class="service-item">
                    <h3 class="item-header">
                        Custom Tailoring
                        <span class="tag">Coming Soon</span>
                    </h3>

                    <p class="item-description">
                        Get your clothes tailored to fit you perfectly.
                        Our expert tailors ensure every outfit complements
                        your style and body shape.
                    </p>
                </div>

                <div class="service-item">
                    <h3 class="item-header">
                        Personal Styling
                    </h3>

                    <p class="item-description">
                        Our personal stylists help you choose outfits for
                        weddings, work, parties, church and everyday fashion,
                        creating a wardrobe that reflects your personality.
                    </p>
                </div>

                <div class="service-item">
                    <h3 class="item-header">
                        Fashion Consultation
                    </h3>

                    <p class="item-description">
                        Stay ahead of the latest fashion trends with guidance
                        from our experienced consultants. We'll help you build
                        confidence through timeless and modern styles.
                    </p>
                </div>

            </div>

        </section>
    `;
}


// should't be in a box but as stacks