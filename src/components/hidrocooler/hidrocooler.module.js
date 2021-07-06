"use strict";

const dotenv = require("dotenv");
dotenv.config();
const getResponseFormat = require("../../utils/response.util");
const logger = require("../../utils/winston.util");

const {
	getProductoresService,
	getVariedadesService,
	getGrillaService,
	setRegistroTemperaturaService,
	setFinalizaRegistroTemperaturaService
} = require("./hidrocooler.service");

const getProductoresModule = async req => {
	try {
		let serviceResponse = await getProductoresService(req);
		logger.info(`[INGRESO - MODULE] Éxito al getProductoresModule`);
		return getResponseFormat(200, "OK", serviceResponse);
	} catch (error) {
		/* let errorFormat = typeof error === "object" ? JSON.stringify(error) : error;
		logger.error(`[INGRESO - MODULE Error ${errorFormat} ]`); */
		throw typeof error === "object"
			? getResponseFormat(error.code, error.message, error.result)
			: getResponseFormat(500, "NOK", "Internal server error");
	}
};

const getVariedadesModule = async req => {
	try {
		let serviceResponse = await getVariedadesService(req);
		logger.info(`[INGRESO - MODULE] Éxito al getVariedadesModule`);
		return getResponseFormat(200, "OK", serviceResponse);
	} catch (error) {
		/* let errorFormat = typeof error === "object" ? JSON.stringify(error) : error;
		logger.error(`[INGRESO - MODULE Error ${errorFormat} ]`); */
		throw typeof error === "object"
			? getResponseFormat(error.code, error.message, error.result)
			: getResponseFormat(500, "NOK", "Internal server error");
	}
};

const getGrillaModule = async req => {
	try {
		let serviceResponse = await getGrillaService(req);
		logger.info(`[INGRESO - MODULE] Éxito al getGrillaModule`);
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
		logger.info(`[INGRESO - MODULE] Éxito al setRegistroTemperaturaModule`);
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
		logger.info(`[INGRESO - MODULE] Éxito al setFinalizaRegistroTemperaturaModule`);
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
	getProductoresModule,
	getVariedadesModule,
	getGrillaModule,
	setRegistroTemperaturaModule,
	setFinalizaRegistroTemperaturaModule
};
