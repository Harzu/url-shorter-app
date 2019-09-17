export interface IConfig {
  mode: string;
  app: AppConfig;
  storage: StorageConfig;
  views: ViewsPathConfig;
}

interface AppConfig {
  protocol: string;
  host: string;
  port: number;
}

interface StorageConfig {
  storageTyoe: string;
  redisConfig: RedisConfig;
}

interface RedisConfig {
  host: string;
  port: number;
}

interface ViewsPathConfig {
  viewsPath: string;
  assetsPath: string;
}
