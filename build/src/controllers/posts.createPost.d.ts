import { Request, Response } from 'express';
import * as I from '../interfaces';
export declare function createPost(req: Request, res: Response): Promise<Response<I.Post>>;
