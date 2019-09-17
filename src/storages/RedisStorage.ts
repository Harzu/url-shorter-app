import { createClient } from 'redis';
import { IConfig, IStorage } from '../interfaces';

export class RedisStorage implements IStorage {
  constructor(private readonly config: IConfig) {}
  connect<TStorageClient>(): TStorageClient {
    const client: any = createClient({
      host: this.config.storage.redisConfig.host,
      port: this.config.storage.redisConfig.port,
    });

    return client as TStorageClient;
  }
}
