var semanaActual; //VARIABLE DE LA SEMANA ACTUAL
var genSucActual; //VARIABLE DE GENERAL-DETALLE
var colorTextoGraf;//Color del texto de la grafica
var color1;       //Color1 degradado de grafica
var color2;       //Color2 degradado de grafica
var promedio = 0;
var desviacion = 0;
var minimo = 0;
var maximo = 0;
var dia1;
var valor1;
var dia2;
var valor2;
var dia3;
var valor3;
var dia4;
var valor4;
var dia5;
var valor5;
var dia6;
var valor6;
var dia7;
var valor7;

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
	var semana  = $("#comboSemana").val();
    localStorage.setItem("semAct", semana); //GUARDA LA SEMANA COMO VARIABLE LOCAL DEL BROWSER


 	if(semana == 33 && genSucActual == "Datos Generales"){
	 	//alert("GENERALES 33");
        promedio	= 6.24  + " min";
	 	minimo		= 15    + " seg";
	 	maximo	  	= 22.10 + " min";
		desviacion	= 47.06 + " seg";
		dia1		= '11/09/14';
		valor1		= 6.95;
		dia2		= '12/09/14';
		valor2		= 9.05;
		dia3		= '13/09/14';
		valor3		= 6.25;
		dia4		= '14/09/14';
		valor4		= 6.59;
		dia5		= '15/09/14';
		valor5		= 5.35;
		dia6		= '16/09/14';
		valor6		= 5.21;
		dia7		= '17/09/14';
		valor7		= 5.6;
		setValores();
		grafica();
	}else if (semana == 34 && genSucActual == "Datos Generales") {
	 	//alert("GENERALES 34");
        promedio	= 6.4    + " min";
	 	minimo		= 15     + " seg";
	 	maximo	  	= 26.6   + " min";
		desviacion	= 36.46  + " seg";
		dia1		= '18/09/14';
		valor1		= 5.75;
		dia2		= '19/09/14';
		valor2		= 7.75;
		dia3		= '20/09/14';
		valor3		= 7.59;
		dia4		= '21/09/14';
		valor4		= 4.23;
		dia5		= '22/09/14';
		valor5		= 8.81;
		dia6		= '23/09/14';
		valor6		= 5.41;
		dia7		= '24/09/14';
		valor7		= 7.33;
		setValores();
		grafica();
	}else if (semana == 33 && genSucActual == "Villa Olímpica"){
        //alert("Villa Olímpica 33");
        promedio    = 5.4    + " min";
        minimo      = 18     + " seg";
        maximo      = 19.4   + " min";
        desviacion  = 4.3    + " min";
        dia1        = '11/09/14';
        valor1      = 7.86;
        dia2        = '12/09/14';
        valor2      = 9.0;
        dia3        = '13/09/14';
        valor3      = 4.06;
        dia4        = '14/09/14';
        valor4      = 6.38;
        dia5        = '15/09/14';
        valor5      = 4.58;
        dia6        = '16/09/14';
        valor6      = 3.88;
        dia7        = '17/09/14';
        valor7      = 5.73;
        setValores();
        grafica();
    }else if (semana == 34 && genSucActual == "Villa Olímpica"){
        //alert("Villa Olímpica 34");
        promedio    = 6.7    + " min";
        minimo      = 17     + " seg";
        maximo      = 22.7   + " min";
        desviacion  = 4.58   + " min";
        dia1        = '18/09/14';
        valor1      = 5.53;
        dia2        = '19/09/14';
        valor2      = 8;
        dia3        = '20/09/14';
        valor3      = 7.75;
        dia4        = '21/09/14';
        valor4      = 4.58;
        dia5        = '22/09/14';
        valor5      = 7.55;
        dia6        = '23/09/14';
        valor6      = 6.80;
        dia7        = '24/09/14';
        valor7      = 11.97;
        setValores();
        grafica();
    }else if (semana == 33 && genSucActual == "Miramontes"){
        //alert("datos Miramontes 33");
        promedio    = 7      + " min";
        minimo      = 15     + " seg";
        maximo      = 22.1   + " min";
        desviacion  = 4.8    + " min";
        dia1        = '11/09/14';
        valor1      = 6.05;
        dia2        = '12/09/14';
        valor2      = 9.12;
        dia3        = '13/09/14';
        valor3      = 8.45;
        dia4        = '14/09/14';
        valor4      = 6.80;
        dia5        = '15/09/14';
        valor5      = 6.12;
        dia6        = '16/09/14';
        valor6      = 6.55;
        dia7        = '17/09/14';
        valor7      = 5.47;
        setValores();
        grafica();
    }else if (semana == 34 && genSucActual == "Miramontes"){
        //alert("datos Miramontes 34");
        promedio    = 6.1    + " min";
        minimo      = 15     + " seg";
        maximo      = 26.68  + " min";
        desviacion  = 5.4    + " min";
        dia1        = '18/09/14';
        valor1      = 5.97;
        dia2        = '19/09/14';
        valor2      = 7.52;
        dia3        = '20/09/14';
        valor3      = 7.43;
        dia4        = '21/09/14';
        valor4      = 3.88;
        dia5        = '22/09/14';
        valor5      = 10.08;
        dia6        = '23/09/14';
        valor6      = 4.03;
        dia7        = '24/09/14';
        valor7      = 2.70;
        setValores();
        grafica();
    }
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


