import { Response } from 'express';

export interface IAppController {
  root(res: Response);
}
