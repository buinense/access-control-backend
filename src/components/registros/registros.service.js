"use strict";

const logger = require("../../utils/winston.util");
const { poolPromise, sql } = require("../../utils/connectDB.util");

const getTipoCamionesService = async () => {
	try {
		const pool = await poolPromise;
		const user = await pool.request().execute("RC_PROC_C_GET_TIPO_CAMIONES");
		/* console.log(user); */
		return user.recordset;
	} catch (error) {
		logger.error("[INGRESO - SERVICE] Ejecución incorrecta del servicio getTipoCamionesService", error);

		throw typeof error === "object" ? error.response.data : error;
	}
};

const getRegistroTempGrillaService = async req => {
	try {
		console.log(req.body);
		const pool = await poolPromise;
		const user = await pool
			.request()
			.input("FECHA_BUSQUEDA", sql.VarChar(50), req.body.fecha)
			.input("TIPO_CAMION", sql.Int, req.body.tipo_camion)
			.input("PATENTE", sql.VarChar(50), req.body.patente)
			.input("GUIA", sql.VarChar(50), req.body.guia_sii)
			.input("CENTRO_ACOPIO", sql.Int, req.body.centro_acopio)
			.execute("RC_PROC_C_GET_REGISTRO_GRILLA");
		/* console.log(user); */
		return user.recordset;
	} catch (error) {
		logger.error("[INGRESO - SERVICE] Ejecución incorrecta del servicio getRegistroTempGrillaService", error);

		throw typeof error === "object" ? error.response.data : error;
	}
};

const setRegistroTemperaturaService = async req => {
	try {
		console.log(req.body);
		const pool = await poolPromise;
		const user = await pool
			.request()
			.input("ID", sql.Int, req.body.id_temperatura)
			.input("ID_ACCESS_CONTROL", sql.Int, req.body.id)
			.input("ESTADO", sql.Int, req.body.estado)
			.input("T_SETEO", sql.Float, req.body.t_seteo)
			.input("T_AMBIENTE", sql.Float, req.body.t_ambiente)
			.input("T_DENTRO_CAMION", sql.Float, req.body.t_dentro_camion)
			.input("MANGA", sql.Int, req.body.manga)
			.input("ESPONJA", sql.Int, req.body.esponjas)
			.input("T_PULPA_ARRIBA_PUERTA", sql.Float, req.body.t_puerta_arriba)
			.input("T_PULPA_ARRIBA_CENTRO", sql.Float, req.body.t_centro_arriba)
			.input("T_PULPA_ARRIBA_CABINA", sql.Float, req.body.t_cabina_arriba)
			.input("T_PULPA_ABAJO_PUERTA", sql.Float, req.body.t_puerta_abajo)
			.input("T_PULPA_ABAJO_CENTRO", sql.Float, req.body.t_centro_abajo)
			.input("T_PULPA_ABAJO_CABINA", sql.Float, req.body.t_cabina_abajo)
			.input("OBSERVACIONES", sql.VarChar(50), req.body.observaciones)
			.execute("RC_PROC_I_SET_REGISTRO_TEMP_CAMIONES");
		/* console.log(user); */
		return user.recordset;
	} catch (error) {
		logger.error("[INGRESO - SERVICE] Ejecución incorrecta del servicio setRegistroTemperaturaService", error);

		throw typeof error === "object" ? error.response.data : error;
	}
};

const setFinalizaRegistroTemperaturaService = async req => {
	try {
		console.log(req.body);
		const pool = await poolPromise;
		const user = await pool
			.request()
			.input("ID", sql.Int, req.body.id_temperatura)
			.execute("RC_PROC_U_SET_FINALIZA_REGISTRO_TEMPERATURA");
		/* console.log(user); */
		return user.recordset;
	} catch (error) {
		logger.error("[INGRESO - SERVICE] Ejecución incorrecta del servicio setFinalizaRegistroTemperaturaService", error);

		throw typeof error === "object" ? error.response.data : error;
	}
};

module.exports = {
	getTipoCamionesService,
	getRegistroTempGrillaService,
	setRegistroTemperaturaService,
	setFinalizaRegistroTemperaturaService
};
