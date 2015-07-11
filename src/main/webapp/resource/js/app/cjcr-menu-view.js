var App_MenuApp = _package('App.MenuApp');

App_MenuApp.semanaActual;
App_MenuApp.sucursalElegidaId;
App_MenuApp.sucursalElegidaName;

//colores
App_MenuApp.colorVerdeClaro = "rgb(11, 86, 39)";
App_MenuApp.colorVerdefuerte = "rgb(47, 168, 59)";
App_MenuApp.colorRojoClaro = "rgb(177, 12, 20)";
App_MenuApp.colorRojoFuerte = "rgb(247, 110, 80)";
App_MenuApp.colorVerdeTextGraf = '#68b321';
App_MenuApp.colorRojoTextGraf = '#9D2D38';

App_MenuApp.init = function () {
    var _this = App_MenuApp;

    _this.initComponents();
    _this.initState();
};

App_MenuApp.initState = function () {
    
};

App_MenuApp.initComponents = function () {
    var _this = App_MenuApp;
    _this.getVariablesNavegador();
};

App_MenuApp.irAGeneral = function () {

    var _this = App_MenuApp;

    _this.semanaActual = $("#comboSemana").val();
    _this.sucursalElegidaId = "-1";
    _this.sucursalElegidaName = "Datos Generales";
    localStorage.setItem("semanaActual", _this.semanaActual);
    localStorage.setItem("sucursalElegidaId", _this.sucursalElegidaId);
    localStorage.setItem("sucursalElegidaName", _this.sucursalElegidaName);
    
    _this.sucursal(localStorage.getItem("sucursalElegidaId"), localStorage.getItem("sucursalElegidaName"), 'turnos-atendidos-boton', 'turnos-atendidos-boton');
    _this.opcionMenuActivo('turnos-atendidos-boton', 'turnos-atendidos-boton', localStorage.getItem("sucursalElegidaId"));
};

App_MenuApp.semana = function (){
    var _this = App_MenuApp;
    _this.elegirSemana();
    _this.elegirSucursal();
    _this.setVariablesNavegador();
};

App_MenuApp.sucursal = function (idClick, semClick){
    var _this = App_MenuApp;

    _this.sucursalElegidaId = idClick;
    _this.sucursalElegidaName = semClick;
    _this.elegirSemana();
    _this.setVariablesNavegador();
    _this.reorganizarSucursales(_this.sucursalElegidaId, _this.sucursalElegidaName);
};

App_MenuApp.setComboSemana = function (semanaActual) {
    $("#comboSemana").val(semanaActual);
};

App_MenuApp.elegirSemana = function () {
    var _this = App_MenuApp;

    _this.semanaActual = $("#comboSemana").val();
    localStorage.setItem("semanaActual",_this.semanaActual);
};

App_MenuApp.elegirSucursal = function () {
    var _this = App_MenuApp;

    _this.sucursalElegidaId = $("#opcion-principal").attr('value');
    _this.sucursalElegidaName = $("#opcion-principal").text();
    localStorage.setItem("sucursalElegidaId", _this.sucursalElegidaId);
    localStorage.setItem("sucursalElegidaName", _this.sucursalElegidaName);
};

App_MenuApp.setVariablesNavegador = function () {
    var _this = App_MenuApp;
    localStorage.setItem("semanaActual",_this.semanaActual);
    localStorage.setItem("sucursalElegidaId", _this.sucursalElegidaId);
    localStorage.setItem("sucursalElegidaName", _this.sucursalElegidaName);
    console.log("SET VAR LOCAL: ", _this.sucursalElegidaName, " id:", _this.sucursalElegidaId, " semana: ", _this.semanaActual);
    console.log("SET VAR BROWSER: ", _this.sucursalElegidaName, " id:", _this.sucursalElegidaId, " semana: ", _this.semanaActual);
    
};

App_MenuApp.getVariablesNavegador = function () {
    var _this = App_MenuApp;
    if ((localStorage.getItem("sucursalElegidaId")) || 
            (!typeof (localStorage.getItem("sucursalElegidaId"))) ||
            (localStorage.getItem("sucursalElegidaId") !== null)){
        //OBTENER LOS DATOS DEL NAVEGADOR (EXISTEN VARIABLES BROWSER)
        _this.semanaActual =localStorage.getItem("semanaActual");
        _this.sucursalElegidaId = localStorage.getItem("sucursalElegidaId");
        _this.sucursalElegidaName = localStorage.getItem("sucursalElegidaName");
    }else{
        //CARGAR DATOS POR DEFAULT (NO EXISTEN VARIABLES BROWSER)
        _this.semanaActual = $("#comboSemana").val();
        _this.sucursalElegidaId = $("#opcion-principal").attr('value');
        _this.sucursalElegidaName = $("#opcion-principal").text();
        _this.setVariablesNavegador(_this.semanaActual, _this.sucursalElegidaId,_this.sucursalElegidaName );
    }
    console.info('GET - Var BROWSER',_this.semanaActual, _this.sucursalElegidaId,_this.sucursalElegidaName );
};

