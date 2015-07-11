var semanaActual; //VARIABLE DE LA SEMANA ACTUAL
var genSucActual; //VARIABLE DE GENERAL-DETALLE
var colorTextoGraf;//Color del texto de la grafica
var color1;       //Color1 degradado de grafica
var color2;       //Color2 degradado de grafica

var turnos;
var turnosF;
var virtuales;
var virtualesF;
var total;
var totalF;




//CUANDO LA PAGINA ESTA LISTA//
$( window ).load(function() {
    semanaActual = localStorage.getItem("semAct");
    if (semanaActual == null){
        semanaActual = "33";
    }
    genSucActual= localStorage.getItem("gen-suc");
    if (genSucActual == null){
        genSucActual = "Datos Generales";
    }
    setValorCombo();    //SET VALOR AL COMBO
    elegirSemana();     //CARGA DATOS DE LA SEMANA Y SUCURSAL EN LA PAGINA
    itemActivo();       //ACTIVA EL MENU DE LA BARRA
});

//ASIGNAR VALOR DEL BROWSER AL COMBO SEMANA//
function setValorCombo (){
    $("#comboSemana").val(semanaActual);    //CARGA SEMANA
    getSucDetalle(genSucActual);            //CARGA GENERAL/DETALLE
}

//COMBO DE SEMANA PRESIONADO//
$("#comboSemana").change(elegirSemana);

function elegirSemana () {
	var semana = $("#comboSemana").val();
 	
 	if(semana == 33 && genSucActual == "Datos Generales" ){
	 	turnos	= 11381;
	 	virtuales = 9656;
        totales = 21037;

	 	grafica();

        turnosF = new format(turnos);
        turnos = turnosF.formato(0,true);
        virtualesF = new format(virtuales);
        virtuales = virtualesF.formato(0,true);
        totalesF = new format(totales);
        totales = totalesF.formato(0,true);

        setValores();
		
	}else if (semana == 34 && genSucActual == "Datos Generales") {
	 	turnos   = 11002;
        virtuales = 10233;
        totales = 21235;
		
		grafica();

        turnosF = new format(turnos);
        turnos = turnosF.formato(0,true);
        virtualesF = new format(virtuales);
        virtuales = virtualesF.formato(0,true);
        totalesF = new format(totales);
        totales = totalesF.formato(0,true);

        setValores();
	}else if(semana == 33  && genSucActual == "Villa Olímpica"){
        turnos  = 5537;
        virtuales = 5546;
        totales = 11083;
        
        grafica();

        turnosF = new format(turnos);
        turnos = turnosF.formato(0,true);
        virtualesF = new format(virtuales);
        virtuales = virtualesF.formato(0,true);
        totalesF = new format(totales);
        totales = totalesF.formato(0,true);

        setValores();
        
    }else if (semana == 34  && genSucActual == "Villa Olímpica") {
        turnos   = 5951;
        virtuales = 5664;
        totales = 11615;

        grafica();

        turnosF = new format(turnos);
        turnos = turnosF.formato(0,true);
        virtualesF = new format(virtuales);
        virtuales = virtualesF.formato(0,true);
        totalesF = new format(totales);
        totales = totalesF.formato(0,true);

        setValores();
    }else if(semana == 33 && genSucActual == "Miramontes"){
        turnos  = 5844;
        virtuales = 4110;
        totales = 9954;
        
       grafica();

        turnosF = new format(turnos);
        turnos = turnosF.formato(0,true);
        virtualesF = new format(virtuales);
        virtuales = virtualesF.formato(0,true);
        totalesF = new format(totales);
        totales = totalesF.formato(0,true);

        setValores();
    }else if (semana == 34 && genSucActual == "Miramontes") {
        turnos   = 5051;
        virtuales = 4569;
        totales = 9620;

        grafica();

        turnosF = new format(turnos);
        turnos = turnosF.formato(0,true);
        virtualesF = new format(virtuales);
        virtuales = virtualesF.formato(0,true);
        totalesF = new format(totales);
        totales = totalesF.formato(0,true);

        setValores();
    }
}

$("#comboSemana").change(elegirSemana);


function setValores (){
 	$("#turnos").text(turnos);
 	$(".virtuales-cant").text(virtuales);
 	$(".totales").text(totales);

}

function grafica (){
$('#circularG').highcharts({
                colors: [color1, color2],
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


}
//CAMBIO DE CSS (GENERAL-DETALLE)
$("#opcion1").click(function() {
  genSucActual = $("#opcion1").text();
  getSucDetalle();
  elegirSemana();
});

$("#opcion2").click(function() {
  genSucActual = $("#opcion2").text();
  getSucDetalle();
  elegirSemana();
});

//SET OPCION SELECCIONADA COMO PRINCIPAL(GENERAL-DETALLE)//
function getSucDetalle(){

  localStorage.setItem("gen-suc", genSucActual);
  $("#opcion-principal").text(genSucActual); 
  $("#opcion-principal").append("<span class='caret'></span>");

  if (genSucActual == "Villa Olímpica" ){
    $("#opcion1").text("Miramontes");
    $("#opcion2").text("Datos Generales");
    cambiaEstilosRojos();
  }
  else if (genSucActual == "Miramontes" ){
    $("#opcion1").text("Villa Olímpica");
    $("#opcion2").text("Datos Generales");
    cambiaEstilosRojos();
  }
  else if (genSucActual == "Datos Generales"){
    $("#opcion1").text("Villa Olímpica");
    $("#opcion2").text("Miramontes");
    cambiaEstilosVerdes();
  }
};



//CAMBIA EL LINK DE LA PÁGINA ACTIVA EN EL NAV-BAR//
function itemActivo(){
    $("#cliente-espera").removeClass("active");
    $("#turnos-atendidos").addClass("active");
    $("#empleados-atendiendo").removeClass("active");
    $("#tiempo-sin-atender").removeClass("active");
    $("#detalle-completo").removeClass("active");
}

//APLICAR ESTILOS GENERALES-VERDES
function cambiaEstilosVerdes (){
    graficaVerde();
    $("#titulo").addClass("verde-fuerte");
    $("#titulo").removeClass("rojo-fuerte");
    $("#turnos").addClass("verde");
    $("#turnos").removeClass("naranja");
    $(".virtuales-cant").addClass("verde-fuerte");
    $(".virtuales-cant").removeClass("rojo-fuerte");
    $("#turnos-atendidos-active").addClass("nav-degradado-verde");
    $("#turnos-atendidos-active").removeClass("nav-degradado-rojo");
}

//APLICAR ESTILOS DETALLES-ROJOS
function cambiaEstilosRojos (){
    graficaRoja();
    $("#titulo").addClass("rojo-fuerte");
    $("#titulo").removeClass("verde-fuerte");
    $("#turnos").removeClass("verde");
    $("#turnos").addClass("naranja");
    $(".virtuales-cant").removeClass("verde-fuerte");
    $(".virtuales-cant").addClass("rojo-fuerte");

    $("#turnos-atendidos-active").removeClass("nav-degradado-verde");
    $("#turnos-atendidos-active").addClass("nav-degradado-rojo");
}

function graficaRoja(){
    colorTextoGraf = '#9D2D38';
    color1 = "rgb(202, 37, 45)";
    color2 = "rgb(254, 154, 43)";
}

function graficaVerde(){
   colorTextoGraf = '#68b321';
    color1 = "rgb(0, 104, 55)";
    color2 = "rgb(178, 217, 86)";
}

