import { ApiProperty } from '@nestjs/swagger';

export class HealthResponseDto {
  @ApiProperty({ example: 'serv restaurant', description: 'Estado del servicio' })
  ok!: string;
}

