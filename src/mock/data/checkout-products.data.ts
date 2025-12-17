import { CheckoutProductsResponseDto } from '../dto/checkout-products.dto';

export const checkoutProductsMockData: CheckoutProductsResponseDto = {
  proceso: 'checkout',
  canal: 'TOTTEM',
  tienda: 'T104',
  trazabilidad: 'TOTTEM.7102',
  idLista: 'fc2ee037-cf46-424c-afc2-1235462d50ef',
  productos: [
    {
      ean: '7757419000086',
      cantidad: 4,
      existencia: 1,
      idSeccion: '003',
      seccion: 'Cubiertos',
      precioUnitario: 7.2,
      description: 'ENROLLADO- LECHON   ',
      descuentos: [
        {
          medioDePago: 'Todos',
          descuento: -8.64,
          precioUnitario: 5.04,
        },
      ],
    },
    {
      ean: '7757419000024',
      cantidad: 5,
      existencia: 1,
      idSeccion: '003',
      seccion: 'Cubiertos',
      precioUnitario: 7.2,
      description: 'ENRO PAN ARA/VEGE   ',
      descuentos: [
        {
          medioDePago: 'Todos',
          descuento: -10.8,
          precioUnitario: 5.04,
        },
      ],
    },
    {
      ean: '8714793764927',
      cantidad: 1,
      existencia: 1,
      idSeccion: '005',
      seccion: 'tienda',
      precioUnitario: 44,
      description: 'COPAS VINO BLANCO   ',
      descuentos: [],
    },
    {
      ean: '6943949903725',
      cantidad: 1,
      existencia: 1,
      idSeccion: '005',
      seccion: 'tienda',
      precioUnitario: 44.9,
      description: 'JGO 6COPA V.BLANCO  ',
      descuentos: [],
    },
    {
      ean: '2050004268584',
      cantidad: 1,
      existencia: 1,
      idSeccion: '005',
      seccion: 'tienda',
      precioUnitario: 4.99,
      description: 'ACEITUNA POTE 205g  ',
      descuentos: [
        {
          medioDePago: 'Todos',
          descuento: -1.5,
          precioUnitario: 3.49,
        },
      ],
    },
    {
      ean: '7750243067997',
      cantidad: 1,
      existencia: 1,
      idSeccion: '005',
      seccion: 'tienda',
      precioUnitario: 50,
      description: 'ACEITE PRIMOR PREM  ',
      descuentos: [
        {
          medioDePago: 'Todos',
          descuento: -15,
          precioUnitario: 35,
        },
      ],
    },
    {
      ean: '2050044136980',
      cantidad: 1,
      existencia: 1,
      idSeccion: '005',
      seccion: 'tienda',
      precioUnitario: 0.2,
      description: 'BOLSA COM METRO     ',
      descuentos: [],
    },
  ],
  totales: {
    subtotal: 208.89,
    totalDescuentos: [
      {
        medioDePago: 'Todos',
        descuentoTotal: -35.94,
      },
    ],
    totalPagar: [
      {
        MedioDePago: 'Todos',
        monto: 172.95,
      },
    ],
    cliente: {
      correoBonus: 'GLORIA_702@HOTMAIL.COM',
      loyalty: {
        numeroDocumento: '41254288',
        tipoDocumento: 1,
      },
      numeroDocumento: null,
      promocionBancaria: [
        {
          BIN: null,
          id_mp: 10,
        },
      ],
      razonSocial: 'SIN NOMBRE',
      ruc: null,
      tarjetaBonus: '7027661000027531363',
      tipoDocumento: null,
    },
  },
};




