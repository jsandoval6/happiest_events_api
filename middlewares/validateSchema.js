const { FailedValidation } = require('../utils/errors');
const validateSchema = ( joiSchema ) => (req, res, next) => {
  const { schema, path } = joiSchema;
  const valueToCheck = req[path];
  const { error } = schema.validate(valueToCheck);
  if (error) throw new FailedValidation('Validation failed', null, error);
  next();
}

module.exports = validateSchema;