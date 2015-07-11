<%@include file="include.jsp"%>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="${contextPath}/resource/css/lib/jquery-ui-1.10.3.css" rel="stylesheet"/>
        <link href="${contextPath}/resource/css/lib/bootstrap.css" rel="stylesheet"/>
        <link href="${contextPath}/resource/css/app/cjcr-costoxtransac.css" rel="stylesheet"/>
         <title>${appTitle}</title>
    </head>
    <body>
        <div class="container">
            <nav class="navbar navbar-default" role="navigation">
                <div class="navbar-header">
                    <a class="navbar-brand">Costo por Transacci&oacute;n</a>
                </div>
            </nav>

            <div class="col-sm-12 col-md-6 col-lg-6 col-centered">
                <fieldset id="geografiaSet" class="fieldset-group">
                    <legend class="fieldset-label"><h4>Informaci&oacute;n de sesi&oacute;n</h4></legend>
                    <h4 class="text-center"><span class="label label-danger">
                            <span class="glyphicon glyphicon-ban-circle"></span>
                            Sesi&oacute;n inv&aacute;lida</span>
                    </h4>
                    <div class="centered">
                    <a href="home" class="btn btn-link btn-md" role="button">
                        <span class="glyphicon glyphicon-home"></span>
                        Inicio</a>
                    </div>
                </fieldset>
            </div>
        </div>
        <script type="text/javascript" src="${contextPath}/resource/js/lib/LAB.js"></script>
        <script type="text/javascript">
        var _CONTEXT_PATH = "${pageContext.request.contextPath}";
        
        $LAB
            .setOptions({
                "AlwaysPreserveOrder": true
            })
            .script("https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js").wait()
            .script("https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js").wait()
    
            .script(_CONTEXT_PATH.concat("/resource/js/lib/jquery-1.11.0.js")).wait()
            .script(_CONTEXT_PATH.concat("/resource/js/lib/jquery-ui-1.10.3.js"))
            .script(_CONTEXT_PATH.concat("/resource/js/lib/bootstrap.js")).wait()
    </script>
    </body>
</html>
