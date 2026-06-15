import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="site-footer-premium">
      <div className="footer-top">
        <div className="container">
          <div className="footer-newsletter">
            <div className="newsletter-text">
              <h3>Join Our Green Community</h3>
              <p>Subscribe to receive plant care tips, exclusive offers, and early access to new arrivals.</p>
            </div>
            {isSubscribed ? (
              <div style={{ padding: '15px 20px', background: 'var(--accent-olive)', color: 'white', borderRadius: '30px', fontWeight: 'bold' }}>
                🌿 Thanks for subscribing! Welcome to the community.
              </div>
            ) : (
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
                <button type="submit" className="btn-newsletter">Subscribe</button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-brand">
            <h2 className="footer-logo">
              <span className="logo-trailing">Trailing</span>
              <span className="logo-dreams">Dreams</span>
            </h2>
            <p className="brand-desc">
              Curated botanical collections for the modern plant lover. We bring the outdoors in, transforming your urban space into a thriving indoor jungle.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop All Plants</Link></li>
              <li><Link to="/care">Care Guides</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Customer Service</h3>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/terms">Shipping Policy</Link></li>
              <li><Link to="/contact">FAQ</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Info</h3>
            <ul>
              <li>
                <MapPin size={16} className="contact-icon" />
                <span>123 Botanical Ave, Tyler, TX</span>
              </li>
              <li>
                <Phone size={16} className="contact-icon" />
                <span>+1 (903) 555-0199</span>
              </li>
              <li>
                <Mail size={16} className="contact-icon" />
                <span>info@trailingdreams.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Trailing Dreams. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/terms">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}