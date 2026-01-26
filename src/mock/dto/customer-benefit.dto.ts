import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class BenefitRequestDto {
  @ApiProperty({ example: 'BONUS', description: 'Tipo de beneficio' })
  type!: string;

  @ApiPropertyOptional({ example: '123456', description: 'Código del beneficio' })
  code?: string;
}

export class CustomerBenefitRequestDto {
  @ApiProperty({ example: 'T104', description: 'Código de la tienda' })
  store!: string;

  @ApiProperty({ example: 'DEVICE001', description: 'ID del dispositivo' })
  device!: string;

  @ApiProperty({ example: 'DNI', description: 'Tipo de documento', enum: ['DNI', 'RUC'] })
  documentType!: string;

  @ApiProperty({ example: '12345678', description: 'Número de documento' })
  document!: string;

  @ApiProperty({
    type: () => [BenefitRequestDto],
    description: 'Lista de beneficios',
  })
  benefit!: BenefitRequestDto[];
}

export class CouponDto {
  @ApiProperty({ example: 'COUPON001', description: 'Código del cupón' })
  code!: string;

  @ApiProperty({ example: 'Descuento 10%', description: 'Descripción del cupón' })
  description!: string;

  @ApiProperty({ example: 10, description: 'Descuento en porcentaje' })
  discount!: number;
}

export class CustomerBenefitResponseDto {
  @ApiProperty({ example: 'T104', description: 'Código de la tienda' })
  store!: string;

  @ApiProperty({ example: 'DEVICE001', description: 'ID del dispositivo' })
  device!: string;

  @ApiProperty({
    example: 'Hola NOMBRE, tienes 4478 puntos.',
    description: 'Mensaje del bonus',
  })
  bonusMessage!: string;

  @ApiProperty({
    example: '7027661000601779651',
    description: 'Tarjeta bonus',
  })
  bonusCard!: string;

  @ApiPropertyOptional({
    example: 'bonus@correo.com',
    description: 'Email Bonus',
    nullable: true,
  })
  emailBonus!: string | null;

  @ApiProperty({ example: false, description: 'Indica si es prime' })
  prime!: boolean;

  @ApiProperty({ example: true, description: 'Indica si es colaborador' })
  colaborator!: boolean;

  @ApiProperty({
    type: () => [String],
    example: ['COUPON001', 'COUPON002'],
    description: 'Lista de cupones disponibles',
    default: [],
  })
  coupons!: string[];
}

