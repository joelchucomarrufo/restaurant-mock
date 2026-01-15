import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

// ========== REQUEST DTOs ==========

export class CheckoutBankPromotionDto {
  @ApiProperty({ example: 1, description: 'ID del medio de pago' })
  id_mp!: number;

  @ApiProperty({ example: '457562', description: 'BIN de la tarjeta' })
  BIN!: string;
}

export class CheckoutBenefitRequestDto {
  @ApiProperty({ example: 0, description: 'Tipo de documento (0=DNI, 1=CE, etc)' })
  documentType!: number;

  @ApiProperty({ example: '45478547', description: 'Número de documento' })
  document!: string;

  @ApiProperty({ example: false, description: 'Indica si es Prime' })
  prime!: boolean;

  @ApiProperty({ example: false, description: 'Indica si es Colaborador' })
  collaborator!: boolean;

  @ApiProperty({
    type: () => [String],
    example: ['string'],
    description: 'Lista de cupones',
    default: [],
  })
  coupons!: string[];
}

export class CheckoutCustomerRequestDto {
  @ApiPropertyOptional({
    example: '7027661000211092966',
    description: 'Tarjeta Bonus',
    nullable: true,
  })
  bonusCard!: string | null;

  @ApiPropertyOptional({
    example: 'bonus@correo.com',
    description: 'Email Bonus',
    nullable: true,
  })
  emailBonus!: string | null;

  @ApiPropertyOptional({
    example: 'dni',
    description: 'Tipo de documento',
    nullable: true,
  })
  documentType!: string | null;

  @ApiPropertyOptional({
    example: '45478547',
    description: 'Número de documento',
    nullable: true,
  })
  document!: string | null;

  @ApiPropertyOptional({
    example: '20552103816',
    description: 'RUC',
    nullable: true,
  })
  ruc!: string | null;

  @ApiPropertyOptional({
    example: 'Cencosud',
    description: 'Razón social',
    nullable: true,
  })
  companyName!: string | null;

  @ApiPropertyOptional({
    type: () => CheckoutBenefitRequestDto,
    description: 'Información de beneficios',
    nullable: true,
  })
  benefit!: CheckoutBenefitRequestDto | null;

  @ApiPropertyOptional({
    example: null,
    description: 'Input de cupones',
    nullable: true,
  })
  couponsInput!: string | null;

  @ApiPropertyOptional({
    type: () => [CheckoutBankPromotionDto],
    description: 'Promociones bancarias',
    default: [],
  })
  bankPromotion!: CheckoutBankPromotionDto[];
}

export class CheckoutProductRequestDto {
  @ApiProperty({ example: '7750243053020', description: 'Código EAN del producto' })
  ean!: string;

  @ApiProperty({ example: '1', description: 'Cantidad del producto' })
  quantity!: string;

  @ApiProperty({
    example: '2b7c2e12-7f47-4a62-9f3d-2f2a9b2c9b5f',
    description: 'ID de la sección',
  })
  idSection!: string;

  @ApiProperty({
    example: '9a6e8c54-57c0-4f9a-8ed6-0e6c4f0c6f1a',
    description: 'ID de la categoría',
  })
  idCategory!: string;

  @ApiPropertyOptional({
    example: 'No mezclar el arroz',
    description: 'Comentarios del producto',
    nullable: true,
  })
  comments!: string | null;

  @ApiPropertyOptional({
    type: () => [String],
    example: ['sin_cebolla'],
    description: 'Preferencias de etiquetas',
    default: [],
  })
  tagPreferences!: string[];

  @ApiProperty({ example: 'estacion1', description: 'Estación de cocina' })
  cookingStation!: string;

  @ApiProperty({ example: '192.168.1.10', description: 'IP de la estación' })
  ipStation!: string;
}

export class CheckoutRequestDto {
  @ApiProperty({ example: 'T104', description: 'Código de la tienda' })
  store!: string;

  @ApiProperty({ example: 'TOTEM.001', description: 'ID del dispositivo' })
  device!: string;

  @ApiProperty({
    example: '10.166.218.228:8444',
    description: 'IP EPOS',
  })
  ipEpos!: string;

  @ApiProperty({
    example: '192.168.1.11',
    description: 'IP de la estación principal',
  })
  ipStationPrincipal!: string;

  @ApiProperty({
    type: () => [CheckoutProductRequestDto],
    description: 'Lista de productos',
  })
  products!: CheckoutProductRequestDto[];

