import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {serverPort, SwaggerConfig, SwaggerOptions} from './config';
import { logEnvs } from './helpers';
import { Logger } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';

async function create() {
  try {
    logEnvs();
    const app = await NestFactory.create(AppModule);

    const swaggerDocument = SwaggerModule.createDocument(
      app,
      SwaggerConfig,
      SwaggerOptions,
    );
    SwaggerModule.setup('api', app, swaggerDocument);

    await app.listen(serverPort, () => {
      Logger.log(
        `Server v2 is listening on ${serverPort} port`,
        'NestApplication',
      );
    });
  } catch (e) {
    throw e;
  }
}
create();
