import { BreedInfo } from '../types';

export const breedDatabase: BreedInfo[] = [
  {
    name: 'Gir',
    animalType: 'cattle',
    characteristics: ['Distinctive lyre-shaped horns', 'Red and white patches', 'Pendulous ears', 'Prominent forehead'],
    productivity: 'High milk yield: 1200-1800 kg per lactation',
    careTips: ['Provide adequate shade', 'Feed high-protein diet', 'Regular health checkups', 'Clean water supply'],
    origin: 'Gir forests of Gujarat, India',
    avgWeight: 'Male: 545 kg, Female: 385 kg',
    avgHeight: 'Male: 138 cm, Female: 130 cm',
    lifespan: '15-20 years',
    description: 'The Gir is one of the most popular indigenous Indian cattle breeds known for high milk production.'
  },
  {
    name: 'Holstein Friesian',
    animalType: 'cattle',
    characteristics: ['Black and white patches', 'Large body size', 'High milk production', 'Well-developed udder'],
    productivity: 'Very high milk yield: 6000-7000 kg per lactation',
    careTips: ['High-quality feed required', 'Climate-controlled housing', 'Regular veterinary care', 'Balanced nutrition'],
    origin: 'Netherlands and Northern Germany',
    avgWeight: 'Male: 900 kg, Female: 580 kg',
    avgHeight: 'Male: 150 cm, Female: 145 cm',
    lifespan: '15-18 years',
    description: 'World\'s highest milk-producing dairy cattle breed, adapted to various climates.'
  },
  {
    name: 'Sahiwal',
    animalType: 'cattle',
    characteristics: ['Reddish brown color', 'Loose skin', 'Long pendulous ears', 'Well-developed hump'],
    productivity: 'Good milk yield: 1400-2500 kg per lactation',
    careTips: ['Heat-tolerant breed', 'Grazing preferred', 'Regular deworming', 'Mineral supplements'],
    origin: 'Sahiwal district, Pakistan (now Pakistan)',
    avgWeight: 'Male: 450 kg, Female: 300 kg',
    avgHeight: 'Male: 135 cm, Female: 120 cm',
    lifespan: '15-18 years',
    description: 'Heat-tolerant breed excellent for tropical and subtropical regions.'
  },
  {
    name: 'Murrah',
    animalType: 'buffalo',
    characteristics: ['Jet black color', 'Tightly coiled horns', 'Deep body', 'Well-developed udder'],
    productivity: 'High milk yield: 1500-2500 kg per lactation',
    careTips: ['Needs wallowing facility', 'High-energy feed', 'Clean milking practices', 'Shade provision'],
    origin: 'Haryana and Punjab, India',
    avgWeight: 'Male: 550 kg, Female: 450 kg',
    avgHeight: 'Male: 140 cm, Female: 130 cm',
    lifespan: '18-20 years',
    description: 'India\'s premier buffalo breed known for highest milk production among buffaloes.'
  },
  {
    name: 'Red Sindhi',
    animalType: 'cattle',
    characteristics: ['Red color varying from light to dark', 'Compact body', 'Well-developed dewlap', 'Medium-sized horns'],
    productivity: 'Moderate milk yield: 1100-1500 kg per lactation',
    careTips: ['Drought-resistant', 'Low maintenance', 'Suitable for extensive grazing', 'Disease-resistant'],
    origin: 'Sindh region (now Pakistan)',
    avgWeight: 'Male: 400 kg, Female: 300 kg',
    avgHeight: 'Male: 130 cm, Female: 115 cm',
    lifespan: '15-17 years',
    description: 'Hardy breed well-adapted to arid and semi-arid conditions.'
  },
  {
    name: 'Surti',
    animalType: 'buffalo',
    characteristics: ['Brown to black color', 'Curved horns', 'Compact build', 'Good milk production'],
    productivity: 'Good milk yield: 1200-1800 kg per lactation',
    careTips: ['Riverine buffalo care', 'Regular bathing', 'Green fodder essential', 'Protection from heat'],
    origin: 'Surat district, Gujarat, India',
    avgWeight: 'Male: 500 kg, Female: 400 kg',
    avgHeight: 'Male: 135 cm, Female: 125 cm',
    lifespan: '16-18 years',
    description: 'Excellent dairy buffalo breed known for rich milk quality.'
  }
];

export const getBreedInfo = (breedName: string): BreedInfo | null => {
  return breedDatabase.find(breed => 
    breed.name.toLowerCase().includes(breedName.toLowerCase()) ||
    breedName.toLowerCase().includes(breed.name.toLowerCase())
  ) || null;
};