//VALORES DE CINTA//
function setValores (){
    $("#promedio").text(promedio);
    $("#desviacion").text(desviacion);
    $("#minimo").text(minimo);
    $("#maximo").text(maximo);
}

//GRAFICAR//
function grafica (){
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
                [dia1,valor1],
                [dia2,valor2],
                [dia3,valor3],
                [dia4,valor4],
                [dia5,valor5],
                [dia6,valor6],
                [dia7,valor7]
            ],color: {
                linearGradient: [100, 300, 100, 100],
                stops: [
                    [0, color1],
                    [1, color2]
                ]
            },
            dataLabels: {             
                //align: 'left',
                enabled: true,
                rotation: 0,
                x: 2,
                y: -5,
                style: {                    
                    color: colorTextoGraf,
                    fontSize: '14px',                    
                    fontFamily: 'MyriadPro-Regular, Myriad Pro Regular',
                    fontWeight: 'bold',
                    //textShadow: '0 0 0px #000000'
                }
            }
        }]
    });
}

//CAMBIA EL LINK DE LA PÁGINA ACTIVA EN EL NAV-BAR//
function itemActivo(){
    $("#cliente-espera").addClass("active");
    $("#turnos-atendidos").removeClass("active");
    $("#empleados-atendiendo").removeClass("active");
    $("#tiempo-sin-atende").removeClass("active");
    $("#detalle-completo").removeClass("active");
}

//APLICAR ESTILOS GENERALES-VERDES
function cambiaEstilosVerdes (){
    graficaVerde();
    $(".titulos-graficas-barras").addClass("verde-fuerte");
    $(".titulos-graficas-barras").removeClass("rojo-fuerte");
    $(".remarca").addClass("verde-medio");
    $(".remarca").removeClass("rojo");
    $("#clienteEsperaActive").addClass("nav-degradado-verde");
    $("#clienteEsperaActive").removeClass("nav-degradado-rojo");
}

//APLICAR ESTILOS DETALLES-ROJOS
function cambiaEstilosRojos (){
    graficaRoja();
    $(".titulos-graficas-barras").addClass("rojo-fuerte");
    $(".titulos-graficas-barras").removeClass("verde-fuerte");
    $(".remarca").addClass("rojo");
    $(".remarca").removeClass("verde-medio");
    $("#clienteEsperaActive").addClass("nav-degradado-rojo");
    $("#clienteEsperaActive").removeClass("nav-degradado-verde");
}

function graficaRoja(){
    colorTextoGraf = '#9D2D38';
    color1 = "rgb(177, 12, 20)";
    color2 = "rgb(247, 110, 80)";
}

function graficaVerde(){
    colorTextoGraf = '#68b321';
    color1 = "rgb(11, 86, 39)";
    color2 = "rgb(47, 168, 59)";
}



