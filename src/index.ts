import express from 'express';
import routes from './routes/index'
import resize from './routes/api/resize'
const app = express();

app.use(routes);
app.use('/api',resize)
const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`);
});