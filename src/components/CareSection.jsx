import { Sun, Droplets, Wind, Shovel } from 'lucide-react';

export default function CareSection({ guide, reverse }) {
  return (
    <div className={`care-zigzag-row ${reverse ? 'reverse' : ''}`}>
      <div className="care-zz-img">
        <img src={guide.image} alt={guide.label} />
      </div>
      <div className="care-zz-content">
        <h2>{guide.label}</h2>
        <p className="zz-desc">{guide.intro}</p>
        
        <div className="zz-icons-grid">
          <div className="zz-icon-item">
            <div className="zz-icon">
              <Sun size={20} color="#D37C59" />
            </div>
            <div>
              <h4>Light</h4>
              <p>{guide.specs.light}</p>
            </div>
          </div>
          
          <div className="zz-icon-item">
            <div className="zz-icon">
              <Droplets size={20} color="#D37C59" />
            </div>
            <div>
              <h4>Water</h4>
              <p>{guide.specs.water}</p>
            </div>
          </div>

          <div className="zz-icon-item">
            <div className="zz-icon">
              <Wind size={20} color="#D37C59" />
            </div>
            <div>
              <h4>Humidity</h4>
              <p>{guide.specs.humidity}</p>
            </div>
          </div>

          <div className="zz-icon-item">
            <div className="zz-icon">
              <Shovel size={20} color="#D37C59" />
            </div>
            <div>
              <h4>Soil</h4>
              <p>{guide.specs.soil}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
