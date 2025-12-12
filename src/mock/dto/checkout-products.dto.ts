import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  ClienteDto,
  ProductoCheckoutDto,
  TotalesDto,
} from './shared.dto';

export class ProductoCheckoutRequestDto {
  @ApiProperty({ example: 4, description: 'Cantidad del producto' })
  cantidad!: number;

  @ApiProperty({
    example: '7757419000086',
    description: 'Código EAN del producto',
  })
  ean!: string;

  @ApiProperty({ example: '003', description: 'ID de la sección' })
  idSeccion!: string;

  @ApiProperty({ example: 'Cubiertos', description: 'Nombre de la sección' })
  seccion!: string;
}

export class CheckoutProductsRequestDto {
  @ApiProperty({ example: 'TOTTEM', description: 'Canal' })
  canal!: string;

  @ApiProperty({
    type: () => ClienteDto,
    description: 'Información del cliente',
  })
  cliente!: ClienteDto;

  @ApiPropertyOptional({
    example: null,
    description: 'Cupones aplicados',
    nullable: true,
  })
  cupones!: any[] | null;

  @ApiProperty({
    example: '10.166.218.228:8444',
    description: 'IP de la tienda',
  })
  ip!: string;

  @ApiProperty({ example: 'checkout', description: 'Proceso a ejecutar' })
  proceso!: string;

  @ApiProperty({
    type: () => [ProductoCheckoutRequestDto],
    description: 'Lista de productos',
  })
  productos!: ProductoCheckoutRequestDto[];

  @ApiProperty({ example: 'T104', description: 'Código de la tienda' })
  tienda!: string;

  @ApiProperty({
    example: 'TOTTEM.7102',
    description: 'Código de trazabilidad',
  })
  trazabilidad!: string;
}

export class CheckoutProductsResponseDto {
  @ApiProperty({ example: 'checkout', description: 'Proceso ejecutado' })
  proceso!: string;

  @ApiProperty({ example: 'TOTTEM', description: 'Canal' })
  canal!: string;

  @ApiProperty({ example: 'T104', description: 'Código de la tienda' })
  tienda!: string;

  @ApiProperty({
    example: 'TOTTEM.7102',
    description: 'Código de trazabilidad',
  })
  trazabilidad!: string;

  @ApiProperty({
    example: 'fc2ee037-cf46-424c-afc2-1235462d50ef',
    description: 'ID de la lista',
  })
  idLista!: string;

  @ApiProperty({
    type: () => [ProductoCheckoutDto],
    description: 'Lista de productos procesados',
  })
  productos!: ProductoCheckoutDto[];

  @ApiProperty({
    type: () => TotalesDto,
    description: 'Totales del checkout',
  })
  totales!: TotalesDto;
}


