import express from "express";
import path from "path";

const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.query);


  const filePath = path.join(__dirname, `../../assets/full/${req.query.filename}.jpg`);

  // send image
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).send("Image not found");
    }
  } );


  //res.send("Images route");
});

export default router;
