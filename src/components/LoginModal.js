import "../styles/login-modal.css";

export default function LoginModal() {
    return `
        <div class="login-modal-backdrop" data-login-modal-backdrop aria-hidden="true">
            <div class="login-modal" role="dialog" aria-modal="true" aria-labelledby="login-title">
                <button class="login-modal-close" type="button" data-action="close-login" aria-label="Close login">
                    ×
                </button>

                <div class="login-modal-grid">
                    <aside class="login-modal-aside">
                        <p class="login-kicker">Welcome back</p>
                        <h2 id="login-title">Sign in to your account</h2>
                        <p class="login-copy">
                            Access saved styles, order updates, and private offers from Priscilla Beauty.
                        </p>

                        <ul class="login-benefits">
                            <li>Track your orders</li>
                            <li>Save favorite designs</li>
                            <li>Get early access to new arrivals</li>
                        </ul>
                    </aside>

                    <div class="login-modal-content">
                        <form class="login-form" data-login-form>
                            <label class="login-field">
                                <span>Email</span>
                                <input type="email" name="email" placeholder="you@example.com" required>
                            </label>

                            <label class="login-field">
                                <span>Password</span>
                                <input type="password" name="password" placeholder="Enter your password" required>
                            </label>

                            <button class="login-submit" type="submit">Sign in</button>

                            <p class="login-legal">
                                By signing in you agree to our Terms and Privacy Policy.
                            </p>
                        </form>

                        <p class="login-message" data-login-message></p>
                    </div>
                </div>
            </div>
        </div>
    `;
}
