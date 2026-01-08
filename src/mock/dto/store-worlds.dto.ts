import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CategoryDto {
  @ApiProperty({ example: '1', description: 'ID de la categoría' })
  id!: string;

  @ApiProperty({ example: 'categoria1', description: 'Nombre de la categoría' })
  name!: string;
}

export class WorldDto {
  @ApiProperty({ example: '1', description: 'ID del mundo' })
  id!: string;

  @ApiProperty({ example: 'Fusión', description: 'Nombre del mundo' })
  name!: string;

  @ApiProperty({
    example: 'https://takiplayer.com/cencosud/option_one.png',
    description: 'URL de la imagen del mundo',
  })
  image!: string;

  @ApiProperty({
    type: () => [CategoryDto],
    description: 'Lista de categorías',
  })
  categories!: CategoryDto[];
}

export class ProductDto {
  @ApiProperty({ example: '22111111111', description: 'Código EAN del producto' })
  ean!: string;

  @ApiProperty({ example: 'producto1', description: 'Nombre del producto' })
  name!: string;

  @ApiProperty({ example: 8.5, description: 'Precio unitario del producto' })
  unitPrice!: number;
}

export class DishDto {
  @ApiProperty({ example: '7755211000020', description: 'Código EAN del plato' })
  ean!: string;

  @ApiProperty({ example: 'Churrasco con vegetales', description: 'Nombre del plato' })
  name!: string;

  @ApiProperty({
    example: 'Lorem ipsum dolor sit amet consectetur adipiscing elit curae maecenas.',
    description: 'Detalles adicionales del plato',
  })
  adicionalDetails!: string;

  @ApiProperty({ example: 8.5, description: 'Precio unitario del plato' })
  unitPrice!: number;

  @ApiPropertyOptional({
    example: null,
    description: 'Stock disponible',
    nullable: true,
  })
  stock!: number | null;

  @ApiPropertyOptional({
    example: 'https://takiplayer.com/cencosud/dish_one.png',
    description: 'URL de la imagen del plato',
  })
  image?: string;

  @ApiPropertyOptional({
    example: 'https://takiplayer.com/cencosud/dish_two.png',
    description: 'URL de la imagen del plato (alternativo)',
  })
  imagen?: string;

  @ApiProperty({ example: true, description: 'Indica si tiene restricciones' })
  restriction!: boolean;

  @ApiPropertyOptional({
    example: '23:00 - 06:00',
    description: 'Rango de horas disponible',
    nullable: true,
  })
  rangeHours!: string | null;

  @ApiProperty({ example: 2, description: 'ID del mundo al que pertenece' })
  idWorld!: string;

  @ApiProperty({ example: '3', description: 'ID de la categoría' })
  idCategory!: string;

  @ApiProperty({ example: true, description: 'Indica si permite comentarios' })
  comments!: boolean;

  @ApiProperty({
    type: () => [String],
    example: ['sin sal', 'con sal', 'termino 1/2'],
    description: 'Lista de preferencias de etiquetas',
  })
  tagPreferences!: string[];

  @ApiProperty({ example: 'estacion1', description: 'Estación de cocina' })
  cookingStation!: string;

  @ApiProperty({ example: '12.123.342.32', description: 'IP de la estación' })
  ipStation!: string;

  @ApiProperty({
    type: () => [ProductDto],
    description: 'Lista de productos',
  })
  products!: ProductDto[];
}

export class StoreWorldsRequestDto {
  @ApiProperty({ example: 'T104', description: 'Código de la tienda' })
  store!: string;

  @ApiProperty({ example: 'DEVICE001', description: 'ID del dispositivo' })
  device!: string;
}

export class StoreWorldsResponseDto {
  @ApiProperty({ example: 'T104', description: 'Código de la tienda' })
  store!: string;

  @ApiProperty({ example: 'DEVICE001', description: 'ID del dispositivo' })
  device!: string;

  @ApiProperty({
    example: '10.166.218.228:8444',
    description: 'IP de la estación principal',
  })
  ipStationPrincipal!: string;

  @ApiProperty({
    type: () => [WorldDto],
    description: 'Lista de mundos',
  })
  world!: WorldDto[];

  @ApiProperty({
    type: () => [DishDto],
    description: 'Lista de platos',
  })
  dishes!: DishDto[];
}

