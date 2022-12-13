import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { serverPort } from './config';
import { logEnvs } from './helpers';
import { Logger } from "@nestjs/common";

async function create() {
  try {
    logEnvs();
    const app = await NestFactory.create(AppModule);
    await app.listen(serverPort, () => {
      Logger.log(
          `Server v2 is listening on ${serverPort} port`,
          "NestApplication"
      );
    });
  } catch(e) {
    throw e;
  }
}
create();
