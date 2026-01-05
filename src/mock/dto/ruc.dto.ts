import { ApiProperty } from '@nestjs/swagger';

export class RucRequestDto {
  @ApiProperty({ example: 'T104', description: 'Código de la tienda' })
  store!: string;

  @ApiProperty({ example: 'DEVICE001', description: 'ID del dispositivo' })
  device!: string;

  @ApiProperty({ example: '20123456789', description: 'RUC de la empresa' })
  ruc!: string;

  @ApiProperty({ example: 'Empresa Ejemplo S.A.C.', description: 'Razón social' })
  companyName!: string;
}

export class RucResponseDto {
  @ApiProperty({ example: 'T104', description: 'Código de la tienda' })
  store!: string;

  @ApiProperty({ example: 'DEVICE001', description: 'ID del dispositivo' })
  device!: string;

  @ApiProperty({ example: '20123456789', description: 'RUC de la empresa' })
  ruc!: string;

  @ApiProperty({ example: 'Empresa Ejemplo S.A.C.', description: 'Razón social' })
  companyName!: string;

  @ApiProperty({
    example: 'RUC válido y activo',
    description: 'Mensaje de validación',
  })
  validationMessage!: string;
}

