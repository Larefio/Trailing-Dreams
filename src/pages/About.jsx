import { Leaf, Sparkles, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
const base = import.meta.env.BASE_URL;

export default function About() {
  return (
    <motion.main 
      className="about-page-premium"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <section className="about-hero">
        <div className="container about-hero-container">
          <div className="about-hero-text">
            <h1>Cultivating Your <span className="highlight">Inner Jungle</span></h1>
            <p>
              Trailing Dreams was born from a deep love for nature and the desire to
              bring the magic of exotic ecosystems into urban homes. We specialize
              in sourcing rare botanical species, from mesmerizing carnivorous
              plants to stunning tropical specimens with unique colors and patterns.
            </p>
          </div>
          <div className="about-hero-image">
            <img src={`${base}img/about_greenhouse.png`} alt="Trailing Dreams Greenhouse" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <h2>Our Philosophy</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><Leaf size={32} color="var(--accent-lilac)" /></div>
              <h3>Rare Botanicals</h3>
              <p>We specialize in sourcing rare botanical species, carefully curated for enthusiasts who appreciate the extraordinary.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Sparkles size={32} color="var(--accent-terracotta)" /></div>
              <h3>Premium Quality</h3>
              <p>We provide premium substrates and professional care accessories so your indoor jungle can thrive beautifully.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Heart size={32} color="var(--accent-lilac)" /></div>
              <h3>Expert Guidance</h3>
              <p>Our goal is to guide every plant lover throughout their gardening journey with expert advice and support.</p>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
