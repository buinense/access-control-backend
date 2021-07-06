"use strict";

const {
	getProductoresController,
	getVariedadesController,
	getGrillaController,
	setRegistroTemperaturaController,
	setFinalizaRegistroTemperaturaController
} = require("./hidrocooler.controller");

const logger = require("../../utils/winston.util");

const { validaToken } = require("../../utils/refreshToken.util");

function route(app, globalPathPrefix) {
	logger.info(`hidrocooler.route`);

	logger.info(`registrando ruta POST: ${globalPathPrefix}/productores`);
	app.post(`${globalPathPrefix}/productores`, /* [validaToken], */ getProductoresController);

	logger.info(`registrando ruta POST: ${globalPathPrefix}/variedades`);
	app.post(`${globalPathPrefix}/variedades`, /* [validaToken], */ getVariedadesController);

	logger.info(`registrando ruta POST: ${globalPathPrefix}/grilla`);
	app.post(`${globalPathPrefix}/grilla`, /* [validaToken], */ getGrillaController);

	logger.info(`registrando ruta POST: ${globalPathPrefix}/set_registro_temp`);
	app.post(`${globalPathPrefix}/set_registro_temp`, /* [validaToken], */ setRegistroTemperaturaController);

	logger.info(`registrando ruta POST: ${globalPathPrefix}/set_finaliza_temperatura_camiones`);
	app.post(
		`${globalPathPrefix}/set_finaliza_temperatura_camiones`,
		/* [validaToken], */ setFinalizaRegistroTemperaturaController
	);
}

module.exports = route;
