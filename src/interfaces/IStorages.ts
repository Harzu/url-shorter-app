export { RedisClient } from 'redis';

export enum StorageType {
  REDIS = 'redis',
}

export interface IStorage {
  connect<TStorageClient>(): TStorageClient;
}
