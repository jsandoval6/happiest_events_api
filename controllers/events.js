const { events } = require('../models');
const { DatabaseError } = require('../utils/errors');

module.exports = {
	async list(req, res, next) {
		try {
			const foundEvents = await events.findAll();
			res.send(foundEvents)
		} catch (err) {
			next(new DatabaseError('An error occurred while retrieving events', null, err))
		}
	},
	
	async getById(req, res, next) {
		const { id } = req.params;
		try {
			const event = await events.findByPk(id);
			res.send(event);
		} catch (err) {
			console.log(err);
		}
	},
	
	async create(req, res, next) {
		const { body } = req;
		try {
			//const event = await events.create(body);
			res.send(body)
		} catch (err) {
			next(new DatabaseError('An error occurred while creating an event', null, err));
		}
	}
}