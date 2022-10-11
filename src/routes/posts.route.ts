import * as C from '@entalpiya/common';
import express from 'express';
import * as V from '../validators/posts.validateCreatePost';
import { createPost, getAllPosts } from '../controllers/_index';
const router = express.Router();

router.get('/all', getAllPosts);
router.post('/create', C.auth, V.validateCreatePost, createPost);

export { router as postsRouter };
