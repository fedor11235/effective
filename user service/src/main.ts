import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import 'dotenv/config'

async function bootstrap() {
  const port = process.env.PORT;

  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('User service')
    .setDescription('The User API description')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
}
bootstrap();
