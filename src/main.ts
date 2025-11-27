import 'reflect-metadata';
import * as fs from 'fs';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  // Configuración opcional de HTTPS: si se definen las rutas de los certificados,
  // Nest levantará el servidor en HTTPS directamente.
  const httpsOptions =
    process.env.SSL_KEY_PATH && process.env.SSL_CERT_PATH
      ? {
          key: fs.readFileSync(process.env.SSL_KEY_PATH),
          cert: fs.readFileSync(process.env.SSL_CERT_PATH),
        }
      : undefined;

  const app = await NestFactory.create(AppModule, { httpsOptions });

  // Prefijo global para que coincida con la colección: /api/queries/...
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Tottem Mock API')
    .setDescription('API mock basada en la colección Postman proporcionada.')
    .setVersion('1.0.0')
    .addApiKey(
      {
        type: 'apiKey',
        name: 'x-api-key',
        in: 'header',
      },
      'x-api-key',
    )
    // Necesario para que el botón "Authorize" de Swagger envíe x-api-key en las peticiones
    .addSecurityRequirements({
      'x-api-key': [],
    })
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port);

  const protocol = httpsOptions ? 'https' : 'http';
  // eslint-disable-next-line no-console
  console.log(`Tottem Mock API escuchando en ${protocol}://localhost:${port}`);
  // eslint-disable-next-line no-console
  console.log(
    `Swagger UI disponible en ${protocol}://localhost:${port}/api-docs`,
  );
}

bootstrap();


