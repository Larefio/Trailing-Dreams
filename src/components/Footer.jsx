export default function Footer() {
  return (
    <footer className="site-footer" style={{ marginTop: '100px', backgroundColor: 'rgba(146, 188, 161, 0.1)', padding: '60px 20px', borderTop: '1px solid rgba(146, 188, 161, 0.2)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px' }}>
        <div style={{ maxWidth: '300px' }}>
          <h3 style={{ fontSize: '24px', color: 'var(--accent-olive)', marginBottom: '15px' }}>Trailing Dreams</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Curated botanical collections for the modern plant lover. We bring the outdoors in.</p>
        </div>
        <div style={{ display: 'flex', gap: '60px' }}>
          <div>
            <h4 style={{ marginBottom: '15px', color: 'var(--text-primary)' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><a href="/shop" style={{ color: 'var(--text-secondary)' }}>Shop All</a></li>
              <li><a href="/care" style={{ color: 'var(--text-secondary)' }}>Care Guide</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '60px', color: 'var(--text-secondary)', fontSize: '14px' }}>
        <p>&copy; {new Date().getFullYear()} Trailing Dreams. All rights reserved.</p>
      </div>
    </footer>
  );
}