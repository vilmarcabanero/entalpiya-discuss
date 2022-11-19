import { Request, Response } from 'express';
export declare function healthcheck(req: Request, res: Response): Promise<Response<string>>;
