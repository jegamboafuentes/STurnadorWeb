
package com.baz.scc.turnadorweb.service;

import com.baz.scc.turnadorweb.logic.CjCRTiempoSinAtendLogic;
import com.baz.scc.turnadorweb.model.CjCRTiempoSinAtender;
import javax.ws.rs.core.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Service
@RequestMapping("/clienteEspera/service")
public class CjCRTiempoSinAtendService {
    
    @Autowired
    private CjCRTiempoSinAtendLogic tiempoSinAtender;
    
    @RequestMapping(
            method = RequestMethod.GET,
            value = "/idSuc/{id}/semana/{semana}/",
            consumes = {MediaType.APPLICATION_JSON},
            produces = {MediaType.APPLICATION_JSON})
    @ResponseBody
    public CjCRTiempoSinAtender getTiempoSinAtender(
        @PathVariable String id, @PathVariable String semana) {
        
        return tiempoSinAtender.getTiempoSinAtender(id, semana);
    }
}
