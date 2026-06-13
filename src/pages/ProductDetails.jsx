import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';
import { ArrowLeft, ShoppingBag, Sun, Droplet, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { products, loading } = useContext(ProductContext);
  
  if (loading) return null;
  const plant = products.find(p => p.id.toString() === id.toString());

  if (!plant) {
    return (
      <main style={{ padding: '160px 20px', textAlign: 'center' }}>
        <h2>Plant not found</h2>
        <Link to="/shop" style={{ color: 'var(--accent-terracotta)', textDecoration: 'underline' }}>Return to shop</Link>
      </main>
    );
  }

  return (
    <motion.main 
      className="product-details-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Link to="/shop" className="back-to-shop-link">
        <ArrowLeft size={20} /> Back to Shop
      </Link>
      <div className="product-details-layout">
        <div className="product-details-image">
          <img src={plant.image} alt={plant.title} />
        </div>
        <div className="product-details-info">
          <span className="product-details-category">
            {categories.find(c => c.id === plant.category)?.label || plant.category}
          </span>
          <h1>{plant.title}</h1>
          <p className="product-details-price">${plant.price.toFixed(2)}</p>
          <p className="product-details-desc">
            {plant.description}
          </p>

          <div className="product-details-specs">
            <div className="spec-item">
              <Sun size={18} color="var(--accent-terracotta)" />
              <span>{plant.light === 'direct' ? 'Direct sun' : plant.light === 'bright-indirect' ? 'Bright indirect light' : 'Medium/low light'}</span>
            </div>
            <div className="spec-item">
              <Droplet size={18} color="var(--accent-terracotta)" />
              <span>{plant.water === 'frequent' ? 'Frequent watering' : plant.water === 'weekly' ? 'Weekly watering' : 'Bi-weekly watering'}</span>
            </div>
            <div className="spec-item">
              <Heart size={18} color={plant.petSafe ? 'var(--accent-terracotta)' : 'var(--text-secondary)'} />
              <span>{plant.petSafe ? 'Pet-friendly' : 'Toxic to pets'}</span>
            </div>
          </div>

          <button 
            onClick={() => addToCart(plant)}
            className="product-add-to-cart-btn"
          >
            <ShoppingBag size={24} /> Add to Cart
          </button>
        </div>
      </div>
    </motion.main>
  );
}