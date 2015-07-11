
package com.baz.scc.turnadorweb.logic;

import com.baz.scc.turnadorweb.model.CjCRDetalles;

public class CjCRDetallesLogic {

    public CjCRDetalles getDetalles(String id, String semana) {
        CjCRDetalles detalles = new CjCRDetalles();
        CjCRClienteEnEsperaLogic clienteEnEsperaLogic = new CjCRClienteEnEsperaLogic();
        CjCRTiempoSinAtendLogic tiempoSinAtenderLogic = new CjCRTiempoSinAtendLogic();
        CjCREmpAtendiendoLogic empleadosAtendiendoLogic = new CjCREmpAtendiendoLogic();
        CjCRTurnAtenLogic turnosAtendidosLogic = new CjCRTurnAtenLogic();

        detalles.setClienteEnEspera(clienteEnEsperaLogic.getClienteEspera(id, semana));
        detalles.setEmpleadosAtendiendo(empleadosAtendiendoLogic.getEmpleadoAtendiendo(id, semana));
        detalles.setTiempoSinAtender(tiempoSinAtenderLogic.getTiempoSinAtender(id, semana));
        detalles.setTurnosAtenidos(turnosAtendidosLogic.getTurnosAtendidos(id, semana));

        return detalles;
    }
}
