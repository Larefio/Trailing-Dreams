import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart } from 'lucide-react';
import { plants } from '../data/plants-fixed';
import { CartContext } from '../context/CartContext';

export default function Shop() {
  const { addToCart, toggleWishlist, wishlist } = useContext(CartContext);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filteredPlants = plants.filter(plant => {
    const matchesFilter = filter === 'all' || plant.category === filter;
    const matchesSearch = plant.title.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <main className="shop-page">
      <div className="container">
        <div className="shop-layout">
          <aside className="sidebar">
            <h2 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '20px' }}>Categories</h2>
            <div className="categories-wrapper">
              <button className={`category-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All Products</button>
              <button className={`category-btn ${filter === 'indoor' ? 'active' : ''}`} onClick={() => setFilter('indoor')}>Indoor</button>
              <button className={`category-btn ${filter === 'succulents' ? 'active' : ''}`} onClick={() => setFilter('succulents')}>Succulents</button>
              <button className={`category-btn ${filter === 'tropical' ? 'active' : ''}`} onClick={() => setFilter('tropical')}>Tropical</button>
              <button className={`category-btn ${filter === 'carnivorous' ? 'active' : ''}`} onClick={() => setFilter('carnivorous')}>Carnivorous</button>
              <button className={`category-btn ${filter === 'jardineria' ? 'active' : ''}`} onClick={() => setFilter('jardineria')}>Tierras y Sustratos</button>
              <button className={`category-btn ${filter === 'bases' ? 'active' : ''}`} onClick={() => setFilter('bases')}>Bases para Macetas</button>
              <button className={`category-btn ${filter === 'riego' ? 'active' : ''}`} onClick={() => setFilter('riego')}>Riego</button>
              <button className={`category-btn ${filter === 'herramientas' ? 'active' : ''}`} onClick={() => setFilter('herramientas')}>Herramientas</button>
            </div>
          </aside>
          <div className="main-content">
            <div className="search">
              <div style={{ position: 'relative' }}>
                <Search size={20} style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: 'var(--accent-terracotta)' }} />
                <input
                  type="text"
                  placeholder="Search our beautiful plants..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{ paddingLeft: '50px' }}
                />
              </div>
            </div>
            {filteredPlants.length === 0 ? (
              <div className="empty-state">
                <p>No plants match your search filter.</p>
              </div>
            ) : (
              <section className="products-grid">
                {filteredPlants.map((plant) => (
                  <article key={plant.id} className="product">
                    <div className="product-image-wrapper">
                      {plant.badge && <span className={`product-badge ${plant.badge.toLowerCase()}`}>{plant.badge}</span>}
                      <button 
                        type="button" 
                        className={`wishlist-btn ${wishlist.includes(plant.id) ? 'active' : ''}`}
                        onClick={() => toggleWishlist(plant.id)}
                      >
                        <Heart size={20} />
                      </button>
                      <Link to={`/product/${plant.id}`}>
                        <img src={plant.image} alt={plant.title} loading="lazy" />
                      </Link>
                      <div className="product-overlay">
                        <button type="button" className="shop-add-btn-premium" onClick={() => addToCart(plant)}>
                          + Quick Add
                        </button>
                      </div>
                    </div>
                    <div className="product-controls">
                      <Link to={`/product/${plant.id}`}>
                        <h2>{plant.title}</h2>
                      </Link>
                      <p className="price">${plant.price.toFixed(2)}</p>
                    </div>
                  </article>
                ))}
              </section>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}