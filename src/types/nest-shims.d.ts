declare module '@nestjs/common' {
  export interface CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean>;
  }
  export interface ExecutionContext {
    switchToHttp(): {
      getRequest<T = any>(): T;
      getResponse<T = any>(): T;
    };
    getHandler(): any;
    getClass(): any;
  }
  export function Injectable(): ClassDecorator;
  export function Module(metadata: any): ClassDecorator;
  export function Controller(path?: string): ClassDecorator;
  export function Post(path?: string): MethodDecorator;
  export function Body(): ParameterDecorator;
  export function HttpCode(statusCode: number): MethodDecorator;
  export function UseGuards(...guards: any[]): ClassDecorator & MethodDecorator;
  export function SetMetadata(key: string, value: any): ClassDecorator & MethodDecorator;
  export function Get(path?: string): MethodDecorator;
  export function Put(path?: string): MethodDecorator;
  export function Patch(path?: string): MethodDecorator;
  export function Param(param?: string): ParameterDecorator;
  export function Query(param?: string): ParameterDecorator;
  export function Req(): ParameterDecorator;
  export enum HttpStatus {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
  }
  export class UnauthorizedException extends Error {
    constructor(message?: string);
  }
  export class ForbiddenException extends Error {
    constructor(message?: string);
  }
  export class NotFoundException extends Error {
    constructor(message?: string);
  }
  export class BadRequestException extends Error {
    constructor(message?: string);
  }
}

declare module '@nestjs/core' {
  export class Reflector {
    getAllAndOverride<T>(metadataKey: any, targets: any[]): T | undefined;
  }
  export class NestFactory {
    static create(module: any): Promise<any>;
  }
}
declare module '@nestjs/platform-express';
declare module '@nestjs/swagger';

// Mock types for class-validator (not installed, but used in DTOs)
declare module 'class-validator' {
  export function IsString(): PropertyDecorator;
  export function IsNumber(): PropertyDecorator;
  export function IsEnum(values: any): PropertyDecorator;
  export function IsOptional(): PropertyDecorator;
  export function IsBoolean(): PropertyDecorator;
  export function IsArray(): PropertyDecorator;
  export function ValidateNested(options?: any): PropertyDecorator;
  export function IsDateString(): PropertyDecorator;
  export function Min(value: number): PropertyDecorator;
  export function Max(value: number): PropertyDecorator;
}

// Mock types for class-transformer
declare module 'class-transformer' {
  export function Type(fn: () => any): PropertyDecorator;
}

// Definición mínima para evitar errores de compilación por falta de tipos de Node
declare const process: any;
declare module 'fs';
declare module 'path';
declare module 'express' {
  export interface Response {
    status(code: number): Response;
    json(body: any): Response;
    setHeader(name: string, value: string): void;
    sendFile(path: string): void;
  }
}


