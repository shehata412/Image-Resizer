import express from 'express';

const routes = express.Router();

routes.get('/', (req, res): void => {
    res.send(`Hello routes`);
});


export = routes;