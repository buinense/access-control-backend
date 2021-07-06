"use strict";

const logger = require("../../utils/winston.util");
const {
	getTipoCamionesModule,
	getRegistroTempGrillaModule,
	setRegistroTemperaturaModule,
	setFinalizaRegistroTemperaturaModule
} = require("./registros.module");

const getTipoCamionesController = async (req, res) => {
	try {
		const resultModule = await getTipoCamionesModule(req);
		logger.info(`[INGRESO - CONTROLLER] Exito getTipoCamionesController`);
		return res.status(200).send(resultModule);
	} catch (error) {
		logger.error(`[INGRESO - CONTROLLER] Error getTipoCamionesController ${error}`);

		return res.status(error.code).send(error);
	}
};

const getRegistroTempGrillaController = async (req, res) => {
	try {
		const resultModule = await getRegistroTempGrillaModule(req);
		logger.info(`[INGRESO - CONTROLLER] Exito getRegistroTempGrillaController`);
		return res.status(200).send(resultModule);
	} catch (error) {
		logger.error(`[INGRESO - CONTROLLER] Error getRegistroTempGrillaController ${error}`);

		return res.status(error.code).send(error);
	}
};

const setRegistroTemperaturaController = async (req, res) => {
	try {
		const resultModule = await setRegistroTemperaturaModule(req);
		logger.info(`[INGRESO - CONTROLLER] Exito setRegistroTemperaturaController`);
		return res.status(200).send(resultModule);
	} catch (error) {
		logger.error(`[INGRESO - CONTROLLER] Error setRegistroTemperaturaController ${error}`);

		return res.status(error.code).send(error);
	}
};

const setFinalizaRegistroTemperaturaController = async (req, res) => {
	try {
		const resultModule = await setFinalizaRegistroTemperaturaModule(req);
		logger.info(`[INGRESO - CONTROLLER] Exito setFinalizaRegistroTemperaturaController`);
		return res.status(200).send(resultModule);
	} catch (error) {
		logger.error(`[INGRESO - CONTROLLER] Error setFinalizaRegistroTemperaturaController ${error}`);

		return res.status(error.code).send(error);
	}
};

module.exports = {
	getTipoCamionesController,
	getRegistroTempGrillaController,
	setRegistroTemperaturaController,
	setFinalizaRegistroTemperaturaController
};
