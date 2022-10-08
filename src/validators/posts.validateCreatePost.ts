import { NextFunction, Request, Response } from 'express';
import { body } from 'express-validator';
import * as S from '@entropiya/common';
import { result } from './validator.utils';

export async function validateCreatePost(
  req: Request,
  _res: Response,
  next: NextFunction,
) {
  await body('_id').notEmpty().withMessage('_id is required.').run(req);
  await body('userId').notEmpty().withMessage('userId is required.').run(req);
  await body('message').notEmpty().withMessage('message is required.').run(req);
  await body('hidden').notEmpty().withMessage('hidden is required.').run(req);
  await body('createdAt')
    .notEmpty()
    .withMessage('createdAt is required.')
    .run(req);
  await body('updatedAt')
    .notEmpty()
    .withMessage('updatedAt is required.')
    .run(req);
  await body('version').notEmpty().withMessage('version is required.').run(req);
  await body('likers')
    .isArray()
    .withMessage('likers is required.')
    .run(req);

  if (!result(req).isEmpty()) {
    throw new S.BadRequestException(result(req).array()[0]);
  }
  next();
}
