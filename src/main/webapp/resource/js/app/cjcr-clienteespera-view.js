var App_ClienteEsperaView = _package('App.ClienteEsperaView');

App_ClienteEsperaView.idItemActivo = '#cliente-espera-boton';
App_ClienteEsperaView.idItemActivoText = '#cliente-espera-texto';
App_ClienteEsperaView.semanaActual;
App_ClienteEsperaView.sucursalElegidaId;
App_ClienteEsperaView.sucursalElegidaName;

App_ClienteEsperaView.init = function () {
    var _this = App_ClienteEsperaView;

    _this.initComponents();
    _this.initState();
};

App_ClienteEsperaView.initState = function () {
    var _this = App_ClienteEsperaView;
    var _menu = App_MenuApp;
    $('#cliente-espera-texto').addClass('active');
    $('#cliente-espera-boton').addClass('nav-degradado-verde');
    
    _menu.dibujarMenuInicial(_this.idItemActivo, _this.idItemActivoText);
    _this.semanaActual =localStorage.getItem("semanaActual");
    _this.sucursalElegidaId = localStorage.getItem("sucursalElegidaId");
    _this.sucursalElegidaName = localStorage.getItem("sucursalElegidaName"); 

    _this.service();
};

App_ClienteEsperaView.initComponents = function () {
    var _this = App_ClienteEsperaView;
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

//CUANDO LA PAGINA ESTA LISTA//
$(window).load(function () {
//    var _this = App_ClienteEsperaView;
//    var _menu = App_MenuApp;
});

App_ClienteEsperaView.getVariablesNavegador = function (){
    var _this = App_ClienteEsperaView;
    _this.semanaActual = localStorage.getItem("semanaActual", _this.semanaActual);
    _this.sucursalElegidaId = localStorage.getItem("sucursalElegidaId", _this.sucursalElegidaId);
    _this.sucursalElegidaName = localStorage.getItem("sucursalElegidaName",_this.sucursalElegidaName);
};

App_ClienteEsperaView.setVariablesNavegador = function (){
    var _this = App_ClienteEsperaView;
    localStorage.setItem("semanaActual", _this.semanaActual);
    localStorage.setItem("sucursalElegidaId",_this.sucursalElegidaId );
    localStorage.setItem("sucursalElegidaName",_this.sucursalElegidaName);
};

App_ClienteEsperaView.service = function () {
    var _this = App_ClienteEsperaView;
    var _clienteEspera = Client_ClienteEsperaClient;
   
    _clienteEspera.getClientesEspera(_this.sucursalElegidaId, _this.semanaActual, function (_datos) {
        if (_datos) {
            _this.colorear();
            _this.mostrarValores(_datos);
            _this.grafica(_datos);
        } else {
            alert("no hay datos que mostrar");
        }
    });
};

App_ClienteEsperaView.colorear = function () {
    var _this = App_ClienteEsperaView;
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
//VALORES DE CINTA//
App_ClienteEsperaView.mostrarValores = function (_datos){
    $("#promedio").text(_datos.promedio);
    $("#desviacion").text(_datos.desviacionEstandar);
    $("#minimo").text(_datos.minimo);
    $("#maximo").text(_datos.maximo);
};

//GRAFICAR//
App_ClienteEsperaView.grafica = function (_datos) {
    var _this = App_ClienteEsperaView;

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
                    [_datos.dia1,_datos.valorDia1],
                    [_datos.dia2,_datos.valorDia2],
                    [_datos.dia3,_datos.valorDia3],
                    [_datos.dia4,_datos.valorDia4],
                    [_datos.dia5,_datos.valorDia5],
                    [_datos.dia6,_datos.valorDia6],
                    [_datos.dia7,_datos.valorDia7]
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