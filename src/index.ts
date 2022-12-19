import express from 'express';
import routes from './routes/index';
import images from './routes/api/images';
const app = express();

app.use(routes);
app.use('/api', images);
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

export default app;
