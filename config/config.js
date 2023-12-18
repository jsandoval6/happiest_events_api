const config = require('./index');

const env = process.env.NODE_ENV || 'dev';

const dbConfig = { ...config[env], dialect: "postgres" };

module.exports = dbConfig;