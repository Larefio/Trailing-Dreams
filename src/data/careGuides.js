const base = import.meta.env.BASE_URL;

export const careGuides = [
  {
    id: 'indoor',
    label: 'Indoor Plants',
    image: `${base}img/monstera.jpg`,
    intro: 'Most are tropical plants adapted to indoors. Key: indirect light and avoid overwatering.',
    specs: {
      light: 'Bright indirect light. Avoid direct sun during peak hours.',
      water: 'Water when the top 1-2 inches of soil are dry.',
      humidity: 'Medium-high (50-70%). Group plants or use a humidifier.',
      soil: 'Airy soil: peat + perlite + bark (2:1:1).',
      tips: [
        'Rotate the pot weekly for even growth',
        'Clean leaves with a damp cloth every month',
        'Fertilize monthly in spring and summer',
        'Repot every 1-2 years in spring'
      ]
    }
  },
  {
    id: 'succulents',
    label: 'Succulents & Cacti',
    image: `${base}img/Aloe-aristata.jpg`,
    intro: 'They store water in leaves/stems. Less is more: better to dry out than rot.',
    specs: {
      light: 'Direct sun 4-6h/day. South/west facing window is ideal.',
      water: 'Deep watering only when soil is 100% dry (10-14 days).',
      humidity: 'Low (30-40%). Good ventilation prevents fungi.',
      soil: 'Mineral soil: coarse sand + perlite + little organic matter (1:1:1).',
      tips: [
        'Pot with drainage holes is mandatory',
        'Water the soil, not the leaves',
        'Winter: minimal or no watering',
        'Fertilize 2-3 times a year only'
      ]
    }
  },
  {
    id: 'tropical',
    label: 'Exotic Tropicals',
    image: `${base}img/maranta-lima-naranja.jpg`,
    intro: 'A tropical jungle at home: warmth, high humidity, and constant filtered light.',
    specs: {
      light: 'Medium-bright filtered light. No direct sun.',
      water: 'Keep soil slightly moist at all times (not soggy).',
      humidity: 'Very high (70-90%). Essential: humidifier or terrarium.',
      soil: 'Very airy: sphagnum moss + perlite + bark + charcoal.',
      tips: [
        'Distilled/rain water is mandatory (sensitive to chlorine/calcium)',
        'Do not let the soil dry out completely',
        'Avoid cold drafts',
        'Mist leaves only if there is good ventilation'
      ]
    }
  },
  {
    id: 'carnivorous',
    label: 'Carnivorous Plants',
    image: `${base}img/Darlingtonia.jpg`,
    intro: 'They grow in nutrient-poor soils. They capture insects for nitrogen.',
    specs: {
      light: 'Direct sun 6-8h/day (except Pinguicula/Drosera: medium).',
      water: 'Tray with distilled/rain water 1-2 inches constant. NEVER tap water.',
      humidity: 'High (60-80%). The water tray maintains it.',
      soil: '100% peat moss or peat + perlite (1:1). Zero fertilizer/compost.',
      tips: [
        'Do not feed them by hand (they capture on their own)',
        'NEVER fertilize (it burns roots)',
        'Cold dormancy is mandatory (Sarracenia, Dionaea, Darlingtonia)',
        'Cut flowers to save energy'
      ]
    }
  },
  {
    id: 'airplants',
    label: 'Air Plants (Tillandsias)',
    image: `${base}img/Tillandsia.jpg`,
    intro: 'Epiphytes with no functional roots. They absorb water/nutrients through trichomes on leaves.',
    specs: {
      light: 'Bright indirect light. They tolerate some morning/evening sun.',
      water: 'Submerge for 20-30 min 1-2 times/week + shake off excess. Dry upside down for 4h.',
      humidity: 'Medium-high (50-70%). Good air circulation is critical.',
      soil: 'NONE. Mount on wood, cork, shells, crystals.',
      tips: [
        'After watering: DRY COMPLETELY (prevents central rot)',
        'Fertilize 1/month in watering water (bromeliad fertilizer 1/4 dose)',
        'They bloom once in a lifetime → produce pups',
        'Avoid copper/metal tools (toxic)'
      ]
    }
  }
];