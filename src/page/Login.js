import "../styles/login.css";

export default function Login() {
    return `
        <section class="login-page">
            <div class="login-page-card">
                <aside class="login-page-aside">
                    <p class="login-kicker">Welcome back</p>
                    <h1 id="login-title">Sign in to your account</h1>
                    <p class="login-copy">
                        Access saved styles, order updates, and private offers from Priscilla Beauty.
                    </p>

                    <ul class="login-benefits">
                        <li>Track your orders</li>
                        <li>Save favorite designs</li>
                        <li>Get early access to new arrivals</li>
                    </ul>

                    <a href="/" class="login-home-link">← Back to home</a>
                </aside>

                <div class="login-page-content">
                    <p class="login-page-badge">Member access</p>

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
        </section>
    `;
}
