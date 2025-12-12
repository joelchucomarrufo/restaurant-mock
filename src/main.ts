import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  // Ocean Digital maneja HTTPS automáticamente, así que la app corre en HTTP internamente
  const app = await NestFactory.create(AppModule);

  // Prefijo global para que coincida con la colección: /api/queries/...
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Tottem Mock API')
    .setDescription(
      'API mock basada en la colección Postman proporcionada. Todos los endpoints requieren el header x-api-key para autenticación.',
    )
    .setVersion('1.0.0')
    .addApiKey(
      {
        type: 'apiKey',
        name: 'x-api-key',
        in: 'header',
        description: 'API Key requerida para autenticación. Ejemplo: 5eSst?Yt@kkaX6S',
      },
      'x-api-key',
    )
    // Necesario para que el botón "Authorize" de Swagger envíe x-api-key en las peticiones
    .addSecurityRequirements({
      'x-api-key': [],
    })
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    deepScanRoutes: true,
  });
  SwaggerModule.setup('api-docs', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port);

  // eslint-disable-next-line no-console
  console.log(`Tottem Mock API escuchando en http://localhost:${port}`);
  // eslint-disable-next-line no-console
  console.log(
    `Swagger UI disponible en http://localhost:${port}/api-docs`,
  );
  // eslint-disable-next-line no-console
  console.log(
    `Nota: Ocean Digital maneja HTTPS automáticamente en producción`,
  );
}

bootstrap();


