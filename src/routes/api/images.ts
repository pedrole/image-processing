import express from "express";

import processImage from "../../utilities/processImage";

const router = express.Router();

router.get("/", processImage);

export default router;
