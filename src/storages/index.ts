import getConfig from '../config';
import { RedisStorage } from './RedisStorage';
import { StorageType, RedisClient } from '../interfaces';

let client: any = null;
export function storageClient<TStorageClient>() {
  if (!client) {
    const config = getConfig();
    switch (config.storage.storageTyoe) {
      case StorageType.REDIS:
        client = new RedisStorage(config).connect<RedisClient>();
        break;
    }
  }

  return client as TStorageClient;
}
