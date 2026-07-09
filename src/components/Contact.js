export default function Contact() {
    return `
        <section class="contact-section" id="contact">
            <h2>Contact Us</h2>
            <p>If you have any questions or inquiries, feel free to reach out to us. We would love to hear from you!</p>

            <form class="contact-form">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>

                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="5" required></textarea>

                <button type="submit">Send Message</button>
            </form>
        </section>
    `;
}