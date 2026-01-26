import { StoreWorldsResponseDto } from '../dto/store-worlds.dto';

// UUIDs fijos para mantener consistencia en el mock
const WORLD_IDS = {
  FUSION: 'a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d',
  GRILL: 'b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e',
  MARINO: 'c3d4e5f6-a7b8-4c9d-0e1f-2a3b4c5d6e7f',
  PIZZAS: 'd4e5f6a7-b8c9-4d0e-1f2a-3b4c5d6e7f8a',
  SALUDABLE: 'e5f6a7b8-c9d0-4e1f-2a3b-4c5d6e7f8a9b',
  SANDWICH: 'f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c',
};

const CATEGORY_IDS = {
  CAT1: '1a2b3c4d-5e6f-4a7b-8c9d-0e1f2a3b4c5d',
  CAT2: '2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e',
  CAT3: '3c4d5e6f-7a8b-4c9d-0e1f-2a3b4c5d6e7f',
  CAT4: '4d5e6f7a-8b9c-4d0e-1f2a-3b4c5d6e7f8a',
  CAT5: '5e6f7a8b-9c0d-4e1f-2a3b-4c5d6e7f8a9b',
  CAT6: '6f7a8b9c-0d1e-4f2a-3b4c-5d6e7f8a9b0c',
};

const DISH_IDS = {
  CHURRASCO: '7a8b9c0d-1e2f-4a3b-4c5d-6e7f8a9b0c1',
  PASTA: '8b9c0d1e-2f3a-4b4c-5d6e-7f8a9b0c1d2',
  PIZZA: '9c0d1e2f-3a4b-4c5d-6e7f-8a9b0c1d2e3',
  OSTRAS: '0d1e2f3a-4b5c-4d6e-7f8a-9b0c1d2e3f4',
};

// Base64 mock de imágenes (mismo formato que se usa en stores)
const BASE64_IMAGES = {
  WORLD_FUSION: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMXzL5ZXOdHlIGiEXpMRjLWa9Nr0EOpGisgBT+NU84Ze4=',
  WORLD_GRILL: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MH5WntBex8jKm9KSXkbrH/5Wbdtk3GZ7v2rqydbq/bs5XkXufaWVeWZWD3yh6zRsWfH4dsOIRiLNc06eD4o93oF',
  WORLD_MARINO: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMcd1bT0Y/wFgrFoUU7+P7FTCRfccfQP1qfwgEdshz/MA=',
  WORLD_PIZZAS: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMvaofp4Ih460XHAS65ciwP7oi68Ui8/+YuENAmjcv9vA=',
  WORLD_SALUDABLE: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMqOu5V2ToW/SHTpaeDo4+W6/sSxlVgduq1XcAyNtafNs=',
  WORLD_SANDWICH: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMlMgCx4AMVZOaxpUSWH+WZXQs6m8vvyQ01T3LJJgU7E8=',
  DISH_CHURRASCO: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMColS3F4UfjCxJnuo/TbhOSQfjt+m2M9YixDHmU1mMz8=',
  DISH_PASTA: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMevuJooB+AKhyD72E0KSx99z5kE5HZs+Pc8bCi+szx/o=',
  DISH_PIZZA: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMGmuVo7g5uZ0xzRbpD6rNA5fM+v3k/zk/k6T7RWPBAOA=',
  DISH_OSTRAS: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMpyAlfxmoIABTIcJQlZlXpDWIN6VmVCuCF9HDcX6N4KI=',
};

