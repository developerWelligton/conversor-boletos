import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: 'http://localhost:4200', // Allow requests from Angular client
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      allowedHeaders: 'Content-Type, Accept, Authorization', // Include Authorization header
      credentials: true,
    },
  });

  const config = new DocumentBuilder()
    .setTitle('Projeto Sinair Conversor PDF ')
    .setDescription('projeto Sinair')
    .setVersion('1.0')
    .addTag('Api Asaas ')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();