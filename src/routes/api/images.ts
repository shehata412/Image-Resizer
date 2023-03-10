import path from 'path';
import express from 'express';
import resizer from '../../utils/resizer';

const images = express.Router();
const new_img_path: string = path.join(__dirname, '../../../assets/thumb/');

//images.get('/images', async (req: express.Request, res: express.Response): Promise<void> => {
//  if (Object.keys(req.query).length == 0) {
//    res.status(400).send('Bad request please enter the correct parameters');
//  } else if (!req.query.filename) res.status(400).send('Please send the filename');
//  else if (!req.query.height) res.status(400).send('Please send the height');
//  else if (!req.query.width) res.status(400).send('Please send the width');
//  else {
//    const img: string = img_path + `${req.query.filename as string}.jpeg`;
//    const height: number = parseInt(req.query.height as string);
//    const width: number = parseInt(req.query.width as string);
//    try {
//      await sharp(img)
//        .resize(height, width)
//        .toFile(new_img_path + `${req.query.filename as string}_thumb.jpeg`);
//      res.sendFile(new_img_path + `${req.query.filename as string}_thumb.jpeg`);
//    } catch (err) {
//      console.log(err);
//      res.send(`An error has occurred ${err}`);
//    }
//  }
//});

images.get('/images', async (req: express.Request, res: express.Response): Promise<void> => {
  if (Object.keys(req.query).length == 0) {
    res.status(400).send('Bad request please enter the correct parameters');
  } else if (!req.query.filename) res.status(400).send('Please send the filename');
  else if (!req.query.height) res.status(400).send('Please send the height');
  else if (!req.query.width) res.status(400).send('Please send the width');
  else {
    const height: number = parseInt(req.query.height as string);
    const width: number = parseInt(req.query.width as string);
    const filename: string = req.query.filename as string;
    const done: string = await resizer(height, width, filename);
    if (done === 'failed') res.status(400).send('Failed to resize the image');
    res.sendFile(new_img_path + ` ${filename}-${height}-${width}_thumb.jpeg`);
  }
});

export = images;
