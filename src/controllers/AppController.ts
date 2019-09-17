import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from '../services';
import { IAppController } from '../interfaces';

@Controller()
export class AppController implements IAppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(@Res() res: Response) {
    return res.render(this.appService.root());
  }
}
