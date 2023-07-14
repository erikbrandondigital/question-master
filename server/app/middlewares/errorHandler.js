import {
    FAIL,
    SERVER_ERROR,
    WARNING_USER_DUPLICATE,
    INVALID_ID_FORMAT
} from './../messages/messages.js';
import { ErrorResponse } from '../utils/ErrorResponse.js';

// eslint-disable-next-line no-unused-vars
export const errorHandler = (err, req, res, next) => {
    console.log(err);
    let error = { ...err };
    let message = '';

    if (err.code === 11000) {
        if (Object.prototype.hasOwnProperty.call(error.keyValue, 'email')) {
            message = WARNING_USER_DUPLICATE;
            error = new ErrorResponse(404, message);
        }
    }

    if (err.name === 'CastError') {
        message = INVALID_ID_FORMAT(err.stringValue, err.reason);
        error = new ErrorResponse(404, message);
    }

    if (err.name === 'ValidationError') {
        const messages = Object.values(err.errors).map(
            (value) => value.message
        );
        error = new ErrorResponse(404, messages);
    }

    if (err instanceof ErrorResponse) {
        error = new ErrorResponse(err.statusCode, err.message);
    }

    res.status(error.statusCode || 500).json({
        status: FAIL,
        error: error.message || SERVER_ERROR,
        metadata: { hostname: req.hostname, method: req.method }
    });
};
