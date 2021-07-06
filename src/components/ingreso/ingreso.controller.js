"use strict";

const logger = require("../../utils/winston.util");
const {
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
} = require("./ingreso.module");

const transportesPlantaController = async (req, res) => {
	try {
		const resultModule = await transportesPlantaModule();
		logger.info(`[INGRESO - CONTROLLER] Exito al consultar transportes plantas`);
		return res.status(200).send(resultModule);
	} catch (error) {
		logger.error(`[INGRESO - CONTROLLER] Error al consultar transportes plantas ${error}`);

		return res.status(error.code).send(error);
	}
};

const tiemposActualesController = async (req, res) => {
	try {
		const resultModule = await tiemposActualesModule(req);
		logger.info(`[INGRESO - CONTROLLER] Exito al consultar transportes plantas`);
		return res.status(200).send(resultModule);
	} catch (error) {
		let err = typeof error === "object" ? error.response.data : error;
		logger.error(`[INGRESO - CONTROLLER] Error al consultar transportes plantas ${err}`);

		return res.status(error.code).send(error);
	}
};

const centrosAcopiosController = async (req, res) => {
	try {
		const resultModule = await centrosAcopiosModule();
		logger.info(`[INGRESO - CONTROLLER] Exito al consultar centros de acopio`);
		return res.status(200).send(resultModule);
	} catch (error) {
		let err = typeof error === "object" ? error.response.data : error;
		logger.error(`[INGRESO - CONTROLLER] Error al consultar centros de acopio ${err}`);

		return res.status(error.code).send(error);
	}
};

const transportesPlantaDosController = async (req, res) => {
	try {
		const resultModule = await transportesPlantaDosModule(req);
		logger.info(`[INGRESO - CONTROLLER] Exito al consultar transportesPlantaDos`);
		return res.status(200).send(resultModule);
	} catch (error) {
		let err = typeof error === "object" ? error.response.data : error;
		logger.error(`[INGRESO - CONTROLLER] Error al consultar transportesPlantaDos ${err}`);

		return res.status(error.code).send(error);
	}
};

const transportesPlantaHistoricoController = async (req, res) => {
	try {
		const resultModule = await transportesPlantaHistoricoModule(req);
		logger.info(`[INGRESO - CONTROLLER] Exito al consultar centros de acopio`);
		return res.status(200).send(resultModule);
	} catch (error) {
		let err = typeof error === "object" ? error.response.data : error;
		logger.error(`[INGRESO - CONTROLLER] Error al consultar centros de acopio ${err}`);

		return res.status(error.code).send(error);
	}
};

const objetivoVisitaController = async (req, res) => {
	try {
		const resultModule = await objetivoVisitaModule(req);
		logger.info(`[INGRESO - CONTROLLER] Exito al consultar centros de acopio`);
		return res.status(200).send(resultModule);
	} catch (error) {
		let err = typeof error === "object" ? error.response.data : error;
		logger.error(`[INGRESO - CONTROLLER] Error al consultar centros de acopio ${err}`);

		return res.status(error.code).send(error);
	}
};

const porteriasController = async (req, res) => {
	try {
		const resultModule = await porteriasModule(req);
		logger.info(`[INGRESO - CONTROLLER] Exito porteriasController`);
		return res.status(200).send(resultModule);
	} catch (error) {
		let err = typeof error === "object" ? error.response.data : error;
		logger.error(`[INGRESO - CONTROLLER] Error porteriasController ${err}`);

		return res.status(error.code).send(error);
	}
};

const ingresoPlantaController = async (req, res) => {
	try {
		const resultModule = await ingresoPlantaModule(req);
		logger.info(`[INGRESO - CONTROLLER] Exito al ingresar registros`);
		return res.status(200).send(resultModule);
	} catch (error) {
		let err = typeof error === "object" ? error.response.data : error;
		logger.error(`[INGRESO - CONTROLLER] Error ingresoPlantaController ${err}`);

		return res.status(error.code).send(error);
	}
};

const ingresoByIDController = async (req, res) => {
	try {
		const resultModule = await ingresoByIDModule(req);
		logger.info(`[INGRESO - CONTROLLER] Exito ingresoByIDController`);
		return res.status(200).send(resultModule);
	} catch (error) {
		let err = typeof error === "object" ? error.response.data : error;
		logger.error(`[INGRESO - CONTROLLER] Error ingresoByIDController ${err}`);

		return res.status(error.code).send(error);
	}
};

const choferesByRutController = async (req, res) => {
	try {
		const resultModule = await choferesByRutModule(req);
		logger.info(`[INGRESO - CONTROLLER] Exito choferesByRutController`);
		return res.status(200).send(resultModule);
	} catch (error) {
		let err = typeof error === "object" ? error.response.data : error;
		logger.error(`[INGRESO - CONTROLLER] Error ingresoByIDController ${err}`);

		return res.status(error.code).send(error);
	}
};

const setSalidaPlantaController = async (req, res) => {
	try {
		const resultModule = await setSalidaPlantaModule(req);
		logger.info(`[INGRESO - CONTROLLER] Exito choferesByRutController`);
		return res.status(200).send(resultModule);
	} catch (error) {
		let err = typeof error === "object" ? error.response.data : error;
		logger.error(`[INGRESO - CONTROLLER] Error ingresoByIDController ${err}`);

		return res.status(error.code).send(error);
	}
};

const getProductorByRutController = async (req, res) => {
	try {
		const resultModule = await getProductorByRutModule(req);
		logger.info(`[INGRESO - CONTROLLER] Exito choferesByRutController`);
		return res.status(200).send(resultModule);
	} catch (error) {
		let err = typeof error === "object" ? error.response.data : error;
		logger.error(`[INGRESO - CONTROLLER] Error ingresoByIDController ${err}`);

		return res.status(error.code).send(error);
	}
};

module.exports = {
	transportesPlantaController,
	tiemposActualesController,
	centrosAcopiosController,
	transportesPlantaDosController,
	transportesPlantaHistoricoController,
	objetivoVisitaController,
	porteriasController,
	ingresoPlantaController,
	ingresoByIDController,
	choferesByRutController,
	setSalidaPlantaController,
	getProductorByRutController
};
