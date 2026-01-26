import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ImageVideoDto {
  @ApiProperty({
    example: 'img-cabecera-001',
    description: 'ID único de la imagen/video',
  })
  id!: string;

  @ApiProperty({
    example: 'image',
    description: 'Tipo de contenido (image o video)',
    enum: ['image', 'video'],
  })
  type!: string;

  @ApiProperty({
    example: 'Cabecera Principal',
    description: 'Nombre de la imagen/video',
  })
  name!: string;

  @ApiProperty({
    example: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMXzL5ZXOdHlIGiEXpMRjLWa9Nr0EOpGisgBT+NU84Ze4=',
    description: 'URL codificada de la imagen/video',
  })
  url!: string;
}

export class StoreResponseDto {
  @ApiProperty({
    example: 'T104',
    description: 'Código de la tienda',
  })
  code!: string;

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
    example: '104',
    description: 'Número EPOS (como string)',
    nullable: true,
  })
  numberEpos!: string | null;

  @ApiProperty({
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
    type: () => [ImageVideoDto],
    description: 'Imágenes y videos de la tienda',
    example: [
      {
        id: 'img-cabecera-001',
        type: 'image',
        name: 'Cabecera Principal',
        url: '<encrypted>',
      },
    ],
  })
  imagesVideos!: ImageVideoDto[];
}

export class StoresUnitResponseDto {
  @ApiProperty({
    example: 'wong',
    description: 'ID de la unidad de negocio',
  })
  id!: string;

  @ApiProperty({
    example: 'wong',
    description: 'Flag de la unidad de negocio',
  })
  flag!: string;

  @ApiProperty({
    type: () => [StoreResponseDto],
    description: 'Lista de tiendas de la unidad',
  })
  stores!: StoreResponseDto[];
}
