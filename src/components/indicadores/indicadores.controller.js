"use strict";

const logger = require("../../utils/winston.util");
const {
	getEspeciesModule,
	getTotalCamionesModule,
	getTiemposCamionesGraficosModule,
	getTiemposCamionesRecepcionModule,
	getTiemposCamionesEnvasesModule
} = require("./indicadores.module");

const getEspeciesController = async (req, res) => {
	try {
		const resultModule = await getEspeciesModule();
		logger.info(`[INGRESO - CONTROLLER] Exito al getEspeciesController`);
		return res.status(200).send(resultModule);
	} catch (error) {
		let err = typeof error === "object" ? error.response.data : error;
		logger.error(`[INGRESO - CONTROLLER] Error al consultar transportes plantas ${err}`);

		return res.status(error.code).send(error);
	}
};

const getTotalCamionesController = async (req, res) => {
	try {
		const resultModule = await getTotalCamionesModule(req);
		logger.info(`[INGRESO - CONTROLLER] Exito  al getTotalCamionesController`);
		return res.status(200).send(resultModule);
	} catch (error) {
		let err = typeof error === "object" ? error.response.data : error;
		logger.error(`[INGRESO - CONTROLLER] Error al getTotalCamionesController ${err}`);

		return res.status(error.code).send(error);
	}
};

const getTiemposCamionesGraficosController = async (req, res) => {
	try {
		const resultModule = await getTiemposCamionesGraficosModule(req);
		logger.info(`[INGRESO - CONTROLLER] Exito al getTiemposCamionesGraficosController`);
		return res.status(200).send(resultModule);
	} catch (error) {
		let err = typeof error === "object" ? error.response.data : error;
		logger.error(`[INGRESO - CONTROLLER] Error al getTiemposCamionesGraficosController ${err}`);

		return res.status(error.code).send(error);
	}
};

const getTiemposCamionesRecepcionController = async (req, res) => {
	try {
		const resultModule = await getTiemposCamionesRecepcionModule(req);
		logger.info(`[INGRESO - CONTROLLER] Exito al getTiemposCamionesRecepcionController`);
		return res.status(200).send(resultModule);
	} catch (error) {
		let err = typeof error === "object" ? error.response.data : error;
		logger.error(`[INGRESO - CONTROLLER] Error al getTiemposCamionesRecepcionController ${err}`);

		return res.status(error.code).send(error);
	}
};

const getTiemposCamionesEnvasesController = async (req, res) => {
	try {
		const resultModule = await getTiemposCamionesEnvasesModule(req);
		logger.info(`[INGRESO - CONTROLLER] Exito al getTiemposCamionesEnvasesController`);
		return res.status(200).send(resultModule);
	} catch (error) {
		let err = typeof error === "object" ? error.response.data : error;
		logger.error(`[INGRESO - CONTROLLER] Error al getTiemposCamionesEnvasesController ${err}`);

		return res.status(error.code).send(error);
	}
};

module.exports = {
	getEspeciesController,
	getTotalCamionesController,
	getTiemposCamionesGraficosController,
	getTiemposCamionesRecepcionController,
	getTiemposCamionesEnvasesController
};
