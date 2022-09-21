import express from 'express';
import { healthcheck } from '../controllers/_index';

const router = express.Router();

router.get('/', healthcheck);

export { router as indexRouter };
