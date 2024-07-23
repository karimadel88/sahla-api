import { env } from "@mongez/dotenv";
import {
  CacheConfigurations,
  FileCacheDriver,
  MemoryCacheDriver,
  RedisCacheDriver,
} from "@warlock.js/core";

const globalPrefix = () => {
  return env("CACHE_PREFIX", env("APP_NAME", "warlock"));
};

const cacheConfigurations: CacheConfigurations = {
  drivers: {
    file: FileCacheDriver,
    memory: MemoryCacheDriver,
    redis: RedisCacheDriver,
  },
  default: env("CACHE_DRIVER", ""),
  options: {
    memory: {
      globalPrefix,
    },
    redis: {
      host: env("REDIS_HOST"),
      port: env("REDIS_PORT"),
      url: env("REDIS_URL"),
      globalPrefix,
    },
  },
};

export default cacheConfigurations;
