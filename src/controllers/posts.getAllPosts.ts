import { Request, Response } from 'express';
import * as I from '../interfaces';
import { Post } from '../models/post.model';

/**
 * Retrieve all posts.
 * @param req the request object
 * @param res the response object
 */
export async function getAllPosts(
  req: Request,
  res: Response,
): Promise<Response<I.Post[]>> {
  const allPosts = await Post.find();

  return res.send(allPosts);
}
