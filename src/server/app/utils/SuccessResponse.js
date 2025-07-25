import { SUCCESS } from '../messages/messages.js';

export const SuccessResponse = (statusCode, data, req, res) => {
  res.status(statusCode).json({
    data,
    status: SUCCESS,
    metadata: { hostname: req.hostname, method: req.method },
  });
};
