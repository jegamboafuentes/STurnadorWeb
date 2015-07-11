package com.baz.scc.turnadorweb.dao;

import com.baz.scc.turnadorweb.model.CjCRTurnosAtendidos;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

@Repository
public class CjCRGeneralDao {

    public  Connection conn = null;
    public  Statement stat = null;
    public  ResultSet rs = null;
    private String db = "C:/proyectos/Java/CjCRWTurnadorWeb/sqlite/test.sqlite";
    private String jdbc = "jdbc:sqlite:";
    private String dbUrl = jdbc + db;
    
    
    public void conectar() throws ClassNotFoundException {
        Class.forName("org.sqlite.JDBC");
        try {
            conn = DriverManager.getConnection(dbUrl);
            stat = conn.createStatement();
            rs = stat.executeQuery("select * from SUCURSALES");
        } catch (SQLException e) {
            e.getMessage();
        }
    }

    public Map consultarSucursales() {
        String sql = "SELECT TA.ID_TA, SUC.DESC_SUC FROM TURNOSATENDIDOS TA " +
                     "INNER JOIN SUCURSALES SUC " +
                     "ON TA.ID_TA = SUC.ID_SUC ORDER BY SUC.DESC_SUC";
        Map sucursales = new LinkedHashMap();
        try {
            conectar();
            ResultSet rs = stat.executeQuery(sql);
            while (rs.next()) {
                Integer id = rs.getInt(1);
                String descripcion = rs.getString(2);
                sucursales.put(id, descripcion);
            }
            rs.close();
        }catch(SQLException ex){
            ex.toString();
        }catch (Exception e){
            e.printStackTrace();
        }

        cerrarDb();
        return sucursales;
    }

    public List<Integer> consultarSemanas() {
        String sql = "SELECT DISTINCT TA.SEMANA_TA FROM TURNOSATENDIDOS TA ORDER BY TA.SEMANA_TA DESC";
        List<Integer> semanas = new ArrayList();
        try {
            conectar();
            ResultSet rs = stat.executeQuery(sql);
            while (rs.next()) {
                Integer id = rs.getInt(1);
                semanas.add(id);
            }
            rs.close();
        } catch (SQLException ex) {
            ex.toString();
        } catch (Exception e) {
            e.printStackTrace();
        }
        cerrarDb();
        return semanas;
    }
    
    public CjCRTurnosAtendidos consultarTurnosAtendidos(String semana, String idSuc ) {
        String sql = "SELECT * FROM TURNOSATENDIDOS WHERE SEMANA_TA = " + semana +
                     " AND ID_SUC = " + idSuc;
        
        CjCRTurnosAtendidos ta = new CjCRTurnosAtendidos();
        try {
            conectar();
            ResultSet rs = stat.executeQuery(sql);
            while (rs.next()) {
                ta.setTurnos(rs.getInt("TURNOS_TA"));
                ta.setTurnosVirtuales(rs.getInt("TURNOSVIRTUALES_TA"));
                ta.setTotal(rs.getInt("TOTALEST_TA"));
            }
            rs.close();
        } catch (SQLException ex) {
            ex.toString();
        } catch (Exception e) {
            e.printStackTrace();
        }
        cerrarDb();
        return ta;
    }
    
    public void cerrarDb() {
        try{
            stat.close();
            conn.close();
        }catch (Exception e){
            e.printStackTrace();
        }
    }

}
