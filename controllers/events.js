const { events } = require('../models');

module.exports = {
	async list(req, res, next) {
		try {
			const foundEvents = await events.findAll();
			res.send(foundEvents);
		} catch (err) {
			console.log(err);
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
	}
}