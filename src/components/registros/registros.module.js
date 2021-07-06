"use strict";

const dotenv = require("dotenv");
dotenv.config();
const getResponseFormat = require("../../utils/response.util");
const logger = require("../../utils/winston.util");
const {
	getTipoCamionesService,
	getRegistroTempGrillaService,
	setRegistroTemperaturaService,
	setFinalizaRegistroTemperaturaService
} = require("./registros.service");

const getTipoCamionesModule = async () => {
	try {
		let serviceResponse = await getTipoCamionesService();
		logger.info(`[INGRESO - MODULE] Éxito al constgetTipoCamionesModule`);
		return getResponseFormat(200, "OK", serviceResponse);
	} catch (error) {
		/* let errorFormat = typeof error === "object" ? JSON.stringify(error) : error;
		logger.error(`[INGRESO - MODULE Error ${errorFormat} ]`); */
		throw typeof error === "object"
			? getResponseFormat(error.code, error.message, error.result)
			: getResponseFormat(500, "NOK", "Internal server error");
	}
};

const getRegistroTempGrillaModule = async req => {
	try {
		let serviceResponse = await getRegistroTempGrillaService(req);
		if (process.env.NODE_ENV === "development") {
			logger.info(`[INGRESO - MODULE] Éxito getRegistroTempGrillaModule`);
		}
		return getResponseFormat(200, "OK", serviceResponse);
	} catch (error) {
		/* let errorFormat = typeof error === "object" ? JSON.stringify(error) : error;
		logger.error(`[INGRESO - MODULE Error ${errorFormat} ]`); */
		throw typeof error === "object"
			? getResponseFormat(error.code, error.message, error.result)
			: getResponseFormat(500, "NOK", "Internal server error");
	}
};

const setRegistroTemperaturaModule = async req => {
	try {
		let serviceResponse = await setRegistroTemperaturaService(req);
		if (process.env.NODE_ENV === "development") {
			logger.info(`[INGRESO - MODULE] Éxito setRegistroTemperaturaModule`);
		}
		return getResponseFormat(200, "OK", serviceResponse);
	} catch (error) {
		/* let errorFormat = typeof error === "object" ? JSON.stringify(error) : error;
		logger.error(`[INGRESO - MODULE Error ${errorFormat} ]`); */
		throw typeof error === "object"
			? getResponseFormat(error.code, error.message, error.result)
			: getResponseFormat(500, "NOK", "Internal server error");
	}
};

const setFinalizaRegistroTemperaturaModule = async req => {
	try {
		let serviceResponse = await setFinalizaRegistroTemperaturaService(req);
		if (process.env.NODE_ENV === "development") {
			logger.info(`[INGRESO - MODULE] Éxito setFinalizaRegistroTemperaturaModule`);
		}
		return getResponseFormat(200, "OK", serviceResponse);
	} catch (error) {
		/* let errorFormat = typeof error === "object" ? JSON.stringify(error) : error;
		logger.error(`[INGRESO - MODULE Error ${errorFormat} ]`); */
		throw typeof error === "object"
			? getResponseFormat(error.code, error.message, error.result)
			: getResponseFormat(500, "NOK", "Internal server error");
	}
};

module.exports = {
	getTipoCamionesModule,
	getRegistroTempGrillaModule,
	setRegistroTemperaturaModule,
	setFinalizaRegistroTemperaturaModule
};
