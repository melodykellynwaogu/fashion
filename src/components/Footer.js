import "../styles/footer.css";


export default function Footer() {
    return `
        <footer class="modern-footer">

            <div class="footer-container">

                <h2 class="footer-logo">
                    PRISCILLA BEAUTY
                </h2>

                <ul class="footer-links">
                    <li><a href="/refund">Refund Policy</a></li>
                    <li><a href="/policy">Privacy Policy</a></li>
                    <li><a href="/terms">Terms of Service</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>

                <p class="copyright">
                    © ${new Date().getFullYear()} Priscilla Beauty.
                    All rights reserved.
                </p>

            </div>
        </footer>
    `;
}