import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

// ========== REQUEST DTOs ==========

export class BillingPaymentDetailsDto {
  @ApiProperty({ example: '4556430000004333', description: 'Número de tarjeta' })
  card!: string;

  @ApiProperty({ example: 'Visa', description: 'Operador de la tarjeta' })
  operator!: string;

  @ApiProperty({ example: '9999', description: 'Referencia Niubiz' })
  referenceNiubiz!: string;

  @ApiProperty({ example: 'A12332', description: 'Código de aprobación' })
  approverCode!: string;
}

export class BillingCallCustomerDto {
  @ApiProperty({ example: '232323223232323', description: 'Disco llamador' })
  callingDisc!: string;

  @ApiProperty({ example: '997087272', description: 'Número de teléfono' })
  phone!: string;
}

export class BillingRequestDto {
  @ApiProperty({ example: 'T104', description: 'Código de la tienda' })
  store!: string;

  @ApiProperty({ example: 'TOTEM.001', description: 'ID del dispositivo' })
  device!: string;

  @ApiProperty({ example: '10.166.218.228:8444', description: 'IP EPOS' })
  ipEpos!: string;

  @ApiProperty({
    example: '2b7c2e12-7f47-4a62-9f3d-2f2a9b2c9b5f',
    description: 'ID del checkout',
  })
  idCheckout!: string;

  @ApiProperty({
    type: () => BillingPaymentDetailsDto,
    description: 'Detalles del pago',
  })
  paymentDatails!: BillingPaymentDetailsDto;

  @ApiProperty({
    type: () => BillingCallCustomerDto,
    description: 'Información para llamar al cliente',
  })
  callCustomer!: BillingCallCustomerDto;

  @ApiProperty({ example: 1, description: 'Método de entrega (1=Delivery, 2=Pickup, etc)' })
  deliveryMethod!: number;
}

// ========== RESPONSE DTOs ==========

export class BillingOrderDto {
  @ApiProperty({
    example: '5df144e4-30fb-41a8-b6ef-2b05f3370c4d',
    description: 'ID de la orden (UUID)',
  })
  id!: string;

  @ApiProperty({ example: 'CREADO', description: 'Estado de la orden' })
  state!: string;
}

export class BillingResponseDto {
  @ApiProperty({ example: '20260115', description: 'Fecha de la facturación (YYYYMMDD)' })
  date!: string;

  @ApiProperty({
    type: () => BillingOrderDto,
    description: 'Información de la orden',
  })
  order!: BillingOrderDto;

  @ApiProperty({ example: 'PAID', description: 'Estado del pago' })
  state!: string;

  @ApiProperty({ example: 'T104', description: 'Código de la tienda' })
  store!: string;

  @ApiProperty({
    example: 'JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKPD4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQovUmVzb3VyY2VzIDw8Ci9Gb250IDw8Ci9GMSA0IDAgUgo+Pgo+PgovQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUxCi9CYXNlRm9udCAvSGVsdmV0aWNhCj4+CmVuZG9iagoxIDAgb2JqCjw8Ci9UeXBlIC9DYXRhbG9nCi9QYWdlcyAyIDAgUgo+PgplbmRvYmoKNSAwIG9iago8PAovTGVuZ3RoIDQ0Cj4+CnN0cmVhbQpCVAovRjEgMTIgVGYKNzAgNzIwIFRkCihIZWxsbyBXb3JsZCkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNgowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMDkgMDAwMDAgbiAKMDAwMDAwMDA1OCAwMDAwMCBuIAowMDAwMDAwMTE1IDAwMDAwIG4gCjAwMDAwMDAyNzAgMDAwMDAgbiAKMDAwMDAwMDM1OCAwMDAwMCBuIAp0cmFpbGVyCjw8Ci9TaXplIDYKL1Jvb3QgMSAwIFIKPj4Kc3RhcnR4cmVmCjQyNwolJUVPRg==',
    description: 'Base64 del comprobante PDF',
  })
  base64!: string;

  @ApiProperty({ example: 'TOTEM.001', description: 'ID del dispositivo' })
  device!: string;

  @ApiProperty({ example: 300, description: 'Número de terminal' })
  terminal!: number;

  @ApiProperty({
    example: '867c6452-59a4-432d-ae23-78e338e5b29f',
    description: 'ID del checkout (UUID)',
  })
  idCheckout!: string;

  @ApiProperty({ example: 3667, description: 'Número de transacción' })
  transaction!: number;

  @ApiProperty({ example: '9999', description: 'Referencia Niubiz' })
  referenceNiubiz!: string;
}

// ========== DTOs Legacy (mantener para compatibilidad si se necesitan) ==========

export class PaymentDetailsDto {
  @ApiProperty({ example: 'CASH', description: 'Método de pago', enum: ['CASH', 'CARD', 'TRANSFER'] })
  method!: string;

  @ApiProperty({ example: 172.95, description: 'Monto a pagar' })
  amount!: number;

  @ApiPropertyOptional({ example: 'VISA', description: 'Tipo de tarjeta' })
  cardType?: string;

  @ApiPropertyOptional({ example: '1234', description: 'Últimos 4 dígitos de la tarjeta' })
  lastFourDigits?: string;
}

export class CallCustomerDto {
  @ApiProperty({ example: '987654321', description: 'Número de teléfono' })
  phone!: string;

  @ApiPropertyOptional({ example: 'Juan Pérez', description: 'Nombre del cliente' })
  name?: string;
}

export class OrderResponseDto {
  @ApiProperty({ example: 'ORD-123456', description: 'ID de la orden' })
  idOrder!: string;

  @ApiProperty({
    example: 'CONFIRMED',
    description: 'Estado de la orden',
    enum: ['PENDING', 'CONFIRMED', 'CANCELLED'],
  })
  status!: string;
}
