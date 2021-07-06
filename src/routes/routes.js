"use strict";
const config = require("../config/global");
const globalPathPrefix = config.globalPathPrefix;
/* const logger = require("../utils/winston.util");

const swaggerUi = require("swagger-ui-express"); */
/* const swaggerDocument = require("../../swagger.json"); */
const ingresoRoute = require("../components/ingreso/ingreso.route");
const indicadoresRoute = require("../components/indicadores/indicadores.route");
const registrosRoute = require("../components/registros/registros.route");
const hidrocoolerRoute = require("../components/hidrocooler/hidrocooler.route");

function routes(app) {
	//app.use(`${globalPathPrefix}/bff-docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocument));
	// Rutas para cada operación
	ingresoRoute(app, globalPathPrefix);

	indicadoresRoute(app, globalPathPrefix);

	registrosRoute(app, globalPathPrefix);

	hidrocoolerRoute(app, globalPathPrefix);
}

module.exports = { routes };
