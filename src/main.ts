import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config';

async function bootstrap() {

  const logger = new Logger('OrdersMS-Main');


  const app = await NestFactory.create(AppModule);


  await app.listen( envs.port );
  logger.log(`Microservice running on port ${ envs.port }`);
}
bootstrap();
