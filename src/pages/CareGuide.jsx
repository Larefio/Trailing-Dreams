import { careGuides } from '../data/careGuides';
import CareSection from '../components/CareSection';

export default function CareGuide() {
  return (
    <main className="care-page-premium">
      <section className="care-hero">
        <h1>Care Guides</h1>
        <p>Learn how to keep your plants happy, healthy and full of life with our expert advice.</p>
      </section>
      <section className="care-zigzag-wrapper container">
        {careGuides.map((guide, i) => (
          <CareSection key={guide.id} guide={guide} reverse={i % 2 === 1} />
        ))}
      </section>
    </main>
  );
}