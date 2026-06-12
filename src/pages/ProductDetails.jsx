import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { plants, getPlantById } from '../data/plants-fixed';
import { CartContext } from '../context/CartContext';
import { ArrowLeft, ShoppingBag, Sun, Droplet, Heart } from 'lucide-react';

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const plant = getPlantById(id);

  if (!plant) {
    return (
      <main style={{ padding: '160px 20px', textAlign: 'center' }}>
        <h2>Plant not found</h2>
        <Link to="/shop" style={{ color: 'var(--accent-terracotta)', textDecoration: 'underline' }}>Return to shop</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: '140px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <Link to="/shop" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', marginBottom: '40px', fontWeight: 'bold' }}>
        <ArrowLeft size={20} /> Back to Shop
      </Link>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }} className="product-details-layout">
        <div style={{ borderRadius: '32px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(255, 155, 134, 0.1)' }}>
          <img src={plant.image} alt={plant.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
        <div>
          <span style={{ display: 'inline-block', padding: '8px 16px', background: 'rgba(146, 188, 161, 0.2)', color: 'var(--accent-olive)', borderRadius: '20px', fontWeight: 'bold', fontSize: '14px', marginBottom: '20px', textTransform: 'capitalize' }}>
            {plant.category}
          </span>
          <h1 style={{ fontSize: '42px', color: 'var(--text-primary)', marginBottom: '20px' }}>{plant.title}</h1>
          <p style={{ fontSize: '28px', color: 'var(--accent-terracotta)', fontWeight: 'bold', marginBottom: '30px' }}>${plant.price.toFixed(2)}</p>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '30px' }}>
            {plant.description}
          </p>

          {/* Specs básicos */}
          <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '14px' }}>
              <Sun size={18} color="var(--accent-terracotta)" />
              <span>{plant.light === 'direct' ? 'Sol directo' : plant.light === 'bright-indirect' ? 'Luz brillante indirecta' : 'Luz media/baja'}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '14px' }}>
              <Droplet size={18} color="var(--accent-terracotta)" />
              <span>{plant.water === 'frequent' ? 'Riego frecuente' : plant.water === 'weekly' ? 'Riego semanal' : 'Riego quincenal'}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '14px' }}>
              <Heart size={18} color={plant.petSafe ? 'var(--accent-terracotta)' : 'var(--text-secondary)'} />
              <span>{plant.petSafe ? 'Pet-friendly' : 'Tóxica para mascotas'}</span>
            </div>
          </div>

          <button 
            onClick={() => addToCart(plant)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', width: '100%', background: 'var(--accent-olive)', color: '#fff', padding: '20px', borderRadius: '40px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', border: 'none' }}
          >
            <ShoppingBag size={24} /> Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}