import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class BankPromotionResponseDto {
  @ApiPropertyOptional({
    example: '411111',
    description: 'BIN de la tarjeta',
    nullable: true,
  })
  BIN!: string | null;

  @ApiProperty({ example: 10, description: 'ID del medio de pago' })
  id_mp!: number;
}

export class ClientResponseDto {
  @ApiPropertyOptional({
    example: 'cliente.T001.4567@bonus.pe',
    description: 'Correo del cliente bonus',
    nullable: true,
  })
  correoBonus!: string | null;

  @ApiProperty({ example: '12345678', description: 'Número de documento' })
  numeroDocumento!: string;

  @ApiProperty({ example: 'CLIENTE T001-4567', description: 'Razón social' })
  razonSocial!: string;

  @ApiPropertyOptional({
    example: '20123456789',
    description: 'RUC',
    nullable: true,
  })
  ruc!: string | null;

  @ApiPropertyOptional({
    example: 'BONUS-123456',
    description: 'Tarjeta bonus',
    nullable: true,
  })
  tarjetaBonus!: string | null;

  @ApiProperty({ example: 'DNI', description: 'Tipo de documento', enum: ['DNI', 'RUC'] })
  tipoDocumento!: string;

  @ApiPropertyOptional({
    type: () => [BankPromotionResponseDto],
    description: 'Promociones bancarias',
    default: [],
  })
  promocionBancaria!: BankPromotionResponseDto[];
}

export class SearchCreditNoteRequestDto {
  @ApiProperty({ example: 300, description: 'Número de caja' })
  caja!: number;

  @ApiProperty({ example: 'TOTTEM', description: 'Canal' })
  canal!: string;

  @ApiProperty({ example: '2025-12-17', description: 'Fecha (YYYY-MM-DD)' })
  fecha!: string;

  @ApiProperty({ example: '192.168.114.154', description: 'IP de la tienda' })
  ip!: string;

  @ApiProperty({ example: 'reportes', description: 'Proceso a ejecutar' })
  proceso!: string;

  @ApiProperty({ example: 'T001', description: 'Código de la tienda' })
  tienda!: string;

  @ApiProperty({ example: 4567, description: 'Número de transacción' })
  transaccion!: number;

  @ApiProperty({ example: '456', description: 'Código de trazabilidad' })
  trazabilidad!: string;
}

export class SearchCreditNoteResponseDto {
  @ApiProperty({
    type: () => ClientResponseDto,
    description: 'Información del cliente',
  })
  cliente!: ClientResponseDto;

  @ApiProperty({
    example: 'NBZ-T001-4567-A1B2C3',
    description: 'Referencia Niubiz',
  })
  referenciaNiubiz!: string;

  @ApiProperty({ example: 'T001', description: 'Código de la tienda' })
  store!: string;

  @ApiProperty({ example: 4567, description: 'Número de transacción' })
  trx!: number;

  @ApiProperty({ example: '2025-12-17', description: 'Fecha' })
  date!: string;

  @ApiProperty({ example: '300', description: 'Código de caja' })
  cashRegister!: string;
}
