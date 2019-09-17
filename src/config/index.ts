import { join } from 'path';
import { IConfig } from '../interfaces';

export default function getConfig(): IConfig {
  return {
    mode: process.env.NODE_ENV || 'development',
    app: {
      protocol: process.env.APP_PROTOCOL || 'http',
      host: process.env.APP_HOST || '0.0.0.0',
      port: Number(process.env.APP_PORT) || 3000,
    },
    storage: {
      storageTyoe: process.env.STORAGE_TYPE || 'redis',
      redisConfig: {
        host: process.env.REDIS_HOST || '0.0.0.0',
        port: Number(process.env.REDIS_PORT) || 6379,
      },
    },
    views: {
      viewsPath: join(__dirname, '..', 'Views'),
      assetsPath: join(__dirname, '../..', 'public'),
    },
  };
}
