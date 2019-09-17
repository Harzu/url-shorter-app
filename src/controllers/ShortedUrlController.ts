import {
  Get,
  Res,
  Req,
  Post,
  Controller,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ShortedUrlService } from '../services';
import { IShortedUrlController } from '../interfaces';

@Controller()
export class ShortedUrlController implements IShortedUrlController {
  constructor(private readonly service: ShortedUrlService) {}

  @Post('/generate')
  async generateUrl(
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const { targetUrl } = req.body;
    if (!this.validateUrl(targetUrl)) {
      throw new BadRequestException('invalid url');
    }

    try {
      const shortedUrl = await this.service.generateShortenedUrl(targetUrl);
      res.status(HttpStatus.OK).json({
        shortedUrl,
        longUrl: targetUrl,
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get('/:hash')
  async redirect(
    @Req() req: Request,
    @Res() res: Response,
  ) {
    if (!req.params.hash) {
      throw new BadRequestException('invalid request data');
    }

    try {
      const { hash } = req.params;
      const fullUrl = await this.service.getFullUrlAddress(hash);
      res.redirect(fullUrl);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  private validateUrl(url: string): boolean {
    const regExp = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regExp.test(url);
  }
}
