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
  { id: 'jard-105931', title: 'Tierra Preparada 20kg 4Estaciones', price: 15, category: 'jardineria', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/9975595/105931.jpg?v=639037964693370000', description: 'Preparación especial para todo tipo de plantas. Su fórmula equilibrada de musgo, tierra vegetal, tie' },
  { id: 'jard-168177', title: 'Masilla Cucarachicida El Secreto de la Abuelita 100gr', price: 8.9, category: 'jardineria', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/9999056/168177.jpg?v=639044447105900000', description: 'Masilla Cucarachicida El Secreto de la Abuelita 100gr. Disfruta de lo más nuevo que Promart.pe trae ' },
  { id: 'jard-168162', title: 'Plantas Artificiales Set x 3 Negro Value Deco', price: 19.9, category: 'jardineria', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/9998105/168162.jpg?v=639044078395300000', description: 'Las plantas artificiales son perfectas para decorar tu hogar debido a que nunca perderán su belleza.' },
  { id: 'jard-157588', title: 'Sustrato para orquídeas 500g Garden Clean', price: 14.9, category: 'jardineria', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/7943451/157588.jpg?v=638494193166830000', description: 'Aporta Bio estimulación para un mejor desarrollo e incremento de inmunidad en plantas.' },
  { id: 'jard-156131', title: 'Pulverizador Manual Tramontina Plástico 450ml', price: 9.9, category: 'jardineria', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/10699930/156131.jpg?v=639136074241200000', description: 'Pulverizador Manual Tramontina Plástico 450ml Disfruta de lo más nuevo que Promart.pe trae para ti.' },
  { id: 'jard-152371', title: 'Sustrato Orgánico Cascarilla de Arroz 4Estaciones 1 kg Abono Orgánico para Plantas', price: 5.9, category: 'jardineria', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/7342913/152371.jpg?v=638253998137670000', description: 'Sustrato Orgánico Cascarilla de Arroz 4Estaciones 1 kg Abono Orgánico para Plantas' },
  { id: 'jard-119786', title: 'Mata Acaros X-Trim Forte 440ml Xtrim', price: 10.7, category: 'jardineria', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/6944201/119786.jpg?v=638179553177630000', description: 'Apariencia líquida. Densidad a 25°C de 0.89 a 0.95 g/ml. Punto de inflamación: 41°C. pH: 5.45. Prese' },
  { id: 'jard-113351', title: 'Tierra preparada para jardinería x1kg Mallki', price: 2.9, category: 'jardineria', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/255143/113351.jpg?v=636718521848400000', description: 'Lista para usarse directamente en plantas. Libre de insectos, impurezas y malezas. Alta capacidad pa' },
  { id: 'jard-112996', title: 'Botella Spray 500ml Orange', price: 5.9, category: 'jardineria', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/9443263/112996.jpg?v=638956335713070000', description: 'Botella con pico de spray con una capacidad de 50ml.' },
  { id: 'jard-105940', title: 'Abono 4Estaciones Humus de Lombriz 20kg', price: 24.1, category: 'jardineria', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/8720383/105940.jpg?v=638783811612700000', description: 'Abono 4Estaciones Humus de Lombriz 20kg' },
  { id: 'base-166344', title: 'Organizador de macetas 5 niveles Orange', price: 64.9, category: 'bases', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/9725239/166344.png?v=638996257464930000', description: 'Ideal para decorar tu espacio en salas, terrazas y jardines.' },
  { id: 'base-154911', title: 'Base con ruedas Super Forte # 12 Reyplast', price: 29.9, category: 'bases', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/7778709/154911.jpg?v=638411827852470000', description: 'pTransporta tus macetas con facilidad y estilo con la Base para Maceta Policarbonato Reyplast Super ' },
  { id: 'base-111504', title: 'Base colonial para maceta con ruedas Mas Garden', price: 37.9, category: 'bases', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/249951/111504.jpg?v=636682346128900000', description: 'pOrganiza tus macetas con estilo y practicidad gracias a la Base para Maceta con Ruedas Mas Garden M' },
  { id: 'base-1001261188', title: 'Porta Macetero Cazzas Argon de Madera', price: 40, category: 'bases', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/9549558/imageUrl_1.jpg?v=638969690477770000', description: 'Nuestro nuevo lanzamiento el porta macetero&nbsp;ARGON&nbsp;una estructura de madera, diseñada como ' },
  { id: 'base-1001261183', title: 'Porta Macetero Cazzas Forteza de Madera', price: 50, category: 'bases', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/9549544/imageUrl_1.jpg?v=638969690470570000', description: 'Porta macetero&nbsp;FORTEZA&nbsp;es una estructura de madera, diseñada como un soporte de exhibición' },
  { id: 'base-1001261167', title: 'Porta Macetero Cazzas Azalea de Madera', price: 40, category: 'bases', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/9549474/imageUrl_1.jpg?v=638969690394300000', description: 'Presentamos a&nbsp;Azalea, el porta macetero de diseño innovador y practico, fabricado de madera de ' },
  { id: 'base-1001005315', title: 'ESTANTE PARA MACETAS LENGUA DE SUEGRA', price: 549, category: 'bases', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/8613907/imageUrl_1.jpg?v=638760619035770000', description: 'Estante de plantas rígida en forma de pirámide, te brindara organizar y decorar tu espacio en Salas,' },
  { id: 'base-1000724543', title: 'Porta maceta Aladino en Madera', price: 95, category: 'bases', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/8248492/image-38eba62c4de24d1aa1d72079d7deb106.jpg?v=638651327403700000', description: 'Añade un toque de naturaleza y elegancia a tu hogar o jardín con este hermoso porta macetero de 4 ba' },
  { id: 'base-1001150645', title: 'Maceta Minimalista de Plástico Colores Variados', price: 0, category: 'bases', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/9019686/imageUrl_1.jpg?v=638872939788100000', description: 'Diseño moderno y elegante: estas macetas tienen un estilo contemporáneo que actualmente está de moda' },
  { id: 'base-1000725565', title: 'Set de 3 Macetas para Orquídeas', price: 0, category: 'bases', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/8307777/image.jpg?v=638653447752330000', description: 'Material de calidad: las macetas de plástico para orquídeas están hechas de plástico duradero, no se' },
  { id: 'riego-164409', title: 'Manguera Enrollable 10m Gris Orange', price: 49.9, category: 'riego', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/9268226/164409.jpg?v=638924479834830000', description: 'Manguera Enrollable 10m Gris Orange. Disfruta de lo más nuevo que Promart.pe trae para ti.' },
  { id: 'riego-162001', title: 'Manguera Espiral 15m con Pistola 8 Funciones Orange', price: 49.9, category: 'riego', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/9367120/162001.jpg?v=638939201854500000', description: 'Manguera Espiral 15m con Pistola 8 Funciones Orange. Disfruta de lo más nuevo que Promart.pe trae pa' },
  { id: 'riego-154277', title: 'Manguera Force Verde 15 metros Nozzle Box Fit', price: 134.1, category: 'riego', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/7973801/154277.jpg?v=638509585278000000', description: 'pDescubre la versatilidad y calidad de la Manguera FITT FORCE Verde de 15 metros con Sistema NTS. Es' },
  { id: 'riego-136314', title: 'Pistola plástica con recubrimiento 8 funciones Truper', price: 12.9, category: 'riego', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/7982954/136314.jpg?v=638520827766100000', description: 'Las pistolas para regar te permiten diferentes tipos de chorros, además de dirigir el regado a zonas' },
  { id: 'riego-1001430429', title: 'Manguera Expandible Hasta 45 Metros Retractil  Multiusos Jardin', price: 39.9, category: 'riego', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/10568605/imageUrl_1.jpg?v=639125392441630000', description: 'Manguera Multiusos Expandible con Accesorios hasta 45 Metros.Su diseño exclusivo hace que esta mangu' },
  { id: 'riego-1001092191', title: 'Manguera de Riego 5/8" Reforzada 20 Metros Truper', price: 90, category: 'riego', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/8803375/imageUrl_1.jpg?v=638815051666400000', description: 'MANGUERA DE RIEGO 5/8" 20 METROS &nbsp; Detalles del producto:   Manguera reforzada de 3 capas Con r' },
  { id: 'riego-163410', title: 'Manguera 1/2 Reforzada Verde/Rojo 2mx10m', price: 26.9, category: 'riego', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/10140356/163410.jpg?v=639056632846230000', description: 'Manguera 1/2 Reforzada Verde/Rojo 2mx10m. Disfruta de lo más nuevo que Promart.pe trae para ti.' },
  { id: 'riego-160659', title: 'Manguera 1/2" reforzada 3 capas 15m Truper', price: 39.9, category: 'riego', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/8563643/160659.jpg?v=638735829167830000', description: 'Mantén tus jardines siempre verdes y llenos de vitalidad con esta útil manguera. Disfruta de lo más ' },
  { id: 'riego-150640', title: 'Union para Reparar Mangueras 1/2 Tramontina', price: 3, category: 'riego', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/10590199/150640.jpg?v=639126404176670000', description: 'Cualquier accesorio de riego se puede conectar fácil y rápidamente a la manguera. Todo se interconec' },
  { id: 'riego-150628', title: 'Soporte fijo para manguera 1/2 Tramontina', price: 8.9, category: 'riego', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/10590221/150628.jpg?v=639126404371200000', description: 'Si tiene problemas para guardar la manguera dentro del garaje, el soporte fijo para manguera es idea' },
  { id: 'herr-160829', title: 'Trinche de 4 dientes para jardín Puño "Y" Truper', price: 77, category: 'herramientas', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/8563577/160829.jpg?v=638735822979530000', description: 'Ya sea para amontonar el pasto, revolver el terreno o mezclar abono, el trinche se desarrolló especi' },
  { id: 'herr-158818', title: 'Escoba recta metálica con 22 dientes Truper', price: 30.9, category: 'herramientas', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/8563612/158818.jpg?v=638735823577630000', description: 'Olvídate de las hojas secas en tu jardín con esta práctica escoba metálica.' },
  { id: 'herr-1001463651', title: 'Tijera Injertadora Para Jardineria', price: 44.9, category: 'herramientas', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/10739894/imageUrl_1.jpg?v=639149117585100000', description: '&lt;div&gt;Las tijeras de injerto son herramientas de corte que se usan espec&amp;iacute;ficamente p' },
  { id: 'herr-1001463645', title: 'Tijera Injertadora Multifuncional Para Jardineria', price: 44.9, category: 'herramientas', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/10739862/imageUrl_1.jpg?v=639149117155430000', description: '&lt;div&gt;Las tijeras de injerto son herramientas de corte que se usan espec&amp;iacute;ficamente p' },
  { id: 'herr-1001462915', title: 'Sierra circular . profesional. 220 V1500 W', price: 288.99, category: 'herramientas', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/10735484/imageUrl_1.jpg?v=639148249241470000', description: 'Caracteristicas:Motor de 1,500 W montado sobre balero de bolas para mayor vida útil y mejor desempeñ' },
  { id: 'herr-1001462464', title: 'Tijera De Podar Inalámbrica Bosch Pro Pruner + Batcargador', price: 959.9, category: 'herramientas', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/10732636/imageUrl_1.jpg?v=639147242221370000', description: '&lt;div&gt;&lt;span style=&quot;font-size: small;&quot;&gt;Producto:&lt;/span&gt;&lt;/div&gt;&lt;div' },
  { id: 'herr-1001462243', title: 'Tijera De Podar Inalámbrica Bosch Pro Pruner Brushless', price: 639.9, category: 'herramientas', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/10731831/imageUrl_1.jpg?v=639147241988930000', description: 'Producto:Tijera de Podar Inalámbrica Bosch Pro Pruner BrushlessCaracterísticas:Resultados rápidos: p' },
  { id: 'herr-1001460971', title: 'Gabinete Metalico Movil Con 6 Cajones 130 Kg Truper 12067 Color Naranja', price: 1619.99, category: 'herramientas', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/10725351/imageUrl_1.jpg?v=639144793264270000', description: 'Dispone de 6 cajones amplios con correderas de baleros que garantizan un deslizamiento suave y resis' },
  { id: 'herr-1001460594', title: 'Truper 12172 3cm de largo hoja de 1.9cm de ancho x unidad', price: 21.99, category: 'herramientas', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/10724325/imageUrl_1.jpg?v=639144649808570000', description: 'Navaja / Hoja de Repuesto Truper 12172 de 3 cm x 1.9 cm - UnidadLa hoja de repuesto Truper 12172 est' },
  { id: 'herr-1001455837', title: 'Soldador De Estaño 40w Lapiz Cautil Cautin Ingco Industrial', price: 47.99, category: 'herramientas', imgFile: 'https://promart.vteximg.com.br/arquivos/ids/10698754/imageUrl_1.jpg?v=639135579359130000', description: 'FICHA TÉCNICA:-Voltaje: 220-240V ~ 50 / 60Hz-Potencia de entrada: 40 W-Tiempo de precalentamiento: 3' }
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
  { id: 'jardineria', label: 'Tierras y Sustratos', count: plants.filter(p => p.category === 'jardineria').length },
  { id: 'bases', label: 'Bases para Macetas', count: plants.filter(p => p.category === 'bases').length },
  { id: 'riego', label: 'Riego', count: plants.filter(p => p.category === 'riego').length },
  { id: 'herramientas', label: 'Herramientas', count: plants.filter(p => p.category === 'herramientas').length }
];