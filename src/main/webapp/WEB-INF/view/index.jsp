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
        <link href="${contextPath}/resource/css/app/cjcr-turnos.css" rel="stylesheet">

        <script src="${contextPath}/resource/js/lib/jquery-2.1.1.min.js"></script>
        <script src="${contextPath}/resource/js/lib/bootstrap.min.js"></script>
        <script src="${contextPath}/resource/js/lib/graficas.js"></script>

        <title>${appTitle}</title>
    </head>
    <body>
        <%@include file="navcontrol.jsp"%>

        <!--DIV DE TURNOS ATENDIDOS-->
        <div class="jumbotron">
        <div class="col-lg-9 col-md-10 col-centered marco" >
            <div class="col-lg-3 col-md-2 col-sm-12 col-xs-12 marco-izquierdo" >
                <div class="div-turnos">
                        <div class="lblTurnosIzq col-centered">TURNOS</div>
                        <div id="turnos" class="turnos-cant-verde col-centered">${turnosAtendidos.turnos}</div>

                        <div class="lblTurnosDer col-centered pequenio">TURNOS VIRTUALES</div>
                        <div id="turnosVirtuales" class="virtuales-cant virtuales-cant-verde col-centered pequenio">${turnosAtendidos.turnosVirtuales}</div>

                        <div class="total  pequenio">TOTAL</div>
                        <div id="turnosTotales" class="totales total-cantidad  pequenio">${turnosAtendidos.total}</div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-8 col-sm-12 col-xs-12 marco-principal"> 
                    <div class="div-grafica col-centered ">    
                        <hr class="linea-izquierda">
                        <hr class="linea-derecha">
                        <div class="circulo-turnos" style="height:0;">
                            <span class="imagen" >
                                <img src="${contextPath}/resource/images/fte_turnosaten.png" />
                            </span>
                        </div>
                        <div id="circularG" ></div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-2 col-sm-6 col-xs-12 marco-derecho">               
                    <div class="div-virtuales" >                     
                        <div class="lblTurnosDer col-centered virtuales-grande">TURNOS VIRTUALES</div>
                        <div class="virtuales-cant virtuales-cant-verde col-centered virtuales-grande">${turnosAtendidos.turnosVirtuales}</div>
                    </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="total virtuales-grande">TOTAL</div>
                    <div class="totales total-cantidad virtuales-grande">${turnosAtendidos.total}</div>
                </div>           
            </div>
        </div> <!--Jumbo-->
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

                    .script(_CONTEXT_PATH.concat("/resource/js/client/cjcr-ta-client.js")).wait()
                    .script(_CONTEXT_PATH.concat("/resource/js/app/cjcr-ta-init.js")).wait()
                    .script(_CONTEXT_PATH.concat("/resource/js/app/cjcr-ta-view.js")).wait();
        </script> 
    </body>
</html>
