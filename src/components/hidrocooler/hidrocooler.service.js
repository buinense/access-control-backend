"use strict";

const logger = require("../../utils/winston.util");
const { poolPromise, sql } = require("../../utils/connectDB.util");

const getProductoresService = async req => {
	try {
		console.log(req.body);
		const pool = await poolPromise;
		const user = await pool
			.request()
			.input("FECHA", sql.VarChar(12), req.body.fecha)
			.execute("RC_PROC_C_GET_HIDROCOOLER_PRODUCTORES");
		/* console.log(user); */
		return user.recordset;
	} catch (error) {
		logger.error("[INGRESO - SERVICE] Ejecución incorrecta del servicio getProductoresService", error);

		throw typeof error === "object" ? error.response.data : error;
	}
};

const getVariedadesService = async req => {
	try {
		console.log(req.body);
		const pool = await poolPromise;
		const user = await pool
			.request()
			.input("FECHA", sql.VarChar(12), req.body.fecha)
			.execute("RC_PROC_C_GET_HIDROCOOLER_VARIEDADES");
		/* console.log(user); */
		return user.recordset;
	} catch (error) {
		logger.error("[INGRESO - SERVICE] Ejecución incorrecta del servicio getVariedadesService", error);

		throw typeof error === "object" ? error.response.data : error;
	}
};

const getGrillaService = async req => {
	try {
		console.log(req.body);
		const pool = await poolPromise;
		const user = await pool
			.request()
			.input("FECHA", sql.VarChar(12), req.body.fecha)
			.input("RECEPCION", sql.VarChar(50), req.body.recepcion)
			.input("PRODUCTOR", sql.VarChar(50), req.body.productor)
			.input("VARIEDAD", sql.VarChar(50), req.body.variedad)
			.input("CENTRO_ACOPIO", sql.Int, req.body.centro_acopio)
			.execute("RC_PROC_C_GET_HIDROCOOLER_GRILLA");
		/* console.log(user); */
		return user.recordset;
	} catch (error) {
		logger.error("[INGRESO - SERVICE] Ejecución incorrecta del servicio getGrillaService", error);

		throw typeof error === "object" ? error.response.data : error;
	}
};

const setRegistroTemperaturaService = async req => {
	try {
		console.log(req.body);
		const pool = await poolPromise;
		const user = await pool
			.request()
			.input("ID", sql.Int, req.body.id)
			.input("PLANILLA", sql.VarChar(50), req.body.planilla)
			.input("ESTADO", sql.Int, req.body.estado)
			.input("COD_VAR", sql.VarChar(50), req.body.cod_var)
			.input("CUARTEL", sql.VarChar(50), req.body.cuartel)
			.input("HORA_INICIO", sql.VarChar(50), req.body.hora_inicio)
			.input("HORA_FIN", sql.VarChar(50), req.body.hora_fin)
			.input("T1", sql.Float, req.body.t1)
			.input("T2", sql.Float, req.body.t2)
			.input("T3", sql.Float, req.body.t3)
			.input("T4", sql.Float, req.body.t4)
			.input("T5", sql.Float, req.body.t5)
			.input("T6", sql.Float, req.body.t6)
			.input("OBSERVACIONES", sql.VarChar(7999), req.body.observaciones)
			.execute("RC_PROC_I_SET_REGISTRO_TEMP_HIDROCOOLER");
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
			.input("ID", sql.Int, req.body.id)
			.execute("RC_PROC_U_SET_FINALIZA_HIDROCOOLER_TEMPERATURA");
		/* console.log(user); */
		return user.recordset;
	} catch (error) {
		logger.error("[INGRESO - SERVICE] Ejecución incorrecta del servicio setFinalizaRegistroTemperaturaService", error);

		throw typeof error === "object" ? error.response.data : error;
	}
};

module.exports = {
	getProductoresService,
	getVariedadesService,
	getGrillaService,
	setRegistroTemperaturaService,
	setFinalizaRegistroTemperaturaService
};
