document.write('\
\
    <div class = "row titulo">\
      <div class="col-lg-6 col-md-6 col-sm-6">\
        <div class="vcenter">\
          <a href="../turnos atendidos/turnos/generales.html"><h1 class="barraTitulo">Turnador</h1></a>\
        </div>\
      </div>\
      <div class="col-lg-6 col-md-6 col-sm-6 contenedorVertical">\
          <div class="vcenter">\
            <h4 class="welcome">Bienvenido</h4> \
            <h4 class="welcome"><strong>Jorge Enrique Gamboa</strong></h4>\
          </div>\
      </div>\
    </div>\
	<nav class="navbar navbar-default" role="navigation">\
    	<div class="container-fluid">\
            <!-- Collect the nav links, forms, and other content for toggling -->\
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\
              <ul class="nav navbar-nav">\
                <li class="dropdown">\
                  <a  id="opcion-principal" href="#" class="dropdown-toggle" data-toggle="dropdown">Datos Generales<span class="caret"></span></a>\
                  <ul id="myUL" class="dropdown-menu" role="menu">\
                    <li><a id="opcion1" href="#">Villa Ol&iacutempica</a></li>\
                    <li class="divider"></li>\
                    <li><a id="opcion2" href="#">Miramontes</a></li>\
                  </ul>\
                </li>\
              </ul>\
              <form class="navbar-form navbar-left" role="form">\
                <div class="form-inline">\
                  <p class="leyenda-combo">Visualizar la semana:\
                  <select id="comboSemana" class="combo-lista">\
                    <option>33</option>\
                    <option>34</option>\
                  </select></p>\
                </div>\
              </form>\
              <ul class="nav navbar-nav navbar-right">\
                <li>\
                  <p id="cerrarSesion" class="cerrarSesion">Cerrar Sesión\
                    <a href="../turnos atendidos/login/login.html"> <img src="../resource/lib/images/cerrar.png"  height="27" width="27"></a></p>\
                </li>\
            	</ul>\
        	</div>\
    	</div>\
    </nav>\
  	<div class="col-lg-8 col-lg-offset-2">\
      <ul id="barra-navegacion" class="nav nav-justified" align=center>\
        <li id="turnos-atendidos"><a     id="turnos-atendidos-active"     href="../turnos atendidos/turnos/generales.html">Turnos atendidos</a></li>\
        <li id="cliente-espera"><a       id="clienteEsperaActive"         href="../clienteEspera/clienteEspera.html">Cliente en espera</a></li>\
        <li id="empleados-atendiendo"><a id="empleados-atendiendo-active" href="../empleadosAtendiendo/empleadosAtendiendo.html">Empleados atendiendo</a></li>\
        <li id="tiempo-sin-atender"><a   id="tiempo-sin-atender-active"   href="../tiemposSinAtender/tiemposSinAtender.html">Tiempo sin atender</a></li>\
        <li id="detalle-completo"><a     id="detalle-completo-active"     href="../Detalle/detalle_general.html">Detalle completo</a></li>\
      </ul>\
    </div>\
\
\
');