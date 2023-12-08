const { faker } = require('@faker-js/faker');

const getAllEvents = () => {
	const maxEvents = 30;
	const minEvents = 1;
	const randomNumEvents = Math.floor(Math.random() * (maxEvents - minEvents) + minEvents);
	const events = Array.from({length: randomNumEvents}, () => {
			const event = {
				imageUrl: faker.image.url(),
				title: faker.commerce.productName(),
				description: faker.commerce.productDescription(),
				id: faker.database.mongodbObjectId(),
			}
			return event;
		});
	return events;
}

module.exports = {
	async list(req, res, next) {
		const events = getAllEvents();
		res.send(events);
	}
}