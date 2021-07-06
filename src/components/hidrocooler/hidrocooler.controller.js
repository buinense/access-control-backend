"use strict";

const logger = require("../../utils/winston.util");
const {
	getProductoresModule,
	getVariedadesModule,
	getGrillaModule,
	setRegistroTemperaturaModule,
	setFinalizaRegistroTemperaturaModule
} = require("./hidrocooler.module");

const getProductoresController = async (req, res) => {
	try {
		const resultModule = await getProductoresModule(req);
		logger.info(`[INGRESO - CONTROLLER] Exito  al getProductoresController`);
		return res.status(200).send(resultModule);
	} catch (error) {
		let err = typeof error === "object" ? error.response.data : error;
		logger.error(`[INGRESO - CONTROLLER] Error al getProductoresController ${err}`);

		return res.status(error.code).send(error);
	}
};

const getVariedadesController = async (req, res) => {
	try {
		const resultModule = await getVariedadesModule(req);
		logger.info(`[INGRESO - CONTROLLER] Exito  al getVariedadesController`);
		return res.status(200).send(resultModule);
	} catch (error) {
		let err = typeof error === "object" ? error.response.data : error;
		logger.error(`[INGRESO - CONTROLLER] Error al getVariedadesController ${err}`);

		return res.status(error.code).send(error);
	}
};

const getGrillaController = async (req, res) => {
	try {
		const resultModule = await getGrillaModule(req);
		logger.info(`[INGRESO - CONTROLLER] Exito  al getGrillaController`);
		return res.status(200).send(resultModule);
	} catch (error) {
		let err = typeof error === "object" ? error.response.data : error;
		logger.error(`[INGRESO - CONTROLLER] Error al getGrillaController ${err}`);

		return res.status(error.code).send(error);
	}
};

const setRegistroTemperaturaController = async (req, res) => {
	try {
		const resultModule = await setRegistroTemperaturaModule(req);
		logger.info(`[INGRESO - CONTROLLER] Exito  al setRegistroTemperaturaController`);
		return res.status(200).send(resultModule);
	} catch (error) {
		let err = typeof error === "object" ? error.response.data : error;
		logger.error(`[INGRESO - CONTROLLER] Error al setRegistroTemperaturaController ${err}`);

		return res.status(error.code).send(error);
	}
};

const setFinalizaRegistroTemperaturaController = async (req, res) => {
	try {
		const resultModule = await setFinalizaRegistroTemperaturaModule(req);
		logger.info(`[INGRESO - CONTROLLER] Exito  al setFinalizaRegistroTemperaturaController`);
		return res.status(200).send(resultModule);
	} catch (error) {
		let err = typeof error === "object" ? error.response.data : error;
		logger.error(`[INGRESO - CONTROLLER] Error al setFinalizaRegistroTemperaturaController ${err}`);

		return res.status(error.code).send(error);
	}
};

module.exports = {
	getProductoresController,
	getVariedadesController,
	getGrillaController,
	setRegistroTemperaturaController,
	setFinalizaRegistroTemperaturaController
};
