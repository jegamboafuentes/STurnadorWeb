
package com.baz.scc.turnadorweb.service;

import com.baz.scc.turnadorweb.logic.CjCRClienteEnEsperaLogic;
import com.baz.scc.turnadorweb.logic.CjCRDetallesLogic;
import com.baz.scc.turnadorweb.logic.CjCRTiempoSinAtendLogic;
import com.baz.scc.turnadorweb.logic.CjCRTurnAtenLogic;
import com.baz.scc.turnadorweb.model.CjCRDetalles;
import com.baz.scc.turnadorweb.model.CjCRTiempoSinAtender;
import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.core.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Service
@RequestMapping("/detalles/service")
public class CjCRDetallesService {
    
    @RequestMapping(
            method = RequestMethod.GET,
            value = "/idSuc/{id}/semana/{semana}/",
            consumes = {MediaType.APPLICATION_JSON},
            produces = {MediaType.APPLICATION_JSON})
    @ResponseBody
    public CjCRDetalles getDetalles(@PathVariable String id, @PathVariable String semana) {

        CjCRDetallesLogic detallesLogic = new CjCRDetallesLogic();
        //String hola = "hola mundo";
        return detallesLogic.getDetalles(id, semana);
        //return hola;
    }
}
