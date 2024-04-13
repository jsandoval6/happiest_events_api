const { events } = require('../models');
const joi = require('../utils/joiRequest');

const eventsFields = {
  id: joi.number().integer(),
  imageUrl: joi.string(),
  description: joi.string().allow(null, ''),
  title: joi.string().allow(null, ''),
  organizer: joi.string().allow(null, ''),
  type: joi.string().allow(null, ''),
  category: joi.string().allow(null, ''),
  location_type: joi.string().allow(null, ''),
  address: joi.string().allow(null, ''),
  city: joi.string().allow(null, ''),
  zip: joi.number().integer(),
  occurrence_type: joi.string().allow(null, ''),
  start_date: joi.date(),
  end_date: joi.date(),
  display_start_date: joi.boolean(),
  display_end_date: joi.boolean(),
}

module.exports = {
  listSchema: {
    path: 'query',
    schema: joi.object(eventsFields)
  },

  idCheckSchema: {
    path: 'params',
    schema: joi.object({
      id: joi.string().regex(/^-?\d+$/).messages({'string.pattern.base': 'Param id must be an integer'}).required()
    })
  },

  createSchema: {
    path: 'body',
    schema: joi.object(eventsFields)
  }
}