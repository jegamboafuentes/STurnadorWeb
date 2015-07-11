package com.baz.scc.turnadorweb.logic;

import com.baz.scc.turnadorweb.model.CjCRCEmpleadoAtendiendo;
import java.util.Random;
import org.springframework.stereotype.Component;

@Component
public class CjCREmpAtendiendoLogic {
    public CjCRCEmpleadoAtendiendo getEmpleadoAtendiendo(String id, String semana){
        CjCRCEmpleadoAtendiendo oEmpleadoAtendiendo = new CjCRCEmpleadoAtendiendo();
        
        Integer x[] = new Integer[7];
        
        for (int i=0; i<=6; i++){
            Random rand = new Random();
            int random = rand.nextInt((10-3)+3)+ 3;
            x[i] = random;
        }
        oEmpleadoAtendiendo.setPlantilla(6);
        oEmpleadoAtendiendo.setLunes(x[0]);
        oEmpleadoAtendiendo.setMartes(x[1]);
        oEmpleadoAtendiendo.setMiercoles(x[2]);
        oEmpleadoAtendiendo.setJueves(x[3]);
        oEmpleadoAtendiendo.setViernes(x[4]);
        oEmpleadoAtendiendo.setSabado(x[5]);
        oEmpleadoAtendiendo.setDomingo(x[6]);
        
        return oEmpleadoAtendiendo;
    }
}
