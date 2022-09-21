import { NextFunction, Request, Response } from 'express';
import { body } from 'express-validator';
import * as S from '@entropiya/common';
import { result } from './validator.utils';

export async function validateDefault(
  req: Request,
  _res: Response,
  next: NextFunction,
) {
  await body('default')
    .notEmpty()
    .withMessage('Default cannot be empty.')
    .run(req);
  if (!result(req).isEmpty()) {
    throw new S.BadRequestException(result(req).array()[0]);
  }
  next();
}
