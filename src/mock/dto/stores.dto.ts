import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ImagenDto } from './shared.dto';

export class BenefitDto {
  @ApiProperty({ example: 'BONUS', description: 'Tipo de beneficio' })
  type!: string;

  @ApiPropertyOptional({ example: '123456', description: 'Código del beneficio' })
  code?: string;
}

export class CallCustomerDto {
  @ApiProperty({ example: '987654321', description: 'Número de teléfono' })
  phone!: string;

  @ApiPropertyOptional({ example: 'Juan Pérez', description: 'Nombre del cliente' })
  name?: string;
}

export class DeviceDto {
  @ApiProperty({ example: 'DEVICE001', description: 'ID del dispositivo' })
  id!: string;

  @ApiPropertyOptional({ example: 'Dispositivo Principal', description: 'Descripción del dispositivo' })
  description?: string;
}

export class TiendaDto {
  @ApiProperty({ example: 'T104', description: 'Código de la tienda' })
  store!: string;

  @ApiProperty({
    example: 'T104 - Wong Benavides',
    description: 'Nombre de la tienda',
  })
  name!: string;

  @ApiProperty({
    example: '10.166.218.228:8444',
    description: 'IP EPOS',
  })
  ipEpos!: string;

  @ApiProperty({
    example: 123,
    description: 'Número EPOS',
  })
  numberEpos!: number;

  @ApiProperty({
    example: 'Direccion 123',
    description: 'Dirección de la tienda',
  })
  address!: string;

  @ApiProperty({
    example: false,
    description: 'Indica si tiene input de cupones',
  })
  couponsInput!: boolean;

  @ApiProperty({
    type: () => [BenefitDto],
    description: 'Lista de beneficios',
    default: [],
  })
  benefit!: BenefitDto[];

  @ApiProperty({
    type: () => [CallCustomerDto],
    description: 'Lista de información para llamar al cliente',
    default: [],
  })
  callCustomer!: CallCustomerDto[];

  @ApiProperty({
    type: () => [DeviceDto],
    description: 'Lista de dispositivos',
    default: [],
  })
  device!: DeviceDto[];

  @ApiProperty({
    type: () => [ImagenDto],
    description: 'Imágenes y videos de la tienda',
  })
  imagesVideos!: ImagenDto[];
}

export class StoresRequestDto {
  @ApiPropertyOptional({
    description: 'Body vacío - no requiere propiedades',
    required: false,
  })
  _empty?: Record<string, never>;
}

export class StoresResponseDto {
  @ApiProperty({
    type: () => [TiendaDto],
    description: 'Lista de tiendas Wong',
  })
  wong!: TiendaDto[];

  @ApiProperty({
    type: () => [TiendaDto],
    description: 'Lista de tiendas Metro',
  })
  metro!: TiendaDto[];
}

