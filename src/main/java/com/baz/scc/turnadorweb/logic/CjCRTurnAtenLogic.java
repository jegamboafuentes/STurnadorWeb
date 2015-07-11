package com.baz.scc.turnadorweb.logic;

import com.baz.scc.turnadorweb.dao.CjCRTurnAtenDao;
import com.baz.scc.turnadorweb.model.CjCRTurnosAtendidos;
import org.springframework.stereotype.Component;

@Component
public class CjCRTurnAtenLogic {
    
    public CjCRTurnosAtendidos getTurnosAtendidos(String idSuc, String semana){
        CjCRTurnAtenDao turnosAtendidosDao = new CjCRTurnAtenDao();
        CjCRTurnosAtendidos ta = new CjCRTurnosAtendidos();
        
        ta = turnosAtendidosDao.consultarTurnosAtendidos(idSuc, semana);
        
        return ta;
    }
}
