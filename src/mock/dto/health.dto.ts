import { ApiProperty } from '@nestjs/swagger';

export class HealthResponseDto {
  @ApiProperty({ example: 'serv restaurnat', description: 'Estado del servicio' })
  ok!: string;
}




