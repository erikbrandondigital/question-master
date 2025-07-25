import { NOT_FOUND } from '../messages/messages.js';

export const catchAllHandler = (req, res, next) => {
  const error = new Error(NOT_FOUND);
  error.status = 404;
  next(error);
};
