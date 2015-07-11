
package com.baz.scc.turnadorweb.support;

import org.apache.log4j.Logger;

/**
 *
 * @author B938201 Norberto Camacho Flores
 * Banco Azteca 2014
 */
public class CjCRAppConfig {
    
    private static final Logger log = Logger.getLogger(CjCRAppConfig.class);
    
    private int idAplicacion;

    public int getIdAplicacion() {
        return idAplicacion;
    }

    public void setIdAplicacion(int idAplicacion) {
        this.idAplicacion = idAplicacion;
    }
    
}
