var App_TurnosAtendiosView = _package('App.TurnosAtendiosView');

App_TurnosAtendiosView.idItemActivo = '#turnos-atendidos-boton';
App_TurnosAtendiosView.idItemActivoText = '#turnos-atendidos-texto';

App_TurnosAtendiosView.colorTextoGraf;//Color del texto de la grafica
App_TurnosAtendiosView.color1;       //Color1 degradado de grafica
App_TurnosAtendiosView.color2;       //Color2 degradado de grafica

App_TurnosAtendiosView.semanaActual;
App_TurnosAtendiosView.sucursalElegidaId;
App_TurnosAtendiosView.sucursalElegidaName;

App_TurnosAtendiosView.turnos;
App_TurnosAtendiosView.turnosF;
App_TurnosAtendiosView.virtuales;
App_TurnosAtendiosView.virtualesF;
App_TurnosAtendiosView.totales;
App_TurnosAtendiosView.totalF;

App_TurnosAtendiosView.init = function (){
    var _this = App_TurnosAtendiosView;
    
    _this.initComponents();
    _this.initState();
};

App_TurnosAtendiosView.initState = function() {
    var _this = App_TurnosAtendiosView;
    var _menu = App_MenuApp;
    
    $('#turnos-atendidos-texto').addClass('active');
    $('#turnos-atendidos-boton').addClass('nav-degradado-verde');
    
    _menu.dibujarMenuInicial(_this.idItemActivo, _this.idItemActivoText);
    _this.getVariablesNavLocal();
    
    _this.service();
};

App_TurnosAtendiosView.initComponents = function () {
    var _this = App_TurnosAtendiosView;
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
        _this.getVariablesNavLocal();
        _menu.sucursal(_this.sucursalElegidaId, _this.sucursalElegidaName, _this.idItemActivo, _this.idItemActivoText);
        _menu.opcionMenuActivo(_this.idItemActivo, _this.idItemActivoText, _this.sucursalElegidaId);
        _this.service();
    });
};

App_TurnosAtendiosView.getVariablesNavLocal = function (){
    var _this = App_TurnosAtendiosView;
    
    _this.semanaActual =localStorage.getItem("semanaActual");
    _this.sucursalElegidaId = localStorage.getItem("sucursalElegidaId");
    _this.sucursalElegidaName = localStorage.getItem("sucursalElegidaName");
};

//CUANDO LA PAGINA ESTA LISTA//
$(window).load(function () {


});

App_TurnosAtendiosView.cargarDatosService = function (datosService){
    var _this = App_TurnosAtendiosView;
    
    var turnos = datosService.turnos;
    var virtuales = datosService.turnosVirtuales;
    var totales = datosService.total;

    var turnosF = new format(turnos);
    var turnosL = turnosF.formato(0, true);
    var virtualesF = new format(virtuales);
    var virtualesL = virtualesF.formato(0, true);
    var totalesF = new format(totales);
    var totalesL = totalesF.formato(0, true);
    
    _this.setValores(turnosL, virtualesL, totalesL);
    _this.grafica(turnos, virtuales);

};

App_TurnosAtendiosView.setValores = function (turnosL, virtualesL, totalesL) {
    var _this = App_TurnosAtendiosView;
    //$("#turnos").text(_this.turnos);
    $("#turnos").text(turnosL).slideUp(0).delay(350).slideDown(250);
    //$(".virtuales-cant").text(_this.virtuales).slideUp(150).delay(500).slideDown(300);
    $(".virtuales-cant").text(virtualesL);
    //$(".totales").text(_this.totales).delay(000).fadeIn(3000);
    $(".totales").text(totalesL);
};

App_TurnosAtendiosView.grafica = function (turnos, virtuales) {
    var _this = App_TurnosAtendiosView;
    $('#circularG').highcharts({
        colors: [_this.color1, _this.color2],
        /*style: {
         fontFamily: 'MyriadPro-Regular, Myriad Pro Regular',
         fontSize: '2px'
         },*/
        chart: {
            type: 'pie'
        },
        title: {
            text: '',
        },
        plotOptions: {
            pie: {
                innerSize: 250,
                //borderColor: '#8D9A93',
                //borderWidth: 6,
                allowPointSelect: true,
                dataLabels: {
                    enabled: false,
                },
            }
        },
        series: [{
                name: 'Turnos',
                data: [
                    ['Turnos Virtuales', virtuales],
                    ['Turnos', turnos]
                ]
            }]
    });
};

//APLICAR ESTILOS GENERALES-VERDES
App_TurnosAtendiosView.cambiaEstilosVerdes = function () {
    var _this = App_TurnosAtendiosView;
    _this.graficaVerde();
    $("#titulo").addClass("verde-fuerte");
    $("#titulo").removeClass("rojo-fuerte");
    $("#turnos").addClass("verde");
    $("#turnos").removeClass("naranja");
    $(".virtuales-cant").addClass("verde-fuerte");
    $(".virtuales-cant").removeClass("rojo-fuerte");
    $("#turnos-atendidos-active").addClass("nav-degradado-verde");
    $("#turnos-atendidos-active").removeClass("nav-degradado-rojo");
};

//APLICAR ESTILOS DETALLES-ROJOS
App_TurnosAtendiosView.cambiaEstilosRojos = function () {
    var _this = App_TurnosAtendiosView;
    _this.graficaRoja();
    $("#titulo").addClass("rojo-fuerte");
    $("#titulo").removeClass("verde-fuerte");
    $("#turnos").removeClass("verde");
    $("#turnos").addClass("naranja");
    $(".virtuales-cant").removeClass("verde-fuerte");
    $(".virtuales-cant").addClass("rojo-fuerte");

    $("#turnos-atendidos-active").removeClass("nav-degradado-verde");
    $("#turnos-atendidos-active").addClass("nav-degradado-rojo");
};

App_TurnosAtendiosView.graficaRoja = function() {
    var _this = App_TurnosAtendiosView;
    _this.colorearGrafica('#9D2D38', "rgb(202, 37, 45)","rgb(254, 154, 43)");
};

App_TurnosAtendiosView.graficaVerde = function() {
    var _this = App_TurnosAtendiosView;
    _this.colorearGrafica('#68b321', "rgb(0, 104, 55)","rgb(178, 217, 86)");
};

App_TurnosAtendiosView.colorear = function (colorTexto, color1, color2){
    var _this = App_TurnosAtendiosView;
    
    if (_this.sucursalElegidaId === '-1') { //VERDE
        _this.graficaVerde();
        _this.cambiaEstilosVerdes();
    }else{
        _this.graficaRoja();
        _this.cambiaEstilosRojos();
    }
};

App_TurnosAtendiosView.colorearGrafica = function (colorTexto, color1, color2){
    var _this = App_TurnosAtendiosView;
    
    _this.colorTextoGraf = colorTexto;
    _this.color1 = color1;
    _this.color2 = color2;
};

App_TurnosAtendiosView.service = function (){
    var _this = App_TurnosAtendiosView;
    var _cliente = Client_TurnosAtendidosClient;
    console.log(_this.sucursalElegidaId,":", _this.semanaActual);
    _cliente.getTurnosAtendidos(_this.sucursalElegidaId, _this.semanaActual, function(_datos) {
        if(_datos){
            _this.colorear();
            _this.cargarDatosService(_datos);
        }else{
            alert("no hay datos que mostrar");
        }
    });
};