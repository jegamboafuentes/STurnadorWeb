package com.baz.scc.turnadorweb.controller;

import com.baz.scc.turnadorweb.logic.CjCRClienteEnEsperaLogic;
import com.baz.scc.turnadorweb.logic.CjCRMenuLogic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/")
public class CjCRClientEspController {
    
    @Autowired
    private CjCRClienteEnEsperaLogic clienteEnEsperaLogic;
    
    @RequestMapping(
            method = RequestMethod.GET,
            value = "/clienteEspera")
    public ModelAndView clienteEspera (){
        CjCRMenuLogic menu = new CjCRMenuLogic();
        ModelAndView view = new ModelAndView("clienteEspera");
        
        view.addObject("semanas", menu.getSemanas());
        view.addObject("sucursales", menu.getSucursales());
        view.addObject("clienteEnEspera", clienteEnEsperaLogic.getClienteEspera("CEE", "semana X"));
        
        return view;
    }
}
