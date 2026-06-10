import { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { ShoppingBag, Menu, X } from 'lucide-react';
export default function Navbar() {
  const { getCartCount } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);
  return (
    <header className="site-header-premium">
      <nav className="navbar-premium">
        <Link to="/" className="brand-logo logo-premium-dynamic">
          <svg className="logo-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
          </svg>
          <div className="logo-text">
            <span className="logo-trailing">Trailing</span>
            <span className="logo-dreams">Dreams</span>
          </div>
        </Link>
        <button className="menu-button-premium" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className={`nav-menu-premium ${menuOpen ? 'open' : ''}`} style={menuOpen ? { right: 0 } : {}}>
          <ul className="nav-links-premium">
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/care">Care Guide</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="nav-actions-premium">
            <Link to="/cart" className="nav-cart-btn">
              <ShoppingBag size={20} />
              <span>Cart</span>
              {getCartCount() > 0 && <span className="cart-count-badge">{getCartCount()}</span>}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}