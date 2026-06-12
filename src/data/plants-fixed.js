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
  { id: 'jard-105931', title: '4Estaciones Potting Soil 20kg', price: 15, category: 'jardineria', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/9975595/105931.jpg?v=639037964693370000', description: 'Special mix for all kinds of plants. Balanced formula with moss, vegetable soil, and earthworm castings.' },
  { id: 'jard-168177', title: 'Grandma\'s Secret Cockroach Putty 100g', price: 8.9, category: 'jardineria', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/9999056/168177.jpg?v=639044447105900000', description: 'Keep pests away from your garden. Grandma\'s Secret Cockroach Putty is easy to use and highly effective.' },
  { id: 'jard-168162', title: 'Value Deco Artificial Plants Set of 3 Black', price: 19.9, category: 'jardineria', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/9998105/168162.jpg?v=639044078395300000', description: 'Perfect for decorating your home, these artificial plants will never lose their beauty and require zero care.' },
  { id: 'jard-157588', title: 'Garden Clean Orchid Substrate 500g', price: 14.9, category: 'jardineria', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/7943451/157588.jpg?v=638494193166830000', description: 'Provides bio-stimulation for better development and increased plant immunity, ideal for orchids.' },
  { id: 'jard-156131', title: 'Tramontina Plastic Hand Sprayer 450ml', price: 9.9, category: 'jardineria', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/10699930/156131.jpg?v=639136074241200000', description: 'Lightweight and practical manual sprayer for watering and misting your indoor and outdoor plants.' },
  { id: 'jard-152371', title: '4Estaciones Organic Rice Husk Substrate 1kg', price: 5.9, category: 'jardineria', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/7342913/152371.jpg?v=638253998137670000', description: 'Organic rice husk substrate. Excellent for improving soil aeration and drainage for healthy roots.' },
  { id: 'jard-119786', title: 'X-Trim Forte Mite Killer 440ml', price: 10.7, category: 'jardineria', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/6944201/119786.jpg?v=638179553177630000', description: 'Effective liquid formula to protect your plants from mites and other common garden pests.' },
  { id: 'jard-113351', title: 'Mallki Garden Potting Soil 1kg', price: 2.9, category: 'jardineria', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/255143/113351.jpg?v=636718521848400000', description: 'Ready to use directly on plants. Free from insects, impurities, and weeds. High moisture retention.' },
  { id: 'jard-112996', title: 'Orange Spray Bottle 500ml', price: 5.9, category: 'jardineria', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/9443263/112996.jpg?v=638956335713070000', description: 'Convenient spray bottle with adjustable nozzle, perfect for misting delicate plants and applying fertilizers.' },
  { id: 'jard-105940', title: '4Estaciones Earthworm Humus Fertilizer 20kg', price: 24.1, category: 'jardineria', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/8720383/105940.jpg?v=638783811612700000', description: 'Premium organic fertilizer. Earthworm humus provides essential nutrients for robust plant growth.' },
  { id: 'base-166344', title: 'Orange 5-Tier Plant Pot Organizer', price: 64.9, category: 'bases', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/9725239/166344.png?v=638996257464930000', description: 'Ideal for decorating your space in living rooms, terraces, and gardens. Sturdy and elegant design.' },
  { id: 'base-154911', title: 'Reyplast Super Forte Pot Base with Wheels #12', price: 29.9, category: 'bases', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/7778709/154911.jpg?v=638411827852470000', description: 'Transport your heavy pots with ease and style using this durable polycarbonate rolling base.' },
  { id: 'base-111504', title: 'Mas Garden Colonial Pot Base with Wheels', price: 37.9, category: 'bases', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/249951/111504.jpg?v=636682346128900000', description: 'Organize your pots with style and practicality thanks to this elegant colonial-style rolling base.' },
  { id: 'base-1001261188', title: 'Cazzas Argon Wooden Plant Stand', price: 40, category: 'bases', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/9549558/imageUrl_1.jpg?v=638969690477770000', description: 'Our new Argon plant stand is a wooden structure designed as an elegant exhibition support for your plants.' },
  { id: 'base-1001261183', title: 'Cazzas Forteza Wooden Plant Stand', price: 50, category: 'bases', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/9549544/imageUrl_1.jpg?v=638969690470570000', description: 'The Forteza plant stand is a wooden structure designed to securely hold and display your favorite pots.' },
  { id: 'base-1001261167', title: 'Cazzas Azalea Wooden Plant Stand', price: 40, category: 'bases', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/9549474/imageUrl_1.jpg?v=638969690394300000', description: 'Introducing Azalea, a plant stand with an innovative and practical design, made of high-quality wood.' },
  { id: 'base-1001005315', title: 'Snake Plant Pyramid Shelf', price: 549, category: 'bases', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/8613907/imageUrl_1.jpg?v=638760619035770000', description: 'Rigid pyramid-shaped plant shelf that helps you organize and decorate your living room, terrace, or garden.' },
  { id: 'base-1000724543', title: 'Aladino Wooden Pot Holder', price: 95, category: 'bases', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/8248492/image-38eba62c4de24d1aa1d72079d7deb106.jpg?v=638651327403700000', description: 'Add a touch of nature and elegance to your home or garden with this beautiful 4-base pot holder.' },
  { id: 'base-1001150645', title: 'Minimalist Plastic Pot (Assorted Colors)', price: 0, category: 'bases', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/9019686/imageUrl_1.jpg?v=638872939788100000', description: 'Modern and elegant design: these pots feature a contemporary style that perfectly matches any decor.' },
  { id: 'base-1000725565', title: 'Set of 3 Orchid Pots', price: 0, category: 'bases', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/8307777/image.jpg?v=638653447752330000', description: 'Quality material: these plastic orchid pots are made of durable plastic that won\'t break easily.' },
  { id: 'riego-164409', title: 'Orange 10m Retractable Hose Grey', price: 49.9, category: 'riego', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/9268226/164409.jpg?v=638924479834830000', description: 'Practical 10-meter retractable hose. Perfect for keeping your garden tidy and watering with ease.' },
  { id: 'riego-162001', title: 'Orange 15m Spiral Hose with 8-Function Nozzle', price: 49.9, category: 'riego', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/9367120/162001.jpg?v=638939201854500000', description: '15-meter spiral hose that includes a versatile 8-function nozzle for all your watering needs.' },
  { id: 'riego-154277', title: 'Fitt Force Green Hose 15m Nozzle Box', price: 134.1, category: 'riego', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/7973801/154277.jpg?v=638509585278000000', description: 'Discover the versatility and quality of the 15-meter FITT FORCE Green Hose featuring the NTS system.' },
  { id: 'riego-136314', title: 'Truper Coated Plastic Nozzle 8 Functions', price: 12.9, category: 'riego', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/7982954/136314.jpg?v=638520827766100000', description: 'Watering nozzles allow for different types of streams and help direct water exactly where needed.' },
  { id: 'riego-1001430429', title: 'Expandable Multipurpose Garden Hose 45m', price: 39.9, category: 'riego', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/10568605/imageUrl_1.jpg?v=639125392441630000', description: 'Multipurpose expandable hose with accessories up to 45 meters. Its unique design prevents tangling.' },
  { id: 'riego-1001092191', title: 'Truper Reinforced Watering Hose 5/8" 20m', price: 90, category: 'riego', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/8803375/imageUrl_1.jpg?v=638815051666400000', description: '20-meter 5/8" watering hose. 3-layer reinforced design for maximum durability and kink resistance.' },
  { id: 'riego-163410', title: 'Reinforced Hose 1/2 Green/Red 2mx10m', price: 26.9, category: 'riego', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/10140356/163410.jpg?v=639056632846230000', description: 'Heavy-duty 1/2 reinforced hose. Perfect for demanding garden watering and cleaning tasks.' },
  { id: 'riego-160659', title: 'Truper 3-Layer Reinforced Hose 1/2" 15m', price: 39.9, category: 'riego', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/8563643/160659.jpg?v=638735829167830000', description: 'Keep your gardens always green and full of vitality with this durable 3-layer reinforced hose.' },
  { id: 'riego-150640', title: 'Tramontina 1/2 Hose Repair Connector', price: 3, category: 'riego', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/10590199/150640.jpg?v=639126404176670000', description: 'Easily and quickly connect or repair your garden hose with this durable plastic connector.' },
  { id: 'riego-150628', title: 'Tramontina Fixed Wall Mount for 1/2 Hose', price: 8.9, category: 'riego', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/10590221/150628.jpg?v=639126404371200000', description: 'If you have trouble storing your hose in the garage, this fixed wall mount is the ideal solution.' },
  { id: 'herr-160829', title: 'Truper 4-Tine Garden Fork with Y-Handle', price: 77, category: 'herramientas', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/8563577/160829.jpg?v=638735822979530000', description: 'Whether piling grass, turning soil, or mixing fertilizer, this garden fork is specially designed for the job.' },
  { id: 'herr-158818', title: 'Truper Metal Straight Rake 22 Tines', price: 30.9, category: 'herramientas', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/8563612/158818.jpg?v=638735823577630000', description: 'Forget about dry leaves in your garden with this practical and sturdy metal leaf rake.' },
  { id: 'herr-1001463651', title: 'Garden Grafting Shears', price: 44.9, category: 'herramientas', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/10739894/imageUrl_1.jpg?v=639149117585100000', description: 'Grafting shears are specialized cutting tools designed specifically for joining plant tissues.' },
  { id: 'herr-1001463645', title: 'Multifunctional Garden Grafting Tool', price: 44.9, category: 'herramientas', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/10739862/imageUrl_1.jpg?v=639149117155430000', description: 'Versatile grafting tool that makes clean cuts for successful plant propagation and pruning.' }
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