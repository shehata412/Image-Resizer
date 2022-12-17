import path from 'path'
import express from 'express'
import sharp from 'sharp'

const resize = express.Router();

const img = path.join(__dirname, 'panda.jpeg');

resize.get('/resize',async (req: express.Request, res: express.Response) => {
    if(Object.keys(req.query).length !== 0){
    const height:number = parseInt(req.query.height as string)
    const width:number = parseInt(req.query.width as string)
    res.send('I am here');
try{
    await sharp(img).resize(height,width).toFile('output.jpeg');
}catch(err) {
    console.log(err);
}
    }
    else{
    res.send('Bad request please enter the correct parameters');
    }
});


export = resize;