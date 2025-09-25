// Products Database
export const products = {
  'golf-trolley-hybrid': {
    id: 'golf-trolley-hybrid',
    slug: 'golf-trolley-hybrid',
    status: 'available', // 'available', 'coming_soon', 'construction'
    category: 'hybrid',
    images: {
      main: '/images/club_de_golf.webp',
      gallery: [
        '/images/club_de_golf.webp',
        '/images/kidsgolf.webp'
      ]
    },
    pricing: {
      price: 2499,
      currency: '€',
      originalPrice: null,
      discount: null
    },
    specifications: {
      weight: '12 kg',
      dimensions: '85 x 60 x 45 cm',
      battery: 'Lithium-ion 36V 10Ah',
      maxSpeed: '6 km/h',
      capacity: '15 kg (mode poussette) / 30 kg (mode chariot)',
      ageRange: '6 mois - 4 ans',
      chargingTime: '4-6 heures',
      warranty: '2 ans'
    },
    features: [
      'rapid_transformation',
      'child_safety_system',
      'silent_motor',
      'compact_design',
      'modular_accessories',
      'long_battery',
      'all_terrain_wheels',
      'touch_interface'
    ],
    translationKey: 'products.golf_trolley_hybrid'
  },
  'motorized-golf-trolley': {
    id: 'motorized-golf-trolley',
    slug: 'motorized-golf-trolley',
    status: 'construction',
    category: 'golf',
    images: {
      main: '/images/couple-jouant-au-golf-ensemble.webp',
      gallery: [
        '/images/couple-jouant-au-golf-ensemble.webp'
      ]
    },
    pricing: {
      price: 1299,
      currency: '€',
      originalPrice: null,
      discount: null
    },
    specifications: {
      weight: '8 kg',
      dimensions: '70 x 50 x 35 cm',
      battery: 'Lithium-ion 24V 8Ah',
      maxSpeed: '8 km/h',
      capacity: '25 kg',
      ageRange: null,
      chargingTime: '3-4 heures',
      warranty: '2 ans'
    },
    features: [
      'silent_motor',
      'intuitive_navigation',
      'extended_autonomy',
      'ergonomic_design',
      'advanced_technology'
    ],
    translationKey: 'products.motorized_golf_trolley'
  }
};

// Helper functions
export const getProductById = (id) => products[id];
export const getProductBySlug = (slug) => Object.values(products).find(p => p.slug === slug);
export const getAllProducts = () => Object.values(products);
export const getProductsByCategory = (category) => Object.values(products).filter(p => p.category === category);
export const getAvailableProducts = () => Object.values(products).filter(p => p.status === 'available');
