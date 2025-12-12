import { ApiProperty } from '@nestjs/swagger';

export class ConfigDto {
  @ApiProperty({ example: 1, description: 'ID de configuración' })
  id!: number;

  @ApiProperty({
    example: 'DDw3qqYLUBMq/AKNKB6CqISTLQBu0VpozkN5hy+grx0=',
    description: 'Hash de la aplicación',
  })
  appHash!: string;
}

export class AppConfigRequestDto {
  @ApiProperty({
    example: 'configuracionapp',
    description: 'Proceso a ejecutar',
  })
  proceso!: string;
}

export class AppConfigResponseDto {
  @ApiProperty({
    example: 'configuracionapp',
    description: 'Proceso ejecutado',
  })
  proceso!: string;

  @ApiProperty({
    type: () => ConfigDto,
    description: 'Configuración de la aplicación',
  })
  config!: ConfigDto;
}


