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
        <link href="${contextPath}/resource/css/app/cjcr-clienteEspera.css" rel="stylesheet">

        
        <script src="${contextPath}/resource/js/lib/jquery-2.1.1.min.js"></script>
        <script src="${contextPath}/resource/js/lib/bootstrap.min.js"></script>
        <script src="${contextPath}/resource/js/lib/graficas.js"></script>

        <title>${appTitle}</title>
    </head>
    <body>
        <%@include file="navcontrol.jsp"%>

        <!--BANDA-->
        <div class="col-lg-12 col-md-12 col-sm-12">
            <h1 class="titulos-graficas-barras titulos-barra">Tiempo del cliente en espera</h1>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 sombra">
            <div class="col-lg-8 col-md-8 col-sm-12 col-lg-offset-2 col-md-offset-2">
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <h2 class="banda izquierda">Promedio:   <strong id="promedio" class="remarca"></strong></h2>
                    <h2 class="banda izquierda">Desviación estándar:   <strong  id="desviacion" class="remarca"></strong></h2>
                </div>
                <div class="col-lg-4 col-md-4 col-lg-offset-2 col-lg-offset-2">
                    <h2 class="banda">Mínimo: <strong id="minimo" class="remarca"></strong></h2>
                    <h2 class="banda">Máximo: <strong id="maximo" class="remarca"></strong></h2>
                </div>
            </div>
        </div>
        <!-- GRAFICA-->
        <div class="col-lg-6 col-md-8 col-sm-12 col-centered">
            <div class="col-lg-10 col-md-10 col-sm-8 col-lg-offset-1 col-md-offset-1 col-sm-offset-2 marco-grafica sombra">
                <h1 class="titulos-graficas-barras titulos-grafica">Tiempo promedio del cliente en espera</h1>
                <div id="client" class="grafica"></div>
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
    
                    .script(_CONTEXT_PATH.concat("/resource/js/client/cjcr-clienteespera-client.js")).wait()
                    .script(_CONTEXT_PATH.concat("/resource/js/app/cjcr-clienteespera-init.js")).wait()
                    .script(_CONTEXT_PATH.concat("/resource/js/app/cjcr-clienteespera-view.js")).wait();
            </script>   
    </body>
</html>