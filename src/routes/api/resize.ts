import path from 'path'
import express from 'express'
import sharp from 'sharp'

const resize = express.Router();

console.log(__dirname);
const img = path.join(__dirname, 'panda.jpeg');

resize.get('/resize',async (_req, res) => {
    res.send('I am here');
try{
    await sharp(img).resize(200,300).toFile('output.jpeg');
}catch(err) {
    console.log(err);
}
});


export = resize;