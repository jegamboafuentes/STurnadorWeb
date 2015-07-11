var App_DetallesView = _package('App.DetallesView');

App_DetallesView.idItemActivo = '#detalle-boton';
App_DetallesView.idItemActivoText = '#detalle-texto';
App_DetallesView.semanaActual;
App_DetallesView.sucursalElegidaId;
App_DetallesView.sucursalElegidaName;

App_DetallesView.colorTextoGraf = '#9D2D38';
App_DetallesView.color1GraficaBarras;
App_DetallesView.color2GraficaBarras;

App_DetallesView.color1GraficaCircular;
App_DetallesView.color2GraficaCircular;

App_DetallesView.colorTituloGraficaBarras = '#006837';

App_DetallesView.init = function () {
    var _this = App_DetallesView;

    _this.initComponents();
    _this.initState();
};

App_DetallesView.initState = function () {
    var _this = App_DetallesView;
    var _menu = App_MenuApp;
    
    $('#detalle-texto').addClass('active');
    $('#detalle-boton').addClass('nav-degradado-verde');
    
    _menu.dibujarMenuInicial(_this.idItemActivo, _this.idItemActivoText);
    _this.getVariablesNavLocal();
    
    _this.service();
};

App_DetallesView.initComponents = function () {
    var _this = App_DetallesView;
    var _menu = App_MenuApp;

    $("#comboSemana").change(function () {
        _menu.semana();
        _menu.opcionMenuActivo(_this.idItemActivo, _this.idItemActivoText, _this.sucursalElegidaId);
        _this.service();
    });
    $("#listaDeSucursales li a").click(function () {
        _this.sucursalElegidaId = $(this).attr('value');
        _this.sucursalElegidaName = $(this).text();
        _menu.sucursal(_this.sucursalElegidaId, _this.sucursalElegidaName, _this.idItemActivo, _this.idItemActivoText);
        _menu.opcionMenuActivo(_this.idItemActivo, _this.idItemActivoText, _this.sucursalElegidaId);
        _this.service();
    });

    $("#ir-a-principal").click(function () {
        var _menu = App_MenuApp;

        _menu.irAGeneral();
    });
};

App_DetallesView.getVariablesNavLocal = function (){
    var _this = App_DetallesView;
    
    _this.semanaActual =localStorage.getItem("semanaActual");
    _this.sucursalElegidaId = localStorage.getItem("sucursalElegidaId");
    _this.sucursalElegidaName = localStorage.getItem("sucursalElegidaName");
};

$(window).load(function () {
    //var _this = App_DetallesView;
});

App_DetallesView.service = function () {
    var _this = App_DetallesView;
    var _clienteDetalles = Client_DetallesClient;
   
    _clienteDetalles.getDetalles(_this.sucursalElegidaId, _this.semanaActual, function (_datos) {
        if (_datos) {
            _this.colorear();
            _this.rellenaVista(_datos);
        } else {
            alert("no hay datos que mostrar");
        }
    });
};

App_DetallesView.rellenaVista = function (_datos) {
    var _this = App_DetallesView;
    
    _this.turnosAtendidos(_datos.turnosAtenidos);
    _this.tiempoClienteEspera(_datos.clienteEnEspera);
    _this.tiempoSinAtender(_datos.tiempoSinAtender);
    _this.empleadosAtendiendo(_datos.empleadosAtendiendo);
};

App_DetallesView.empleadosAtendiendo = function (_datos) {
    var _this = App_DetallesView;
    
    $("#lunes").text(_datos.lunes);
    $("#martes").text(_datos.martes);
    $("#miercoles").text(_datos.miercoles);
    $("#jueves").text(_datos.jueves);
    $("#viernes").text(_datos.viernes);
    $("#sabado").text(_datos.sabado);
    $("#domingo").text(_datos.domingo);
    $("#promedioV").text('10.5');
};

App_DetallesView.tiempoSinAtender = function (_datos) {
    var _this = App_DetallesView;
    var tituloGrafica = 'Tiempo promedio de cajeros sin atender turnos';
    var ejeY = 'Minutos';
    var idGrafica = '#cajero';
    
    $("#promedio_tsa").text(_datos.promedio);
    $("#desviacion_tsa").text(_datos.desviacionEstandar);
    $("#minimo_tsa").text(_datos.minimo);
    $("#maximo_tsa").text(_datos.maximo);
    _this.graficaBarras(_datos, tituloGrafica,ejeY,idGrafica);
};

App_DetallesView.tiempoClienteEspera = function (_datos) {
    var _this = App_DetallesView;
    var tituloGrafica = 'Tiempo promedio del cliente en espera';
    var ejeY = 'Minutos';
    var idGrafica = '#client';
    
    $("#promedio_tce").text(_datos.promedio);
    $("#desviacion_tce").text(_datos.desviacionEstandar);
    $("#minimo_tce").text(_datos.minimo);
    $("#maximo_tce").text(_datos.maximo);
    _this.graficaBarras(_datos, tituloGrafica,ejeY,idGrafica);
};

App_DetallesView.turnosAtendidos = function (_datos){
    var _this = App_DetallesView;

    var turnosTemp = new format(_datos.turnos);
    var turnosFormat = turnosTemp.formato(0, true);

    var turnosFormatVirtualesTemp = new format(_datos.turnosVirtuales);
    var turnosFormatVirtuales = turnosFormatVirtualesTemp.formato(0, true);

    //_this.total = _datos.turnosAtenidos.total;
    var turnosFormatTotalTemp = new format(_datos.total);
    var turnosFormatTotal = turnosFormatTotalTemp.formato(0, true);

    $("#turnosV").text(turnosFormat);
    $("#turnosVir").text(turnosFormatVirtuales);
    $("#totalV").text(turnosFormatTotal);
    
    var datosGraficaCircular = {
        "graficaCircular": {
            "turnos": _datos.turnos,
            "turnosVirtuales": _datos.turnosVirtuales
        }
    };
    _this.graficaCircular(datosGraficaCircular);
};

