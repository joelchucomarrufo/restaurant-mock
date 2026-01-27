import { ApiProperty } from '@nestjs/swagger';

export class HealthResponseDto {
  @ApiProperty({ example: 'totem-rs', description: 'Nombre del servicio' })
  service!: string;

  @ApiProperty({ example: 'ok', description: 'Estado del servicio' })
  status!: string;

  @ApiProperty({ example: 'ok', description: 'Estado de la base de datos' })
  db!: string;

  @ApiProperty({
    example: '2026-01-26T19:42:48.345Z',
    description: 'Timestamp de la respuesta',
  })
  timestamp!: string;

  @ApiProperty({ example: 2, description: 'Latencia en milisegundos' })
  latencyMs!: number;
}





