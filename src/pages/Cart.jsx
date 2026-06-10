import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <main className="shop-page">
        <div className="container">
          <div className="cart-header" style={{ marginBottom: '40px', textAlign: 'center' }}>
            <h1 style={{ color: 'var(--text-primary)' }}>Your Cart is Empty</h1>
            <p style={{ color: 'var(--text-secondary)', marginTop: '10px', marginBottom: '30px' }}>Looks like you haven't added any exotic plants to your cart yet.</p>
            <Link to="/shop" className="btn btn-primary" style={{ padding: '15px 40px', borderRadius: '40px' }}>
              Return to Shop
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const subtotal = getCartTotal();
  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal + shipping;

  return (
    <main className="shop-page">
      <div className="container">
        <div className="cart-header">
          <h1>Your Cart</h1>
        </div>

        <div className="cart-layout" id="cart-main-layout">
          <div className="cart-items-wrapper" id="cart-items-list">
            {cart.map((item) => (
              <article key={item.id} className="cart-item" data-product-id={item.id}>
                <div className="cart-item-image">
                  <img src={item.img} alt={item.title} />
                </div>
                
                <div className="cart-item-details">
                  <h2>{item.title}</h2>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>
                </div>
                
                <div className="cart-item-quantity">
                  <div className="quantity-selector">
                    <button type="button" className="qty-btn item-minus" onClick={() => updateQuantity(item.id, -1)}>
                      <Minus size={16} />
                    </button>
                    <input type="number" className="item-qty" value={item.quantity} readOnly min="1" />
                    <button type="button" className="qty-btn item-plus" onClick={() => updateQuantity(item.id, 1)}>
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="cart-item-total">
                  <p className="item-total-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                
                <div className="cart-item-remove">
                  <button type="button" className="remove-btn" onClick={() => removeFromCart(item.id)} aria-label="Remove item">
                    <Trash2 size={20} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <aside className="cart-summary-sidebar">
            <div className="summary-card">
              <h2>Order Summary</h2>
              
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="summary-row">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              
              <div className="summary-row total-row">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              
              <button id="checkout-btn" className="btn btn-primary btn-checkout">
                Proceed to Checkout
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}