App_DetallesView.graficaCircular = function (_datos){
    var _this = App_DetallesView;
    $('#circularG').highcharts({
        colors: [_this.color1GraficaCircular, _this.color2GraficaCircular],
        chart: {
            type: 'pie'
        },
        title: {
            text: ''
        },
        plotOptions: {
            pie: {
                innerSize: 170,
                dataLabels: {
                    enabled: false,
                },
            },
        },
        series: [{
                name: 'Turnos',
                data: [
                    ['Turnos Virtuales', _datos.graficaCircular.turnosVirtuales],
                    ['Turnos', _datos.graficaCircular.turnos]
                ],
            }]
    });
};

App_DetallesView.graficaBarras = function (_datos, tituloGrafica, tituloEjeY, id){
    var _this = App_DetallesView;	
    
    $(id).highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: tituloGrafica,
			style:{
				color: _this.colorTituloGraficaBarras
			}
        },				
        xAxis: {
            type: 'category'
        },
        yAxis: {
			title: {
                text: tituloEjeY
            }
        },
        tooltip: {
            pointFormat: 'Minutos:<b>{point.y:.1f}</b>'
        },
        series: [{
            name: 'minutos',
            data: [
                [_datos.dia1,_datos.valorDia1],
                [_datos.dia2,_datos.valorDia2],
                [_datos.dia3,_datos.valorDia3],
                [_datos.dia4,_datos.valorDia4],
                [_datos.dia5,_datos.valorDia5],
                [_datos.dia6,_datos.valorDia6],
                [_datos.dia7,_datos.valorDia7]
            ],
			color: {
                linearGradient: [100, 300, 100, 100],
                stops: [
                    [0, _this.color1GraficaBarras],
                    [1, _this.color2GraficaBarras]
                ]
            },
            dataLabels: {
			   x: 2,
               y: -10,
			   style: {                    
				color: _this.colorTituloGraficaBarras
				}
            }
        }]
    });
};

App_DetallesView.colorear = function () {
    var _this = App_DetallesView;
    var _menu = App_MenuApp;
   
    _this.getVariablesNavegador();
    if (_this.sucursalElegidaId === '-1') { //VERDE
        $('#cturnos').html("<img src=\"resource/images/circulo_verde01.png\">");
        $('#cturnos2').html("<img src=\"resource/images/circulo_verde02.png\">");
        $('#monoEmpleado').html("<img src=\"resource/images/p_gde_verde_200.png\">");
        $('#semanaEmpleado').html("<img src=\"resource/images/semana_v2.png\">");  
        
        _this.color1GraficaCircular = "rgb(178, 217, 86)";
        _this.color2GraficaCircular = "rgb(0, 104, 55)";
                
        _this.colorTextoGraf = _menu.colorVerdeTextGraf;
        _this.color1GraficaBarras = _menu.colorVerdeClaro;
        _this.color2GraficaBarras = _menu.colorVerdefuerte;

        _this.colorTituloGraficaBarras= '#006837';

        $(".titulos-detalles").addClass("verde-fuerte");
        $(".titulos-detalles").removeClass("rojo-fuerte");

        $(".cantidades-cinta").addClass("verde-fuerte");
        $(".cantidades-cinta").removeClass("rojo-fuerte");
        
        $(".dia-semana-empleados.non").addClass("verde-fuerte");
        $(".dia-semana-empleados.par").addClass("verde");
        $(".dia-semana-empleados.non").removeClass("rojo-fuerte");
        $(".dia-semana-empleados.par").removeClass("naranja");

    } else {
        $('#cturnos').html("<img src=\"resource/images/circulo_rojo02.png\">");
        $('#cturnos2').html("<img src=\"resource/images/circulo_rojo01.png\">");
        $('#monoEmpleado').html("<img src=\"resource/images/p_gde_rojo_180.png\">");
        $('#semanaEmpleado').html("<img src=\"resource/images/semana_r2.png\">");
        
        _this.color1GraficaCircular  = "rgb(202, 37, 45)";
        _this.color2GraficaCircular  = "rgb(254, 154, 43)";
        
        _this.colorTextoGraf = _menu.colorRojoTextGraf;
        _this.color1GraficaBarras = _menu.colorRojoClaro;
        _this.color2GraficaBarras = _menu.colorRojoFuerte;

        _this.colorTituloGraficaBarras= '#9d2d38';

        $(".titulos-detalles").addClass("rojo-fuerte");
        $(".titulos-detalles").removeClass("verde-fuerte");

        $(".cantidades-cinta").addClass("rojo-fuerte");
        $(".cantidades-cinta").removeClass("verde-fuerte");
        
        $(".dia-semana-empleados.non").addClass("rojo-fuerte");
        $(".dia-semana-empleados.par").addClass("naranja");
        $(".dia-semana-empleados.non").removeClass("verde-fuerte");
        $(".dia-semana-empleados.par").removeClass("verde");
    }
};

App_DetallesView.getVariablesNavegador = function (){
    var _this = App_DetallesView;
    _this.semanaActual = localStorage.getItem("semanaActual", _this.semanaActual);
    _this.sucursalElegidaId = localStorage.getItem("sucursalElegidaId", _this.sucursalElegidaId);
    _this.sucursalElegidaName = localStorage.getItem("sucursalElegidaName",_this.sucursalElegidaName);
};