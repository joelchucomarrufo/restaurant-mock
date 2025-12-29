import { BenefitDto, StoresResponseDto, TiendaDto } from '../dto/stores.dto';

const allStores: TiendaDto[] = [
  {
    store: 'T104',
    name: 'T104 - Wong Benavides',
    ipEpos: '10.166.218.228:8444',
    numberEpos: 104,
    address: 'Direccion 123',
    couponsInput: false,
    benefit: [
      {
        id: 'bonus',
        code: 'BONUS',
        label: 'Programa Bonus',
      }
    ],
    callCustomer: [
      {
        id: 'discollamadorManual',
        code: 'DISC_LLAM_MAN',
        label: 'Disco Llamador Manual',
      }
    ],
    device: [
      {
        id: 'TOTEM.001',
        code: 'TOTEM_001',
        label: 'Tótem 001',
      }
    ],
    imagesVideos: [
      {
        id: 'cabecera',
        url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMXzL5ZXOdHlIGiEXpMRjLWa9Nr0EOpGisgBT+NU84Ze4=',
      },
      {
        id: 'principal',
        url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMColS3F4UfjCxJnuo/TbhOSQfjt+m2M9YixDHmU1mMz8=',
      },
      {
        id: 'opcional',
        url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMX/ltsprAVCplrvijlB+K4mZdmUJJ5nk+mVMzukJOVo4=',
      },
      {
        id: 'inactividad',
        url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMkEfwlwchBw/gkLkOxn7KBH0VaKhMopf4FLXZXVfgP6o=',
      },
    ],
  },
  {
    store: 'H005',
    name: 'H005 - Hipermercado Metro San Miguel',
    ipEpos: '10.166.218.228:8444',
    numberEpos: 5,
    address: 'Direccion 123',
    couponsInput: false,
    benefit: [
      {
        id: 'bonus',
        code: 'BONUS',
        label: 'Programa Bonus',
      },
      {
        id: 'prime',
        code: 'PRIME',
        label: 'Programa Prime',
      }
    ],
    callCustomer: [
      {
        id: 'discollamadorManual',
        code: 'DISC_LLAM_MAN',
        label: 'Disco Llamador Manual',
      },
      {
        id: 'telefonoSMS',
        code: 'TEL_SMS',
        label: 'Teléfono SMS',
      },
    ],
    device: [
      {
        id: 'TOTEM.001',
        code: 'TOTEM_001',
        label: 'Tótem 001',
      },
      {
        id: 'TOTEM.002',
        code: 'TOTEM_002',
        label: 'Tótem 002',
      },
    ],
    imagesVideos: [
      {
        id: 'cabecera',
        url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMcd1bT0Y/wFgrFoUU7+P7FTCRfccfQP1qfwgEdshz/MA=',
      },
      {
        id: 'principal',
        url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMvaofp4Ih460XHAS65ciwP7oi68Ui8/+YuENAmjcv9vA=',
      },
      {
        id: 'opcional',
        url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMCVrGAYw6/iBhnVmu9atIqSvp0VJfhREdHRNR6XvSdi4=',
      },
      {
        id: 'inactividad',
        url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMQY+twkrBaw+j/+BuiJPIurby20NzT6ifvUpQ/NIzJRY=',
      },
    ],
  },
  {
    store: 'T106',
    name: 'T106 - Wong Chacarilla',
    ipEpos: '10.166.218.228:8444',
    numberEpos: 106,
    address: 'Direccion 123',
    couponsInput: false,
    benefit: [
      {
        id: 'bonus',
        code: 'BONUS',
        label: 'Programa Bonus',
      },
      {
        id: 'prime',
        code: 'PRIME',
        label: 'Programa Prime',
      },
      {
        id: 'colaborador',
        code: 'COLAB',
        label: 'Programa Colaborador',
      }
    ],
    callCustomer: [
      {
        id: 'discollamadorManual',
        code: 'DISC_LLAM_MAN',
        label: 'Disco Llamador Manual',
      },
      {
        id: 'telefonoSMS',
        code: 'TEL_SMS',
        label: 'Teléfono SMS',
      },
      {
        id: 'discollamadorAutomatico',
        code: 'DISC_LLAM_AUT',
        label: 'Disco Llamador Automatico',
      },
    ],
    device: [
      {
        id: 'TOTEM.001',
        code: 'TOTEM_001',
        label: 'Tótem 001',
      },
      {
        id: 'TOTEM.002',
        code: 'TOTEM_002',
        label: 'Tótem 002',
      },
      {
        id: 'TOTEM.003',
        code: 'TOTEM_003',
        label: 'Tótem 003',
      },
    ],
    imagesVideos: [
      {
        id: 'cabecera',
        url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMyA2DyuA8DlTAIILYh2x67WehLyWStWT7aWyBOVSpCNE=',
      },
      {
        id: 'principal',
        url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMevuJooB+AKhyD72E0KSx99z5kE5HZs+Pc8bCi+szx/o=',
      },
      {
        id: 'opcional',
        url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMGmuVo7g5uZ0xzRbpD6rNA5fM+v3k/zk/k6T7RWPBAOA=',
      },
      {
        id: 'inactividad',
        url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMXR6nZUz6IYyaVT8oC5wjH2BrvvwwRdmgyI/lzu4qCFU=',
      },
    ],
  },
  {
    store: 'H006',
    name: 'H006 - Hipermercado Metro San Juan de Lurigancho',
    ipEpos: '10.166.218.228:8444',
    numberEpos: 6,
    address: 'Direccion 123',
    couponsInput: false,
    benefit: [
      {
        id: 'bonus',
        code: 'BONUS',
        label: 'Programa Bonus',
      },
      {
        id: 'prime',
        code: 'PRIME',
        label: 'Programa Prime',
      },
      {
        id: 'colaborador',
        code: 'COLAB',
        label: 'Programa Colaborador',
      },
      {
        id: 'cupones',
        code: 'COUPONS',
        label: 'Cupones',
      },
    ],
    callCustomer: [
      {
        id: 'discollamadorManual',
        code: 'DISC_LLAM_MAN',
        label: 'Disco Llamador Manual',
      },
      {
        id: 'telefonoSMS',
        code: 'TEL_SMS',
        label: 'Teléfono SMS',
      },
    ],
    device: [
      {
        id: 'TOTEM.001',
        code: 'TOTEM_001',
        label: 'Tótem 001',
      },
    ],
    imagesVideos: [
      {
        id: 'cabecera',
        url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMqOu5V2ToW/SHTpaeDo4+W6/sSxlVgduq1XcAyNtafNs=',
      },
      {
        id: 'principal',
        url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMpyAlfxmoIABTIcJQlZlXpDWIN6VmVCuCF9HDcX6N4KI=',
      },
      {
        id: 'opcional',
        url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQM+POSE/tCZvFIsjQ6OCp5wOrANLndU3aZlpg6AwoNrrE=',
      },
      {
        id: 'inactividad',
        url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMrSnCvTnn0a6/dq6OmcCRA9dicTAIZ3f6Y0BKje9CUko=',
      },
    ],
  },
  {
    store: 'T115',
    name: 'T115 - Wong Aldabas',
    ipEpos: '10.160.179.5:8444',
    numberEpos: 115,
    address: 'Direccion 123',
    couponsInput: false,
    benefit: [
      {
        id: 'cupones',
        code: 'COUPONS',
        label: 'Cupones',
      },
    ],
    callCustomer: [
      {
        id: 'telefonoSMS',
        code: 'TEL_SMS',
        label: 'Teléfono SMS',
      },
    ],
    device: [
      {
        id: 'TOTEM.003',
        code: 'TOTEM_003',
        label: 'Tótem 003',
      },
    ],
    imagesVideos: [
      {
        id: 'cabecera',
        url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMlMgCx4AMVZOaxpUSWH+WZXQs6m8vvyQ01T3LJJgU7E8=',
      },
      {
        id: 'principal',
        url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMjl0NRqUGQA5MW4jbb3Lhuv4CBavh6TpAqV4i2cCc/rE=',
      },
      {
        id: 'opcional',
        url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMXWzvR78Ah7SjmoLYFIxxZXzjsUS23fHvStHSCKeD60c=',
      },
      {
        id: 'inactividad',
        url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMQIDeS6auvVTkXzzPq1LyowrHYjYfzc8l3RFZ2DsR4xU=',
      },
    ],
  },
  {
    store: 'I101',
    name: 'I101 - Evento eCommerce',
    ipEpos: '10.166.218.228:8444',
    numberEpos: 101,
    address: 'Direccion 123',
    couponsInput: false,
    benefit: [
      {
        id: 'colaborador',
        code: 'COLAB',
        label: 'Programa Colaborador',
      },
      {
        id: 'cupones',
        code: 'COUPONS',
        label: 'Cupones',
      },
    ],
    callCustomer: [
      {
        id: 'discollamadorAutomatico',
        code: 'DISC_LLAM_AUT',
        label: 'Disco Llamador Automatico',
      },
      {
        id: 'discollamadorManual',
        code: 'DISC_LLAM_MAN',
        label: 'Disco Llamador Manual',
      },
      {
        id: 'telefonoSMS',
        code: 'TEL_SMS',
        label: 'Teléfono SMS',
      },
    ],
    device: [
      {
        id: 'TOTEM.002',
        code: 'TOTEM_002',
        label: 'Tótem 002',
      },
      {
        id: 'TOTEM.003',
        code: 'TOTEM_003',
        label: 'Tótem 003',
      },
    ],
    imagesVideos: [
      {
        id: 'cabecera',
        url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMRdL/jt+dP/gSDEuONvY3t/SYSachCzc2+3UnVgLZ3ek=',
      },
      {
        id: 'principal',
        url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQM3BW6iwUbGMuwHZDe6/Tz4Qy0CoD+2d7P+JzKbjVSowg=',
      },
      {
        id: 'opcional',
        url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMutcyR50UvxwnRBceVre0dcDqqmx+1KXD7imXA3RX3ew=',
      },
      {
        id: 'inactividad',
        url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQM+8gDgDeYS13zgGBlCLKbYMy/Gfg+o+QV17IoDIm2OF0=',
      },
    ],
  },
];

export const storesMockData: StoresResponseDto = {
  wong: allStores.filter((t) => t.store.startsWith('T')),
  metro: allStores.filter((t) => t.store.startsWith('H')),
};
