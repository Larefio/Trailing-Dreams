import { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { CartContext } from '../context/CartContext';
import { CheckCircle, CreditCard, Truck, ChevronRight, ChevronLeft, ShoppingBag, Lock, Leaf } from 'lucide-react';

const stepVariants = {
  initial: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  animate: { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60, transition: { duration: 0.25, ease: 'easeIn' } }),
};

export default function Checkout() {
  const { cart, getCartTotal, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [dir, setDir] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderDone, setOrderDone] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '',
    address: '', city: '', zip: '',
    cardNumber: '', expiry: '', cvv: ''
  });

  useEffect(() => {
    if (cart.length === 0 && !orderDone) navigate('/cart');
  }, [cart, navigate, orderDone]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'cardNumber') {
      const cleaned = value.replace(/\D/g, '').slice(0, 16);
      const formatted = cleaned.replace(/(.{4})/g, '$1 ').trim();
      setFormData(prev => ({ ...prev, cardNumber: formatted }));
      return;
    }
    
    if (name === 'expiry') {
      const cleaned = value.replace(/\D/g, '').slice(0, 4);
      const formatted = cleaned.length > 2 ? `${cleaned.slice(0,2)}/${cleaned.slice(2)}` : cleaned;
      setFormData(prev => ({ ...prev, expiry: formatted }));
      return;
    }
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const goNext = (e) => {
    e.preventDefault();
    setDir(1);
    setStep(2);
  };

  const goPrev = () => {
    setDir(-1);
    setStep(1);
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setOrderDone(true);
      clearCart();
      setDir(1);
      setStep(3);
    }, 2500);
  };

  const subtotal = getCartTotal();
  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal + shipping;

  return (
    <motion.main
      className="checkout-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="checkout-wrapper">

        <div className="checkout-left">
          <div className="checkout-brand">
            <Leaf size={28} color="var(--accent-olive)" />
            <span>Trailing Dreams</span>
          </div>

          {step < 3 && (
            <>
              
              <div className="checkout-steps">
                <div className={`cs-step ${step >= 1 ? 'active' : ''}`}>
                  <div className="cs-dot"><Truck size={14} /></div>
                  <span>Shipping</span>
                </div>
                <div className="cs-line" />
                <div className={`cs-step ${step >= 2 ? 'active' : ''}`}>
                  <div className="cs-dot"><CreditCard size={14} /></div>
                  <span>Payment</span>
                </div>
              </div>

              <AnimatePresence mode="wait" custom={dir}>
                {step === 1 && (
                  <motion.form
                    key="step1"
                    custom={dir}
                    variants={stepVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    onSubmit={goNext}
                    className="checkout-form"
                  >
                    <h2>Shipping Details</h2>
                    <div className="form-row-2">
                      <div className="checkout-field">
                        <label>First Name</label>
                        <input name="firstName" placeholder="Ana" value={formData.firstName} onChange={handleChange} required />
                      </div>
                      <div className="checkout-field">
                        <label>Last Name</label>
                        <input name="lastName" placeholder="García" value={formData.lastName} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="checkout-field">
                      <label>Email Address</label>
                      <input name="email" type="email" placeholder="ana@correo.com" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="checkout-field">
                      <label>Street Address</label>
                      <input name="address" placeholder="Calle Rosales 42" value={formData.address} onChange={handleChange} required />
                    </div>
                    <div className="form-row-2">
                      <div className="checkout-field">
                        <label>City</label>
                        <input name="city" placeholder="Lima" value={formData.city} onChange={handleChange} required />
                      </div>
                      <div className="checkout-field">
                        <label>Zip Code</label>
                        <input name="zip" placeholder="15001" value={formData.zip} onChange={handleChange} required maxLength="8" />
                      </div>
                    </div>
                    <button type="submit" className="checkout-btn-primary">
                      Continue to Payment <ChevronRight size={18} />
                    </button>
                  </motion.form>
                )}

                {step === 2 && (
                  <motion.form
                    key="step2"
                    custom={dir}
                    variants={stepVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    onSubmit={handlePayment}
                    className="checkout-form"
                  >
                    <h2>Payment Details</h2>
                    <div className="checkout-secure-badge">
                      <Lock size={14} /> 100% Secure Payment
                    </div>
                    <div className="checkout-field">
                      <label>Card Number</label>
                      <div className="card-input-wrapper">
                        <input name="cardNumber" placeholder="0000 0000 0000 0000" value={formData.cardNumber} onChange={handleChange} required maxLength="19" />
                        <CreditCard size={20} className="card-icon" />
                      </div>
                    </div>
                    <div className="form-row-2">
                      <div className="checkout-field">
                        <label>Expiry Date</label>
                        <input name="expiry" placeholder="MM/AA" value={formData.expiry} onChange={handleChange} required maxLength="5" />
                      </div>
                      <div className="checkout-field">
                        <label>CVV</label>
                        <input name="cvv" placeholder="•••" value={formData.cvv} onChange={handleChange} required maxLength="4" type="password" />
                      </div>
                    </div>
                    <div className="checkout-actions">
                      <button type="button" onClick={goPrev} className="checkout-btn-secondary">
                        <ChevronLeft size={18} /> Back
                      </button>
                      <button type="submit" className="checkout-btn-primary" disabled={isProcessing}>
                        {isProcessing ? (
                          <span className="processing-dots">Processing<span>.</span><span>.</span><span>.</span></span>
                        ) : (
                          <><Lock size={16} /> Pay \${total.toFixed(2)}</>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </>
          )}

          {step === 3 && (
            <motion.div
              className="checkout-success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'backOut' }}
            >
              <div className="success-icon">
                <CheckCircle size={64} />
              </div>
              <h2>Order Confirmed!</h2>
              <p>Thank you, <strong>{formData.firstName}</strong>. Your order will be shipped to <strong>{formData.city}</strong> soon. We will notify you at <strong>{formData.email}</strong>.</p>
              <div className="success-order-num">Order #{Math.floor(Math.random() * 90000) + 10000}</div>
              <Link to="/shop" className="checkout-btn-primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>
                <ShoppingBag size={18} /> Continue Shopping
              </Link>
            </motion.div>
          )}
        </div>

        {step < 3 && (
          <div className="checkout-right">
            <div className="checkout-summary-panel">
              <h3>Order Summary</h3>
              <div className="checkout-items-list">
                {cart.map(item => (
                  <div key={item.id} className="checkout-summary-item">
                    <div className="checkout-item-img-wrapper">
                      <img src={item.image} alt={item.title} />
                      <span className="checkout-qty-badge">{item.quantity}</span>
                    </div>
                    <span className="checkout-item-title">{item.title}</span>
                    <span className="checkout-item-price">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="checkout-summary-divider" />
              <div className="checkout-summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="checkout-summary-row">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="checkout-summary-row checkout-total-row">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.main>
  );
}
