import { ApiProperty } from '@nestjs/swagger';

export class ProviderDto {
  @ApiProperty({ example: 1, description: 'ID del proveedor' })
  id!: number;

  @ApiProperty({ example: 'vinos', description: 'Nombre del proveedor' })
  name!: string;
}

export class LoginDataDto {
  @ApiProperty({
    example: 'a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d',
    description: 'ID del usuario (UUID)',
  })
  id!: string;

  @ApiProperty({ example: 'provider', description: 'Username' })
  username!: string;

  @ApiProperty({ example: 'MAINTAINER', description: 'Rol del usuario' })
  role!: string;

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
  @ApiProperty({ example: true, description: 'Indica si el login fue exitoso' })
  isSuccess!: boolean;

  @ApiProperty({
    example: 'Login exitoso.',
    description: 'Mensaje de respuesta',
  })
  message!: string;

  @ApiProperty({
    type: () => LoginDataDto,
    description: 'Datos del usuario',
  })
  data!: LoginDataDto;
}

// Mantener UserDto y ProviderDto para compatibilidad si se necesitan en otros lugares
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


