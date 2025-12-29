import { ApiProperty } from '@nestjs/swagger';

export class ReportSalesRequestDto {
  @ApiProperty({ example: 'TOTTEM', description: 'Canal' })
  canal!: string;

  @ApiProperty({ example: '2025-12-17', description: 'Fecha del reporte (YYYY-MM-DD)' })
  fecha!: string;

  @ApiProperty({ example: '192.168.145.125', description: 'IP de la tienda' })
  ip!: string;

  @ApiProperty({ example: 'reportes', description: 'Proceso a ejecutar' })
  proceso!: string;

  @ApiProperty({ example: 'T005', description: 'Código de la tienda' })
  tienda!: string;

  @ApiProperty({ example: '852', description: 'Código de trazabilidad' })
  trazabilidad!: string;
}

export class MovementReportResponseItemDto {
  @ApiProperty({ example: '09:15:30', description: 'Hora de la transacción (HH:mm:ss)' })
  hora!: string;

  @ApiProperty({ example: 125.50, description: 'Monto de la transacción' })
  monto!: number;

  @ApiProperty({ example: 'OP001', description: 'Código del operador' })
  operador!: string;

  @ApiProperty({ example: 'VISA', description: 'Tipo de tarjeta', enum: ['VISA', 'MASTERCARD', 'AMEX', 'YAPE', 'PLIN'] })
  tarjeta!: string;

  @ApiProperty({ example: '300', description: 'Código de caja', default: '300' })
  caja!: string;

  @ApiProperty({ example: 'BOLETA', description: 'Tipo de comprobante', enum: ['BOLETA', 'FACTURA'] })
  tipo_comprobante!: string;

  @ApiProperty({ example: 1001, description: 'Número de transacción EPOS' })
  transaccionepos!: number;
}






