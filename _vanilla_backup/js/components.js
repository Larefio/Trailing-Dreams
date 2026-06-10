const navbarHTML = `<header class="site-header-premium">
      <nav class="navbar-premium" aria-label="Main Navigation">
        <a href="index.html" class="brand-logo logo-premium-dynamic">
          <svg class="logo-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
          </svg>
          <div class="logo-text">
            <span class="logo-trailing">Trailing</span>
            <span class="logo-dreams">Dreams</span>
          </div>
        </a>

        <input type="checkbox" id="menu-toggle" class="menu-checkbox" />
        <label for="menu-toggle" class="menu-button-premium" aria-label="Toggle menu">
          <span class="hamburger-premium"></span>
        </label>

        <div class="nav-menu-premium">
          <ul class="nav-links-premium">
            <li><a href="shop.html">Shop</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="care.html">Care Guide</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
          <div class="nav-actions-premium">
            <a href="cart.html" class="nav-cart-btn" aria-label="View Cart">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              Cart
            </a>
          </div>
        </div>
      </nav>
    </header>`;
const footerHTML = `<footer class="site-footer-premium">
      <div class="container">
        <div class="footer-top-section">
          <div class="footer-newsletter">
            <h2>Join Our Jungle</h2>
            <p>Subscribe to our newsletter for exclusive plant care tips, new arrivals, and special offers.</p>
            <form class="newsletter-form" action="#" method="POST">
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit" class="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
        <div class="footer-grid-premium">
          <div class="footer-brand">
            <img src="img/logo.svg" alt="Trailing Dreams Logo" class="footer-logo" />
            <p>We connect your home with nature. Specialists in unique species, exotic plants, and premium tools for their daily care.</p>
            <div class="social-icons">
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="Pinterest">PT</a>
            </div>
          </div>
          <div class="footer-links">
            <h3>Explore</h3>
            <ul>
              <li><a href="shop.html">Shop Catalog</a></li>
              <li><a href="about.html">Our Story</a></li>
              <li><a href="care.html">Care Guide</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h3>Support</h3>
            <ul>
              <li><a href="contact.html">Contact Us</a></li>
              <li><a href="terminos.html#envios">Shipping & Returns</a></li>
              <li><a href="terminos.html#privacidad">Privacy Policy</a></li>
            </ul>
          </div>
          <div class="footer-contact">
            <h3>Get in Touch</h3>
            <p><strong>Email:</strong><br><a href="mailto:info@trailingdreams.com">info@trailingdreams.com</a></p>
            <p><strong>WhatsApp:</strong><br><a href="https://wa.me/51999999999" target="_blank" rel="noopener noreferrer">+51 999 999 999</a></p>
            <p><strong>Location:</strong><br>Tyler, Tx</p>
          </div>
        </div>
        <div class="footer-bottom-premium">
          <p>&copy; 2026 Trailing Dreams – Plants and Things. All rights reserved.</p>
        </div>
      </div>
    </footer>`;

document.addEventListener("DOMContentLoaded", () => {
  const navContainer = document.getElementById("navbar-placeholder");
  const footContainer = document.getElementById("footer-placeholder");
  
  if (navContainer) navContainer.innerHTML = navbarHTML;
  if (footContainer) footContainer.innerHTML = footerHTML;
});