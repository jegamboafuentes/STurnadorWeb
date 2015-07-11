package com.baz.scc.turnadorweb.controller;

import com.baz.scc.turnadorweb.logic.CjCRMenuLogic;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/")
public class CjCRDetallesController {
    
    @RequestMapping(
            method = RequestMethod.GET,
            value = "/detalles")
    public ModelAndView detalles (){
        CjCRMenuLogic menu = new CjCRMenuLogic();
        ModelAndView view = new ModelAndView("detalles");
        
        view.addObject("semanas", menu.getSemanas());
        view.addObject("sucursales", menu.getSucursales());
        //view.addObject("turnosAtendidos", turnosAtendidosLogic.getTurnosAtendidos("-1",menu.getSemanas().get(0).toString()));    
        //view.addObject("clienteEnEspera", clienteEnEsperaLogic.getClienteEspera("CEE", "semana X"));
        //view.addObject("tiempoSinAtender", clienteSinAtenderLogic.getTiempoSinAtender("id", "semana X"));
        
        return view;
    }
}
