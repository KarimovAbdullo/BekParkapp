import {ImageSourcePropType} from 'react-native';

export interface IFoodDataProps {
  id: number;
  name: string;
  price?: string;
  image: ImageSourcePropType;
  images?: any;
}

export const FastFoodData = [
  {
    id: 1,
    name: 'Zinger Burger',
    price: '2',
    image: require('assets/images/b2.png'),
    images: [require('assets/images/b2.png'), require('assets/images/b2.png')],
  },
  {
    id: 2,
    name: 'Roll Paratha',
    price: '3',
    image: require('assets/images/b1.png'),
    images: [require('assets/images/b1.png'), require('assets/images/b1.png')],
  },
  {
    id: 3,
    name: 'Kebab Danar',
    price: '2.4',
    image: require('assets/images/--3.png'),
    images: [
      require('assets/images/--3.png'),
      require('assets/images/--3.png'),
    ],
  },
  {
    id: 4,
    name: 'sui eggs ',
    price: '1',
    image: require('assets/images/egg.png'),
    images: [
      require('assets/images/egg.png'),
      require('assets/images/egg.png'),
    ],
  },
  {
    id: 5,
    name: 'Big Burder',
    price: '5',
    image: require('assets/images/--1.png'),
    images: [
      require('assets/images/--1.png'),
      require('assets/images/--1.png'),
    ],
  },
  {
    id: 6,
    name: 'Italian frie',
    price: '4',
    image: require('assets/images/fri.png'),
    images: [
      require('assets/images/fri.png'),
      require('assets/images/fri.png'),
    ],
  },
  {
    id: 7,
    name: 'Burger class',
    price: '4',
    image: require('assets/images/burgPrem.png'),
    images: [
      require('assets/images/burgPrem.png'),
      require('assets/images/burgPrem.png'),
    ],
  },
];

export const DeserAllFoodData = [
  {
    id: 1,
    name: 'Creamy Biscut',
    price: '5',
    image: require('assets/images/d1.png'),
    images: [require('assets/images/d1.png'), require('assets/images/d1.png')],
  },
  {
    id: 2,
    name: 'Roll cream',
    price: '3',
    image: require('assets/images/d2.png'),
    images: [require('assets/images/d2.png'), require('assets/images/d2.png')],
  },
  {
    id: 3,
    name: 'Pinki',
    price: '2',
    image: require('assets/images/c1.png'),
    images: [require('assets/images/c1.png'), require('assets/images/c1.png')],
  },
  {
    id: 4,
    name: 'Sky loe',
    price: '3,1',
    image: require('assets/images/c3.png'),
    images: [require('assets/images/c3.png'), require('assets/images/c3.png')],
  },
  {
    id: 5,
    name: 'Choko Pie',
    price: '6',
    image: require('assets/images/c2.png'),
    images: [require('assets/images/c2.png'), require('assets/images/c2.png')],
  },
];

export const DinnerFoodData = [
  {
    id: 1,
    name: 'King Dinner',
    price: '12',
    image: require('assets/images/king.png'),
    images: [
      require('assets/images/king.png'),
      require('assets/images/king.png'),
    ],
  },
  {
    id: 2,
    name: 'Turkish kebab',
    price: '4',
    image: require('assets/images/danar.png'),
    images: [
      require('assets/images/danar.png'),
      require('assets/images/danar.png'),
    ],
  },
  {
    id: 3,
    name: 'Mixi',
    price: '14',
    image: require('assets/images/mix.png'),
    images: [
      require('assets/images/mix.png'),
      require('assets/images/mix.png'),
    ],
  },
  {
    id: 4,
    name: 'Tore',
    price: '9',
    image: require('assets/images/Tore.png'),
    images: [
      require('assets/images/Tore.png'),
      require('assets/images/Tore.png'),
    ],
  },
  {
    id: 5,
    name: 'Lunchs',
    price: '10',
    image: require('assets/images/dre.png'),
    images: [
      require('assets/images/dre.png'),
      require('assets/images/dre.png'),
    ],
  },
  {
    id: 6,
    name: 'My Pizza',
    price: '18',
    image: require('assets/images/piz.png'),
    images: [
      require('assets/images/piz.png'),
      require('assets/images/piz.png'),
    ],
  },
];

export const DrinkData = [
  {
    id: 1,
    name: 'Cola',
    price: '1.3',
    image: require('assets/images/d3.png'),
    images: [require('assets/images/d3.png'), require('assets/images/d3.png')],
  },
  {
    id: 2,
    name: 'Apelsin juice',
    price: '1.2',
    image: require('assets/images/ap.png'),
    images: [require('assets/images/ap.png'), require('assets/images/ap.png')],
  },
  {
    id: 3,
    name: 'Juliet',
    price: '1.7',
    image: require('assets/images/d7.png'),
    images: [require('assets/images/d7.png'), require('assets/images/d7.png')],
  },
  {
    id: 4,
    name: 'Sprite',
    price: '1',
    image: require('assets/images/Tore.png'),
    images: [
      require('assets/images/sprite.png'),
      require('assets/images/sprite.png'),
    ],
  },
  {
    id: 5,
    name: 'Lieamon jiece',
    price: '0.7',
    image: require('assets/images/d5.png'),
    images: [require('assets/images/d5.png'), require('assets/images/d5.png')],
  },
];
