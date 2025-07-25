import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

const middleware = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan('dev'));

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    );

    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'POST,PUT,GET,PATCH,DELETE');
    }

    next();
  });
};

export default middleware;
