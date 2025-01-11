import express, { Request, Response, NextFunction } from 'express';

import processImage from "../../utilities/processImage";

const router = express.Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await processImage(req, res, next);
  } catch (error) {
    next(error);  // Pass error to the default error handler
  }
});

export default router;
