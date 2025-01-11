import { NextFunction, Request, Response } from "express";
import path from "path";
import sharp from "sharp";

const processImage = async (req: Request, res: Response, next: NextFunction) => {
  const { filename, width, height } = req.query;
  const filePath = path.join(__dirname, `../assets/full/${filename}.jpg`);
  console.log(filePath);


  // resize image using sharp module, and async/await
  try {
    const image = await sharp(filePath)
      .resize(Number(width), Number(height))
      .toBuffer();

    res.set("Content-Type", "image/jpeg");
    res.send(image);
  } catch (err) {
    console.log(err);
    res.status(404).send("Image not found");
  }


}

export default processImage;
