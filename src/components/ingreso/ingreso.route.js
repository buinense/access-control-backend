"use strict";

const {
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
} = require("./ingreso.controller");

const logger = require("../../utils/winston.util");

const { validaToken } = require("../../utils/refreshToken.util");

function route(app, globalPathPrefix) {
	logger.info(`ingreso.route`);

	logger.info(`registrando ruta GET: ${globalPathPrefix}/ingreso`);
	app.get(`${globalPathPrefix}/ingreso`, /* [validaToken], */ transportesPlantaController);

	logger.info(`registrando ruta POST: ${globalPathPrefix}/tiempo_plantas`);
	app.post(`${globalPathPrefix}/tiempo_plantas`, /* [validaToken], */ tiemposActualesController);

	logger.info(`registrando ruta GET: ${globalPathPrefix}/getCentrosAcopios`);
	app.get(`${globalPathPrefix}/getCentrosAcopios`, /* [validaToken], */ centrosAcopiosController);

	logger.info(`registrando ruta POST: ${globalPathPrefix}/ingresoDos`);
	app.post(`${globalPathPrefix}/ingresoDos`, /* [validaToken], */ transportesPlantaDosController);

	logger.info(`registrando ruta POST: ${globalPathPrefix}/get_historico`);
	app.post(`${globalPathPrefix}/get_historico`, /* [validaToken], */ transportesPlantaHistoricoController);

	logger.info(`registrando ruta GET: ${globalPathPrefix}/objetivo_visitas`);
	app.get(`${globalPathPrefix}/objetivo_visitas`, /* [validaToken], */ objetivoVisitaController);

	logger.info(`registrando ruta POST: ${globalPathPrefix}/porterias`);
	app.post(`${globalPathPrefix}/porterias`, /* [validaToken], */ porteriasController);

	logger.info(`registrando ruta POST: ${globalPathPrefix}/addingreso`);
	app.post(`${globalPathPrefix}/addingreso`, /* [validaToken], */ ingresoPlantaController);

	logger.info(`registrando ruta GET: ${globalPathPrefix}/getIngreso/:id`);
	app.get(`${globalPathPrefix}/getIngreso/:id`, /* [validaToken], */ ingresoByIDController);

	logger.info(`registrando ruta POST: ${globalPathPrefix}/getChoferesRut`);
	app.post(`${globalPathPrefix}/getChoferesRut`, /* [validaToken], */ choferesByRutController);

	logger.info(`registrando ruta POST: ${globalPathPrefix}/setSalidaPlanta`);
	app.post(`${globalPathPrefix}/setSalidaPlanta`, /* [validaToken], */ setSalidaPlantaController);

	logger.info(`registrando ruta GET: ${globalPathPrefix}/getProductorByRut/:rut`);
	app.get(`${globalPathPrefix}/getProductorByRut/:rut`, /* [validaToken], */ getProductorByRutController);
}

module.exports = route;
