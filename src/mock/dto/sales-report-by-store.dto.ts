import { ApiProperty } from '@nestjs/swagger';

export class SalesReportByStoreRequestDto {
  @ApiProperty({ example: 'TOTTEM', description: 'Canal' })
  canal!: string;

  @ApiProperty({ example: '2025-12-17', description: 'Fecha del reporte (YYYY-MM-DD)' })
  fecha!: string;

  @ApiProperty({ example: '192.168.114.154', description: 'IP de la tienda' })
  ip!: string;

  @ApiProperty({ example: 'reportes', description: 'Proceso a ejecutar' })
  proceso!: string;

  @ApiProperty({ example: 'T001', description: 'Código de la tienda' })
  tienda!: string;

  @ApiProperty({ example: '456', description: 'Código de trazabilidad' })
  trazabilidad!: string;
}

export class TotalReportResponseDto {
  @ApiProperty({ example: '2025-12-17', description: 'Fecha del reporte' })
  fecha!: string;

  @ApiProperty({ example: 'T001', description: 'Código de la tienda' })
  tienda!: string;

  @ApiProperty({ example: 150, description: 'Total de comprobantes boleta' })
  totalComprobantesBoleta!: number;

  @ApiProperty({ example: 25, description: 'Total de comprobantes factura' })
  totalComprobantesFactura!: number;

  @ApiProperty({ example: 12500.50, description: 'Total facturado en boletas' })
  totalFacturadoBoleta!: number;

  @ApiProperty({ example: 25000.75, description: 'Total facturado en facturas' })
  totalFacturadoFactura!: number;

  @ApiProperty({ example: 150.25, description: 'Total de notas de crédito boleta' })
  totalNotasCreditoBoleta!: number;

  @ApiProperty({ example: 200.50, description: 'Total de notas de crédito factura' })
  totalNotasCreditoFactura!: number;

  @ApiProperty({ example: 37150.50, description: 'Totalizador general' })
  totalizador!: number;

  @ApiProperty({ example: '456', description: 'Código de trazabilidad' })
  trazabilidad!: string;
}


