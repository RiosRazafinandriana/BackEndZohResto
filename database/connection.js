const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
	user: process.env.USER,
	password: process.env.PASSWORD,
	host: process.env.HOST,
	port: process.env.PORT,
	database: process.env.DATABASE
});

client.connect()

module.exports = client