export interface IShortedUrlService {
  generateShortenedUrl(urlFrom: string): Promise<string>;
  getFullUrlAddress(shortedUrl: string): Promise<string>;
}
