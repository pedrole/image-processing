import {  NextFunction, Request, Response } from "express";
import path from "path";
import sharp from "sharp";

const processImage =  async (req: Request, res: Response, next: NextFunction) => {
  const { filename, width, height } = req.query;
  if(!filename || !width || !height) {
    return res.status(400).send("Missing required parameters");
  }

  const filePath = path.join(__dirname, `../assets/full/${filename}.jpg`);

  if(!filePath) {
    return res.status(404).send("Image not found");
  }
 // validate width and height
  if (isNaN(Number(width)) || isNaN(Number(height))) {
    return res.status(400).send("Width and height must be numbers");
  }


  // resize image using sharp module, and async/await
  try {
    const image = await sharp(filePath)
      .resize(Number(width), Number(height))
      .toBuffer();

    res.set("Content-Type", "image/jpeg");
    res.send(image);
  } catch (err) {
    console.log(err);
    //res.status(404).send("Image not found");
    next(err);
  }


}

export default processImage;
