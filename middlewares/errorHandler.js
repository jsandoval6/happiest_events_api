const {  GeneralError } = require('../utils/errors');

exports.errorHandler = (err, req, res, next) => {
  if (res.headersSent) return next(err);

  if (err instanceof GeneralError) {
    if (err.exception) {
      err.exception = JSON.stringify(err.exception, Object.getOwnPropertyNames(err.exception));
    }
    return res.status(err.getCode()).json({
      ...err,
      status: err.getStatus(),
    });
  }

  return res.status(500).json({
    code: 500,
    status: 'UNHANDLED_ERROR',
    message: err.message
  });
}