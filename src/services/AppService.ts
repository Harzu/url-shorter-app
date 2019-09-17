import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  root(): string {
    return 'public/index.html';
  }
}
