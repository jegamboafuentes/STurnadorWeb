
package com.baz.scc.turnadorweb.logic;

import com.baz.scc.turnadorweb.dao.CjCRGeneralDao;
import java.util.List;
import java.util.Map;


public class CjCRMenuLogic {  
    
    public List<Integer> getSemanas (){
        CjCRGeneralDao generalDao = new CjCRGeneralDao();
        return generalDao.consultarSemanas();
    }
    public Map getSucursales(){
        CjCRGeneralDao generalDao = new CjCRGeneralDao();
        return generalDao.consultarSucursales();   
    }
}
