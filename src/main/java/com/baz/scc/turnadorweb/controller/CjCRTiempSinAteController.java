package com.baz.scc.turnadorweb.controller;

import com.baz.scc.turnadorweb.logic.CjCRMenuLogic;
import com.baz.scc.turnadorweb.logic.CjCRTiempoSinAtendLogic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/")
public class CjCRTiempSinAteController {

    @Autowired
    private CjCRTiempoSinAtendLogic clienteSinAtenderLogic;

    @RequestMapping(
            method = RequestMethod.GET,
            value = "/tiempoSinAtender")
    public ModelAndView clienteEspera() {
        CjCRMenuLogic menu = new CjCRMenuLogic();
        ModelAndView view = new ModelAndView("tiempoSinAtender");

        view.addObject("semanas", menu.getSemanas());
        view.addObject("sucursales", menu.getSucursales());
        view.addObject("tiempoSinAtender", clienteSinAtenderLogic.getTiempoSinAtender("id", "semana X"));

        return view;
    }
}
