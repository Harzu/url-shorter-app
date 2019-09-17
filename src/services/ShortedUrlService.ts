import { Injectable } from '@nestjs/common';
import { RedisClient, IShortedUrlService } from '../interfaces';
import { storageClient } from '../storages';
import { getHostname } from '../Utils';
import randomstring from 'randomstring';

@Injectable()
export class ShortedUrlService implements IShortedUrlService {
  private readonly storageClient: RedisClient;
  constructor() {
    this.storageClient = storageClient<RedisClient>();
  }

  generateShortenedUrl(urlFrom: string): Promise<string> {
    return new Promise((success, fail) => {
      const hash = randomstring.generate({ length: 6, charset: 'alphabetic' });
      const shortedUrl = `${getHostname()}/${hash}`;
      this.storageClient.set(shortedUrl, urlFrom, (error) => {
        if (error) {
          fail(error);
        }

        success(shortedUrl);
      });
    });
  }

  getFullUrlAddress(hash: string): Promise<string> {
    return new Promise((success, fail) => {
      const shortedUrl = `${getHostname()}/${hash}`;
      this.storageClient.get(shortedUrl, (error, res) => {
        if (error) {
          fail(error);
        }

        success(res);
      });
    });
  }
}
