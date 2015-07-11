package com.baz.scc.turnadorweb.dao;

import com.baz.scc.turnadorweb.model.CjCRTurnosAtendidos;
import java.sql.ResultSet;
import java.sql.SQLException;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Repository;

@Repository
public class CjCRTurnAtenDao {

    @Autowired
    private static final Logger LOG = Logger.getLogger(CjCRTurnAtenDao.class);
    
    public CjCRTurnosAtendidos consultarTurnosAtendidos(String idSuc, String semana) {
        CjCRGeneralDao generalDao = new CjCRGeneralDao();
        String sql = "";
        if (idSuc.equals("-1")){
            sql = "SELECT sum(TURNOS_TA) as TURNOS_TA, sum(TURNOSVIRTUALES_TA) as TURNOSVIRTUALES_TA, SUM(TOTALEST_TA) as TOTALEST_TA  FROM TURNOSATENDIDOS "
                    + "WHERE SEMANA_TA = " + semana;
        }else{
            sql = "SELECT * FROM TURNOSATENDIDOS WHERE SEMANA_TA = " + semana
                + " AND ID_SUC = " + idSuc;
        }
        
        LOG.info("Inicio consulta: Turnos Atendidos");
        CjCRTurnosAtendidos ta = new CjCRTurnosAtendidos();
        try {
            generalDao.conectar();
            ResultSet rs = generalDao.stat.executeQuery(sql);
            while (rs.next()) {
                ta.setTurnos(rs.getInt("TURNOS_TA"));
                ta.setTurnosVirtuales(rs.getInt("TURNOSVIRTUALES_TA"));
                ta.setTotal(rs.getInt("TOTALEST_TA"));
            }
            rs.close();
        } catch (SQLException ex) {
            LOG.info("Turnos Atendidos Error SQL", ex);
        } catch (ClassNotFoundException e) {
            LOG.info("Error en consulta Turnos Atendidos", e);
        }
        generalDao.cerrarDb();
        LOG.info("Fin consulta: Turnos Atendidos: " +  sql);
        return ta;
    }

}
