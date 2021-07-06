"use strict";

const dotenv = require("dotenv");
dotenv.config();
const getResponseFormat = require("../../utils/response.util");
const logger = require("../../utils/winston.util");

const {
	getEspeciesService,
	getTotalCamionesService,
	getTiemposCamionesGraficosService,
	getTiemposCamionesRecepcionService,
	getTiemposCamionesEnvasesService
} = require("./indicadores.service");

const getEspeciesModule = async () => {
	try {
		let serviceResponse = await getEspeciesService();
		logger.info(`[INGRESO - MODULE] Éxito al transportesPlantaDosModule`);
		return getResponseFormat(200, "OK", serviceResponse);
	} catch (error) {
		/* let errorFormat = typeof error === "object" ? JSON.stringify(error) : error;
		logger.error(`[INGRESO - MODULE Error ${errorFormat} ]`); */
		throw typeof error === "object"
			? getResponseFormat(error.code, error.message, error.result)
			: getResponseFormat(500, "NOK", "Internal server error");
	}
};

const getTotalCamionesModule = async req => {
	try {
		let serviceResponse = await getTotalCamionesService(req);
		logger.info(`[INGRESO - MODULE] Éxito al getTotalCamionesModule`);
		return getResponseFormat(200, "OK", serviceResponse);
	} catch (error) {
		/* let errorFormat = typeof error === "object" ? JSON.stringify(error) : error;
		logger.error(`[INGRESO - MODULE Error ${errorFormat} ]`); */
		throw typeof error === "object"
			? getResponseFormat(error.code, error.message, error.result)
			: getResponseFormat(500, "NOK", "Internal server error");
	}
};

const getTiemposCamionesGraficosModule = async req => {
	try {
		let serviceResponse = await getTiemposCamionesGraficosService(req);
		logger.info(`[INGRESO - MODULE] Éxito al getTiemposCamionesGraficosModule`);
		return getResponseFormat(200, "OK", serviceResponse);
	} catch (error) {
		/* let errorFormat = typeof error === "object" ? JSON.stringify(error) : error;
		logger.error(`[INGRESO - MODULE Error ${errorFormat} ]`); */
		throw typeof error === "object"
			? getResponseFormat(error.code, error.message, error.result)
			: getResponseFormat(500, "NOK", "Internal server error");
	}
};

const getTiemposCamionesRecepcionModule = async req => {
	try {
		let serviceResponse = await getTiemposCamionesRecepcionService(req);
		logger.info(`[INGRESO - MODULE] Éxito al getTiemposCamionesRecepcionModule`);
		return getResponseFormat(200, "OK", serviceResponse);
	} catch (error) {
		/* let errorFormat = typeof error === "object" ? JSON.stringify(error) : error;
		logger.error(`[INGRESO - MODULE Error ${errorFormat} ]`); */
		throw typeof error === "object"
			? getResponseFormat(error.code, error.message, error.result)
			: getResponseFormat(500, "NOK", "Internal server error");
	}
};

const getTiemposCamionesEnvasesModule = async req => {
	try {
		let serviceResponse = await getTiemposCamionesEnvasesService(req);
		logger.info(`[INGRESO - MODULE] Éxito al getTiemposCamionesEnvasesModule`);
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
	getEspeciesModule,
	getTotalCamionesModule,
	getTiemposCamionesGraficosModule,
	getTiemposCamionesRecepcionModule,
	getTiemposCamionesEnvasesModule
};
