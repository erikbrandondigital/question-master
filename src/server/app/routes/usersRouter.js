import express from 'express';
import {
  createUser,
  deleteUser,
  getUserByID,
  getUsers,
  updateUser,
} from '../controllers/usersController.js';

export const usersRouter = express.Router();

usersRouter.get('/', getUsers);
usersRouter.get('/:userID', getUserByID);
usersRouter.post('/', createUser);
usersRouter.patch('/:userID', updateUser);
usersRouter.delete('/:userID', deleteUser);
