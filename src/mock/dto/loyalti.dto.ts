import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class LoyaltiRequestDto {
  @ApiProperty({
    example: 'identificacionbonus',
    description: 'Proceso a ejecutar',
  })
  proceso!: string;

  @ApiProperty({ example: 'TOTTEM', description: 'Canal' })
  canal!: string;

  @ApiProperty({ example: 'T104', description: 'Código de la tienda' })
  tienda!: string;

  @ApiProperty({
    example: '10.166.218.148:8444',
    description: 'IP de la tienda',
  })
  ip!: string;

  @ApiProperty({
    example: 'TOTTEM.1001',
    description: 'Código de trazabilidad',
  })
  trazabilidad!: string;

  @ApiProperty({
    example: 'dni',
    description: 'Tipo de documento del bonus',
  })
  tipoDocumentoBonus!: string;

  @ApiProperty({
    example: '45478547',
    description: 'Número de documento del bonus',
  })
  numeroDocumentoBonus!: string;
}

export class LoyaltiResponseDto {
  @ApiProperty({
    example: 'identificacionbonus',
    description: 'Proceso ejecutado',
  })
  proceso!: string;

  @ApiProperty({ example: 'TOTTEM', description: 'Canal' })
  canal!: string;

  @ApiProperty({
    example: 'TOTTEM.1001',
    description: 'Código de trazabilidad',
  })
  trazabilidad!: string;

  @ApiProperty({
    example: 'dni',
    description: 'Tipo de documento del bonus',
  })
  tipoDocumentoBonus!: string;

  @ApiProperty({
    example: '45478547',
    description: 'Número de documento del bonus',
  })
  numeroDocumentoBonus!: string;

  @ApiProperty({ example: 'T104', description: 'Código de la tienda' })
  tienda!: string;

  @ApiProperty({
    example: '10.166.218.148:8444',
    description: 'IP de la tienda',
  })
  ip!: string;

  @ApiProperty({
    example: 'Hola NOMBRE-1 PRUEBA NOMBRE-2 PRUEBA, tienes 4478 puntos.',
    description: 'Mensaje del bonus',
  })
  mensajeBonus!: string;

  @ApiProperty({
    example: '7027661000601779651',
    description: 'Tarjeta bonus',
  })
  tarjetaBonus!: string;

  @ApiPropertyOptional({
    example: null,
    description: 'Correo del bonus',
    nullable: true,
  })
  correoBonus!: string | null;

  @ApiProperty({
    example: false,
    description: 'Indica si es prime',
  })
  prime!: boolean;

  @ApiProperty({
    example: true,
    description: 'Indica si es colaborador',
  })
  colaborator!: boolean;
}




