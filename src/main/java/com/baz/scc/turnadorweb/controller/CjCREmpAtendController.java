package com.baz.scc.turnadorweb.controller;

import com.baz.scc.turnadorweb.logic.CjCREmpAtendiendoLogic;
import com.baz.scc.turnadorweb.logic.CjCRMenuLogic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/")
public class CjCREmpAtendController {
    
    @Autowired 
    private CjCREmpAtendiendoLogic empleadoAtendiendoLogic;
    
    @RequestMapping(
            method = RequestMethod.GET,
            value = "/empleadosAtendiendo")
    public ModelAndView empleadoAtendiendo (){
        CjCRMenuLogic menu = new CjCRMenuLogic();
        ModelAndView view = new ModelAndView("empleadosAtendiendo");
        
        view.addObject("semanas",menu.getSemanas());
        view.addObject("sucursales",menu.getSucursales());
        view.addObject("empleadosAtendiendo", empleadoAtendiendoLogic.getEmpleadoAtendiendo("id", "semana"));
        
        return view;
    }
            
            
    
}