App_MenuApp.reorganizarSucursales = function (sucId, sucName) {
    var _this = App_MenuApp;
    var sucursales = [];
    var i = 1;
    var marcador = 0;

    //1.-OBTENER LISTA SUCURSALES-GENERAL
    sucursales.push(($("#opcion-principal").text()) + ";" + ($("#opcion-principal").attr('value')));
    $("#listaDeSucursales > .suc > a").each(function () {
        var sucDescAct = $(this).text();
        var idSucAct = $(this).attr('value');
        sucursales.push(sucDescAct + ";" + idSucAct);
        if (sucDescAct === sucName) {
            marcador = i;
        }
        i++;
    });
   
    //2.-REMOVER SUCURSAL SELECCIONADA
    sucursales.splice(marcador, 1);

    //3.-REORDENAR SUCURSALES
    var sucursalesOrdenadas = sucursales.sort();

    //3.1-dividir el arreglo sucursal-id
    var listaOrdenada = [];
    for (var jr in sucursalesOrdenadas) {
        var sucDescOrd = sucursalesOrdenadas[jr].split(";");
        listaOrdenada.push(sucDescOrd);
    }

    //4.-PONER OPCION GENERAL COMO PRIMERA OPCION DE LISTA
    var y;
    for (var index in listaOrdenada) {
        if (listaOrdenada[index][0] === "Datos Generales") {
            y = index;
            break;
        }
    }

    //5.-REORDENAR LA LISTA (Datos Generales - Demás sucursales)
    if (y >= -1 && y !== undefined && y !== null) {
        var datGen = listaOrdenada.splice(y, 1);
        //listaOrdenada.splice(y, 1);
        listaOrdenada.splice(0, 0, datGen[0]);
    }
    
    //Redibujar opcion principal y lista desplegable
    _this.redibujarSeleccionAct(sucName, sucId);
    _this.redibujarListaSucursales(listaOrdenada);
    
    //_this.redibujarMenu();
};

App_MenuApp.redibujarSeleccionAct = function (sucActual, idActual) {
    //Elemento actual en Selección (general-sucursal)
    $("#opcion-principal").text(sucActual);
    $("#opcion-principal").append("<span class='caret'></span>");
    $("#opcion-principal").attr("value", idActual);
};

App_MenuApp.redibujarListaSucursales = function (lista) {
    //REDIBUJAR LISTA DE SUCURSALES
    var j = 0;
    $("#listaDeSucursales > .suc > a").each(function () {
        $(this).text(lista[j][0]);
        $(this).attr("value", lista[j][1]);
        j++;
    });
};

App_MenuApp.redibujarMenu = function () {
    var _this = App_MenuApp;

    $("#opcion-principal").text(_this.sucursalElegidaName);
    $("#opcion-principal").append("<span class='caret'></span>");
    $("#opcion-principal").attr("value", _this.sucursalElegidaId);
};

App_MenuApp.opcionMenuActivo = function (idBoton, idTexto, idSuc){
    var _this = App_MenuApp;
    
    if (idSuc === "-1") {
        $(idBoton).addClass("nav-degradado-verde");
        $(idBoton).removeClass("nav-degradado-rojo");
    } else {
        $(idBoton).removeClass("nav-degradado-verde");
        $(idBoton).addClass("nav-degradado-rojo");
    }
    _this.itemActivoTexto(idTexto);
};

App_MenuApp.itemActivoTexto = function (idTextActive) {
    
    //quitar (class=active) a todos los elementos del menu FOR
    $("#turnos-atendidos").removeClass("active");
    $("#cliente-espera-texto").removeClass("active");
    $("#empleados-atendiendo").removeClass("active");
    $("#tiempo-sin-atender-texto").removeClass("active");
    $("#detalle-completo").removeClass("active");
    //asignar item(text) del elemento asignado
    $(idTextActive).addClass("active");
    
};

App_MenuApp.dibujarMenuInicial = function (idBoton, idTexto){
    var _this = App_MenuApp;
    
    _this.getVariablesNavegador();
    _this.setComboSemana(_this.semanaActual);
    _this.reorganizarSucursales(_this.sucursalElegidaId,_this.sucursalElegidaName);
    _this.opcionMenuActivo(idBoton, idTexto, _this.sucursalElegidaId);  
};