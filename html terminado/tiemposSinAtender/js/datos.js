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
        promedio    = 29.135 + " min";
        minimo      = 9.23   + " min";
        maximo      = 50.45  + " min";
        desviacion  = 3.42   + " min";
        dia1        = '11/09/14';
        valor1      = 27.45;
        dia2        = '12/09/14';
        valor2      = 27.7;
        dia3        = '13/09/14';
        valor3      = 29.7;
        dia4        = '14/09/14';
        valor4      = 30.55;
        dia5        = '15/09/14';
        valor5      = 25.25;
        dia6        = '16/09/14';
        valor6      = 28.15;
        dia7        = '17/09/14';
        valor7      = 29.15;
		setValores();
		grafica();
	}else if (semana == 34 && genSucActual == "Datos Generales") {
	 	//alert("GENERALES 34");
        promedio    = 29.13 + " min";
        minimo      = 10.58 + " min";
        maximo      = 42.36 + " min";
        desviacion  = 2.74  + " min";
        dia1        = '18/09/14';
        valor1      = 28.9;
        dia2        = '19/09/14';
        valor2      = 28.6;
        dia3        = '20/09/14';
        valor3      = 26.4;
        dia4        = '21/09/14';
        valor4      = 29.4;
        dia5        = '22/09/14';
        valor5      = 31.05;
        dia6        = '23/09/14';
        valor6      = 29.4;
        dia7        = '24/09/14';
        valor7      = 28;
		setValores();
		grafica();
	}else if (semana == 33 && genSucActual == "Villa Olímpica"){
        //alert("Villa Olímpica 33");
        promedio    = 25.62 + " min";
        minimo      = 11.66 + " min";
        maximo      = 38.33 + " min";
        desviacion  = 9.05  + " min";
        dia1        = '11/09/14';
        valor1      = 22.4;
        dia2        = '12/09/14';
        valor2      = 26.5;
        dia3        = '13/09/14';
        valor3      = 27.8;
        dia4        = '14/09/14';
        valor4      = 29.6;
        dia5        = '15/09/14';
        valor5      = 21.1;
        dia6        = '16/09/14';
        valor6      = 25.6;
        dia7        = '17/09/14';
        valor7      = 24.6;
        setValores();
        grafica();
    }else if (semana == 34 && genSucActual == "Villa Olímpica"){
        //alert("Villa Olímpica 34");
        promedio    = 27.85  + " min";
        minimo      = 10.58  + " min";
        maximo      = 42.13  + " min";
        desviacion  = 10.01  + " min";
        dia1        = '18/09/14';
        valor1      = 26.6;
        dia2        = '19/09/14';
        valor2      = 28.6;
        dia3        = '20/09/14';
        valor3      = 26.4;
        dia4        = '21/09/14';
        valor4      = 29.4;
        dia5        = '22/09/14';
        valor5      = 28.4;
        dia6        = '23/09/14';
        valor6      = 29.4;
        dia7        = '24/09/14';
        valor7      = 24.6;
        setValores();
        grafica();
    }else if (semana == 33 && genSucActual == "Miramontes"){
        //alert("datos Miramontes 33");
        promedio    = 32.65 + " min";
        minimo      = 9.23  + " min";
        maximo      = 50.45 + " min";
        desviacion  = 12.63 + " min";
        dia1        = '11/09/14';
        valor1      = 32.5;
        dia2        = '12/09/14';
        valor2      = 28.9;
        dia3        = '13/09/14';
        valor3      = 31.6;
        dia4        = '14/09/14';
        valor4      = 31.5;
        dia5        = '15/09/14';
        valor5      = 29.4;
        dia6        = '16/09/14';
        valor6      = 30.7;
        dia7        = '17/09/14';
        valor7      = 33.7;
        setValores();
        grafica();
    }else if (semana == 34 && genSucActual == "Miramontes"){
        //alert("datos Miramontes 34");
        promedio    = 30.41  + " min";
        minimo      = 15.25  + " min";
        maximo      = 42.36  + " min";
        desviacion  = 13.89  + " min";
        dia1        = '18/09/14';
        valor1      = 31.2;
        dia2        = '19/09/14';
        valor2      = 28.6;
        dia3        = '20/09/14';
        valor3      = 26.4;
        dia4        = '21/09/14';
        valor4      = 29.4;
        dia5        = '22/09/14';
        valor5      = 33.7;
        dia6        = '23/09/14';
        valor6      = 29.4;
        dia7        = '24/09/14';
        valor7      = 31.4;
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
    $("#cliente-espera").removeClass("active");
    $("#turnos-atendidos").removeClass("active");
    $("#empleados-atendiendo").removeClass("active");
    $("#tiempo-sin-atender").addClass("active");
    $("#detalle-completo").removeClass("active");
}

//APLICAR ESTILOS GENERALES-VERDES
function cambiaEstilosVerdes (){
    graficaVerde();
    $(".titulos-graficas-barras").addClass("verde-fuerte");
    $(".titulos-graficas-barras").removeClass("rojo-fuerte");
    $(".remarca").addClass("verde-medio");
    $(".remarca").removeClass("rojo");
    $("#tiempo-sin-atender-active").addClass("nav-degradado-verde");
    $("#tiempo-sin-atender-active").removeClass("nav-degradado-rojo");
}

//APLICAR ESTILOS DETALLES-ROJOS
function cambiaEstilosRojos (){
    graficaRoja();
    $(".titulos-graficas-barras").addClass("rojo-fuerte");
    $(".titulos-graficas-barras").removeClass("verde-fuerte");
    $(".remarca").addClass("rojo");
    $(".remarca").removeClass("verde-medio");
    $("#tiempo-sin-atender-active").addClass("nav-degradado-rojo");
    $("#tiempo-sin-atender-active").removeClass("nav-degradado-verde");
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



