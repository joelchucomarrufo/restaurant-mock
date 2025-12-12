import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CategoriaDto {
  @ApiProperty({ example: 1, description: 'ID de la categoría' })
  categoria_id!: number;

  @ApiProperty({
    example: 'Vinos tintos',
    description: 'Descripción de la categoría',
  })
  descripcion!: string;

  @ApiProperty({
    example:
      'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MG/ckpVV/O5huO5Q2bmG2T6CNAvnRxn4Kep5iCFFBDJ1g==',
    description: 'URL codificada de la imagen de la categoría',
  })
  imagenCategoria!: string;
}

export class ProductoDto {
  @ApiProperty({ example: '7755211000020', description: 'Código EAN' })
  ean!: string;

  @ApiProperty({
    example: 'CERV PACI PK6BT300',
    description: 'Descripción del producto',
  })
  descripcion!: string;

  @ApiProperty({ example: 'UND', description: 'Unidad de medida' })
  unidadMedida!: string;

  @ApiProperty({ example: 8.5, description: 'Precio unitario' })
  precioUnitario!: number;

  @ApiProperty({ example: 67, description: 'Stock disponible' })
  stock!: number;

  @ApiProperty({
    example:
      'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MHbhF0Ygiq+zWxCV7xkvx4BPkkquDJp2zRsRb9T1CIzO5wukTwJ9N1P1YirP5x7DgQ=',
    description: 'URL codificada de la imagen del producto',
  })
  imagen!: string;

  @ApiProperty({
    example: true,
    description: 'Requiere mayoría de edad',
  })
  mayoriaDeEdad!: boolean;

  @ApiProperty({
    example: true,
    description: 'Tiene restricción horaria',
  })
  restriccionhoraria!: boolean;

  @ApiProperty({
    example: '23:00 - 06:00',
    description: 'Rango horario de restricción',
  })
  rangoHorario!: string;

  @ApiPropertyOptional({
    example: null,
    description: 'Referencia VTEX',
    nullable: true,
  })
  vtexRefId!: string | null;

  @ApiPropertyOptional({
    example: null,
    description: 'ID de producto VTEX',
    nullable: true,
  })
  vtexProductId!: string | null;

  @ApiProperty({ example: 1, description: 'ID de la categoría' })
  categoriaId!: number;

  @ApiProperty({ example: 0, description: 'ID del producto en turnera' })
  productoIdTurnera!: number;
}

export class DetailSectionsRequestDto {
  @ApiProperty({
    example: 'detalleseccion',
    description: 'Proceso a ejecutar',
  })
  proceso!: string;

  @ApiProperty({ example: '001', description: 'ID de la sección' })
  idSeccion!: string;

  @ApiProperty({ example: 'vinos', description: 'Nombre de la sección' })
  seccion!: string;

  @ApiProperty({ example: 'TOTTEM', description: 'Canal' })
  canal!: string;

  @ApiProperty({ example: 'H005', description: 'Código de la tienda' })
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
}

export class DetailSectionsResponseDto {
  @ApiProperty({
    example: 'detalleseccion',
    description: 'Proceso ejecutado',
  })
  proceso!: string;

  @ApiProperty({ example: '001', description: 'ID de la sección' })
  idSeccion!: string;

  @ApiProperty({ example: 'vinos', description: 'Nombre de la sección' })
  seccion!: string;

  @ApiProperty({ example: 'TOTTEM', description: 'Canal' })
  canal!: string;

  @ApiProperty({ example: 'H005', description: 'Código de la tienda' })
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
    type: () => [CategoriaDto],
    description: 'Lista de categorías',
  })
  categorias!: CategoriaDto[];

  @ApiProperty({
    type: () => [ProductoDto],
    description: 'Lista de productos',
  })
  productos!: ProductoDto[];
}


