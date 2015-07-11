var App_TiempoSinAtenderView = _package('App.TiempoSinAtenderView');

App_TiempoSinAtenderView.idItemActivo = '#tiempo-sin-atender-boton';
App_TiempoSinAtenderView.idItemActivoText = '#tiempo-sin-atender-texto';
App_TiempoSinAtenderView.semanaActual;
App_TiempoSinAtenderView.sucursalElegidaId;
App_TiempoSinAtenderView.sucursalElegidaName;
App_TiempoSinAtenderView.promedio;
App_TiempoSinAtenderView.desviacion;
App_TiempoSinAtenderView.minimo;
App_TiempoSinAtenderView.maximo;
App_TiempoSinAtenderView.dia1;
App_TiempoSinAtenderView.dia2;
App_TiempoSinAtenderView.dia3;
App_TiempoSinAtenderView.dia4;
App_TiempoSinAtenderView.dia5;
App_TiempoSinAtenderView.dia6;
App_TiempoSinAtenderView.dia7;
App_TiempoSinAtenderView.valorDia1;
App_TiempoSinAtenderView.valorDia2;
App_TiempoSinAtenderView.valorDia3;
App_TiempoSinAtenderView.valorDia4;
App_TiempoSinAtenderView.valorDia5;
App_TiempoSinAtenderView.valorDia6;
App_TiempoSinAtenderView.valorDia7;

App_TiempoSinAtenderView.init = function () {
    var _this = App_TiempoSinAtenderView;

    _this.initComponents();
    _this.initState();
};

App_TiempoSinAtenderView.initState = function () {
    var _this = App_TiempoSinAtenderView;
    var _menu = App_MenuApp;
    $('#tiempo-sin-atender-texto').addClass('active');
    $('#tiempo-sin-atender-boton').addClass('nav-degradado-verde');
    
    _menu.dibujarMenuInicial(_this.idItemActivo, _this.idItemActivoText);
    _this.semanaActual =localStorage.getItem("semanaActual");
    _this.sucursalElegidaId = localStorage.getItem("sucursalElegidaId");
    _this.sucursalElegidaName = localStorage.getItem("sucursalElegidaName");
    
    _this.service();
};

