import mongoose from 'mongoose';
import {
  WARNING_USER_CITY,
  WARNING_USER_EMAIL,
  WARNING_USER_EMAIL_INVALID,
  WARNING_USER_FIRST_NAME,
  WARNING_USER_LAST_NAME,
  WARNING_USER_PHONE,
  WARNING_USER_PHONE_INVALID,
  WARNING_USER_STATE,
  WARNING_USER_STREET,
  WARNING_USER_ZIPCODE,
  WARNING_USER_ZIPCODE_INVALID,
} from '../messages/messages.js';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, WARNING_USER_FIRST_NAME],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, WARNING_USER_LAST_NAME],
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: [true, WARNING_USER_EMAIL],
    match: [/^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm, WARNING_USER_EMAIL_INVALID],
  },
  phone: {
    type: String,
    required: [true, WARNING_USER_PHONE],
    trim: true,
    match: [/\d{3}-\d{3}-\d{4}/, WARNING_USER_PHONE_INVALID],
  },
  street: { type: String, required: [true, WARNING_USER_STREET], trim: true },
  city: { type: String, required: [true, WARNING_USER_CITY], trim: true },
  state: { type: String, required: [true, WARNING_USER_STATE], trim: true },
  zipCode: {
    type: String,
    required: [true, WARNING_USER_ZIPCODE],
    match: [/^\d{5}$/, WARNING_USER_ZIPCODE_INVALID],
  },
  stats: {
    answers: {
      correctAnswers: { type: Number, default: 0 },
      incorrectAnswers: { type: Number, default: 0 },
      attemptedAnswers: { type: Number, default: 0 },
    },
    finalAnswer: {
      correctAnswers: { type: Number, default: 0 },
      incorrectAnswers: { type: Number, default: 0 },
      attemptedAnswers: { type: Number, default: 0 },
    },
  },
});

export default mongoose.model('User', userSchema);
