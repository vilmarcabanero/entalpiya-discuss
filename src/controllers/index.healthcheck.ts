import { Request, Response } from 'express';
import * as I from '@entropiya/i-discuss';

/**
 * Description of default request.
 * @param req the request object
 * @param res the response object
 */
export async function healthcheck(
  req: Request,
  res: Response,
): Promise<Response<string>> {
  return res.status(200).send('Entropiya api is ok.');
}
