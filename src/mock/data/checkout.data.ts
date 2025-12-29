import { CheckoutResponseDto } from '../dto/checkout.dto';
import { checkoutProductsMockData } from './checkout-products.data';

export const checkoutMockData: CheckoutResponseDto = {
  products: checkoutProductsMockData.productos,
  totals: checkoutProductsMockData.totales,
  customer: checkoutProductsMockData.totales.cliente,
  order: {
    idOrder: 'ORD-123456',
    status: 'PENDING',
  },
  idCheckout: checkoutProductsMockData.idLista,
};
