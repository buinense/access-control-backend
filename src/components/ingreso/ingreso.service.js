"use strict";

const logger = require("../../utils/winston.util");
const { poolPromise, sql } = require("../../utils/connectDB.util");

const transportesPlantaService = async () => {
	try {
		const pool = await poolPromise;
		const user = await pool
			.request()
			.query(
				"SELECT ID,RUT_CHOFER,DV_CHOFER,NOMBRE_CHOFER,APELLIDO_CHOFER,RUT_PRODUCTOR,DV_PRODUCTOR,RAZON_SOCIAL,GUIA,PATENTE,dbo.calcularTiempo(HORA_LLEGADA, GETDATE(), 2) HORA_LLEGADA,HORA_SALIDA, OBJETIVO_VISITA_ID, PORTERIA_ID FROM access_control where isnull(HORA_SALIDA,'') = ''"
			);
		/* console.log(user); */
		return user.recordset;
	} catch (error) {
		logger.error("[INGRESO - SERVICE] Ejecución incorrecta del servicio transportesPlantaService", error);

		throw typeof error === "object" ? error.response.data : error;
	}
};

const tiemposActualesService = async req => {
	try {
		const pool = await poolPromise;
		const tiempos = await pool
			.request()
			.input("CENTRO_ACOPIO", sql.Int, req.body.centro_acopio)
			.execute("RC_PROC_C_GET_TIEMPOS_CAMIONES");
		//console.log('getTiemposActuales', tiempos.recordset);
		return tiempos.recordset;
	} catch (error) {
		logger.error("[INGRESO - SERVICE] Ejecución incorrecta del servicio tiemposActuales", error);

		throw typeof error === "object" ? error.response.data : error;
	}
};

const centrosAcopiosService = async () => {
	try {
		const pool = await poolPromise;
		const tiempos = await pool.request().execute("RC_PROC_C_GET_CENTRO_ACOPIO");
		//console.log('getTiemposActuales', tiempos.recordset);
		return tiempos.recordset;
	} catch (error) {
		logger.error("[INGRESO - SERVICE] Ejecución incorrecta del servicio centrosAcopiosService", error);

		throw typeof error === "object" ? error.response.data : error;
	}
};

const transportesPlantaDosService = async req => {
	try {
		const pool = await poolPromise;
		const tiempos = await pool
			.request()
			.input("FECHA_BUSQUEDA", sql.VarChar(12), req.body.fecha_busqueda)
			.input("porteria", sql.Int, req.body.porteriaId)
			.input("CENTRO_ACOPIO", sql.Int, req.body.centroAcopioId)
			.execute("RC_PROC_C_GET_CAMIONES_INGRESO");
		//console.log('getTiemposActuales', tiempos.recordset);
		return tiempos.recordset;
	} catch (error) {
		logger.error("[INGRESO - SERVICE] Ejecución incorrecta del servicio transportesPlantaDosService", error);

		throw typeof error === "object" ? error.response.data : error;
	}
};

const transportesPlantaHistoricoService = async req => {
	try {
		const pool = await poolPromise;
		const tiempos = await pool
			.request()
			.input("FECHA_BUSQUEDA", sql.VarChar(12), req.body.fecha_busqueda)
			.input("porteria", sql.Int, req.body.porteriaId)
			.input("CENTRO_ACOPIO", sql.Int, req.body.centroAcopioId)
			.execute("RC_PROC_C_GET_CAMIONES_INGRESO_HISTORICO");
		//console.log('getTiemposActuales', tiempos.recordset);
		return tiempos.recordset;
	} catch (error) {
		logger.error("[INGRESO - SERVICE] Ejecución incorrecta del servicio transportesPlantaHistoricoService", error);

		throw typeof error === "object" ? error.response.data : error;
	}
};

const porteriasService = async req => {
	try {
		const pool = await poolPromise;
		const tiempos = await pool
			.request()
			.input("CENTRO_ACOPIO_ID", sql.Int, req.body.centroAcopioId)
			.execute("RC_PROC_C_GET_PORTERIAS");
		//console.log('getTiemposActuales', tiempos.recordset);
		return tiempos.recordset;
	} catch (error) {
		logger.error("[INGRESO - SERVICE] Ejecución incorrecta del servicio porteriasService", error);

		throw typeof error === "object" ? error.response.data : error;
	}
};

const objetivoVisitaService = async () => {
	const pool = await poolPromise;
	const user = await pool.request().query("select * from objetivo_visita");
	return user.recordset;
};

