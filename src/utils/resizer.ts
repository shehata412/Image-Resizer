import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const img_path: string = path.join(__dirname, '../../assets/full/');
const new_img_path: string = path.join(__dirname, '../../assets/thumb/');

const resizer = async (height: number, width: number, filename: string): Promise<string> => {
  const img: string = img_path + filename + `.jpeg`;
  if (fs.existsSync(new_img_path + ` ${filename}-${height}-${width}_thumb.jpeg`)) {
    return 'success';
  } else {
    try {
      await sharp(img)
        .resize(height, width)
        .toFile(new_img_path + ` ${filename}-${height}-${width}_thumb.jpeg`);
      return 'success';
    } catch (err) {
      console.log(err);
      return 'failed';
    }
  }
};

export default resizer;
