const { Sequelize, DataTypes } = require("sequelize");
const config = require('../config');
const fs = require('fs');
const path = require("path");

const options = {
	dialect: "postgres",
	define: {
		timestamps: false,
	},
	logging: process.env.NODE_ENV === "production" ? false : console.log,
	dialectOptions: {
		client_encoding: "SQL_ASCII",
	},
};

const env = process.env.NODE_ENV || 'dev';

const sequelize = new Sequelize({ ...config[env], ...options });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


fs.readdirSync(__dirname).forEach(filename => {
	if(filename.endsWith('.js') && filename !== 'index.js') {
		const model = require(path.join(__dirname, filename))(sequelize, DataTypes);
		db[model.name] = model;
	}
});

for(const model in db) {
	if (db[model].associate) {
		db[model].associate(db);
	}
}

module.exports = db;




