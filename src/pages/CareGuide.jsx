import { careGuides } from '../data/careGuides';
import CareSection from '../components/CareSection';
import { motion } from 'framer-motion';

export default function CareGuide() {
  return (
    <motion.main 
      className="care-page-premium"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <section className="care-hero">
        <h1>Care Guides</h1>
        <p>Learn how to keep your plants happy, healthy and full of life with our expert advice.</p>
      </section>
      <section className="care-zigzag-wrapper container">
        {careGuides.map((guide, i) => (
          <CareSection key={guide.id} guide={guide} reverse={i % 2 === 1} />
        ))}
      </section>
    </motion.main>
  );
}