import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ImagenDto } from './shared.dto';

export class TiendaDto {
  @ApiProperty({ example: 'T104', description: 'Código de la tienda' })
  tienda!: string;

  @ApiProperty({
    example: 'T104 - Wong Benavides',
    description: 'Descripción de la tienda',
  })
  descripcion!: string;

  @ApiProperty({
    example: '10.166.218.228:8444',
    description: 'IP de la tienda',
  })
  ip!: string;

  @ApiProperty({ example: 'Wong', description: 'Unidad de negocio' })
  unidad!: string;

  @ApiProperty({
    example: 'Direccion 123',
    description: 'Dirección de la tienda',
  })
  direccion!: string;

  @ApiProperty({
    type: [String],
    example: ['A', 'B'],
    description: 'Zonas disponibles',
  })
  zonas!: string[];

  @ApiProperty({
    type: () => [ImagenDto],
    description: 'Imágenes de la tienda',
  })
  imagenes!: ImagenDto[];

  @ApiProperty({
    example: false,
    description: 'Indica si tiene flujo de cupones',
  })
  flujoCupones!: boolean;
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
    description: 'Lista de tiendas',
  })
  tiendas!: TiendaDto[];
}

