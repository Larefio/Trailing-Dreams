// src/data/plants-fixed.js
const base = import.meta.env.BASE_URL;

function getSpecs(category) {
  const specsBase = {
    indoor: { light: 'bright-indirect', water: 'weekly', petSafe: false },
    succulents: { light: 'direct', water: 'biweekly', petSafe: true },
    tropical: { light: 'bright-indirect', water: 'frequent', petSafe: false },
    carnivorous: { light: 'direct', water: 'frequent', petSafe: true },
    tools: { light: 'n/a', water: 'n/a', petSafe: true }
  };
  return specsBase[category] || specsBase.indoor;
}

function getBadge(index, price) {
  if (index < 2) return 'New';
  if (price >= 55) return 'Rare';
  if (index % 4 === 0) return 'Sale';
  return null;
}

const rawPlants = [
  // INDOOR
  { id: 'monstera-deliciosa', title: 'Monstera Deliciosa', price: 24, category: 'indoor', imgFile: 'monstera.jpg', description: 'The Monstera Deliciosa is an iconic indoor plant with characteristic perforated leaves. Easy to care for and fast growing.' },
  { id: 'sansevieria-trifasciata', title: 'Snake Plant', price: 25, category: 'indoor', imgFile: 'sansevieria.jpg', description: 'The Snake Plant purifies the air and survives in extreme conditions. Ideal for beginners.' },
  { id: 'hoya-carnosa', title: 'Wax Plant', price: 31, category: 'indoor', imgFile: 'hoya-carnosa.jpg', description: 'The Wax Plant produces fragrant star-shaped flowers. Slow-growing climber.' },
  { id: 'philodendron', title: 'Philodendron', price: 26, category: 'indoor', imgFile: 'philodendrom.jpeg', description: 'An indoor classic, highly adaptable with bright green leaves that bring life to any space.' },
  { id: 'alocasia-polly', title: 'Alocasia Polly', price: 23, category: 'indoor', imgFile: 'Alocasia-Polly.jpg', description: 'The African Mask has dark leaves with dramatic white veins. Requires high humidity.' },
  { id: 'calathea-musaica', title: 'Calathea Musaica', price: 34, category: 'indoor', imgFile: 'Calathea-Musaica.jpg', description: 'Its leaves feature a pattern reminiscent of a mosaic or net. Requires good humidity.' },
  { id: 'dracaena-marginata', title: 'Dracaena Marginata', price: 22, category: 'indoor', imgFile: 'Dracaena.jpg', description: 'The Madagascar Dragon Tree has slender stems and narrow leaves with red edges.' },
  { id: 'nephrolepis-exaltata', title: 'Boston Fern', price: 22, category: 'indoor', imgFile: 'Helecho-Boston.jpg', description: 'The classic fern with arching, feathery fronds. Excellent air purifier.' },
  { id: 'bonsai', title: 'Bonsai', price: 65, category: 'indoor', imgFile: 'bonzais.jpg', description: 'A miniature tree cultivated with ancient techniques. Ideal for contemplation and detailed care.' },

  // SUCCULENTS
  { id: 'fockea-edulis', title: 'Fockea Edulis', price: 45, category: 'succulents', imgFile: 'Fockea.jpg', description: 'An unusual caudiciform succulent with a thick, swollen base that stores water.' },
  { id: 'aloe-aristata', title: 'Aloe Aristata', price: 18, category: 'succulents', imgFile: 'Aloe-aristata.jpg', description: 'Compact rosettes of dark green leaves with white bumps. Easy maintenance.' },
  { id: 'haworthia-fasciata', title: 'Zebra Plant', price: 44, category: 'succulents', imgFile: 'Haworthia.jpg', description: 'The Zebra Plant has white horizontal stripes and tolerates shade better than other succulents.' },
  { id: 'euphorbia-tirucalli', title: 'Pencil Cactus', price: 31, category: 'succulents', imgFile: 'Euphorbia-tirucalli.jpg', description: 'The Pencil Cactus grows in branching cylindrical stems and lacks obvious leaves.' },
  { id: 'sedum-morganianum', title: 'Burro\'s Tail', price: 37, category: 'succulents', imgFile: 'Sedum.jpg', description: 'The Burro\'s Tail has fleshy trailing leaves. Handle with care so they don\'t fall off.' },

  // TROPICAL
  { id: 'maranta-leuconeura', title: 'Prayer Plant', price: 21, category: 'tropical', imgFile: 'maranta-lima-naranja.jpg', description: 'The Prayer Plant folds its leaves at night. Shows unique patterns on the foliage.' },
  { id: 'syngonium-rosa', title: 'Pink Syngonium', price: 32, category: 'tropical', imgFile: 'syngonium-rosa.jpg', description: 'Beautiful Arrowhead variety with pink hues on its leaves.' },
  { id: 'begonia-amphioxus', title: 'Begonia Amphioxus', price: 53, category: 'tropical', imgFile: 'Begonia-Amphioxus.jpg', description: 'With elongated leaves and distinctive spots, this species prefers terrarium environments.' },
  { id: 'tacca-chantrieri', title: 'Bat Flower', price: 48, category: 'tropical', imgFile: 'Tacca-chantrieri.jpg', description: 'The Bat Flower has impressive dark bracts. It is an exotic and rare beauty.' },
  { id: 'tillandsia', title: 'Air Plant', price: 18, category: 'tropical', imgFile: 'Tillandsia.jpg', description: 'Air plant that needs no soil. Absorbs nutrients through its leaves.' },
  { id: 'monstera-borsigiana', title: 'Monstera Borsigiana', price: 45, category: 'tropical', imgFile: 'Monstera-Borsigiana.jpg', description: 'Faster climbing and more compact variant than the traditional deliciosa, ideal for moss poles.' },

  // CARNIVOROUS
  { id: 'darlingtonia-californica', title: 'Cobra Lily', price: 55, category: 'carnivorous', imgFile: 'Darlingtonia.jpg', description: 'The Cobra Plant has traps reminiscent of a snake about to strike. Unique in its genus.' },
  { id: 'nepenthes-rajah', title: 'Nepenthes Rajah', price: 85, category: 'carnivorous', imgFile: 'Nepenthes-Rajah.jpg', description: 'Known for having the largest pitcher traps in the world. A fascinating species.' },

  // TOOLS & CARE
  { id: 'felco-2-pruning-shears', title: 'Felco 2 Pruning Shears', price: 65, category: 'tools', imgFile: 'https://images.unsplash.com/photo-1416879598555-220bf9bbdd4b?w=600&q=80', description: 'The gold standard in pruning. Classic design with red forged aluminum handles and hardened steel blades.' },
  { id: 'foxfarm-ocean-forest', title: 'FoxFarm Ocean Forest Soil', price: 25, category: 'tools', imgFile: 'https://images.unsplash.com/photo-1444684414006-03a088667a4e?w=600&q=80', description: 'Premium potting soil mixed with earthworm castings, bat guano, and Pacific Northwest sea-going fish and crab meal.' },
  { id: 'haws-brass-can', title: 'Haws Brass Watering Can', price: 145, category: 'tools', imgFile: 'https://images.unsplash.com/photo-1592424001806-258055cd9139?w=600&q=80', description: 'Elegant, timeless, and functional. Solid brass watering can, perfect for indoor plant care.' },
  { id: 'organic-liquid-fertilizer', title: 'Organic Liquid Fertilizer', price: 18, category: 'tools', imgFile: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=600&q=80', description: 'All-natural organic liquid plant food. Provides essential nutrients for lush, green growth.' }
];

export const plants = rawPlants.map((p, i) => {
  const catPlants = rawPlants.filter(x => x.category === p.category);
  const catIndex = catPlants.findIndex(x => x.id === p.id);
  const specs = getSpecs(p.category);
  return {
    ...p,
    image: p.imgFile.startsWith('http') ? p.imgFile : `${base}img/${p.imgFile}`,
    light: specs.light,
    water: specs.water,
    petSafe: specs.petSafe,
    badge: getBadge(catIndex, p.price)
  };
});

export function getPlantById(id) {
  return plants.find(p => p.id === id);
}

export function getPlantsByCategory(category) {
  return plants.filter(p => p.category === category);
}

export const categories = [
  { id: 'all', label: 'All', count: plants.length },
  { id: 'indoor', label: 'Indoor', count: plants.filter(p => p.category === 'indoor').length },
  { id: 'succulents', label: 'Succulents', count: plants.filter(p => p.category === 'succulents').length },
  { id: 'tropical', label: 'Tropical', count: plants.filter(p => p.category === 'tropical').length },
  { id: 'carnivorous', label: 'Carnivorous', count: plants.filter(p => p.category === 'carnivorous').length },
  { id: 'tools', label: 'Care & Tools', count: plants.filter(p => p.category === 'tools').length }
];