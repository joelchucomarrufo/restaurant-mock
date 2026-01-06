import { StoreWorldsResponseDto } from '../dto/store-worlds.dto';

export const storeWorldsMockData: StoreWorldsResponseDto = {
  store: 'T101',
  device: 'TOTEM.001',
  ipStationPrincipal: '12.123.342.31',
  world: [
    {
      id: 1,
      name: 'Fusión',
      image: 'https://takiplayer.com/cencosud/option_one.png',
      categories: [
        {
          id: 1,
          name: 'categoria1',
        },
        {
          id: 2,
          name: 'categoria2',
        },
      ],
    },
    {
      id: 2,
      name: 'Grill',
      image: 'https://takiplayer.com/cencosud/option_two.png',
      categories: [
        {
          id: 3,
          name: 'categoria3',
        },
        {
          id: 4,
          name: 'categoria4',
        },
      ],
    },
    {
      id: 3,
      name: 'Marino',
      image: 'https://takiplayer.com/cencosud/option_three.png',
      categories: [
        {
          id: 1,
          name: 'categoria1',
        },
        {
          id: 2,
          name: 'categoria2',
        },
        {
          id: 3,
          name: 'categoria3',
        },
        {
          id: 4,
          name: 'categoria4',
        },
      ],
    },
    {
      id: 4,
      name: 'Pizzas',
      image: 'https://takiplayer.com/cencosud/option_four.png',
      categories: [
        {
          id: 1,
          name: 'categoria1',
        },
        {
          id: 2,
          name: 'categoria2',
        },
        {
          id: 3,
          name: 'categoria3',
        },
        {
          id: 4,
          name: 'categoria4',
        },
        {
          id: 5,
          name: 'categoria5',
        },
        {
          id: 6,
          name: 'categoria6',
        },
      ],
    },
    {
      id: 5,
      name: 'Saludable',
      image: 'https://takiplayer.com/cencosud/option_five.png',
      categories: [
        {
          id: 5,
          name: 'categoria5',
        },
        {
          id: 6,
          name: 'categoria6',
        },
      ],
    },
    {
      id: 6,
      name: 'Sándwich',
      image: 'https://takiplayer.com/cencosud/option_six.png',
      categories: [
        {
          id: 3,
          name: 'categoria3',
        },
        {
          id: 4,
          name: 'categoria4',
        },
        {
          id: 5,
          name: 'categoria5',
        },
      ],
    },
  ],
  dishes: [
    {
      ean: '7755211000020',
      name: 'Churrasco con vegetales',
      adicionalDetails: 'Lorem ipsum dolor sit amet consectetur adipiscing elit curae maecenas.',
      unitPrice: 8.5,
      stock: 0,
      image: 'https://takiplayer.com/cencosud/dish_one.png',
      restriction: true,
      rangeHours: '23:00 - 06:00',
      idWorld: 2,
      idCategory: 3,
      comments: true,
      tagPreferences: ['sin sal', 'con sal', 'termino 1/2'],
      cookingStation: 'estacion1',
      ipStation: '12.123.342.32',
      products: [
        {
          ean: '22111111111',
          name: 'producto1',
          unitPrice: 8.5,
        },
        {
          ean: '22111111112',
          name: 'producto2',
          unitPrice: 8.5,
        },
      ],
    },
    {
      ean: '7755211000021',
      name: 'Pasta al pesto',
      adicionalDetails: 'Lorem ipsum dolor sit amet consectetur adipiscing elit curae maecenas. Lorem ipsum dolor sit amet consectetur adipiscing elit curae maecenas. Lorem ipsum dolor sit amet consectetur adipiscing elit curae maecenas.',
      unitPrice: 8.5,
      stock: 3,
      image: 'https://takiplayer.com/cencosud/dish_two.png',
      restriction: false,
      rangeHours: null,
      idWorld: 1,
      idCategory: 2,
      comments: true,
      tagPreferences: ['sin sal', 'con sal', 'termino 1/2'],
      cookingStation: 'estacion1',
      ipStation: '12.123.342.32',
      products: [
        {
          ean: '22111111111',
          name: 'producto1',
          unitPrice: 8.5,
        },
        {
          ean: '22111111112',
          name: 'producto2',
          unitPrice: 8.5,
        },
      ],
    },
    {
      ean: '7755211000022',
      name: 'Pizza de vegetales',
      adicionalDetails: 'Lorem ipsum dolor sit amet consectetur adipiscing elit curae maecenas.',
      unitPrice: 8.5,
      stock: 4,
      image: 'https://takiplayer.com/cencosud/dish_three.png',
      restriction: true,
      rangeHours: '23:00 - 06:00',
      idWorld: 4,
      idCategory: 4,
      comments: true,
      tagPreferences: ['sin sal', 'con sal', 'termino 1/2'],
      cookingStation: 'estacion1',
      ipStation: '12.123.342.32',
      products: [
        {
          ean: '22111111111',
          name: 'producto1',
          unitPrice: 8.5,
        },
        {
          ean: '22111111112',
          name: 'producto2',
          unitPrice: 8.5,
        },
      ],
    },
    {
      ean: '7755211000023',
      name: '6 Ostras frescas',
      adicionalDetails: 'Lorem ipsum dolor sit amet consectetur adipiscing elit curae maecenas.',
      unitPrice: 8.5,
      stock: null,
      image: 'https://takiplayer.com/cencosud/dish_four.png',
      restriction: false,
      rangeHours: null,
      idWorld: 3,
      idCategory: 4,
      comments: true,
      tagPreferences: ['sin sal', 'con sal', 'termino 1/2'],
      cookingStation: 'estacion1',
      ipStation: '12.123.342.32',
      products: [
        {
          ean: '22111111111',
          name: 'producto1',
          unitPrice: 8.5,
        },
        {
          ean: '22111111112',
          name: 'producto2',
          unitPrice: 8.5,
        },
      ],
    },
  ],
};

