// Response Messages
export const SUCCESS = 'Success';
export const FAIL = 'Failed';
export const NOT_FOUND = 'Not Found';
export const USER_NOT_FOUND = 'User Not Found';
export const SERVER_ERROR = 'Server Error';
export const INVALID_ID_FORMAT = (id, reason) => `Invalid ID Format: ${JSON.parse(id)} | ${reason}`;

// Model Messages - Users
export const WARNING_USER_FIRST_NAME = 'Please add a First Name';
export const WARNING_USER_LAST_NAME = 'Please add a Last Name';
export const WARNING_USER_EMAIL = 'Please add an Email Address';
export const WARNING_USER_EMAIL_INVALID = 'Please enter a valid Email Address';
export const WARNING_USER_PHONE = 'Please add a Phone Number';
export const WARNING_USER_PHONE_INVALID =
  'Please enter a valid Phone Number (Format = 555-555-5555)';
export const WARNING_USER_STREET = 'Please add a Street Address';
export const WARNING_USER_CITY = 'Please add a City';
export const WARNING_USER_STATE = 'Please add a State';
export const WARNING_USER_ZIPCODE = 'Please add a Zip Code';
export const WARNING_USER_ZIPCODE_INVALID = 'Please add a valid Zip Code';

export const WARNING_USER_DUPLICATE = 'This User is already saved in the database.';

// Server Messages
export const SERVER_STATUS = (PORT) => {
  return `Server up & running on port: ${PORT}`;
};

export const MONGO_STATUS = (db) => {
  return `MongoDB Connected: ${db.connection.host}:${db.connection.port}`;
};
