import express from 'express';

import IndexController from './controllers/IndexController';

const router = express.Router();

// Index API.
router.get('/', IndexController.index);

export default router;
