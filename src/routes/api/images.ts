import express, { Response } from "express";

import { CustomRequest } from "../../types/customRequest";

import processImage from "../../utilities/processImage";

const router = express.Router();

router.get("/", processImage, (req: CustomRequest, res: Response) => {
  if (req.processedImage) {
    return res.sendFile(req.processedImage);
  }
});

export default router;
