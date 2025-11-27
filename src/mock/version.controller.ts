import { Controller, Get, HttpCode, HttpStatus, Res, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiParam } from '@nestjs/swagger';
import * as path from 'path';
import * as fs from 'fs';

@ApiTags('Version')
@Controller()
export class VersionController {
  @Get('version.json')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Obtener información de versión de la aplicación' })
  @ApiResponse({
    status: 200,
    description: 'Información de versión de la aplicación.',
    schema: {
      type: 'object',
      properties: {
        versionCode: { type: 'number', example: 15 },
        versionName: { type: 'string', example: '1.5.0' },
        apkUrl: { type: 'string', example: 'https://mi-servidor.com/apks/myapp-v15.apk' },
        changelog: { type: 'string', example: 'Mejoras de rendimiento y nuevas pantallas...' },
      },
    },
  })
  getVersion() {
    return {
      versionCode: 15,
      versionName: '1.5.0',
      apkUrl: 'https://mi-servidor.com/apks/myapp-v15.apk',
      changelog: 'Mejoras de rendimiento y nuevas pantallas...',
    };
  }

  @Get('apks/:filename')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Descargar archivo APK' })
  @ApiParam({
    name: 'filename',
    description: 'Nombre del archivo APK a descargar',
    example: 'myapp-v15.apk',
  })
  @ApiResponse({
    status: 200,
    description: 'Archivo APK descargado exitosamente.',
    content: {
      'application/vnd.android.package-archive': {
        schema: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Archivo APK no encontrado.',
  })
  downloadApk(@Param('filename') filename: string, @Res() res: any) {
    // Validar que el archivo tenga extensión .apk
    if (!filename.endsWith('.apk')) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'El archivo debe tener extensión .apk',
      });
    }

    // Ruta del archivo APK
    const apkPath = path.join(process.cwd(), 'public', 'apks', filename);

    // Verificar que el archivo existe
    if (!fs.existsSync(apkPath)) {
      return res.status(HttpStatus.NOT_FOUND).json({
        statusCode: 404,
        message: `Archivo ${filename} no encontrado`,
      });
    }

    // Configurar headers para descarga
    res.setHeader('Content-Type', 'application/vnd.android.package-archive');
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="${filename}"`,
    );

    // Enviar el archivo
    return res.sendFile(apkPath);
  }
}

