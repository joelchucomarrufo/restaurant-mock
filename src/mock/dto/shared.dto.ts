import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ImagenDto {
  @ApiProperty({
    example: 'cabecera',
    description: 'Identificador de la imagen',
  })
  id!: string;

  @ApiProperty({
    example:
      'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMXzL5ZXOdHlIGiEXpMRjLWa9Nr0EOpGisgBT+NU84Ze4=',
    description: 'URL codificada de la imagen',
  })
  url!: string;
}

export class LoyaltyDto {
  @ApiProperty({
    example: '41254288',
    description: 'Número de documento del cliente',
  })
  numeroDocumento!: string;

  @ApiProperty({
    example: 1,
    description: 'Tipo de documento (1=DNI)',
  })
  tipoDocumento!: number;
}

export class PromocionBancariaDto {
  @ApiPropertyOptional({
    example: null,
    description: 'BIN de la tarjeta',
    nullable: true,
  })
  BIN!: string | null;

  @ApiProperty({
    example: 10,
    description: 'ID del medio de pago',
  })
  id_mp!: number;
}

export class ClienteDto {
  @ApiPropertyOptional({
    example: 'GLORIA_702@HOTMAIL.COM',
    description: 'Correo del cliente',
    nullable: true,
  })
  correoBonus!: string | null;

  @ApiPropertyOptional({
    type: () => LoyaltyDto,
    description: 'Información de loyalty',
    nullable: true,
  })
  loyalty!: LoyaltyDto | null;

  @ApiPropertyOptional({
    example: null,
    description: 'Número de documento',
    nullable: true,
  })
  numeroDocumento!: string | null;

  @ApiPropertyOptional({
    type: () => [PromocionBancariaDto],
    description: 'Promociones bancarias',
  })
  promocionBancaria!: PromocionBancariaDto[];

  @ApiPropertyOptional({
    example: '-',
    description: 'Razón social',
    nullable: true,
  })
  razonSocial!: string | null;

  @ApiPropertyOptional({
    example: null,
    description: 'RUC',
    nullable: true,
  })
  ruc!: string | null;

  @ApiPropertyOptional({
    example: '7027661000027531363',
    description: 'Tarjeta bonus',
    nullable: true,
  })
  tarjetaBonus!: string | null;

  @ApiPropertyOptional({
    example: null,
    description: 'Tipo de documento',
    nullable: true,
  })
  tipoDocumento!: number | null;
}

export class DescuentoDto {
  @ApiProperty({
    example: 'Todos',
    description: 'Medio de pago aplicable',
  })
  medioDePago!: string;

  @ApiProperty({
    example: -8.64,
    description: 'Monto del descuento',
  })
  descuento!: number;

  @ApiProperty({
    example: 5.04,
    description: 'Precio unitario después del descuento',
  })
  precioUnitario!: number;
}

export class ProductoCheckoutDto {
  @ApiProperty({
    example: '7757419000086',
    description: 'Código EAN del producto',
  })
  ean!: string;

  @ApiProperty({
    example: 4,
    description: 'Cantidad del producto',
  })
  cantidad!: number;

  @ApiProperty({
    example: 1,
    description: 'Existencia del producto',
  })
  existencia!: number;

  @ApiProperty({
    example: '003',
    description: 'ID de la sección',
  })
  idSeccion!: string;

  @ApiProperty({
    example: 'Cubiertos',
    description: 'Nombre de la sección',
  })
  seccion!: string;

  @ApiProperty({
    example: 7.2,
    description: 'Precio unitario',
  })
  precioUnitario!: number;

  @ApiProperty({
    example: 'ENROLLADO- LECHON   ',
    description: 'Descripción del producto',
  })
  description!: string;

  @ApiProperty({
    type: () => [DescuentoDto],
    description: 'Descuentos aplicables',
  })
  descuentos!: DescuentoDto[];
}

export class TotalDescuentoDto {
  @ApiProperty({
    example: 'Todos',
    description: 'Medio de pago',
  })
  medioDePago!: string;

  @ApiProperty({
    example: -35.94,
    description: 'Total de descuentos',
  })
  descuentoTotal!: number;
}

export class TotalPagarDto {
  @ApiProperty({
    example: 'Todos',
    description: 'Medio de pago',
  })
  MedioDePago!: string;

  @ApiProperty({
    example: 172.95,
    description: 'Monto total a pagar',
  })
  monto!: number;
}

export class TotalesDto {
  @ApiProperty({
    example: 208.89,
    description: 'Subtotal',
  })
  subtotal!: number;

  @ApiProperty({
    type: () => [TotalDescuentoDto],
    description: 'Total de descuentos por medio de pago',
  })
  totalDescuentos!: TotalDescuentoDto[];

  @ApiProperty({
    type: () => [TotalPagarDto],
    description: 'Total a pagar por medio de pago',
  })
  totalPagar!: TotalPagarDto[];

  @ApiProperty({
    type: () => ClienteDto,
    description: 'Información del cliente',
  })
  cliente!: ClienteDto;
}


