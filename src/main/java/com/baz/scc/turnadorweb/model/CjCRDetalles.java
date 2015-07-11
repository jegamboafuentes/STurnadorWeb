
package com.baz.scc.turnadorweb.model;


public class CjCRDetalles {
    
    private CjCRTurnosAtendidos turnosAtenidos = new CjCRTurnosAtendidos();
    private CjCRClienteEspera clienteEnEspera = new CjCRClienteEspera();
    private CjCRCEmpleadoAtendiendo empleadosAtendiendo = new CjCRCEmpleadoAtendiendo();
    private CjCRTiempoSinAtender tiempoSinAtender = new CjCRTiempoSinAtender();

    public CjCRTurnosAtendidos getTurnosAtenidos() {
        return turnosAtenidos;
    }

    public void setTurnosAtenidos(CjCRTurnosAtendidos turnosAtenidos) {
        this.turnosAtenidos = turnosAtenidos;
    }

    public CjCRClienteEspera getClienteEnEspera() {
        return clienteEnEspera;
    }

    public void setClienteEnEspera(CjCRClienteEspera clienteEnEspera) {
        this.clienteEnEspera = clienteEnEspera;
    }

    public CjCRCEmpleadoAtendiendo getEmpleadosAtendiendo() {
        return empleadosAtendiendo;
    }

    public void setEmpleadosAtendiendo(CjCRCEmpleadoAtendiendo empleadosAtendiendo) {
        this.empleadosAtendiendo = empleadosAtendiendo;
    }

    public CjCRTiempoSinAtender getTiempoSinAtender() {
        return tiempoSinAtender;
    }

    public void setTiempoSinAtender(CjCRTiempoSinAtender tiempoSinAtender) {
        this.tiempoSinAtender = tiempoSinAtender;
    }
    
    
    
    
}
