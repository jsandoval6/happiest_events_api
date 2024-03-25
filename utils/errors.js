class GeneralError extends Error {
  constructor(message, details, exception) {
    super();
    this.message = message;
    if (details) {
      if (Array.isArray(details)) {
        this.errors = details;
      } else {
        this.description = details;
      }
    }
    if (exception) {
      this.exception = exception;
    }
  }

  getCode = () => 500;

  getStatus = () =>'GENERAL_ERROR';
}

class DatabaseError extends GeneralError {
  getCode = () => 500;
  getStatus = () =>'DATABASE_ERROR';
}
class DisallowedParams extends GeneralError {
  getCode = () => 400;
  getStatus = () =>'DISALLOWED_PARAMS';
}
class InvalidParams extends GeneralError {
  getCode = () => 400;
  getStatus = () =>'INVALID_PARAMS';
}
class InvalidRoute extends GeneralError {
  getCode = () => 404;
  getStatus = () =>'INVALID_ROUTE';
}
class InvalidAuthentication extends GeneralError {
  getCode = () => 401;
  getStatus = () =>'INVALID_AUTHENTICATION';
}
class FailedValidation extends GeneralError {
  getCode = () => 400;
  getStatus = () =>'FAILED_VALIDATION';
}
class TimedOut extends GeneralError {

  getCode = () => 401;
  getStatus = () =>'TIMED_OUT';
}
class Unauthorized extends GeneralError {
  getCode = () => 403;
  getStatus = () =>'UNAUTHORIZED';
}

module.exports = {
  GeneralError,
  DatabaseError,
  DisallowedParams,
  InvalidParams,
  InvalidRoute,
  InvalidAuthentication,
  FailedValidation,
  TimedOut,
  Unauthorized
};