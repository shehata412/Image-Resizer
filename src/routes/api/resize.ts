import path from 'path';
import express from 'express';
import sharp from 'sharp';

const resize = express.Router();
const img_path: string = path.join(__dirname, '../../../assets/full/');
const new_img_path: string = path.join(__dirname, '../../../assets/thumb/');
resize.get('/resize', async (req: express.Request, res: express.Response) => {
  if (Object.keys(req.query).length !== 0) {
    const img: string = img_path + `${req.query.filename as string}.jpeg`;
    const height: number = parseInt(req.query.height as string);
    const width: number = parseInt(req.query.width as string);
    try {
      await sharp(img)
        .resize(height, width)
        .toFile(new_img_path + `${req.query.filename as string}_thumb.jpeg`);
      res.sendFile(new_img_path + `${req.query.filename as string}_thumb.jpeg`);
    } catch (err) {
      console.log(err);
      res.send(`An error has occurred ${err}`);
    }
  } else {
    res.send('Bad request please enter the correct parameters');
  }
});

export = resize;
