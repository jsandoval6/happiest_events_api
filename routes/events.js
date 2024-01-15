const router = require('express').Router();
const { events } = require('../controllers');

router.get('/', events.list);
router.get('/:id', events.getById);
router.post('/', events.create);

module.exports = router;