"use strict";

const dotenv = require("dotenv");
dotenv.config();
const getResponseFormat = require("../../utils/response.util");
const logger = require("../../utils/winston.util");
const {
	transportesPlantaService,
	tiemposActualesService,
	centrosAcopiosService,
	transportesPlantaDosService,
	transportesPlantaHistoricoService,
	objetivoVisitaService,
	porteriasService,
	ingresoPlantaService,
	ingresoByIDService,
	choferesByRutService,
	setSalidaPlantaService,
	getProductorByRutService
} = require("./ingreso.service");

const transportesPlantaModule = async () => {
	try {
		let serviceResponse = await transportesPlantaService();
		logger.info(`[INGRESO - MODULE] Éxito al consultar transportes plantas`);
		return getResponseFormat(200, "OK", serviceResponse);
	} catch (error) {
		/* let errorFormat = typeof error === "object" ? JSON.stringify(error) : error;
		logger.error(`[INGRESO - MODULE Error ${errorFormat} ]`); */
		throw typeof error === "object"
			? getResponseFormat(error.code, error.message, error.result)
			: getResponseFormat(500, "NOK", "Internal server error");
	}
};

const tiemposActualesModule = async req => {
	try {
		let serviceResponse = await tiemposActualesService(req);
		if (process.env.NODE_ENV === "development") {
			logger.info(`[INGRESO - MODULE] Éxito tiemposActualesModule`);
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

const centrosAcopiosModule = async () => {
	try {
		let serviceResponse = await centrosAcopiosService();
		logger.info(`[INGRESO - MODULE] Éxito al consultar centros de acopio`);
		return getResponseFormat(200, "OK", serviceResponse);
	} catch (error) {
		/* let errorFormat = typeof error === "object" ? JSON.stringify(error) : error;
		logger.error(`[INGRESO - MODULE Error ${errorFormat} ]`); */
		throw typeof error === "object"
			? getResponseFormat(error.code, error.message, error.result)
			: getResponseFormat(500, "NOK", "Internal server error");
	}
};

const transportesPlantaDosModule = async req => {
	try {
		let serviceResponse = await transportesPlantaDosService(req);
		if (process.env.NODE_ENV === "development") {
			logger.info(`[INGRESO - MODULE] Éxito al transportesPlantaDosModule`);
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

const transportesPlantaHistoricoModule = async req => {
	try {
		let serviceResponse = await transportesPlantaHistoricoService(req);
		logger.info(`[INGRESO - MODULE] Éxito al consultar tiempos`);
		return getResponseFormat(200, "OK", serviceResponse);
	} catch (error) {
		/* let errorFormat = typeof error === "object" ? JSON.stringify(error) : error;
		logger.error(`[INGRESO - MODULE Error ${errorFormat} ]`); */
		throw typeof error === "object"
			? getResponseFormat(error.code, error.message, error.result)
			: getResponseFormat(500, "NOK", "Internal server error");
	}
};

const objetivoVisitaModule = async req => {
	try {
		let serviceResponse = await objetivoVisitaService(req);
		logger.info(`[INGRESO - MODULE] Éxito al objetivos de visita`);
		return getResponseFormat(200, "OK", serviceResponse);
	} catch (error) {
		/* let errorFormat = typeof error === "object" ? JSON.stringify(error) : error;
		logger.error(`[INGRESO - MODULE Error ${errorFormat} ]`); */
		throw typeof error === "object"
			? getResponseFormat(error.code, error.message, error.result)
			: getResponseFormat(500, "NOK", "Internal server error");
	}
};

const porteriasModule = async req => {
	try {
		let serviceResponse = await porteriasService(req);
		logger.info(`[INGRESO - MODULE] Éxito al obtener porterias`);
		return getResponseFormat(200, "OK", serviceResponse);
	} catch (error) {
		/* let errorFormat = typeof error === "object" ? JSON.stringify(error) : error;
		logger.error(`[INGRESO - MODULE Error ${errorFormat} ]`); */
		throw typeof error === "object"
			? getResponseFormat(error.code, error.message, error.result)
			: getResponseFormat(500, "NOK", "Internal server error");
	}
};

const ingresoPlantaModule = async req => {
	try {
		let serviceResponse = await ingresoPlantaService(req);
		logger.info(`[INGRESO - MODULE] Éxito al ingresar registros`);
		return getResponseFormat(200, "OK", serviceResponse);
	} catch (error) {
		/* let errorFormat = typeof error === "object" ? JSON.stringify(error) : error;
		logger.error(`[INGRESO - MODULE Error ${errorFormat} ]`); */
		throw typeof error === "object"
			? getResponseFormat(error.code, error.message, error.result)
			: getResponseFormat(500, "NOK", "Internal server error");
	}
};

const ingresoByIDModule = async req => {
	try {
		let serviceResponse = await ingresoByIDService(req);
		logger.info(`[INGRESO - MODULE] Éxito ingresoByIDModule`);
		return getResponseFormat(200, "OK", serviceResponse);
	} catch (error) {
		/* let errorFormat = typeof error === "object" ? JSON.stringify(error) : error;
		logger.error(`[INGRESO - MODULE Error ${errorFormat} ]`); */
		throw typeof error === "object"
			? getResponseFormat(error.code, error.message, error.result)
			: getResponseFormat(500, "NOK", "Internal server error");
	}
};

const choferesByRutModule = async req => {
	try {
		let serviceResponse = await choferesByRutService(req);
		logger.info(`[INGRESO - MODULE] Éxito choferesByRutModule`);
		return getResponseFormat(200, "OK", serviceResponse);
	} catch (error) {
		/* let errorFormat = typeof error === "object" ? JSON.stringify(error) : error;
		logger.error(`[INGRESO - MODULE Error ${errorFormat} ]`); */
		throw typeof error === "object"
			? getResponseFormat(error.code, error.message, error.result)
			: getResponseFormat(500, "NOK", "Internal server error");
	}
};

const setSalidaPlantaModule = async req => {
	try {
		let serviceResponse = await setSalidaPlantaService(req);
		logger.info(`[INGRESO - MODULE] Éxito setSalidaPlantaModule`);
		return getResponseFormat(200, "OK", serviceResponse);
	} catch (error) {
		/* let errorFormat = typeof error === "object" ? JSON.stringify(error) : error;
		logger.error(`[INGRESO - MODULE Error ${errorFormat} ]`); */
		throw typeof error === "object"
			? getResponseFormat(error.code, error.message, error.result)
			: getResponseFormat(500, "NOK", "Internal server error");
	}
};

const getProductorByRutModule = async req => {
	try {
		let serviceResponse = await getProductorByRutService(req);
		logger.info(`[INGRESO - MODULE] Éxito getProductorByRutModule`);
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
	transportesPlantaModule,
	tiemposActualesModule,
	centrosAcopiosModule,
	transportesPlantaDosModule,
	transportesPlantaHistoricoModule,
	objetivoVisitaModule,
	porteriasModule,
	ingresoPlantaModule,
	ingresoByIDModule,
	choferesByRutModule,
	setSalidaPlantaModule,
	getProductorByRutModule
};
