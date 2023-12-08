const router = require('express').Router();
const events = require('./events');

router.use('/api/events', events);

module.exports = router;