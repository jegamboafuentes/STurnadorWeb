<%@include file="include.jsp"%>

<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <meta name="description" content=${appDesc}>
        <meta name="author" content=${appAuthor}}>

        <link href="${contextPath}/resource/css/lib/bootstrap.css" rel="stylesheet">
        <link href="${contextPath}/resource/css/app/cjcr-commons.css" rel="stylesheet">
        <link href="${contextPath}/resource/css/app/cjcr-detalles.css" rel="stylesheet">

        <script src="${contextPath}/resource/js/lib/jquery-2.1.1.min.js"></script>
        <script src="${contextPath}/resource/js/lib/bootstrap.min.js"></script>
        <script src="${contextPath}/resource/js/lib/graficas.js"></script>
        <script src="${contextPath}/resource/js/app/cjcr-formato.js"></script>

        <title>${appTitle}</title>
    </head>
    <body>
        <%@include file="navcontrol.jsp"%>
        <div class="jumbotron">
            <div class="row">
                <div class="col-lg-1 col-md-1 col-sm-0"></div>	
                <div class="col-lg-5 col-md-5 col-sm-6"> <!-- style= "min-width: 430px"> -->
                    <table class="table-margin">
                        <tr>
                            <td rowspan="11">
                                <div style="height:0px;">
                                    <span class="centro-space">
                                        <img class="imagen-centro" src="${contextPath}/resource/images/fte_turnosaten.png"/> 
                                    </span>
                                </div>
                                <div id="circularG" class="circulo-gra"></div>
                            </td>
                        </tr>

                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>

                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>

                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>

                        <tr>								
                            <td id="cturnos"></td>
                            <td>&nbsp;&nbsp;</td>
                            <td align="left"><h5 class="texto-negro">Turnos</h5></td>								
                            <td align="right"><h4><strong id="turnosV" class="texto-negro"></strong></h4></td>
                        </tr>

                        <tr>
                            <td id="cturnos2"></td>
                            <td>&nbsp;&nbsp;</td>
                            <td align="left"><h5 class="texto-negro">Turnos virtuales&nbsp;&nbsp;</h5></td>
                            <td align="right"><h4><strong id="turnosVir" class="texto-negro">turnos</strong></h4></td>
                        </tr>

                        <tr>
                            <td></td>
                            <td></td>
                            <td>&nbsp;&nbsp;</td>
                            <td class="border"></td>
                        </tr>

                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;&nbsp;</td>
                            <td  align="left"><h5 class="texto-negro"><i>Total</i></h5></td>
                            <td align="right">
                                <h4><i><strong id="totalV" class="texto-negro">total</strong></i></h4>
                            </td>
                        </tr>

                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>

                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>

                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>

                    </table>

                </div>					
                <div class="col-lg-5 col-md-5 col-sm-6">
                    <!-- Tiempo del Cliente en espera-->
                    <div class="col-lg-12 col-md-12 col-sm-12">											
                        <p  id="cliente-espera-title" class="titulos-detalles">Tiempo del cliente en espera</p>


                        <div class="col-lg-12 col-md-12 col-sm-12 sombra">
                            <div class="col-lg-7 col-md-7 col-sm-7">
                                <h2 class="banda izquierda">Promedio: <strong id="promedio_tce" class="cantidades-cinta titulos-detalles fontBold"></strong></h2>
                                <h2 class="banda izquierda">Desviación estándar: <strong  id="desviacion_tce" class="cantidades-cinta titulos-detalles fontBold"></strong></h2>
                            </div>
                            <div class="col-lg-5 col-md-5 col-sm-5">
                                <h2 class="banda">Mínimo: <strong id="minimo_tce" class="cantidades-cinta titulos-detalles fontBold"></strong></h2>
                                <h2 class="banda">Máximo: <strong id="maximo_tce" class="cantidades-cinta titulos-detalles fontBold"></strong></h2>
                            </div>
                        </div>


                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div id="client" style="min-width: auto; height: auto; margin: 0 auto" class="sombra_grafica"></div>
                    </div>
                </div>
                <!-- Margen -->
                <div class="col-lg-1 col-md-1 col-sm-0"></div>
            </div>
            <div class="row">	
                <!-- Margen -->
                <div class="col-lg-1 col-md-1 col-sm-0"></div>		
                <!-- Tiempo de cajeros sin atender turnos -->
                <div class="col-lg-5 col-md-5 col-sm-6 border">							
                    <!-- sombreado -->
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        </br><h4 id="tiempo-sin-atender-title" class="titulos-detalles">Cajeros sin atender turnos por día</h4>
                        <div class="col-lg-12 col-md-12 col-sm-12 sombra">
                            <div class="col-lg-7 col-md-7 col-sm-7">
                                <h2 class="banda izquierda">Promedio: <strong id="promedio_tsa" class="cantidades-cinta titulos-detalles fontBold"></strong></h2>
                                <h2 class="banda izquierda">Desviación estándar: <strong  id="desviacion_tsa" class="cantidades-cinta titulos-detalles fontBold"></strong></h2>
                            </div>
                            <div class="col-lg-5 col-md-5 col-sm-5">
                                <h2 class="banda">Mínimo: <strong id="minimo_tsa" class="cantidades-cinta titulos-detalles fontBold"></strong></h2>
                                <h2 class="banda">Máximo: <strong id="maximo_tsa" class="cantidades-cinta titulos-detalles fontBold"></strong></h2>
                            </div>							
                        </div>
                    </div>
                    <!-- Gráfica -->
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div id="cajero" style="width: auto; height: auto; margin: 0 auto" class="sombra_grafica"></div>							
                    </div>						
                </div>		
                <!-- Empleados por día-->	
                <div  class="col-lg-5 col-md-5 col-sm-6 border-empleados" id="empleados">				
                    <h4 id="text-title3" class="titulos-detalles">Empleados por día</h4>							
                    <table class="table-margin">																
                        <tr>
                            <td id="monoEmpleado" rowspan="15"></td>
                            <td rowspan="15">&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            <td id="semanaEmpleado" rowspan="15"></td>
                            <td height="2"></td>
                            <td class="promedio-text"rowspan="15"><strong>Promedio por semana</strong></td>	
                            <td rowspan="15">&nbsp;&nbsp;&nbsp;<strong class="promedio-num" id="promedioV">promedio</strong></td>
                        </tr>													

                        <tr><td><strong class="dia-semana-empleados non" id="lunes"></strong></td></tr>
                        <tr><td height="0"></td></tr>
                        <tr><td><strong class="dia-semana-empleados par" id="martes"></strong></td></tr>
                        <tr><td height="0"></td></tr>
                        <tr><td><strong class="dia-semana-empleados non" id="miercoles"></strong></td></tr>
                        <tr><td height="0"></td></tr>
                        <tr><td><strong class="dia-semana-empleados par" id="jueves"></strong></td></tr>
                        <tr><td height="0"></td></tr>
                        <tr><td><strong class="dia-semana-empleados non" id="viernes"></strong></td></tr>
                        <tr><td height="0"></td></tr>
                        <tr><td><strong class="dia-semana-empleados par" id="sabado"></strong></td></tr>
                        <tr><td height="0"></td></tr>
                        <tr><td><strong class="dia-semana-empleados non" id="domingo"></strong></td></tr>
                        <tr><td height="21"></td></tr>														
                    </table>
                </div>					
                <!-- Margen -->
                <div class="col-lg-1 col-md-1 col-sm-0"></div>
            </div>
        </div>	
        <script type="text/javascript" src="${contextPath}/resource/js/lib/LAB.js"></script>
        <script type="text/javascript">
            var _CONTEXT_PATH = "${pageContext.request.contextPath}";

            $LAB
                    .setOptions({
                        "AlwaysPreserveOrder": true
                    })
                    
                    .script(_CONTEXT_PATH.concat("/resource/js/lib/json2.js"))
                    .script(_CONTEXT_PATH.concat("/resource/js/support/cjcr-asserts.js"))
            
                    
                    .script(_CONTEXT_PATH.concat("/resource/js/support/cjcr-app-core.js")).wait()
                    .script(_CONTEXT_PATH.concat("/resource/js/app/cjcr-app-config.js")).wait()
            
                    .script(_CONTEXT_PATH.concat("/resource/js/builder/cjcr-app-builder.js")).wait()
                    .script(_CONTEXT_PATH.concat("/resource/js/util/cjcr-view-util.js"))

                    .script(_CONTEXT_PATH.concat("/resource/js/lib/jquery.blockUI.js")).wait()
                    .script(_CONTEXT_PATH.concat("/resource/js/app/cjcr-formato.js"))
                    
                    .script(_CONTEXT_PATH.concat("/resource/js/app/cjcr-menu-init.js"))
                    .script(_CONTEXT_PATH.concat("/resource/js/app/cjcr-menu-view.js"))
    
                    .script(_CONTEXT_PATH.concat("/resource/js/client/cjcr-detalles-client.js")).wait()
                    .script(_CONTEXT_PATH.concat("/resource/js/app/cjcr-detalles-init.js")).wait()
                    .script(_CONTEXT_PATH.concat("/resource/js/app/cjcr-detalles-view.js")).wait();
            </script>  
    </body>
</html>