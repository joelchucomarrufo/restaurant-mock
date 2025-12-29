import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class WorldDto {
  @ApiProperty({ example: '001', description: 'ID del mundo' })
  id!: string;

  @ApiProperty({ example: 'Mundo Principal', description: 'Nombre del mundo' })
  name!: string;

  @ApiPropertyOptional({ example: 'Descripción del mundo', description: 'Descripción' })
  description?: string;
}

export class DishDto {
  @ApiProperty({ example: '7757419000086', description: 'Código EAN del plato' })
  ean!: string;

  @ApiProperty({ example: 'Plato Principal', description: 'Nombre del plato' })
  name!: string;

  @ApiPropertyOptional({
    example: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMXzL5ZXOdHlIGiEXpMRjLWa9Nr0EOpGisgBT+NU84Ze4=',
    description: 'URL codificada de la imagen',
  })
  image?: string;

  @ApiPropertyOptional({
    example: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMXzL5ZXOdHlIGiEXpMRjLWa9Nr0EOpGisgBT+NU84Ze4=',
    description: 'URL codificada de la imagen (alternativo)',
  })
  imagen?: string;

  @ApiProperty({ example: 25.50, description: 'Precio del plato' })
  price!: number;
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
