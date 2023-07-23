import { USER_NOT_FOUND } from '../messages/messages.js';
import { asyncHandler } from '../middlewares/asyncHandler.js';
import { SuccessResponse } from '../utils/SuccessResponse.js';
import { ErrorResponse } from '../utils/ErrorResponse.js';
import User from '../models/User.js';

export const getUsers = asyncHandler(async (req, res, next) => {
    const users = await User.find();

    !users
        ? next(new ErrorResponse(404, USER_NOT_FOUND))
        : SuccessResponse(200, users, req, res);
});

export const getUserByID = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.userID).select('-__v');

    !user
        ? next(new ErrorResponse(404, USER_NOT_FOUND))
        : SuccessResponse(200, user, req, res);
});

export const createUser = asyncHandler(async (req, res) => {
    const newUser = await User.create(req.body.user);
    SuccessResponse(200, newUser, req, res);
});

export const updateUser = asyncHandler(async (req, res, next) => {
    const updatedUser = await User.findByIdAndUpdate(
        req.params.userID,
        req.body,
        { new: true, runValidators: true }
    ).select('-__v');

    !updatedUser
        ? next(new ErrorResponse(404, USER_NOT_FOUND))
        : SuccessResponse(200, updatedUser, req, res);
});

export const deleteUser = asyncHandler(async (req, res, next) => {
    const deletedUser = await User.findByIdAndDelete(req.params.userID).select(
        '-__v'
    );

    !deletedUser
        ? next(new ErrorResponse(404, USER_NOT_FOUND))
        : SuccessResponse(200, deletedUser, req, res);
});
