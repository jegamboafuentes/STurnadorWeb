var App_EmpAtendView = _package('App.EmpAtendView');

App_EmpAtendView.idItemActivo = '#empleados-atendiendo-boton';
App_EmpAtendView.idItemActivoText = '#empleados-atendiendo-texto';
App_EmpAtendView.sucursalElegidaId;
App_EmpAtendView.sucursalElegidaName;
App_EmpAtendView.semanaActual;

App_EmpAtendView.tiempo = 500;
App_EmpAtendView.lunes;
App_EmpAtendView.martes;
App_EmpAtendView.miercoles;
App_EmpAtendView.jueves;
App_EmpAtendView.viernes;
App_EmpAtendView.sabado;
App_EmpAtendView.domingo;

App_EmpAtendView.init = function () {
    var _this = App_EmpAtendView;

    _this.initComponents();
    _this.initState();
};

App_EmpAtendView.initState = function () {
    var _this = App_EmpAtendView;
    var _menu = App_MenuApp;
    
    $('#empleados-atendiendo-texto').addClass('active');
    $('#empleados-atendiendo-boton').addClass('nav-degradado-verde');
    
    _menu.dibujarMenuInicial(_this.idItemActivo, _this.idItemActivoText);
    _this.semanaActual =localStorage.getItem("semanaActual");
    _this.sucursalElegidaId = localStorage.getItem("sucursalElegidaId");
    _this.sucursalElegidaName = localStorage.getItem("sucursalElegidaName");    
    _this.creaMacarenos();
    _this.service();
};

App_EmpAtendView.initComponents = function () {
    var _this = App_EmpAtendView;
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
    
    $(".columna-dia").hover(function (){
        $(this).css("background-color", "#F5F5F5");
    }, function (){
        $(this).css("background-color", "#FFFFFF");
    });
};

$(window).load(function() {
    //var _this = App_EmpAtendView;
});

App_EmpAtendView.service = function () {
    var _this = App_EmpAtendView;
    var _clientEmpAtend = Client_EmpAtenClient;
    
    _clientEmpAtend.getEmpAtend(_this.sucursalElegidaId, _this.semanaActual, function (_datos) {
        if (_datos) {
            _this.setValores(_datos);
            _this.llenar();         
        } else {
            console.info("Error, no hay datos que mostrar");
        }
    });
};

App_EmpAtendView.setValores = function (_datos){
    var _this = App_EmpAtendView;

    _this.lunes = _datos.lunes;
    _this.martes = _datos.martes;
    _this.miercoles = _datos.miercoles;
    _this.jueves = _datos.jueves;
    _this.viernes = _datos.viernes;
    _this.sabado = _datos.sabado;
    _this.domingo = _datos.domingo;
};

App_EmpAtendView.creaMacarenos = function () {
    var imgGris = ' src=\"resource/images/p0.png\">';
    console.info("crea macarenos");
    for (var i = 1; i <= 10; i++) {
        var lun = "lun" + i;
        var mar = "mar" + i;
        var mie = "mie" + i;
        var jue = "jue" + i;
        var vie = "vie" + i;
        var sab = "sab" + i;
        var dom = "dom" + i;
        $('#dia-lunes').append("<span class='macarenos'><img id='"+ lun + "'/></span>");
        $('#dia-martes').append("<span class='macarenos'><img id='"+ mar + "'/></span>");        
        $('#dia-miercoles').append("<span class='macarenos'><img id='"+ mie + "'/></span>");
        $('#dia-jueves').append("<span class='macarenos'><img id='"+ jue + "'/></span>");
        $('#dia-viernes').append("<span class='macarenos'><img id='"+ vie + "'/></span>");
        $('#dia-sabado').append("<span class='macarenos'><img id='"+ sab + "'/></span>");
        $('#dia-domingo').append("<span class='macarenos'><img id='"+ dom + "'/></span>");
    }
};