const ingresoPlantaService = async req => {
	try {
		var rut_chofer,
			verif_chofer = "";
		var extranjero = 0;
		if (!req.body.EXTRANJERO) {
			console.log("Entra a !Extranjero");
			var dv_chofer = req.body.RUT_CHOFER.split("-");
			rut_chofer = dv_chofer[0];
			verif_chofer = dv_chofer[1];
		} else {
			rut_chofer = req.body.RUT_CHOFER;
			verif_chofer = 0;
			extranjero = 1;
		}
		// dv_chofer = req.body.RUT_CHOFER.split('-');
		let dv_productor = "";
		if (req.body.RUT_PRODUCTOR != null) {
			dv_productor = req.body.RUT_PRODUCTOR.split("-");
		}
		let porteria = parseInt(req.body.PORTERIA_ID);
		const pool = await poolPromise;
		const tiempos = await pool
			.request()
			.input("ID", sql.Int, req.body.ID)
			.input("RUT_CHOFER", sql.VarChar(5000), rut_chofer)
			.input("DV_CHOFER", sql.Char, verif_chofer)
			.input("NOMBRE_CHOFER", sql.VarChar(50), req.body.NOMBRE_CHOFER)
			.input("APELLIDO_CHOFER", sql.VarChar(50), req.body.APELLIDO_CHOFER)
			.input("RUT_PRODUCTOR", sql.Int, dv_productor[0])
			.input("DV_PRODUCTOR", sql.Char, dv_productor[1])
			.input("RAZON_SOCIAL", sql.VarChar(50), req.body.RAZON_SOCIAL_HID)
			.input("GUIA", sql.VarChar(50), req.body.GUIA)
			.input("PATENTE", sql.VarChar(50), req.body.PATENTE)
			.input("OBJETIVO_VISITA_ID", sql.Int, req.body.OBJETIVO_VISITA_ID)
			.input("PORTERIA_ID", sql.Int, req.body.PORTERIA_ID)
			.input("TIPO_CAMION", sql.Int, req.body.TIPO_CAMION)
			.input("EXTRANJERO", sql.Int, extranjero)
			.input("GUIA_SALIDA", sql.VarChar(50), req.body.GUIA_SALIDA)
			.input("CENTRO_ACOPIO", sql.Int, req.body.CENTRO_ACOPIO)
			.execute("RC_PROC_I_SET_INGRESO_PLANTA");
		//console.log('getTiemposActuales', tiempos.recordset);
		return tiempos.recordset;
	} catch (error) {
		logger.error("[INGRESO - SERVICE] Ejecución incorrecta del servicio ingresoPlantaService", error);

		throw typeof error === "object" ? error.response.data : error;
	}
};

const ingresoByIDService = async req => {
	try {
		const pool = await poolPromise;
		const tiempos = await pool
			.request()
			.input("ID", sql.Int, req.params.id)
			.execute("RC_PROC_C_GET_INGRESO_BY_ID");
		//console.log('getTiemposActuales', tiempos.recordset);
		return tiempos.recordset;
	} catch (error) {
		logger.error("[INGRESO - SERVICE] Ejecución incorrecta del servicio ingresoByIDService", error);

		throw typeof error === "object" ? error.response.data : error;
	}
};

const choferesByRutService = async req => {
	try {
		var extranjero = 0;
		if (req.body.EXTRANJERO) {
			extranjero = 1;
		}
		const pool = await poolPromise;
		const tiempos = await pool
			.request()
			.input("RUT", sql.VarChar(50), req.body.RUT_CHOFER)
			.input("EXTRANJERO", sql.Int, extranjero)
			.execute("RC_PROC_C_GET_CHOFER_BY_RUT");
		//console.log("choferesByRutService", tiempos.recordset);
		return tiempos.recordset;
	} catch (error) {
		logger.error("[INGRESO - SERVICE] Ejecución incorrecta del servicio choferesByRut", error);

		throw typeof error === "object" ? error.response.data : error;
	}
};

const setSalidaPlantaService = async req => {
	try {
		var extranjero = 0;
		if (req.body.EXTRANJERO) {
			extranjero = 1;
		}
		const pool = await poolPromise;
		const tiempos = await pool
			.request()
			.input("ID", sql.Int, req.body.ID)
			.input("PORTERIA_SALIDA_ID", sql.Int, req.body.PORTERIA_SALIDA_ID)
			.input("GUIA_SALIDA", sql.VarChar(50), req.body.GUIA_SALIDA)
			.execute("RC_PROC_U_SET_SALIDA_PLANTA");
		//console.log("setSalidaPlantaService", tiempos.recordset);
		return tiempos.recordset;
	} catch (error) {
		logger.error("[INGRESO - SERVICE] Ejecución incorrecta del servicio setSalidaPlantaService", error);

		throw typeof error === "object" ? error.response.data : error;
	}
};

const getProductorByRutService = async req => {
	try {
		var extranjero = 0;
		if (req.body.EXTRANJERO) {
			extranjero = 1;
		}
		const pool = await poolPromise;
		const tiempos = await pool
			.request()
			.input("RUT_PROD", sql.VarChar(50), req.params.rut)
			.execute("RC_PROC_C_GET_NOM_PRO");
		//console.log("setSalidaPlantaService", tiempos.recordset);
		return tiempos.recordset;
	} catch (error) {
		logger.error("[INGRESO - SERVICE] Ejecución incorrecta del servicio getProductorByRutService", error);

		throw typeof error === "object" ? error.response.data : error;
	}
};

module.exports = {
	transportesPlantaService,
	tiemposActualesService,
	centrosAcopiosService,
	transportesPlantaDosService,
	transportesPlantaHistoricoService,
	objetivoVisitaService,
	porteriasService,
	ingresoPlantaService,
	ingresoByIDService,
	choferesByRutService,
	setSalidaPlantaService,
	getProductorByRutService
};
