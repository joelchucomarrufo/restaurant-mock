import { LoginUsernameResponseDto } from '../dto/login-username.dto';

export const loginUsernameMockData: LoginUsernameResponseDto = {
  proceso: 'login',
  canal: 'TOTTEM',
  statusCode: 200,
  message: 'Login exitoso.',
  user: {
    id: 6,
    username: 'provider',
    role: 'MAINTAINER',
    provider: {
      id: 1,
      name: 'vinos',
    },
  },
};