App_EmpAtendView.llenar = function () {
    var _this = App_EmpAtendView;
    console.info("llenar tabla");
    var diasTip = {
        lunT: 'Lunes',
        lunV: _this.lunes,
        marT: 'Martes',
        marV: _this.martes,
        mieT: 'Mi&eacute;rcoles',
        mieV: _this.miercoles,
        jueT: 'Jueves',
        jueV: _this.jueves,
        vieT: 'Viernes',
        vieV: _this.viernes,
        sabT: 'S&aacute;bado',
        sabV: _this.sabado,
        domT: 'Domingo',
        domV: _this.domingo
    };
    _this.toolTips(diasTip);
    
    var img;
    var imgGris = "resource/images/p0.png";
    
    if (localStorage.getItem("sucursalElegidaId") === '-1'){
        img = "resource/images/p1.png";
    }else{
        img = "resource/images/p2.png";
    }

    var time = 10;
    var timeFadeIn = 250;    
    var incrementoFadeIn = 250;
    var timeSlide = 50;
    
    for (var i = 1; i <= 10; i++) {
        var lun = "#lun" + i;
        var mar = "#mar" + i;
        var mie = "#mie" + i;
        var jue = "#jue" + i;
        var vie = "#vie" + i;
        var sab = "#sab" + i;
        var dom = "#dom" + i;
        if (_this.lunes >= i) {
            $(lun).attr("src", img).slideUp(timeSlide).delay(time).fadeIn(timeFadeIn);
        } 
        else {
            $(lun).attr("src", imgGris).slideUp(timeSlide).delay(time).fadeIn(timeFadeIn);
        }
        if (_this.martes >= i) {
            $(mar).attr("src", img).slideUp(timeSlide).delay(time).fadeIn(timeFadeIn);
        } else {
            $(mar).attr("src", imgGris).slideUp(timeSlide).delay(time).fadeIn(timeFadeIn);
        }
        if (_this.miercoles >= i) {
            $(mie).attr("src", img).slideUp(timeSlide).delay(time).fadeIn(timeFadeIn);
        } else {
            $(mie).attr("src", imgGris).slideUp(timeSlide).delay(time).fadeIn(timeFadeIn);
        }
        if (_this.jueves >= i) {
            $(jue).attr("src", img).slideUp(timeSlide).delay(time).fadeIn(timeFadeIn);
        } else {
            $(jue).attr("src", imgGris).slideUp(timeSlide).delay(time).fadeIn(timeFadeIn);
        }
        if (_this.viernes >= i) {
            $(vie).attr("src", img).slideUp(timeSlide).delay(time).fadeIn(timeFadeIn);
        } else {
            $(vie).attr("src", imgGris).slideUp(timeSlide).delay(time).fadeIn(timeFadeIn);
        }
        if (_this.sabado >= i) {
            $(sab).attr("src", img).slideUp(timeSlide).delay(time).fadeIn(timeFadeIn);
        } else {
            $(sab).attr("src", imgGris).slideUp(timeSlide).delay(time).fadeIn(timeFadeIn);
        }
        if (_this.domingo >= i) {
            $(dom).attr("src", img).slideUp(timeSlide).delay(time).fadeIn(timeFadeIn);
        } else {
            $(dom).attr("src", imgGris).slideUp(timeSlide).delay(time).fadeIn(timeFadeIn);
        }
        timeFadeIn += incrementoFadeIn;
    }
    _this.colorear();
};

//APLICAR ESTILOS GENERALES-VERDES
App_EmpAtendView.colorear = function() {
    var _this = App_EmpAtendView;
    if (_this.sucursalElegidaId === '-1'){
        _this.cambiaEstilosVerdes();
    }else{
        _this.cambiaEstilosRojos();
    }
};

App_EmpAtendView.cambiaEstilosVerdes = function() {
    
    $("#titulo").removeClass("titulos-graficas-barras titulos-barra rojo-fuerte");
    $("#titulo").addClass("titulos-graficas-barras titulos-barra verde-fuerte");
    
    $(".dias").addClass("verde-empleados");
    $(".dias").removeClass("rojo-empleados");
    
    $(".columna-dia").addClass("green-tooltip");
    $(".columna-dia").removeClass("red-tooltip");
};

App_EmpAtendView.cambiaEstilosRojos = function() {
    
    $("#titulo").removeClass("titulos-graficas-barras titulos-barra verde-fuerte");
    $("#titulo").addClass("titulos-graficas-barras titulos-barra rojo-fuerte");
    
    $(".dias").addClass("rojo-empleados");
    $(".dias").removeClass("verde-empleados");
    
    $(".columna-dia").removeClass("green-tooltip");
    $(".columna-dia").addClass("red-tooltip");
};

App_EmpAtendView.toolTips = function(diasT) {
    $('#lunes').tooltip('hide')
            .attr('data-original-title', "".concat(diasT.lunV, " empleados"))
            .tooltip('fixTitle');

    $('#martes').tooltip('hide')
            .attr('data-original-title', "".concat(diasT.marV, " empleados"))
            .tooltip('fixTitle');

    $('#miercoles').tooltip('hide')
            .attr('data-original-title', "".concat(diasT.mieV, " empleados"))
            .tooltip('fixTitle');

    $('#jueves').tooltip('hide')
            .attr('data-original-title', "".concat(diasT.jueV, " empleados"))
            .tooltip('fixTitle');

    $('#viernes').tooltip('hide')
            .attr('data-original-title', "".concat(diasT.vieV, " empleados"))
            .tooltip('fixTitle');

    $('#sabado').tooltip('hide')
            .attr('data-original-title', "".concat(diasT.sabV, " empleados"))
            .tooltip('fixTitle');

    $('#domingo').tooltip('hide')
            .attr('data-original-title', "".concat(diasT.domV, " empleados"))
            .tooltip('fixTitle');
};