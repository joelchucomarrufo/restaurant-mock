import { StoreWorldsResponseDto } from '../dto/store-worlds.dto';

export const storeWorldsMockData: StoreWorldsResponseDto = {
  store: 'T104',
  device: 'DEVICE001',
  ipStationPrincipal: '10.166.218.228:8444',
  world: [
    {
      id: '001',
      name: 'Mundo Principal',
      description: 'Mundo principal de la tienda',
    },
    {
      id: '002',
      name: 'Mundo Secundario',
      description: 'Mundo secundario',
    },
  ],
  dishes: [
    {
      ean: '7757419000086',
      name: 'Plato Principal 1',
      image: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMXzL5ZXOdHlIGiEXpMRjLWa9Nr0EOpGisgBT+NU84Ze4=',
      price: 25.50,
    },
    {
      ean: '7757419000024',
      name: 'Plato Principal 2',
      imagen: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMColS3F4UfjCxJnuo/TbhOSQfjt+m2M9YixDHmU1mMz8=',
      price: 30.00,
    },
  ],
};
