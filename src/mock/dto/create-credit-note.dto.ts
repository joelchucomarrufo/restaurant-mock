import { ApiProperty } from '@nestjs/swagger';

export class ReceiptAttributesResponseDto {
  @ApiProperty({
    example: 'JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKPD4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQovUmVzb3VyY2VzIDw8Ci9Gb250IDw8Ci9GMSA0IDAgUgo+Pgo+PgovQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUxCi9CYXNlRm9udCAvSGVsdmV0aWNhCj4+CmVuZG9iagoxIDAgb2JqCjw8Ci9UeXBlIC9DYXRhbG9nCi9QYWdlcyAyIDAgUgo+PgplbmRvYmoKNSAwIG9iago8PAovTGVuZ3RoIDQ0Cj4+CnN0cmVhbQpCVAovRjEgMTIgVGYKNzAgNzIwIFRkCihIZWxsbyBXb3JsZCkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNgowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMDkgMDAwMDAgbiAKMDAwMDAwMDA1OCAwMDAwMCBuIAowMDAwMDAwMTE1IDAwMDAwIG4gCjAwMDAwMDAyNzAgMDAwMDAgbiAKMDAwMDAwMDM1OCAwMDAwMCBuIAp0cmFpbGVyCjw8Ci9TaXplIDYKL1Jvb3QgMSAwIFIKPj4Kc3RhcnR4cmVmCjQyNwolJUVPRg==',
    description: 'Base64 del comprobante (PDF mock)',
  })
  base64!: string;

  @ApiProperty({
    example: 'https://mock.tottem.pe/receipts/T001/4567.pdf',
    description: 'URL del comprobante',
  })
  url!: string;
}

export class CreateCreditNoteRequestDto {
  @ApiProperty({ example: 300, description: 'Número de caja' })
  caja!: number;

  @ApiProperty({ example: 'TOTTEM', description: 'Canal' })
  canal!: string;

  @ApiProperty({ example: '2025-12-17', description: 'Fecha (YYYY-MM-DD)' })
  fecha!: string;

  @ApiProperty({ example: '192.168.114.154', description: 'IP de la tienda' })
  ip!: string;

  @ApiProperty({ example: 'ANULACIÓN', description: 'Motivo de la nota de crédito' })
  motivo!: string;

  @ApiProperty({ example: 'reportes', description: 'Proceso a ejecutar' })
  proceso!: string;

  @ApiProperty({ example: 'T001', description: 'Código de la tienda' })
  tienda!: string;

  @ApiProperty({ example: 4567, description: 'Número de transacción' })
  transaccion!: number;

  @ApiProperty({ example: '456', description: 'Código de trazabilidad' })
  trazabilidad!: string;
}

export class CreateCreditNoteResponseDto {
  @ApiProperty({
    type: () => ReceiptAttributesResponseDto,
    description: 'Atributos del comprobante',
  })
  atributoscomprobante!: ReceiptAttributesResponseDto;

  @ApiProperty({ example: 'TOTTEM', description: 'Canal' })
  canal!: string;

  @ApiProperty({ example: '00', description: 'Código de respuesta' })
  codigo!: string;

  @ApiProperty({ example: '2025-12-17', description: 'Día' })
  dia!: string;

  @ApiProperty({ example: '14:30:45', description: 'Hora (HH:mm:ss)' })
  hora!: string;

  @ApiProperty({ example: 'LST-T001-4567-1234', description: 'ID de la lista' })
  idLista!: string;

  @ApiProperty({ example: '192.168.114.154', description: 'IP de la tienda' })
  ip!: string;

  @ApiProperty({ example: 'NOTA DE CRÉDITO GENERADA', description: 'Mensaje de respuesta' })
  mensaje!: string;

  @ApiProperty({ example: 125.50, description: 'Monto facturado' })
  montoFacturado!: number;

  @ApiProperty({ example: 'reportes', description: 'Proceso ejecutado' })
  proceso!: string;

  @ApiProperty({ example: 300, description: 'Terminal' })
  terminal!: number;

  @ApiProperty({ example: 'T001', description: 'Código de la tienda' })
  tienda!: string;

  @ApiProperty({ example: 123, description: 'Tienda EPOS' })
  tiendaEpos!: number;

  @ApiProperty({ example: 4567, description: 'Número de transacción' })
  transaccion!: number;

  @ApiProperty({ example: '456', description: 'Código de trazabilidad' })
  trazabilidad!: string;
}
