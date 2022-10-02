import { Request, Response } from 'express';
import * as I from '@entropiya/discuss-interfaces';
import { Post } from '../models/post.model';

/**
 * Create a post.
 * @param req the request object
 * @param res the response object
 */
export async function createPost(
  req: Request,
  res: Response,
): Promise<Response<I.Post>> {
  const payload: I.Post = req.body;

  const createdPost = await Post.build(payload).save();

  return res.status(201).send(createdPost);
}