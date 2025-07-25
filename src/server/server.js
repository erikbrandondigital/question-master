import dotenv from 'dotenv';
import { createServer } from 'http';
import app from './app/app.js';
import { SERVER_STATUS } from './app/messages/messages.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

createServer(app).listen(PORT, () => console.log(SERVER_STATUS(PORT)));
