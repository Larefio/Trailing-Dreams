// src/data/plants-fixed.js
const base = import.meta.env.BASE_URL;

function getSpecs(category) {
  const specsBase = {
    indoor: { light: 'bright-indirect', water: 'weekly', petSafe: false },
    succulents: { light: 'direct', water: 'biweekly', petSafe: true },
    tropical: { light: 'bright-indirect', water: 'frequent', petSafe: false },
    carnivorous: { light: 'direct', water: 'frequent', petSafe: true },
    jardineria: { light: 'n/a', water: 'n/a', petSafe: true },
    bases: { light: 'n/a', water: 'n/a', petSafe: true },
    riego: { light: 'n/a', water: 'n/a', petSafe: true },
    herramientas: { light: 'n/a', water: 'n/a', petSafe: true }
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
  { id: 'jard-1', title: 'Premium Indoor Potting Mix 8qt', price: 14.99, category: 'jardineria', imgFile: 'https://loremflickr.com/500/500/potting,soil,bag?lock=101', description: 'Specialized blend for house plants. Protects against over and under watering for vibrant growth.' },
  { id: 'jard-2', title: 'Max Roach Killing Gel', price: 9.50, category: 'jardineria', imgFile: 'https://loremflickr.com/500/500/roach,killer,tube?lock=102', description: 'Fast-acting gel formula that eliminates pests at the source. Essential for indoor plant areas.' },
  { id: 'jard-3', title: 'Set of 3 Artificial Potted Plants', price: 24.99, category: 'jardineria', imgFile: 'https://loremflickr.com/500/500/artificial,potted,plants?lock=103', description: 'Perfect realistic fake plants for your desk, bookshelf, or window sill. Zero maintenance required.' },
  { id: 'jard-4', title: 'Coarse Orchid Potting Mix 8qt', price: 12.99, category: 'jardineria', imgFile: 'https://loremflickr.com/500/500/orchid,soil,mix?lock=104', description: 'Fast-draining blend perfect for orchids and bromeliads. Provides superior aeration.' },
  { id: 'jard-5', title: 'Heavy Duty 32oz Spray Bottle', price: 5.99, category: 'jardineria', imgFile: 'https://loremflickr.com/500/500/spray,bottle,plastic?lock=105', description: 'Durable and adjustable nozzle. Perfect for misting tropical plants or applying treatments.' },
  { id: 'jard-6', title: 'Organic Perlite 8qt', price: 11.50, category: 'jardineria', imgFile: 'https://loremflickr.com/500/500/perlite,bag,garden?lock=106', description: 'Improves soil aeration and prevents compaction. A must-have for custom potting mixes.' },
  { id: 'jard-7', title: 'Bio-Mite Control Spray 32oz', price: 16.99, category: 'jardineria', imgFile: 'https://loremflickr.com/500/500/pesticide,bottle,garden?lock=107', description: 'Effective organic treatment against spider mites, aphids, and whiteflies.' },
  { id: 'jard-8', title: 'Organic All-Purpose Soil 16qt', price: 18.99, category: 'jardineria', imgFile: 'https://loremflickr.com/500/500/organic,soil,bag?lock=108', description: '100% organic potting soil enriched with natural fertilizers for robust growth.' },
  { id: 'jard-9', title: 'Blue Mist Spray Bottle 16oz', price: 4.50, category: 'jardineria', imgFile: 'https://loremflickr.com/500/500/blue,spray,bottle?lock=109', description: 'Compact spray bottle with a fine mist setting, ideal for delicate ferns and air plants.' },
  { id: 'jard-10', title: 'Earthworm Castings Builder 15lb', price: 21.99, category: 'jardineria', imgFile: 'https://loremflickr.com/500/500/earthworm,castings?lock=110', description: 'Pure organic earthworm castings. The best natural fertilizer to boost plant immunity.' },
  { id: 'base-1', title: 'Rolling Plant Caddy with Locks', price: 29.99, category: 'bases', imgFile: 'https://loremflickr.com/500/500/plant,caddy,wheels?lock=111', description: 'Heavy-duty iron caddy to effortlessly move your large potted plants. Includes locking wheels.' },
  { id: 'base-2', title: 'Mid-Century Wood Plant Stand', price: 34.99, category: 'bases', imgFile: 'https://loremflickr.com/500/500/wood,plant,stand?lock=112', description: 'Elegant mid-century modern wooden stand. Adjusts to fit 8 to 12 inch pots.' },
  { id: 'base-3', title: '3-Tier Bamboo Plant Shelf', price: 45.00, category: 'bases', imgFile: 'https://loremflickr.com/500/500/bamboo,plant,shelf?lock=113', description: 'Space-saving tiered bamboo shelf. Perfect for displaying a collection of small succulents.' },
  { id: 'base-4', title: 'Metal Pyramid Plant Stand', price: 55.00, category: 'bases', imgFile: 'https://loremflickr.com/500/500/metal,plant,stand?lock=114', description: 'Sturdy geometric metal stand that adds a contemporary flair to your living room.' },
  { id: 'base-5', title: 'Minimalist Nursery Pots (5-Pack)', price: 12.99, category: 'bases', imgFile: 'https://loremflickr.com/500/500/nursery,pots,black?lock=115', description: 'Set of 5 durable plastic pots with excellent drainage holes. Assorted modern colors.' },
  { id: 'base-6', title: 'Clear Slotted Orchid Pots (3-Pack)', price: 15.50, category: 'bases', imgFile: 'https://loremflickr.com/500/500/clear,orchid,pots?lock=116', description: 'Promotes root photosynthesis and optimal airflow. Perfect for Phalaenopsis.' },
  { id: 'riego-1', title: 'Retractable Garden Hose Reel 65ft', price: 129.99, category: 'riego', imgFile: 'https://loremflickr.com/500/500/retractable,hose,reel?lock=117', description: 'Auto-rewind hose reel makes watering easy and keeps your garden tidy.' },
  { id: 'riego-2', title: 'Polyurethane Coil Hose 50ft', price: 39.99, category: 'riego', imgFile: 'https://loremflickr.com/500/500/coil,hose,garden?lock=118', description: 'Lightweight, kink-free spiral hose. Bounces right back into shape after use.' },
  { id: 'riego-3', title: 'Heavy-Duty 8-Pattern Nozzle', price: 14.99, category: 'riego', imgFile: 'https://loremflickr.com/500/500/hose,nozzle,water?lock=119', description: 'Durable metal nozzle with 8 spray patterns, from gentle mist to powerful jet.' },
  { id: 'riego-4', title: 'Expandable Magic Hose 100ft', price: 44.99, category: 'riego', imgFile: 'https://loremflickr.com/500/500/expandable,hose,green?lock=120', description: 'Expands up to 3 times its length under water pressure. Ultra-lightweight and compact.' },
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
  { id: 'jardineria', label: 'Soils & Fertilizers', count: plants.filter(p => p.category === 'jardineria').length },
  { id: 'bases', label: 'Pot Stands', count: plants.filter(p => p.category === 'bases').length },
  { id: 'riego', label: 'Watering', count: plants.filter(p => p.category === 'riego').length },
  { id: 'herramientas', label: 'Garden Tools', count: plants.filter(p => p.category === 'herramientas').length }
];