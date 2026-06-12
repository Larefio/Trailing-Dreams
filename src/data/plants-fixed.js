// src/data/plants-fixed.js
const base = import.meta.env.BASE_URL;

function getSpecs(category) {
  const specsBase = {
    indoor: { light: 'bright-indirect', water: 'weekly', petSafe: false },
    succulents: { light: 'direct', water: 'biweekly', petSafe: true },
    tropical: { light: 'bright-indirect', water: 'frequent', petSafe: false },
    carnivorous: { light: 'direct', water: 'frequent', petSafe: true }
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
  { id: 'monstera-deliciosa', title: 'Monstera Deliciosa', price: 24, category: 'indoor', imgFile: 'monstera.jpg', description: 'La Monstera Deliciosa es una planta de interior icónica con sus hojas perforadas características. Fácil de cuidar y de rápido crecimiento.' },
  { id: 'sansevieria-trifasciata', title: 'Sansevieria Trifasciata', price: 25, category: 'indoor', imgFile: 'sansevieria.jpg', description: 'La Lengua de Suegra purifica el aire y sobrevive en condiciones extremas. Ideal para principiantes.' },
  { id: 'hoya-carnosa', title: 'Hoya Carnosa', price: 31, category: 'indoor', imgFile: 'hoya-carnosa.jpg', description: 'La Planta de Cera produce flores estrelladas fragantes. Trepadora de lento crecimiento.' },
  { id: 'philodendron', title: 'Philodendron', price: 26, category: 'indoor', imgFile: 'philodendrom.jpeg', description: 'Un clásico de interior, muy adaptable y de hojas verdes brillantes que aportan vida a cualquier espacio.' },
  { id: 'alocasia-polly', title: 'Alocasia Polly', price: 23, category: 'indoor', imgFile: 'Alocasia-Polly.jpg', description: 'La Máscara Africana tiene hojas oscuras con venas blancas dramáticas. Requiere humedad alta.' },
  { id: 'calathea-musaica', title: 'Calathea Musaica', price: 34, category: 'indoor', imgFile: 'Calathea-Musaica.jpg', description: 'Sus hojas presentan un patrón que recuerda a un mosaico o red. Requiere buena humedad.' },
  { id: 'dracaena-marginata', title: 'Dracaena Marginata', price: 22, category: 'indoor', imgFile: 'Dracaena.jpg', description: 'El Dragón de Madagascar tiene tallos delgados y hojas estrechas con bordes rojos.' },
  { id: 'nephrolepis-exaltata', title: 'Helecho de Boston', price: 22, category: 'indoor', imgFile: 'Helecho-Boston.jpg', description: 'El Helecho clásico de frondas arqueadas y plumosas. Excelente purificador de aire.' },
  { id: 'bonsai', title: 'Bonsái', price: 65, category: 'indoor', imgFile: 'bonzais.jpg', description: 'Un árbol miniatura cultivado con técnicas milenarias. Ideal para contemplación y cuidado detallado.' },

  // SUCCULENTS
  { id: 'fockea-edulis', title: 'Fockea Edulis', price: 45, category: 'succulents', imgFile: 'Fockea.jpg', description: 'Una suculenta caudiciforme inusual con una base gruesa e hinchada que almacena agua.' },
  { id: 'aloe-aristata', title: 'Aloe Aristata', price: 18, category: 'succulents', imgFile: 'Aloe-aristata.jpg', description: 'Rosetas compactas de hojas verde oscuro con protuberancias blancas. Fácil mantenimiento.' },
  { id: 'haworthia-fasciata', title: 'Haworthia Fasciata', price: 44, category: 'succulents', imgFile: 'Haworthia.jpg', description: 'La Planta Cebra tiene rayas blancas horizontales y tolera mejor la sombra que otras suculentas.' },
  { id: 'euphorbia-tirucalli', title: 'Euphorbia Tirucalli', price: 31, category: 'succulents', imgFile: 'Euphorbia-tirucalli.jpg', description: 'El Cactus Lápiz crece en tallos cilíndricos ramificados y carece de hojas evidentes.' },
  { id: 'sedum-morganianum', title: 'Sedum Morganianum', price: 37, category: 'succulents', imgFile: 'Sedum.jpg', description: 'La Cola de Burro tiene hojas carnosas colgantes. Manipular con cuidado para no desprenderlas.' },

  // TROPICAL
  { id: 'maranta-leuconeura', title: 'Maranta Leuconeura', price: 21, category: 'tropical', imgFile: 'maranta-lima-naranja.jpg', description: 'La Planta de Oración pliega sus hojas por la noche. Muestra patrones únicos en el follaje.' },
  { id: 'syngonium-rosa', title: 'Syngonium Rosa', price: 32, category: 'tropical', imgFile: 'syngonium-rosa.jpg', description: 'Hermosa variedad de Punta de Flecha con tonalidades rosadas en sus hojas.' },
  { id: 'begonia-amphioxus', title: 'Begonia Amphioxus', price: 53, category: 'tropical', imgFile: 'Begonia-Amphioxus.jpg', description: 'De hojas alargadas y con puntos distintivos, esta especie prefiere ambientes de terrario.' },
  { id: 'tacca-chantrieri', title: 'Tacca Chantrieri', price: 48, category: 'tropical', imgFile: 'Tacca-chantrieri.jpg', description: 'La Flor Murciélago tiene brácteas oscuras impresionantes. Es una belleza exótica y rara.' },
  { id: 'tillandsia', title: 'Tillandsia', price: 18, category: 'tropical', imgFile: 'Tillandsia.jpg', description: 'Planta de aire que no necesita sustrato. Absorbe nutrientes a través de sus hojas.' },
  { id: 'monstera-borsigiana', title: 'Monstera Borsigiana', price: 45, category: 'tropical', imgFile: 'Monstera-Borsigiana.jpg', description: 'Variante trepadora más rápida y compacta que la deliciosa tradicional, ideal para tutores.' },

  // CARNIVOROUS
  { id: 'darlingtonia-californica', title: 'Darlingtonia Californica', price: 55, category: 'carnivorous', imgFile: 'Darlingtonia.jpg', description: 'La Planta Cobra tiene trampas que recuerdan a una serpiente a punto de atacar. Única en su género.' },
  { id: 'nepenthes-rajah', title: 'Nepenthes Rajah', price: 85, category: 'carnivorous', imgFile: 'Nepenthes-Rajah.jpg', description: 'Conocida por tener las trampas tipo jarra más grandes del mundo. Especie fascinante.' }
];

export const plants = rawPlants.map((p, i) => {
  const catPlants = rawPlants.filter(x => x.category === p.category);
  const catIndex = catPlants.findIndex(x => x.id === p.id);
  const specs = getSpecs(p.category);
  return {
    ...p,
    image: `${base}img/${p.imgFile}`,
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
  { id: 'all', label: 'Todas', count: plants.length },
  { id: 'indoor', label: 'Interior', count: plants.filter(p => p.category === 'indoor').length },
  { id: 'succulents', label: 'Suculentas', count: plants.filter(p => p.category === 'succulents').length },
  { id: 'tropical', label: 'Tropicales', count: plants.filter(p => p.category === 'tropical').length },
  { id: 'carnivorous', label: 'Carnívoras', count: plants.filter(p => p.category === 'carnivorous').length }
];