App_TiempoSinAtenderView.initComponents = function () {
    var _this = App_TiempoSinAtenderView;
    var _menu = App_MenuApp;

    $("#comboSemana").change(function () {
        _menu.semana(); //VARIABLE CAMBIADA
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

$(window).load(function () {
    //var _this = App_TiempoSinAtenderView;
});

App_TiempoSinAtenderView.getVariablesNavegador = function (){
    var _this = App_TiempoSinAtenderView;
    _this.semanaActual = localStorage.getItem("semanaActual", _this.semanaActual);
    _this.sucursalElegidaId = localStorage.getItem("sucursalElegidaId", _this.sucursalElegidaId);
    _this.sucursalElegidaName = localStorage.getItem("sucursalElegidaName",_this.sucursalElegidaName);
};

App_TiempoSinAtenderView.setVariablesNavegador = function (){
    var _this = App_TiempoSinAtenderView;
    localStorage.setItem("semanaActual", _this.semanaActual);
    localStorage.setItem("sucursalElegidaId",_this.sucursalElegidaId );
    localStorage.setItem("sucursalElegidaName",_this.sucursalElegidaName);
};

//VALORES DE CINTA//
App_TiempoSinAtenderView.mostrarValores = function (){
    var _this = App_TiempoSinAtenderView;
    $("#promedio").text(_this.promedio);
    $("#desviacion").text(_this.desviacion);
    $("#minimo").text(_this.minimo);
    $("#maximo").text(_this.maximo);
};

//GRAFICAR//
App_TiempoSinAtenderView.grafica = function () {
    var _this = App_TiempoSinAtenderView;

    $('#client').highcharts({
        colors: ['#006837'],
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            type: 'category',
            tickLength: 5,
            labels: {
                enabled: true
            }
        },
        yAxis: {
            min: 0,
            //max:550,          
            title: {
                text: 'Minutos',
                style: {
                    fontFamily: 'MyriadPro-Regular, Myriad Pro Regular'
                }
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Minutos:<b>{point.y:.1f}</b>'
        },
        series: [{
                name: 'minutos',
                data: [
                    [_this.dia1, _this.valorDia1],
                    [_this.dia2, _this.valorDia2],
                    [_this.dia3, _this.valorDia3],
                    [_this.dia4, _this.valorDia4],
                    [_this.dia5, _this.valorDia5],
                    [_this.dia6, _this.valorDia6],
                    [_this.dia7, _this.valorDia7]
                ], color: {
                    linearGradient: [100, 300, 100, 100],
                    stops: [
                        [0, _this.color1],
                        [1, _this.color2]
                    ]
                },
                dataLabels: {
                    //align: 'left',
                    enabled: true,
                    rotation: 0,
                    x: 2,
                    y: -5,
                    style: {
                        color: _this.colorTextoGraf,
                        fontSize: '14px',
                        fontFamily: 'MyriadPro-Regular, Myriad Pro Regular',
                        fontWeight: 'bold'
                                //textShadow: '0 0 0px #000000'
                    }
                }
            }]
    });
};

//App_TiempoSinAtenderView.servicio = function () {
//    var _this = App_TiempoSinAtenderView;
//    var _clienteEspera = Client_ClienteEsperaClient;
//    console.info(_this.sucursalElegidaId, _this.semanaActual);
//    _clienteEspera.getClientesEspera(_this.sucursalElegidaId, _this.semanaActual, function (_datos) {
//        if (_datos) {
//            //_this.setValores();
//            //metodo para cargar datos en pantalla
//            console.info(_datos);
//        } else {
//            console.info("no hay datos que mostrar");
//        }
//    });
//};

App_TiempoSinAtenderView.colorear = function () {
    var _this = App_TiempoSinAtenderView;
    var _menu = App_MenuApp;

    _this.getVariablesNavegador();
    if (_this.sucursalElegidaId === '-1') { //VERDE
        _this.colorTextoGraf = _menu.colorVerdeTextGraf;
        _this.color1 = _menu.colorVerdeClaro;
        _this.color2 = _menu.colorVerdefuerte;
        $(".titulos-graficas-barras").addClass("verde-fuerte");
        $(".titulos-graficas-barras").removeClass("rojo-fuerte");
        $(".remarca").addClass("verde-medio");
        $(".remarca").removeClass("rojo");
    } else { //ROJO
        _this.colorTextoGraf = _menu.colorRojoTextGraf;
        _this.color1 = _menu.colorRojoClaro;
        _this.color2 = _menu.colorRojoFuerte;
        $(".titulos-graficas-barras").addClass("rojo-fuerte");
        $(".titulos-graficas-barras").removeClass("verde-fuerte");
        $(".remarca").addClass("rojo");
        $(".remarca").removeClass("verde-medio");
    }
};

App_TiempoSinAtenderView.service = function () {
    var _this = App_TiempoSinAtenderView;
    var _clienteTiempo = Client_TiempoSinAtenderClient;
   
    _clienteTiempo.getTiempoSinAtender(_this.sucursalElegidaId, _this.semanaActual, function (_datos) {
        if (_datos) {
            _this.setValores(_datos);
            _this.colorear();
            _this.mostrarValores();
            _this.grafica();
        } else {
            alert("no hay datos que mostrar");
        }
    });
};

App_TiempoSinAtenderView.setValores = function (_datos) {
    var _this = App_TiempoSinAtenderView;
    
    _this.promedio   = _datos.promedio;
    _this.desviacion = _datos.desviacionEstandar;
    _this.minimo     = _datos.minimo;
    _this.maximo     = _datos.maximo;
    _this.dia1 = _datos.dia1;
    _this.dia2 = _datos.dia2;
    _this.dia3 = _datos.dia3;
    _this.dia4 = _datos.dia4;
    _this.dia5 = _datos.dia5;
    _this.dia6 = _datos.dia6;
    _this.dia7 = _datos.dia7;
    _this.valorDia1 = _datos.valorDia1;
    _this.valorDia2 = _datos.valorDia2;
    _this.valorDia3 = _datos.valorDia3;
    _this.valorDia4 = _datos.valorDia4;
    _this.valorDia5 = _datos.valorDia5;
    _this.valorDia6 = _datos.valorDia6;
    _this.valorDia7 = _datos.valorDia7;
};