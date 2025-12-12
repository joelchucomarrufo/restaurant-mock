declare module '@nestjs/common' {
  export interface CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean>;
  }
  export interface ExecutionContext {
    switchToHttp(): {
      getRequest<T = any>(): T;
      getResponse<T = any>(): T;
    };
  }
  export function Injectable(): ClassDecorator;
  export function Module(metadata: any): ClassDecorator;
  export function Controller(path?: string): ClassDecorator;
  export function Post(path?: string): MethodDecorator;
  export function Body(): ParameterDecorator;
  export function HttpCode(statusCode: number): MethodDecorator;
  export function UseGuards(...guards: any[]): ClassDecorator & MethodDecorator;
  export enum HttpStatus {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
  }
  export class UnauthorizedException extends Error {
    constructor(message?: string);
  }
}

declare module '@nestjs/core';
declare module '@nestjs/platform-express';
declare module '@nestjs/swagger';

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


