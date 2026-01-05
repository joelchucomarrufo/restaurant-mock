import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

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

export class BillingRequestDto {
  @ApiProperty({ example: 'T104', description: 'Código de la tienda' })
  store!: string;

  @ApiProperty({ example: 'DEVICE001', description: 'ID del dispositivo' })
  device!: string;

  @ApiProperty({ example: '10.166.218.228:8444', description: 'IP EPOS' })
  ipEpos!: string;

  @ApiProperty({
    example: 'fc2ee037-cf46-424c-afc2-1235462d50ef',
    description: 'ID del checkout',
  })
  idCheckout!: string;

  @ApiProperty({
    type: () => PaymentDetailsDto,
    description: 'Detalles del pago',
  })
  paymentDatails!: PaymentDetailsDto;

  @ApiProperty({
    type: () => CallCustomerDto,
    description: 'Información para llamar al cliente',
  })
  callCustomer!: CallCustomerDto;

  @ApiProperty({
    example: 'DELIVERY',
    description: 'Método de entrega',
    enum: ['DELIVERY', 'PICKUP', 'DINE_IN'],
  })
  deliveryMethod!: string;
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

export class BillingResponseDto {
  @ApiProperty({ example: 'T104', description: 'Código de la tienda' })
  store!: string;

  @ApiProperty({ example: 'DEVICE001', description: 'ID del dispositivo' })
  device!: string;

  @ApiProperty({
    example: 'fc2ee037-cf46-424c-afc2-1235462d50ef',
    description: 'ID del checkout',
  })
  idCheckout!: string;

  @ApiProperty({
    example: 'JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKPD4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQovUmVzb3VyY2VzIDw8Ci9Gb250IDw8Ci9GMSA0IDAgUgo+Pgo+PgovQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUxCi9CYXNlRm9udCAvSGVsdmV0aWNhCj4+CmVuZG9iagoxIDAgb2JqCjw8Ci9UeXBlIC9DYXRhbG9nCi9QYWdlcyAyIDAgUgo+PgplbmRvYmoKNSAwIG9iago8PAovTGVuZ3RoIDQ0Cj4+CnN0cmVhbQpCVAovRjEgMTIgVGYKNzAgNzIwIFRkCihIZWxsbyBXb3JsZCkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNgowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMDkgMDAwMDAgbiAKMDAwMDAwMDA1OCAwMDAwMCBuIAowMDAwMDAwMTE1IDAwMDAwIG4gCjAwMDAwMDAyNzAgMDAwMDAgbiAKMDAwMDAwMDM1OCAwMDAwMCBuIAp0cmFpbGVyCjw8Ci9TaXplIDYKL1Jvb3QgMSAwIFIKPj4Kc3RhcnR4cmVmCjQyNwolJUVPRg==',
    description: 'Base64 del comprobante (PDF mock corto)',
  })
  Base64!: string;

  @ApiProperty({
    type: () => OrderResponseDto,
    description: 'Información de la orden',
  })
  order!: OrderResponseDto;
}