export const storeWorldsMockData: StoreWorldsResponseDto = {
  store: 'T101',
  device: 'TOTEM.001',
  ipStationPrincipal: '12.123.342.31',
  world: [
    {
      id: WORLD_IDS.FUSION,
      name: 'Fusión',
      image: BASE64_IMAGES.WORLD_FUSION,
      categories: [
        {
          id: CATEGORY_IDS.CAT1,
          name: 'categoria1',
        },
        {
          id: CATEGORY_IDS.CAT2,
          name: 'categoria2',
        },
      ],
    },
    {
      id: WORLD_IDS.GRILL,
      name: 'Grill',
      image: BASE64_IMAGES.WORLD_GRILL,
      categories: [
        {
          id: CATEGORY_IDS.CAT3,
          name: 'categoria3',
        },
        {
          id: CATEGORY_IDS.CAT4,
          name: 'categoria4',
        },
      ],
    },
    {
      id: WORLD_IDS.MARINO,
      name: 'Marino',
      image: BASE64_IMAGES.WORLD_MARINO,
      categories: [
        {
          id: CATEGORY_IDS.CAT1,
          name: 'categoria1',
        },
        {
          id: CATEGORY_IDS.CAT2,
          name: 'categoria2',
        },
        {
          id: CATEGORY_IDS.CAT3,
          name: 'categoria3',
        },
        {
          id: CATEGORY_IDS.CAT4,
          name: 'categoria4',
        },
      ],
    },
    {
      id: WORLD_IDS.PIZZAS,
      name: 'Pizzas',
      image: BASE64_IMAGES.WORLD_PIZZAS,
      categories: [
        {
          id: CATEGORY_IDS.CAT1,
          name: 'categoria1',
        },
        {
          id: CATEGORY_IDS.CAT2,
          name: 'categoria2',
        },
        {
          id: CATEGORY_IDS.CAT3,
          name: 'categoria3',
        },
        {
          id: CATEGORY_IDS.CAT4,
          name: 'categoria4',
        },
        {
          id: CATEGORY_IDS.CAT5,
          name: 'categoria5',
        },
        {
          id: CATEGORY_IDS.CAT6,
          name: 'categoria6',
        },
      ],
    },
    {
      id: WORLD_IDS.SALUDABLE,
      name: 'Saludable',
      image: BASE64_IMAGES.WORLD_SALUDABLE,
      categories: [
        {
          id: CATEGORY_IDS.CAT5,
          name: 'categoria5',
        },
        {
          id: CATEGORY_IDS.CAT6,
          name: 'categoria6',
        },
      ],
    },
    {
      id: WORLD_IDS.SANDWICH,
      name: 'Sándwich',
      image: BASE64_IMAGES.WORLD_SANDWICH,
      categories: [
        {
          id: CATEGORY_IDS.CAT3,
          name: 'categoria3',
        },
        {
          id: CATEGORY_IDS.CAT4,
          name: 'categoria4',
        },
        {
          id: CATEGORY_IDS.CAT5,
          name: 'categoria5',
        },
      ],
    },
  ],
  dishes: [
    {
      id: DISH_IDS.CHURRASCO,
      ean: '7755211000020',
      name: 'Churrasco con vegetales',
      adicionalDetails: 'Lorem ipsum dolor sit amet consectetur adipiscing elit curae maecenas.',
      unitPrice: 19,
      stock: 0,
      image: BASE64_IMAGES.DISH_CHURRASCO,
      restriction: true,
      rangeHours: '23:00 - 06:00',
      idWorld: WORLD_IDS.GRILL,
      idCategory: CATEGORY_IDS.CAT3,
      comments: true,
      tagPreferences: ['sin sal', 'con sal', 'termino 1/2'],
      cookingStation: 'estacion1',
      ipStation: '12.123.342.32',
      products: [
        {
          ean: '22111111111',
          name: 'producto1',
          unitPrice: 1.5,
        },
        {
          ean: '22111111112',
          name: 'producto2',
          unitPrice: 3.5,
        },
      ],
    },
    {
      id: DISH_IDS.PASTA,
      ean: '7755211000021',
      name: 'Pasta al pesto',
      adicionalDetails: 'Lorem ipsum dolor sit amet consectetur adipiscing elit curae maecenas. Lorem ipsum dolor sit amet consectetur adipiscing elit curae maecenas. Lorem ipsum dolor sit amet consectetur adipiscing elit curae maecenas.',
      unitPrice: 21.5,
      stock: 3,
      image: BASE64_IMAGES.DISH_PASTA,
      restriction: false,
      rangeHours: null,
      idWorld: WORLD_IDS.FUSION,
      idCategory: CATEGORY_IDS.CAT2,
      comments: true,
      tagPreferences: ['sin sal', 'con sal', 'termino 1/2'],
      cookingStation: 'estacion1',
      ipStation: '12.123.342.32',
      products: [
        {
          ean: '22111111111',
          name: 'producto1',
          unitPrice: 3.5,
        },
        {
          ean: '22111111112',
          name: 'producto2',
          unitPrice: 4.5,
        },
      ],
    },
    {
      id: DISH_IDS.PIZZA,
      ean: '7755211000022',
      name: 'Pizza de vegetales',
      adicionalDetails: 'Lorem ipsum dolor sit amet consectetur adipiscing elit curae maecenas.',
      unitPrice: 15,
      stock: 4,
      image: BASE64_IMAGES.DISH_PIZZA,
      restriction: true,
      rangeHours: '23:00 - 06:00',
      idWorld: WORLD_IDS.PIZZAS,
      idCategory: CATEGORY_IDS.CAT4,
      comments: true,
      tagPreferences: ['sin sal', 'con sal', 'termino 1/2'],
      cookingStation: 'estacion1',
      ipStation: '12.123.342.32',
      products: [
        {
          ean: '22111111111',
          name: 'producto1',
          unitPrice: 3,
        },
        {
          ean: '22111111112',
          name: 'producto2',
          unitPrice: 2.5,
        },
      ],
    },
    {
      id: DISH_IDS.OSTRAS,
      ean: '7755211000023',
      name: '6 Ostras frescas',
      adicionalDetails: 'Lorem ipsum dolor sit amet consectetur adipiscing elit curae maecenas.',
      unitPrice: 18.5,
      stock: null,
      image: BASE64_IMAGES.DISH_OSTRAS,
      restriction: false,
      rangeHours: null,
      idWorld: WORLD_IDS.MARINO,
      idCategory: CATEGORY_IDS.CAT4,
      comments: true,
      tagPreferences: ['sin sal', 'con sal', 'termino 1/2'],
      cookingStation: 'estacion1',
      ipStation: '12.123.342.32',
      products: [
        {
          ean: '22111111111',
          name: 'producto1',
          unitPrice: 3.5,
        },
        {
          ean: '22111111112',
          name: 'producto2',
          unitPrice: 2.5,
        },
      ],
    },
  ],
};
