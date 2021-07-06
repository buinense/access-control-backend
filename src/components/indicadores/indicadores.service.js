"use strict";

const logger = require("../../utils/winston.util");
const { poolPromise, sql } = require("../../utils/connectDB.util");

const getEspeciesService = async () => {
	try {
		const pool = await poolPromise;
		const user = await pool.request().execute("RC_PROC_C_GET_ESPECIES");
		/* console.log(user); */
		return user.recordset;
	} catch (error) {
		logger.error("[INGRESO - SERVICE] Ejecución incorrecta del servicio getEspeciesService", error);

		throw typeof error === "object" ? error.response.data : error;
	}
};

const getTotalCamionesService = async req => {
	try {
		console.log(req.body);
		const pool = await poolPromise;
		const user = await pool
			.request()
			.input("ESPECIE", sql.VarChar(50), req.body.especie)
			.input("FECHA_INICIO", sql.VarChar(12), req.body.fecha_inicio)
			.input("FECHA_FIN", sql.VarChar(12), req.body.fecha_fin)
			.input("CENTRO_ACOPIO", sql.Int, req.body.centro_acopio)
			.execute("RC_PROC_C_GET_TOTAL_CAMIONES");
		/* console.log(user); */
		return user.recordset;
	} catch (error) {
		logger.error("[INGRESO - SERVICE] Ejecución incorrecta del servicio getEspeciesService", error);

		throw typeof error === "object" ? error.response.data : error;
	}
};

const getTiemposCamionesGraficosService = async req => {
	try {
		const pool = await poolPromise;
		const user = await pool
			.request()
			.input("ESPECIE", sql.VarChar(50), req.body.especie)
			.input("FECHA_INICIO", sql.VarChar(12), req.body.fecha_inicio)
			.input("FECHA_FIN", sql.VarChar(12), req.body.fecha_fin)
			.input("CENTRO_ACOPIO", sql.Int, req.body.centro_acopio)
			.execute("RC_PROC_C_GET_TIEMPOS_CAMIONES_GRAFICO");
		/* console.log(user); */
		return user.recordset;
	} catch (error) {
		logger.error("[INGRESO - SERVICE] Ejecución incorrecta del servicio getTiemposCamionesGraficosService", error);

		throw typeof error === "object" ? error.response.data : error;
	}
};

const getTiemposCamionesRecepcionService = async req => {
	try {
		const pool = await poolPromise;
		const user = await pool
			.request()
			.input("ESPECIE", sql.VarChar(50), req.body.especie)
			.input("FECHA_INICIO", sql.VarChar(12), req.body.fecha_inicio)
			.input("FECHA_FIN", sql.VarChar(12), req.body.fecha_fin)
			.input("CENTRO_ACOPIO", sql.Int, req.body.centro_acopio)
			.execute("RC_PROC_C_GET_TIEMPOS_CAMIONES_RECEPCION");
		/* console.log(user); */
		return user.recordset;
	} catch (error) {
		logger.error("[INGRESO - SERVICE] Ejecución incorrecta del servicio getTiemposCamionesRecepcionService", error);

		throw typeof error === "object" ? error.response.data : error;
	}
};

const getTiemposCamionesEnvasesService = async req => {
	try {
		const pool = await poolPromise;
		const user = await pool
			.request()
			.input("ESPECIE", sql.VarChar(50), req.body.especie)
			.input("FECHA_INICIO", sql.VarChar(12), req.body.fecha_inicio)
			.input("FECHA_FIN", sql.VarChar(12), req.body.fecha_fin)
			.input("CENTRO_ACOPIO", sql.Int, req.body.centro_acopio)
			.execute("RC_PROC_C_GET_TIEMPOS_CAMIONES_ENVASES");
		/* console.log(user); */
		return user.recordset;
	} catch (error) {
		logger.error("[INGRESO - SERVICE] Ejecución incorrecta del servicio getTiemposCamionesEnvasesService", error);

		throw typeof error === "object" ? error.response.data : error;
	}
};

module.exports = {
	getEspeciesService,
	getTotalCamionesService,
	getTiemposCamionesGraficosService,
	getTiemposCamionesRecepcionService,
	getTiemposCamionesEnvasesService
};
