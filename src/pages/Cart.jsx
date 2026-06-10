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

        <div className="cart-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '40px' }}>
          <div className="cart-items-wrapper">
            {cart.map((item) => (
              <article key={item.id} className="cart-item" style={{ 
                background: '#fff', 
                borderRadius: '24px', 
                boxShadow: '0 10px 30px rgba(255, 155, 134, 0.05)', 
                marginBottom: '20px', 
                padding: '20px',
                display: 'grid',
                gridTemplateColumns: '100px 2fr 1fr 1fr auto',
                gap: '20px',
                alignItems: 'center'
              }}>
                <div className="cart-item-image">
                  <img src={item.img} alt={item.title} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '16px' }} />
                </div>
                
                <div className="cart-item-details">
                  <h2 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '5px' }}>{item.title}</h2>
                  <p className="cart-item-price" style={{ color: 'var(--accent-terracotta)', fontWeight: 'bold' }}>\${item.price.toFixed(2)}</p>
                </div>
                
                <div className="cart-item-quantity">
                  <div className="quantity-selector" style={{ display: 'flex', alignItems: 'center', gap: '15px', background: 'var(--bg-primary)', padding: '10px 15px', borderRadius: '40px', width: 'fit-content' }}>
                    <button type="button" className="qty-btn" onClick={() => updateQuantity(item.id, -1)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}>
                      <Minus size={18} />
                    </button>
                    <span className="item-qty" style={{ fontWeight: 'bold', color: 'var(--text-primary)', minWidth: '20px', textAlign: 'center' }}>
                      {item.quantity}
                    </span>
                    <button type="button" className="qty-btn" onClick={() => updateQuantity(item.id, 1)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}>
                      <Plus size={18} />
                    </button>
                  </div>
                </div>
                
                <div className="cart-item-total">
                  <p className="item-total-price" style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--text-primary)' }}>
                    \${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                
                <div className="cart-item-remove">
                  <button type="button" className="remove-btn" onClick={() => removeFromCart(item.id)} style={{ border: 'none', background: 'rgba(255, 155, 134, 0.1)', padding: '15px', borderRadius: '50%', cursor: 'pointer', color: 'var(--accent-terracotta)' }}>
                    <Trash2 size={20} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <aside className="cart-summary-sidebar">
            <div className="summary-card" style={{ background: '#fff', padding: '40px', borderRadius: '32px', boxShadow: '0 10px 30px rgba(146, 188, 161, 0.1)' }}>
              <h2 style={{ fontSize: '24px', color: 'var(--text-primary)', marginBottom: '30px' }}>Order Summary</h2>
              
              <div className="summary-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', color: 'var(--text-secondary)' }}>
                <span>Subtotal</span>
                <span>\${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="summary-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px', color: 'var(--text-secondary)' }}>
                <span>Shipping</span>
                <span>\${shipping.toFixed(2)}</span>
              </div>
              
              <div className="summary-row total-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px', fontSize: '20px', fontWeight: 'bold', color: 'var(--text-primary)', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '20px' }}>
                <span>Total</span>
                <span>\${total.toFixed(2)}</span>
              </div>
              
              <button id="checkout-btn" className="btn btn-primary btn-checkout" style={{ width: '100%', background: 'var(--accent-olive)', color: '#fff', padding: '18px', border: 'none', borderRadius: '40px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                Proceed to Checkout <ArrowRight size={20} />
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}