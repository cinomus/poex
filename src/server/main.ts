import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import config from 'config';
import { RenderService } from 'nest-next';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  const service = app.get(RenderService);

  service.setErrorHandler(async (err, req, res) => {
    // send JSON response
    if (req.method === 'POST') {
      return res.send(err.response);
    }
  });

  const swaggerConfig = new DocumentBuilder()
    .setTitle('poex.com')
    .setDescription('Documentation for lpoex REST API')
    .setVersion('1.0.0')
    .addTag('PoEx')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, document);

  app.use(cookieParser());

  await app.listen(config.get('PORT'));
}

bootstrap();
