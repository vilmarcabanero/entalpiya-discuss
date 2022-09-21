import { Request } from 'express';
import { ValidationError, validationResult } from 'express-validator';

const errorFormatter = ({ msg }: ValidationError) => msg;

export function result(req: Request) {
  return validationResult(req).formatWith(errorFormatter);
}
