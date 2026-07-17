import Navbar from "../components/Navbar";
import "../styles/contact.css";

export default function Contact() {
    return `
        ${Navbar()}
        <section class="contact-section">
            <a href="/" class="go-back-btn">Back</a>

            <div class="contact-header">
                <h1>Get In Touch</h1>
                <p>
                    We'd love to hear from you. Whether you have a question about
                    our products, custom tailoring, or your order, our team is here
                    to help.
                </p>
            </div>

            <div class="contact-container">

                <!-- Contact Form -->
                <div class="contact-form">

                    <h2>Send us a Message</h2>

                    <form class="contact-form-element" data-contact-form>

                        <div class="input-group">
                            <label for="contact-name">Name</label>
                            <input
                                id="contact-name"
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                required
                            >
                        </div>

                        <div class="input-group">
                            <label for="contact-email">Email</label>
                            <input
                                id="contact-email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                required
                            >
                        </div>

                        <div class="input-group">
                            <label for="contact-message">Message</label>
                            <textarea
                                id="contact-message"
                                name="message"
                                rows="6"
                                placeholder="Write your message..."
                                required
                            ></textarea>
                        </div>

                        <button type="submit" data-contact-submit>
                            Send Message
                        </button>

                    </form>

                </div>

                <!-- Contact Information -->
                <div class="contact-info">

                    <h2>Contact Information</h2>

                    <div class="info-box">
                        <h3>Phone</h3>
                        <p>+265 99-6724-948</p>
                    </div>

                    <div class="info-box">
                        <h3>Email</h3>
                        <p>priscillafashion@email.com</p>
                    </div>

                    <div class="info-box">
                        <h3>Address</h3>
                        <p>36 Chroma, Lilongwe, Malawi</p>
                    </div>

                    <div class="info-box">
                        <h3>Business Hours</h3>
                        <p>Monday - Saturday</p>
                        <p>8:00 AM - 6:00 PM</p>
                    </div>

                    <div class="social-links">

                        <h3>Chat or Follow Us</h3>

                        <a href="#">WhatsApp</a>

                        <a href="#">Facebook</a>

                    </div>

                </div>

            </div>

        </section>
    `;
}
