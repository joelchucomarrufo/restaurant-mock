import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ImagenDto } from './shared.dto';

export class BenefitDto {
  @ApiProperty({ example: 'bonus', description: 'ID del beneficio' })
  id!: string;

  @ApiProperty({ example: 'BONUS', description: 'Código del beneficio' })
  code!: string;

  @ApiProperty({ example: 'Programa Bonus', description: 'Etiqueta del beneficio' })
  label!: string;
}

export class CallCustomerDto {
  @ApiProperty({ example: 'discollamadorManual', description: 'ID del método de llamada' })
  id!: string;

  @ApiProperty({ example: 'DISC_LLAM_MAN', description: 'Código del método de llamada' })
  code!: string;

  @ApiProperty({ example: 'Disco Llamador Manual', description: 'Etiqueta del método de llamada' })
  label!: string;
}

export class DeviceDto {
  @ApiProperty({ example: 'TOTEM.001', description: 'ID del dispositivo' })
  id!: string;

  @ApiProperty({ example: 'TOTEM_001', description: 'Código del dispositivo' })
  code!: string;

  @ApiProperty({ example: 'Tótem 001', description: 'Etiqueta del dispositivo' })
  label!: string;
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

  @ApiPropertyOptional({
    example: 123,
    description: 'Número EPOS',
    nullable: true,
  })
  numberEpos!: number | null;

  @ApiPropertyOptional({
    example: 'Direccion 123',
    description: 'Dirección de la tienda',
    nullable: true,
  })
  address!: string | null;

  @ApiProperty({
    example: false,
    description: 'Indica si tiene input de cupones',
  })
  couponsInput!: boolean;

  @ApiProperty({
    type: () => [String],
    description: 'Lista de beneficios',
    example: ['bonus', 'prime', 'colaborador', 'cupones'],
    default: [],
  })
  benefit!: string[];

  @ApiProperty({
    type: () => [String],
    description: 'Lista de información para llamar al cliente',
    example: ['discollamadorManual', 'telefonoSMS', 'discollamadorAutomatico'],
    default: [],
  })
  callCustomer!: string[];

  @ApiProperty({
    type: () => [String],
    description: 'Lista de dispositivos',
    example: ['TOTEM.001', 'TOTEM.002', 'TOTEM.003'],
    default: [],
  })
  device!: string[];

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

