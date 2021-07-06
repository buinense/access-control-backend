"use strict";

const dotenv = require("dotenv");
/* const path = require("path"); */

dotenv.config();
const config = {
	NODE_ENV: process.env.NODE_ENV || "development",
	HOST: process.env.HOST || "127.0.0.1",
	PORT: process.env.PORT || 3000,
	globalPathPrefix: process.env.GLOBALPATHPREFIX,
	ConfigMSSQL: {
		user: process.env.DB_MSSQL_USER,
		password: process.env.DB_MSSQL_PASS,
		server: process.env.DB_MSSQL_SERVER,
		database: process.env.DB_MSSQL_DATABASE,
		options: {
			trustedConnection: true,
			encrypt: true,
			enableArithAbort: true,
			trustServerCertificate: true
		}
	},
	secret: process.env.SECRETPASSWORD
};

module.exports = config;
