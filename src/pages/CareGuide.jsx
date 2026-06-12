import { careGuides } from '../data/careGuides';
import CareSection from '../components/CareSection';

export default function CareGuide() {
  return (
    <main className="care-page-premium">
      <section className="care-hero">
        <h1>Guía de Cuidados</h1>
        <p>Aprende a mantener tus plantas felices, saludables y llenas de vida con nuestros consejos expertos.</p>
      </section>
      <section className="care-zigzag-wrapper container">
        {careGuides.map((guide, i) => (
          <CareSection key={guide.id} guide={guide} reverse={i % 2 === 1} />
        ))}
      </section>
    </main>
  );
}