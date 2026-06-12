const base = import.meta.env.BASE_URL;

export const careGuides = [
  {
    id: 'indoor',
    label: 'Plantas de Interior',
    image: `${base}img/monstera.jpg`,
    intro: 'La mayoría son tropicales adaptadas a interior. Clave: luz indirecta y no encharcar.',
    specs: {
      light: 'Luz brillante indirecta. Evita sol directo en horas pico.',
      water: 'Riega cuando los 2-3cm superiores del sustrato estén secos.',
      humidity: 'Media-alta (50-70%). Agrupa plantas o usa humidificador.',
      soil: 'Sustrato aireado: turba + perlita + corteza (2:1:1).',
      tips: [
        'Rota la maceta semanalmente para crecimiento uniforme',
        'Limpia hojas con paño húmedo cada mes',
        'Fertiliza mensual en primavera-verano',
        'Trasplanta cada 1-2 años en primavera'
      ]
    }
  },
  {
    id: 'succulents',
    label: 'Suculentas y Cactus',
    image: `${base}img/Aloe-aristata.jpg`,
    intro: 'Almacenan agua en hojas/tallos. Menos es más: mejor secarse que pudrirse.',
    specs: {
      light: 'Sol directo 4-6h/día. Ventana sur/oeste ideal.',
      water: 'Riego profundo solo cuando sustrato 100% seco (10-14 días).',
      humidity: 'Baja (30-40%). Buena ventilación evita hongos.',
      soil: 'Sustrato mineral: arena gruesa + perlita + poco orgánico (1:1:1).',
      tips: [
        'Maceta con agujeros obligatoria',
        'Riega el sustrato, no las hojas',
        'Invierno: riego mínimo o nulo',
        'Fertiliza 2-3 veces al año solo'
      ]
    }
  },
  {
    id: 'tropical',
    label: 'Tropicales Exóticas',
    image: `${base}img/maranta-lima-naranja.jpg`,
    intro: 'Selva tropical en casa: calor, humedad alta y luz filtrada constante.',
    specs: {
      light: 'Luz media-brillante filtrada. Sin sol directo.',
      water: 'Mantén sustrato ligeramente húmedo siempre (no encharcado).',
      humidity: 'Muy alta (70-90%). Esencial: humidificador o terrario.',
      soil: 'Muy aireado: musgo sphagnum + perlita + corteza + carbón.',
      tips: [
        'Agua destilada/lluvia obligatoria (sensibles a cloro/cal)',
        'No dejes que el sustrato se seque del todo',
        'Evita corrientes de aire frío',
        'Rocía hojas solo si hay buena ventilación'
      ]
    }
  },
  {
    id: 'carnivorous',
    label: 'Plantas Carnívoras',
    image: `${base}img/Darlingtonia.jpg`,
    intro: 'Crecen en suelos pobres en nutrientes. Capturan insectos para nitrógeno.',
    specs: {
      light: 'Sol directo 6-8h/día (excepto Pinguicula/Drosera: media).',
      water: 'Bandeja con agua destilada/lluvia 2-3cm constante. NUNCA agua grifo.',
      humidity: 'Alta (60-80%). Bandeja de agua la mantiene.',
      soil: 'Turba rubia 100% o turba + perlita (1:1). Cero fertilizante/compost.',
      tips: [
        'No las alimentes a mano (capturan solas)',
        'No fertilices NUNCA (quema raíces)',
        'Hibernación fría obligatoria (Sarracenia, Dionaea, Darlingtonia)',
        'Corta flores para ahorrar energía'
      ]
    }
  },
  {
    id: 'airplants',
    label: 'Plantas de Aire (Tillandsias)',
    image: `${base}img/Tillandsia.jpg`,
    intro: 'Epífitas sin raíces funcionales. Absorben agua/nutrientes por tricomas en hojas.',
    specs: {
      light: 'Luz brillante indirecta. Toleran algo de sol mañana/tarde.',
      water: 'Sumersión 20-30min 1-2/semana + sacudir exceso. Secar boca abajo 4h.',
      humidity: 'Media-alta (50-70%). Buena circulación de aire crítica.',
      soil: 'NINGUNO. Montar en madera, corcho, conchas, cristales.',
      tips: [
        'Después de regar: SECAR COMPLETAMENTE (evita pudrición central)',
        'Fertiliza 1/mes en agua de riego (bromeliad fertilizer 1/4 dosis)',
        'Florecen 1 vez en vida → producen hijuelos (pups)',
        'Evita cobre/herramientas metálicas (tóxico)'
      ]
    }
  }
];