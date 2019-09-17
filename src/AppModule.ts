import { Module } from '@nestjs/common';
import { AppController, ShortedUrlController } from './controllers';
import { AppService, ShortedUrlService } from './services';

@Module({
  imports: [],
  controllers: [AppController, ShortedUrlController],
  providers: [AppService, ShortedUrlService],
})
export class AppModule {}
