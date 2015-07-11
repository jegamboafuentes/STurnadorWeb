
package com.baz.scc.turnadorweb.logic;

import com.baz.scc.turnadorweb.model.CjCRClienteEspera;
import org.springframework.stereotype.Component;

@Component
public class CjCRClienteEnEsperaLogic {
    
    public CjCRClienteEspera getClienteEspera (String id, String semana){
        CjCRClienteEspera clienteEnEspera = new CjCRClienteEspera();
        
        clienteEnEspera.setDia1("11/09/14");
        clienteEnEspera.setDia2("12/09/14");
        clienteEnEspera.setDia3("13/09/14");
        clienteEnEspera.setDia4("14/09/14");
        clienteEnEspera.setDia5("15/09/14");
        clienteEnEspera.setDia6("16/09/14");
        clienteEnEspera.setDia7("17/09/14");
        clienteEnEspera.setDesviacionEstandar("20.4 min");
        clienteEnEspera.setPromedio("1.38 min");
        clienteEnEspera.setMaximo("22.10 seg");
        clienteEnEspera.setMinimo("15.0 seg");
        clienteEnEspera.setValorDia1(6.95);
        clienteEnEspera.setValorDia2(9.05);
        clienteEnEspera.setValorDia3(6.25);
        clienteEnEspera.setValorDia4(6.59);
        clienteEnEspera.setValorDia5(5.35);
        clienteEnEspera.setValorDia6(5.21);
        clienteEnEspera.setValorDia7(5.6);
        return clienteEnEspera;
    }
}
