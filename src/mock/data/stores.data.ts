import { StoresResponseDto, TiendaDto } from '../dto/stores.dto';

const allStores: TiendaDto[] = [
  {
    store: 'T104',
    name: 'T104 - Wong Benavides',
    ipEpos: '10.166.218.228:8444',
    numberEpos: 300,
    address: null,
    couponsInput: false,
    benefit: ['bonus', 'colaborador', 'prime'],
    callCustomer: ['discollamadorAutomatico'],
    device: ['TOTEM.001', 'TOTEM.002', 'TOTEM.003'],
    imagesVideos: [
      {
        id: 'cabecera',
        url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MH5WntBex8jKm9KSXkbrH/5Wbdtk3GZ7v2rqydbq/bs5XkXufaWVeWZWD3yh6zRsWfH4dsOIRiLNc06eD4o93oF',
      },
    ],
  },
  {
    store: 'T106',
    name: 'T106 - Wong Chacarilla',
    ipEpos: '10.166.218.228:8444',
    numberEpos: 300,
    address: null,
    couponsInput: false,
    benefit: ['bonus', 'colaborador', 'prime'],
    callCustomer: ['discollamadorManual', 'telefonoSMS'],
    device: ['TOTEM.001', 'TOTEM.002', 'TOTEM.003'],
    imagesVideos: [],
  },
  {
    store: 'T109',
    name: 'T109 - Wong San Miguel',
    ipEpos: '10.166.218.228:8444',
    numberEpos: null,
    address: null,
    couponsInput: false,
    benefit: ['bonus', 'colaborador', 'prime'],
    callCustomer: ['discollamadorManual', 'telefonoSMS'],
    device: ['TOTEM.001', 'TOTEM.002', 'TOTEM.003'],
    imagesVideos: [],
  },
];

export const storesMockData: StoresResponseDto = {
  wong: allStores.filter((t) => t.store.startsWith('T')),
  metro: allStores.filter((t) => t.store.startsWith('H')),
};
