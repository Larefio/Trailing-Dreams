import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <main>
      <section className="hero" style={{ background: "linear-gradient(rgba(255, 250, 246, 0.3), rgba(255, 250, 246, 0.8)), url('/img/sala-jardin.jpg') center/cover no-repeat" }}>
        <div className="container">
          <h1 style={{ color: 'var(--text-primary)' }}>Welcome to Trailing Dreams</h1>
          <p style={{ color: 'var(--text-secondary)', fontWeight: 'bold' }}>Discover our curated collection of extraordinary plants, hand-selected to transform your living spaces into thriving botanical sanctuaries.</p>
          <Link to="/shop" className="btn" style={{ background: 'var(--accent-terracotta)', color: '#fff', padding: '15px 30px', borderRadius: '40px', fontWeight: 'bold' }}>Shop Collection</Link>
        </div>
      </section>
      <section className="featured-categories container" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '40px', color: 'var(--text-primary)' }}>Shop by Category</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          <Link to="/shop" style={{ display: 'block', borderRadius: '30px', overflow: 'hidden', position: 'relative', height: '300px' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: "url('/img/Darlingtonia.jpg') center/cover no-repeat", transition: 'transform 0.5s ease' }} className="cat-bg" />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(146, 188, 161, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <h3 style={{ color: '#fff', fontSize: '28px', textShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>Carnivorous</h3>
            </div>
          </Link>
          <Link to="/shop" style={{ display: 'block', borderRadius: '30px', overflow: 'hidden', position: 'relative', height: '300px' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: "url('/img/hoya-carnosa.jpg') center/cover no-repeat", transition: 'transform 0.5s ease' }} className="cat-bg" />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(255, 155, 134, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <h3 style={{ color: '#fff', fontSize: '28px', textShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>Indoor</h3>
            </div>
          </Link>
          <Link to="/shop" style={{ display: 'block', borderRadius: '30px', overflow: 'hidden', position: 'relative', height: '300px' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: "url('/img/Euphorbia-tirucalli.jpg') center/cover no-repeat", transition: 'transform 0.5s ease' }} className="cat-bg" />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(146, 188, 161, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <h3 style={{ color: '#fff', fontSize: '28px', textShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>Succulents</h3>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}