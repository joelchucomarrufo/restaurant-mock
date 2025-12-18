import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';

const VALID_API_KEY = '5eSst?Yt@kkaX6S';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

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


