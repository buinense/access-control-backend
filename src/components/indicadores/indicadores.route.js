"use strict";

const {
	getEspeciesController,
	getTotalCamionesController,
	getTiemposCamionesGraficosController,
	getTiemposCamionesRecepcionController,
	getTiemposCamionesEnvasesController
} = require("./indicadores.controller");

const logger = require("../../utils/winston.util");

const { validaToken } = require("../../utils/refreshToken.util");

function route(app, globalPathPrefix) {
	logger.info(`indicadores.route`);

	logger.info(`registrando ruta GET: ${globalPathPrefix}/especies`);
	app.get(`${globalPathPrefix}/especies`, /* [validaToken], */ getEspeciesController);

	logger.info(`registrando ruta POST: ${globalPathPrefix}/total_camiones`);
	app.post(`${globalPathPrefix}/total_camiones`, /* [validaToken], */ getTotalCamionesController);

	logger.info(`registrando ruta POST: ${globalPathPrefix}/tiempos_camiones_grafico`);
	app.post(`${globalPathPrefix}/tiempos_camiones_grafico`, /* [validaToken], */ getTiemposCamionesGraficosController);

	logger.info(`registrando ruta POST: ${globalPathPrefix}/tiempos_camiones_recepcion`);
	app.post(
		`${globalPathPrefix}/tiempos_camiones_recepcion`,
		/* [validaToken], */ getTiemposCamionesRecepcionController
	);

	logger.info(`registrando ruta POST: ${globalPathPrefix}/tiempos_camiones_envases`);
	app.post(`${globalPathPrefix}/tiempos_camiones_envases`, /* [validaToken], */ getTiemposCamionesEnvasesController);
}

module.exports = route;
