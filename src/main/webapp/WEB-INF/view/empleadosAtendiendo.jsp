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

        <!-- DATA TABLES CSS -->
        <link type="text/css" href="${contextPath}/resource/css/app/jquery.dataTables.css" rel="stylesheet">
        <link type="text/css" href="${contextPath}/resource/css/app/empleadopordia.css" rel="stylesheet">

        <script src="${contextPath}/resource/js/lib/jquery-2.1.1.min.js"></script>
        <script src="${contextPath}/resource/js/lib/bootstrap.min.js"></script>

        <title>${appTitle}</title>
    </head>
    <body>
        <%@include file="navcontrol.jsp"%>

        <div class="jumbotron">
            <!-- Jumbotron Work AREA ******************************************-->         
            <div class="col-lg-12 col-md-12 col-sm-12 col-sm-12">
                <h1 id="titulo" class="titulos-graficas-barras titulos-barra verde-fuerte">Empleados por día</h1>
            </div>
            <div id="DivTabla" class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12 col-xs-12 sombra"> <!-- Inicia Div de la tabla -->

                <div class="col-lg-11 col-md-11 col-sm-12 col-centered">
                    <!--LUNES-->
                    <div id="lunes" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 columna-dia borde-columna green-tooltip" data-placement="left">
                        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12 columna-datos dias nones">LUNES</div>
                        <div id="dia-lunes" class="col-lg-8 col-md-8 col-sm-8 col-xs-12 columna-datos"></div>
                        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-0 columna-datos"></div>
                    </div>
                    <!--MARTES-->
                    <div id="martes" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 columna-dia borde-columna green-tooltip" data-placement="right">
                        <div class="col-xs-12 columna-datos dias pares-pequenio">MARTES</div>
                        <div id="dia-martes" class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12 columna-datos"></div>
                        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12 columna-datos dias pares">MARTES</div>
                    </div>
                    <!--MIERCOLES-->
                    <div id="miercoles" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 columna-dia borde-columna green-tooltip" data-placement="left">
                        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12 columna-datos dias nones">MI&Eacute;RCOLES</div>
                        <div id="dia-miercoles" class="col-lg-8 col-md-8 col-sm-8 col-xs-12 columna-datos"></div>
                        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-0 columna-datos"></div>
                    </div>
                    <!--JUEVES-->
                    <div id="jueves" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 columna-dia borde-columna green-tooltip" data-placement="right">
                        <div class="col-xs-12 columna-datos dias pares-pequenio">JUEVES</div>
                        <div id="dia-jueves" class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12 columna-datos"></div>
                        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12 columna-datos dias pares">JUEVES</div>
                    </div>
                    <!--VIERNES-->
                    <div id="viernes" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 columna-dia borde-columna green-tooltip" data-placement="left">
                        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12 columna-datos dias nones">VIERNES</div>
                        <div id="dia-viernes" class="col-lg-8 col-md-8 col-sm-8 col-xs-12 columna-datos"></div>
                        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-0 columna-datos"></div>
                    </div>
                    <!--SABADO-->
                    <div id="sabado" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 columna-dia borde-columna green-tooltip" data-placement="right">
                        <div class="col-xs-12 columna-datos dias pares-pequenio">S&Aacute;BADO</div>
                        <div id="dia-sabado" class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12 columna-datos"></div>
                        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12 columna-datos dias pares">S&Aacute;BADO</div>
                    </div>
                    <!--DOMINGO-->
                    <div id="domingo" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 columna-dia green-tooltip" data-placement="left">
                        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12 columna-datos dias nones">DOMINGO</div>
                        <div id="dia-domingo" class="col-lg-8 col-md-8 col-sm-8 col-xs-12 columna-datos"></div>
                        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-0 columna-datos"></div>
                    </div>
                    
                    <div class="col-lg-12 columna-sobra"></div>
                </div>
            </div><!--FIN DE MACARENOS-->
        </div><!-- Fin Div de la tabla -->
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

                    //.script(_CONTEXT_PATH.concat("/resource/js/lib/jquery.dataTables.js"))

                    .script(_CONTEXT_PATH.concat("/resource/js/client/cjcr-emplatend-client.js")).wait()
                    .script(_CONTEXT_PATH.concat("/resource/js/app/cjcr-emplatend-init.js")).wait()
                    .script(_CONTEXT_PATH.concat("/resource/js/app/cjcr-emplatend-view.js")).wait();
        </script>   
    </body>
</html>
