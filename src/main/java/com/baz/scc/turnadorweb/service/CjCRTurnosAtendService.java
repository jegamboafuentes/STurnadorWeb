package com.baz.scc.turnadorweb.service;

import com.baz.scc.turnadorweb.logic.CjCRTurnAtenLogic;
import com.baz.scc.turnadorweb.model.CjCRTurnosAtendidos;
import javax.ws.rs.core.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Service
@RequestMapping("/turnosAtendidos/service")
public class CjCRTurnosAtendService {
       
    @Autowired
    private CjCRTurnAtenLogic turnosAtendidosLogic;
    
    @RequestMapping(
            method = RequestMethod.GET,
            value = "/idSuc/{id}/semana/{semana}/",
            consumes = {MediaType.APPLICATION_JSON},
            produces = {MediaType.APPLICATION_JSON})
    @ResponseBody
    public CjCRTurnosAtendidos getTurnosAtendidos (
            @PathVariable String id, @PathVariable String semana){

        return turnosAtendidosLogic.getTurnosAtendidos(id, semana);
    }
}
