import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/db.js';
import middleware from './middlewares/middleware.js';
import { usersRouter } from './routes/usersRouter.js';
import { catchAllHandler } from './middlewares/catchAllHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';

dotenv.config();

const app = express();

connectDB();

middleware(app);

app.use('/users', usersRouter);

app.use(catchAllHandler);
app.use(errorHandler);

export default app;
