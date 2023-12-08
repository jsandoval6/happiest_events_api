const dotenv = require('dotenv-flow');

const envFound = dotenv.config();

if (envFound.error) throw new Error(envFound.error);

module.exports = {
	test: {
		host: process.env.POSTGRES_HOST,
		port: parseInt((process.env.DB_PORT || '5432'), 10),
		database: process.env.POSTGRES_DB,
		username: process.env.POSTGRES_USER,
		password: process.env.POSTGRES_PASSWORD,
	},
	
	dev: {
		host: process.env.POSTGRES_HOST,
		port: parseInt((process.env.DB_PORT || '5432'), 10),
		database: process.env.POSTGRES_DB,
		username: process.env.POSTGRES_USER,
		password: process.env.POSTGRES_PASSWORD,
	}
}