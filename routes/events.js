const router = require('express').Router();
const { events } = require('../controllers');

router.get('/', events.list);

module.exports = router;