import path from "path";
import sharp from "sharp";
import fs from "fs";
import { Request, Response, NextFunction } from "express";

interface CustomRequest extends Request {
  processedImage?: string;
}

const cacheDir = path.resolve(__dirname, "../assets/thumb");

// Ensure cache directory exists
if (!fs.existsSync(cacheDir)) {
  fs.mkdirSync(cacheDir, { recursive: true });
}

const processImage = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { filename, width, height } = req.query;

    if (!filename) {
      res.status(400).json({ error: 'Missing required "filename" query parameter.' });
      return;
    }

    const filePath = path.join(__dirname, `../assets/full/${filename}.jpg`);

    if (!fs.existsSync(filePath)) {
      res.status(404).json({ error: `Invalid filename: "${filename}". File not found.` });
      return;
    }
    // validate width and height
    if (!width || !height || isNaN(Number(width)) || isNaN(Number(height))) {
      res.status(400).json({ error: "Width and height must be numbers." });
      return;
    }

    const cachedImage = path.join(cacheDir, `${filename}-${width}-${height}.jpg`);
    // check if image is already cached
    //console.log(cachedImage);

    if (!fs.existsSync(cachedImage)) {
      await sharp(filePath).resize(Number(width), Number(height)).toFile(cachedImage);
    }

    req.processedImage = cachedImage;
    next();

    //console.log(cachedImage);
    // resize image using sharp module, and async/await
  } catch (error) {
    next(error); // Pass errors to the default error handler
  }
};

export default processImage;
