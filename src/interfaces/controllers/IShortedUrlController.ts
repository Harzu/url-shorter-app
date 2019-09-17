import { Request, Response } from 'express';

export interface IShortedUrlController {
  generateUrl(req: Request, res: Response);
  redirect(req: Request, res: Response);
}
