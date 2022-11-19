import { Request, Response } from 'express';
import * as I from '../interfaces';
export declare function getAllPosts(req: Request, res: Response): Promise<Response<I.Post[]>>;
