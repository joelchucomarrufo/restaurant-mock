import { ApiProperty } from '@nestjs/swagger';

export class ProviderDto {
  @ApiProperty({ example: 1, description: 'ID del proveedor' })
  id!: number;

  @ApiProperty({ example: 'vinos', description: 'Nombre del proveedor' })
  name!: string;
}

export class UserDto {
  @ApiProperty({ example: 6, description: 'ID del usuario' })
  id!: number;

  @ApiProperty({ example: 'provider', description: 'Username' })
  username!: string;

  @ApiProperty({ example: 'MAINTAINER', description: 'Rol del usuario' })
  role!: string;

  @ApiProperty({
    type: () => ProviderDto,
    description: 'Información del proveedor',
  })
  provider!: ProviderDto;

  @ApiProperty({
    example: {},
    description: 'Funciones del usuario',
    default: {},
  })
  functions!: Record<string, any>;
}

export class LoginUsernameRequestDto {
  @ApiProperty({
    example: 'prueba',
    description: 'Username del usuario',
  })
  username!: string;

  @ApiProperty({
    example: 'prueba123',
    description: 'Password del usuario',
  })
  password!: string;
}

export class LoginUsernameResponseDto {
  @ApiProperty({ example: 'login', description: 'Proceso ejecutado' })
  proceso!: string;

  @ApiProperty({ example: 'TOTTEM', description: 'Canal' })
  canal!: string;

  @ApiProperty({ example: 200, description: 'Código de estado' })
  statusCode!: number;

  @ApiProperty({
    example: 'Login exitoso.',
    description: 'Mensaje de respuesta',
  })
  message!: string;

  @ApiProperty({
    type: () => UserDto,
    description: 'Información del usuario',
  })
  user!: UserDto;
}


