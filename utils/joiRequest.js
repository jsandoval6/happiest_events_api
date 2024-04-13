const joi = require('joi').extend(joi => ({
  base: joi.array(),
  coerce: (value) => ({
    value: value.split? value.split(','): value
  }),
  type: 'stringList'
}));

module.exports = joi;