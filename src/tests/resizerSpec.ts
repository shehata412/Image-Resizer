import resizer from '../utils/resizer';
import fs from 'fs';
import path from 'path';

const new_img_path: string = path.join(__dirname, '../../assets/thumb/');

it('Checks if a file is created after deletion', async () => {
  if (fs.existsSync(new_img_path + ' panda-300-300_thumb.jpeg')) {
    try {
      fs.unlinkSync(new_img_path + ' panda-300-300_thumb.jpeg');
    } catch (err) {
      console.log(err);
    }
  }
  const done = await resizer(300, 300, 'panda');
  expect(done).toBe('success');
});
