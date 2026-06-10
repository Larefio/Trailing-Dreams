import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
export default function Cart() {
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useContext(CartContext);
  if (cart.length === 0) {
    return (
      <main className="cart-page" style={{ padding: '160px 20px', textAlign: 'center', minHeight: '60vh' }}>
        <h1 style={{ fontSize: '36px', color: 'var(--text-primary)', marginBottom: '20px' }}>Your Cart is Empty</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>Looks like you haven't added any beautiful plants to your cart yet.</p>
        <Link to="/shop" className="btn" style={{ background: 'var(--accent-terracotta)', color: '#fff', padding: '15px 40px', borderRadius: '40px', fontWeight: 'bold' }}>
          Continue Shopping
        </Link>
      </main>
    );
  }
  return (
    <main className="cart-page" style={{ padding: '140px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '36px', color: 'var(--text-primary)', marginBottom: '40px' }}>Your Shopping Cart</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '40px' }} className="cart-layout">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {cart.map((item) => (
            <div key={item.id} style={{ display: 'flex', gap: '20px', padding: '20px', background: '#fff', borderRadius: '24px', boxShadow: '0 10px 30px rgba(255, 155, 134, 0.05)', alignItems: 'center' }}>
              <img src={item.img} alt={item.title} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '16px' }} />
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ color: 'var(--accent-terracotta)', fontWeight: 'bold' }}>${item.price.toFixed(2)}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', background: 'var(--bg-primary)', padding: '10px', borderRadius: '40px' }}>
                <button onClick={() => updateQuantity(item.id, -1)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}><Minus size={18} /></button>
                <span style={{ fontWeight: 'bold', color: 'var(--text-primary)', width: '20px', textAlign: 'center' }}>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}><Plus size={18} /></button>
              </div>
              <button onClick={() => removeFromCart(item.id)} style={{ border: 'none', background: 'rgba(255, 155, 134, 0.1)', padding: '15px', borderRadius: '50%', cursor: 'pointer', color: 'var(--accent-terracotta)', marginLeft: '20px' }}>
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}