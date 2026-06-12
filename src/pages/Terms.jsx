import React from 'react';

export default function Terms() {
  return (
    <main className="terms-page-premium">
      <div className="container">
        <div className="terms-header">
          <h1>Terms & Conditions</h1>
          <p>Please read these terms carefully before adopting your new green companions.</p>
        </div>

        <div className="terms-content">
          <section className="terms-section">
            <div className="terms-icon">🌱</div>
            <h2>1. Plant Adoption Policy</h2>
            <p>
              When you purchase from Trailing Dreams, you are not just buying a product; you are adopting a living, breathing organism. We guarantee that all plants leave our greenhouse in excellent health, pest-free, and ready to thrive in their new home. Because every plant is unique, the one you receive may vary slightly in size, shape, and color from the photos on our website.
            </p>
          </section>

          <section className="terms-section">
            <div className="terms-icon">📦</div>
            <h2>2. Shipping & Travel Shock</h2>
            <p>
              We take the utmost care in packaging your plants to withstand the journey. However, shipping can be stressful for plants. It is normal for them to experience minor "travel shock," which may include a few droopy or yellowing leaves. Please allow your plant 1-2 weeks to acclimate to its new environment before repotting or fertilizing.
            </p>
          </section>

          <section className="terms-section">
            <div className="terms-icon">💚</div>
            <h2>3. Returns & Refunds</h2>
            <p>
              Due to the perishable nature of live plants, we do not accept standard returns. If your plant arrives severely damaged or dead on arrival, please contact our support team within <strong>48 hours</strong> of delivery with clear photographs of the plant and packaging. We will review your case and offer a replacement or store credit.
            </p>
          </section>

          <section className="terms-section">
            <div className="terms-icon">💧</div>
            <h2>4. Care Responsibility</h2>
            <p>
              Once a plant is safely delivered to your home, its continued health and survival become your responsibility. We provide comprehensive <a href="#/care" style={{color: 'var(--accent-terracotta)'}}>Care Guides</a> for all our species. Trailing Dreams is not liable for plants that perish due to overwatering, underwatering, improper light exposure, or extreme temperatures in your home.
            </p>
          </section>

          <section className="terms-section">
            <div className="terms-icon">🐾</div>
            <h2>5. Pet Toxicity Disclaimer</h2>
            <p>
              While we clearly label plants that are pet-friendly, it is the customer's responsibility to keep toxic plants out of reach of children and pets. Trailing Dreams assumes no liability for any illness or injury caused by the ingestion of our plants.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
