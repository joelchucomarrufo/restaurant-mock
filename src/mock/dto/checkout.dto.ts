import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ClienteDto, ProductoCheckoutDto, TotalesDto } from './shared.dto';

export class CheckoutProductRequestDto {
  @ApiProperty({ example: 4, description: 'Cantidad del producto' })
  cantidad!: number;

  @ApiProperty({ example: '7757419000086', description: 'Código EAN del producto' })
  ean!: string;

  @ApiProperty({ example: '003', description: 'ID de la sección' })
  idSeccion!: string;

  @ApiProperty({ example: 'Cubiertos', description: 'Nombre de la sección' })
  seccion!: string;
}

export class CheckoutRequestDto {
  @ApiProperty({ example: 'T104', description: 'Código de la tienda' })
  store!: string;

  @ApiProperty({ example: 'DEVICE001', description: 'ID del dispositivo' })
  device!: string;

  @ApiProperty({ example: '10.166.218.228:8444', description: 'IP EPOS' })
  ipEpos!: string;

  @ApiProperty({ example: '10.166.218.228:8444', description: 'IP de la estación principal' })
  ipStationPrincipal!: string;

  @ApiProperty({
    type: () => [CheckoutProductRequestDto],
    description: 'Lista de productos',
  })
  products!: CheckoutProductRequestDto[];

  @ApiProperty({
    type: () => ClienteDto,
    description: 'Información del cliente',
  })
  customer!: ClienteDto;
}

export class OrderDto {
  @ApiProperty({ example: 'ORD-123456', description: 'ID de la orden' })
  idOrder!: string;

  @ApiProperty({ example: 'PENDING', description: 'Estado de la orden', enum: ['PENDING', 'CONFIRMED', 'CANCELLED'] })
  status!: string;
}

export class CheckoutResponseDto {
  @ApiProperty({
    type: () => [ProductoCheckoutDto],
    description: 'Lista de productos enriquecidos',
  })
  products!: ProductoCheckoutDto[];

  @ApiProperty({
    type: () => TotalesDto,
    description: 'Totales del checkout',
  })
  totals!: TotalesDto;

  @ApiProperty({
    type: () => ClienteDto,
    description: 'Información del cliente',
  })
  customer!: ClienteDto;

  @ApiProperty({
    type: () => OrderDto,
    description: 'Información de la orden',
  })
  order!: OrderDto;

  @ApiProperty({
    example: 'fc2ee037-cf46-424c-afc2-1235462d50ef',
    description: 'ID del checkout',
  })
  idCheckout!: string;
}
