const router = require('express').Router();
const eventsRouter = require('./events');

router.use('/api/events', eventsRouter);

module.exports = router;