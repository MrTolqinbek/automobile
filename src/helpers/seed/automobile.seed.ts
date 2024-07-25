import axios from 'axios';
import { AutoMobileType } from '../../../src/api/automobile/enum/auto_mobile_type.enum';

const automobileTypes = [
  AutoMobileType.SEDAN,
  AutoMobileType.TRUCK,
  AutoMobileType.SUV,
];

const generateRandomAutomobile = () => {
  const models = [
    'Model A',
    'Model B',
    'Model C',
    'Model D',
    'Model E',
    'Model F',
    'Model G',
    'Model H',
  ];
  const colors = [
    'Red',
    'Blue',
    'Green',
    'Black',
    'White',
    'Yellow',
    'Grey',
    'wheat',
    'orange',
    'lime',
    'magenta',
    'limegreen',
  ];

  return {
    model: models[Math.floor(Math.random() * models.length)],
    type_auto:
      automobileTypes[Math.floor(Math.random() * automobileTypes.length)],
    year_publication: Math.floor(Math.random() * 31) + 1990, // Random year between 1990 and 2020
    color: colors[Math.floor(Math.random() * colors.length)],
  };
};

const seedAutomobiles = async () => {
  const promises = [];

  for (let i = 0; i < 100; i++) {
    const automobile = generateRandomAutomobile();
    promises.push(axios.post('http://localhost:3000/api/automobile', automobile));
  }

  try {
    await Promise.all(promises);
    console.log('100 automobiles have been successfully added.');
  } catch (error) {
    console.error('Error adding automobiles:', error);
  }
};

seedAutomobiles();
