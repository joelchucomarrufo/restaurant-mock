import { CustomerBenefitResponseDto } from '../dto/customer-benefit.dto';

export const customerBenefitMockData: CustomerBenefitResponseDto = {
  store: 'T104',
  device: 'DEVICE001',
  bonusMessage: 'Hola NOMBRE, tienes 4478 puntos.',
  bonusCard: '7027661000601779651',
  prime: false,
  colaborator: true,
  coupons: [
    {
      code: 'COUPON001',
      description: 'Descuento 10%',
      discount: 10,
    },
    {
      code: 'COUPON002',
      description: 'Descuento 15%',
      discount: 15,
    },
  ],
};

