<div class = "row titulo">
    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <div class="vcenter">
            <a href="home"><h1 id="ir-a-principal" class="barraTitulo">Turnador</h1></a>
        </div>
    </div>
    <div class="col-lg-6 col-md-6 col-sm-6 col-sm-6 col-xs-12 contenedorVertical">
        <div class="vcenter">
            <h4 class="welcome">Bienvenido</h4> 
            <h4 class="welcome"><strong>Usuario</strong></h4>
        </div>
    </div>
</div>
<nav class="navbar navbar-default" role="navigation">
    <div class="container-fluid">
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li class="dropdown">
                    <a  id="opcion-principal" value="-1" href="#" class="dropdown-toggle" data-toggle="dropdown">Datos Generales<span class="caret"></span></a>
                    <ul id="listaDeSucursales" class="dropdown-menu" role="menu">
                        <c:forEach var="sucursal" items="${sucursales}">
                            <li class="suc" ><a value="${sucursal.key}" href="#">${sucursal.value}</a></li>
                            <li class="divider"></li>
                        </c:forEach>
                    </ul>
                </li>
            </ul>
            <form class="navbar-form navbar-left" role="form">
                <div class="form-inline">
                    <p class="leyenda-combo">Visualizar la semana:
                        <select id="comboSemana" class="combo-lista">
                            <c:forEach var="semana" items="${semanas}">
                                <option value="${semana}">
                                    <c:out value="${semana}"/></option>
                                </c:forEach>
                        </select></p>
                </div>
            </form>
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <p id="cerrarSesion" class="cerrarSesion">Cerrar Sesi&oacute;n
                        <a href="#"> <img src="${contextPath}/resource/images/cerrar.png"  height="27" width="27"></a></p>
                </li>
            </ul>
        </div>
    </div>
</nav>
<div class="col-lg-8 col-lg-offset-2">
    <ul id="barra-navegacion" class="nav nav-justified" align=center>
        <li id="turnos-atendidos-texto"><a id="turnos-atendidos-boton" href="home">Turnos atendidos</a></li>
        <li id="cliente-espera-texto"><a id="cliente-espera-boton"  href="clienteEspera">Cliente en espera</a></li>
        <li id="empleados-atendiendo-texto"><a id="empleados-atendiendo-boton" href="empleadosAtendiendo">Empleados atendiendo</a></li>
        <li id="tiempo-sin-atender-texto"><a id="tiempo-sin-atender-boton"   href="tiempoSinAtender">Tiempo sin atender</a></li>
        <li id="detalle-texto"><a id="detalle-boton"href="detalles">Detalle completo</a></li>
    </ul>
</div>
