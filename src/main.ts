import { config as dotenvConfig } from 'dotenv';
import getConfig from './config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './AppModule';
import { json as JsonBodyParser } from 'body-parser';

dotenvConfig();
const config = getConfig();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(JsonBodyParser());
  app.useStaticAssets(config.views.assetsPath);
  app.setBaseViewsDir(config.views.viewsPath);

  await app.listen(config.app.port);
}
bootstrap();
