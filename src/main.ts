import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const localhost = 3000;
  await app.listen(localhost);
  console.log('start localhost', localhost);
}
bootstrap();
