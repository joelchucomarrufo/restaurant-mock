import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

const VALID_API_KEY = '5eSst?Yt@kkaX6S';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const apiKey =
      request.headers['x-api-key'] ??
      request.headers['X-API-Key'] ??
      request.headers['x-api-Key'];

    if (!apiKey || apiKey !== VALID_API_KEY) {
      throw new UnauthorizedException('Invalid x-api-key');
    }

    return true;
  }
}


