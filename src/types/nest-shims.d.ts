declare module '@nestjs/common';
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


