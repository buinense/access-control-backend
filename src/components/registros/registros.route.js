"use strict";

const {
	getTipoCamionesController,
	getRegistroTempGrillaController,
	setRegistroTemperaturaController,
	setFinalizaRegistroTemperaturaController
} = require("./registros.controller");

const logger = require("../../utils/winston.util");

const { validaToken } = require("../../utils/refreshToken.util");

function route(app, globalPathPrefix) {
	logger.info(`registros.route`);

	logger.info(`registrando ruta GET: ${globalPathPrefix}/get_tipo_camiones`);
	app.get(`${globalPathPrefix}/get_tipo_camiones`, /* [validaToken], */ getTipoCamionesController);

	logger.info(`registrando ruta POST: ${globalPathPrefix}/get_temperatura_grilla`);
	app.post(`${globalPathPrefix}/get_temperatura_grilla`, /* [validaToken], */ getRegistroTempGrillaController);

	logger.info(`registrando ruta POST: ${globalPathPrefix}/set_temperatura_camiones`);
	app.post(`${globalPathPrefix}/set_temperatura_camiones`, /* [validaToken], */ setRegistroTemperaturaController);

	logger.info(`registrando ruta POST: ${globalPathPrefix}/set_finaliza_temperatura_camiones`);
	app.post(
		`${globalPathPrefix}/set_finaliza_temperatura_camiones`,
		/* [validaToken], */ setFinalizaRegistroTemperaturaController
	);
}

module.exports = route;
