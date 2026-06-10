import { Droplet, Sun, Wind, ShieldAlert, Sparkles, Thermometer, Box } from 'lucide-react';
export default function CareGuide() {
  return (
    <main className="care-page-premium">
      <section className="care-hero" style={{ background: "linear-gradient(rgba(146, 188, 161, 0.8), rgba(255, 155, 134, 0.8)), url('img/philodendrom.jpeg') center/cover no-repeat" }}>
        <div className="container">
          <h1 style={{ color: '#fff', textShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>Plant Care Guide</h1>
          <p style={{ color: '#fff', fontWeight: 500 }}>Expert tips and detailed directions to help your unique botanical varieties flourish perfectly inside your home green space.</p>
        </div>
      </section>
      <section className="care-zigzag-wrapper container">
        <article className="care-zigzag-row">
          <div className="care-zz-img">
            <img src="/img/Darlingtonia.jpg" alt="Carnivorous Plants Care" />
          </div>
          <div className="care-zz-content">
            <h2>Carnivorous Plants</h2>
            <p className="zz-desc">These spectacular specimens require special pure fluid care. Emulate their natural swamp environments.</p>
            <div className="zz-icons-grid">
              <div className="zz-icon-item">
                <div className="zz-icon"><Droplet color="var(--accent-terracotta)" /></div>
                <div>
                  <h4>Watering</h4>
                  <p>Mineral-free distilled water or gathered rainwater only.</p>
                </div>
              </div>
              <div className="zz-icon-item">
                <div className="zz-icon"><Sun color="var(--accent-terracotta)" /></div>
                <div>
                  <h4>Light</h4>
                  <p>Full direct sunshine or highly bright filtered light.</p>
                </div>
              </div>
              <div className="zz-icon-item">
                <div className="zz-icon"><Box color="var(--accent-terracotta)" /></div>
                <div>
                  <h4>Soil</h4>
                  <p>Nutrient-free pure moss mixtures or perlite blends.</p>
                </div>
              </div>
              <div className="zz-icon-item">
                <div className="zz-icon"><ShieldAlert color="var(--accent-terracotta)" /></div>
                <div>
                  <h4>Feeding</h4>
                  <p>No fertilizers. Let them catch wild insects naturally.</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}