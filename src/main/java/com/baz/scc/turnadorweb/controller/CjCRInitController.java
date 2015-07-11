package com.baz.scc.turnadorweb.controller;

import com.baz.scc.turnadorweb.logic.CjCRMenuLogic;
import com.baz.scc.turnadorweb.logic.CjCRTurnAtenLogic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/")
public class CjCRInitController {
    
    @Autowired
    private CjCRTurnAtenLogic turnosAtendidosLogic;

    @RequestMapping(
            method = RequestMethod.GET)
    public ModelAndView index (){
        CjCRMenuLogic menu = new CjCRMenuLogic();
        
        ModelAndView view = new ModelAndView("index");
        
        view.addObject("semanas", menu.getSemanas());
        view.addObject("sucursales", menu.getSucursales());
//        view.addObject("turnosAtendidos", turnosAtendidosLogic.getTurnosAtendidos(
//                "-1",menu.getSemanas().get(0).toString()
//        ));
        return view;
    }
    
    @RequestMapping(
        method = RequestMethod.GET,
            value = "/home")
    public ModelAndView home(){

        CjCRMenuLogic menu = new CjCRMenuLogic();
        
        ModelAndView view = new ModelAndView("index");
        
        view.addObject("semanas", menu.getSemanas());
        view.addObject("sucursales", menu.getSucursales());
//        view.addObject("turnosAtendidos", turnosAtendidosLogic.getTurnosAtendidos(
//                "-1",menu.getSemanas().get(0).toString()
//        ));
        return view;
    }
    
    @RequestMapping(
            method = RequestMethod.GET,
            value = "/monitor")
    public ModelAndView monitor() {
        ModelAndView view = new ModelAndView("monitor");
        
        view.addObject("appstatus", true);
        
        return view;
    }
    
    @RequestMapping(
            method = RequestMethod.GET,
            value = "/invalid")
    public ModelAndView invalid() {
        ModelAndView view = new ModelAndView("invalid");       

        return view;
    }
}
