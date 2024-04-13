const router = require('express').Router();
const { events } = require('../controllers');
const validateSchema = require('../middlewares/validateSchema');
const { listSchema, idCheckSchema, createSchema } = require('../validations/events');

router.get('/', validateSchema(listSchema), events.list);
router.get('/:id',validateSchema(idCheckSchema), events.getById);
router.post('/', validateSchema(createSchema), events.create);

module.exports = router;