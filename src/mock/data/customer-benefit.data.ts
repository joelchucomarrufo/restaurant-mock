import { CustomerBenefitResponseDto } from '../dto/customer-benefit.dto';

export const customerBenefitMockData: CustomerBenefitResponseDto = {
  store: 'T104',
  device: 'DEVICE001',
  bonusMessage: 'Hola NOMBRE, tienes 4478 puntos.',
  bonusCard: '7027661000601779651',
  emailBonus: 'bonus@correo.com',
  prime: false,
  colaborator: true,
  coupons: ['COUPON001', 'COUPON002'],
};