  @ApiProperty({
    type: () => CheckoutCustomerRequestDto,
    description: 'Información del cliente',
  })
  customer!: CheckoutCustomerRequestDto;
}

// ========== RESPONSE DTOs ==========

export class CheckoutProductResponseDto {
  @ApiProperty({ example: '7750243053020', description: 'Código EAN del producto' })
  ean!: string;

  @ApiProperty({ example: '1', description: 'Cantidad del producto' })
  quantity!: string;

  @ApiProperty({ example: 'GALL MARGARITA FAM', description: 'Descripción del producto' })
  description!: string;

  @ApiProperty({ example: 2.65, description: 'Precio unitario' })
  unitPrice!: number;

  @ApiProperty({
    type: () => [Object],
    example: [],
    description: 'Lista de descuentos',
    default: [],
  })
  discounts!: any[];
}

export class CheckoutTotalsDto {
  @ApiProperty({ example: 2.65, description: 'Subtotal' })
  subtotal!: number;

  @ApiProperty({ example: 0, description: 'Total de descuentos' })
  discounts!: number;

  @ApiProperty({ example: 2.65, description: 'Total a pagar' })
  total!: number;
}

export class CheckoutBenefitResponseDto {
  @ApiProperty({ example: 0, description: 'Tipo de documento' })
  documentType!: number;

  @ApiProperty({ example: '45478547', description: 'Número de documento' })
  document!: string;

  @ApiProperty({ example: false, description: 'Indica si es Colaborador' })
  colaborador!: boolean;

  @ApiProperty({
    type: () => [String],
    example: [],
    description: 'Lista de cupones',
    default: [],
  })
  coupons!: string[];

  @ApiProperty({ example: false, description: 'Indica si es Prime' })
  prime!: boolean;
}

export class CheckoutCustomerResponseDto {
  @ApiPropertyOptional({
    example: '7027661000211092966',
    description: 'Tarjeta Bonus',
    nullable: true,
  })
  bonusCard!: string | null;

  @ApiPropertyOptional({
    example: 'dni',
    description: 'Tipo de documento',
    nullable: true,
  })
  documentType!: string | null;

  @ApiPropertyOptional({
    example: '45478547',
    description: 'Número de documento',
    nullable: true,
  })
  document!: string | null;

  @ApiPropertyOptional({
    example: '20552103816',
    description: 'RUC',
    nullable: true,
  })
  ruc!: string | null;

  @ApiPropertyOptional({
    example: 'Cencosud',
    description: 'Razón social',
    nullable: true,
  })
  companyName!: string | null;

  @ApiProperty({
    type: () => CheckoutBenefitResponseDto,
    description: 'Información de beneficios',
  })
  benefit!: CheckoutBenefitResponseDto;

  @ApiPropertyOptional({
    example: null,
    description: 'Input de cupones',
    nullable: true,
  })
  couponsInput!: string | null;

  @ApiPropertyOptional({
    type: () => [CheckoutBankPromotionDto],
    description: 'Promociones bancarias',
    default: [],
  })
  bankPromotion!: CheckoutBankPromotionDto[];
}

export class CheckoutOrderDto {
  @ApiProperty({
    example: '1977541a-4a20-4329-907d-af94209e7cd0',
    description: 'ID de la orden (UUID)',
  })
  id!: string;

  @ApiProperty({
    example: 'T104-20260115-O0000007',
    description: 'Código de la orden',
  })
  code!: string;

  @ApiProperty({ example: 'CREADO', description: 'Estado de la orden' })
  state!: string;
}

export class CheckoutResponseDto {
  @ApiProperty({ example: 'T104', description: 'Código de la tienda' })
  store!: string;

  @ApiProperty({ example: 'TOTEM.001', description: 'ID del dispositivo' })
  device!: string;

  @ApiProperty({
    type: () => [CheckoutProductResponseDto],
    description: 'Lista de productos',
  })
  products!: CheckoutProductResponseDto[];

  @ApiProperty({
    type: () => CheckoutTotalsDto,
    description: 'Totales de la orden',
  })
  totals!: CheckoutTotalsDto;

  @ApiProperty({
    type: () => CheckoutCustomerResponseDto,
    description: 'Información del cliente',
  })
  customer!: CheckoutCustomerResponseDto;

  @ApiProperty({
    type: () => CheckoutOrderDto,
    description: 'Información de la orden',
  })
  order!: CheckoutOrderDto;

  @ApiProperty({
    example: '3d381a12-034d-436a-a75d-8e58a0dfd804',
    description: 'ID del checkout (UUID)',
  })
  idCheckout!: string;
}
