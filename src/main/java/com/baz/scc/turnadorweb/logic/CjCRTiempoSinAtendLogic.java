
package com.baz.scc.turnadorweb.logic;

import com.baz.scc.turnadorweb.model.CjCRTiempoSinAtender;
import org.springframework.stereotype.Component;

@Component
public class CjCRTiempoSinAtendLogic {

    public CjCRTiempoSinAtender getTiempoSinAtender(String id, String semana) {
        CjCRTiempoSinAtender tiempoSinAtender = new CjCRTiempoSinAtender();

        tiempoSinAtender.setDia1("11/09/14");
        tiempoSinAtender.setDia2("12/09/14");
        tiempoSinAtender.setDia3("13/09/14");
        tiempoSinAtender.setDia4("14/09/14");
        tiempoSinAtender.setDia5("15/09/14");
        tiempoSinAtender.setDia6("16/09/14");
        tiempoSinAtender.setDia7("17/09/14");
        tiempoSinAtender.setDesviacionEstandar("20.4 min");
        tiempoSinAtender.setPromedio("1.38 min");
        tiempoSinAtender.setMaximo("22.10 seg");
        tiempoSinAtender.setMinimo("15.0 seg");
        tiempoSinAtender.setValorDia1(3.95);
        tiempoSinAtender.setValorDia2(8.05);
        tiempoSinAtender.setValorDia3(5.25);
        tiempoSinAtender.setValorDia4(2.59);
        tiempoSinAtender.setValorDia5(8.35);
        tiempoSinAtender.setValorDia6(9.21);
        tiempoSinAtender.setValorDia7(3.6);
        
        return tiempoSinAtender;
    }

}
