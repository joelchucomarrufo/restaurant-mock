import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class SeccionDto {
  @ApiProperty({ example: '002', description: 'ID de la sección' })
  id!: string;

  @ApiProperty({ example: 'copas', description: 'Nombre de la sección' })
  seccion!: string;

  @ApiProperty({
    example:
      'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFSGYWQFo+JPuddSxqVGA9RakMg6el6zES4ndU+O5fsFw==',
    description: 'URL codificada de la imagen',
  })
  imagen!: string;

  @ApiProperty({ example: 1, description: 'Orden de visualización' })
  orden!: number;
}

export class SectionsRequestDto {
  @ApiProperty({ example: 'secciones', description: 'Proceso a ejecutar' })
  proceso!: string;

  @ApiProperty({ example: 'TOTTEM', description: 'Canal' })
  canal!: string;

  @ApiProperty({ example: 'T106', description: 'Código de la tienda' })
  tienda!: string;

  @ApiProperty({ example: 'B', description: 'Zonificación' })
  zonificacion!: string;

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
}

export class SectionsResponseDto {
  @ApiProperty({ example: 'secciones', description: 'Proceso ejecutado' })
  proceso!: string;

  @ApiProperty({ example: 'TOTTEM', description: 'Canal' })
  canal!: string;

  @ApiProperty({ example: 'T106', description: 'Código de la tienda' })
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

  @ApiProperty({ example: 'B', description: 'Zonificación' })
  zonificacion!: string;

  @ApiProperty({
    type: () => [SeccionDto],
    description: 'Lista de secciones',
  })
  secciones!: SeccionDto[];
}


