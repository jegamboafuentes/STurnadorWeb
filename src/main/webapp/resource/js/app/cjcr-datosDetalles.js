var semanaActual; //VARIABLE DE LA SEMANA ACTUAL
var genSucActual; //VARIABLE DE GENERAL-DETALLE
var colorTextoGraf;//Color del texto de la grafica
var color1;       //Color1 degradado de grafica
var color2;       //Color2 degradado de grafica

var promedio = 0;
var desviacion = 0;
var minimo = 0;
var maximo = 0;

var promedio2 = 0;
var desviacion2 = 0;
var minimo2 = 0;
var maximo2 = 0;

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

var dia_1;
var valor_1;
var dia_2;
var valor_2;
var dia_3;
var valor_3;
var dia_4;
var valor_4;
var dia_5;
var valor_5;
var dia_6;
var valor_6;
var dia_7;
var valor_7;

var turnosFormatV;
var turnosV;

var turnosFormatVir;
var turnosVir;

var turnosFormatTotal;
var totalV;

var domingo;
var lunes;
var martes;
var miercoles;
var jueves;
var viernes;
var sabado;

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
	localStorage.setItem("semAct", semana); //GUARDA LA SEMANA COMO VARIABLE LOCAL DEL BROWSER
	
 	
 	if(semana == 33 && genSucActual == "Datos Generales"){
	
	 	promedio	= 6.24 + " min";
	 	minimo		= 15 + " seg";
	 	maximo	  	= 21.1 + " min";
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
		
		promedio2	= 29.1 + " min";
	 	minimo2		= 9 + " min";
	 	maximo2	  	= 50.45 + " min";
		desviacion2	= 3.42 + " min";
		
		dia_1		= '11/09/14';
		valor_1		= 27.45;
		dia_2		= '12/09/14';
		valor_2		= 27.7;
		dia_3		= '13/09/14';
		valor_3		= 29.7;
		dia_4		= '14/09/14';
		valor_4		= 30.55;
		dia_5		= '15/09/14';
		valor_5		= 25.25;
		dia_6		= '16/09/14';
		valor_6		= 28.15;
		dia_7		= '17/09/14';
		valor_7		= 29.15;
				
		turnosV 	= 11381;						
		turnosVir	= 9656;
		totalV		= 21037;

		domingo 	= 6;
		lunes 		= 7;
		martes 		= 5;
		miercoles 	= 5;
		jueves 		= 5;
		viernes 	= 7;		
		sabado 		= 6;
		promedioV	= 5.86;						
				
		graficaCircular();
		graficaCliente();
		graficaCajero();
		
		turnosFormatV = new format(turnosV);
		turnosV = turnosFormatV.formato(0,true);
		
		turnosFormatVir = new format(turnosVir);
		turnosVir = turnosFormatVir.formato(0,true);
		
		turnosFormatTotal = new format(totalV);
		totalV = turnosFormatTotal.formato(0,true);
		
		setValores();				
	}else if (semana == 34 && genSucActual == "Datos Generales") {
		promedio	= 6.4 + " min";
	 	minimo		= 15 + " seg";
	 	maximo	  	= 26.6 + " min";
		desviacion	= 36.46 + " seg";
		
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
		
		promedio2	= 29.1 + " min";
	 	minimo2		= 10.58 + " min";
	 	maximo2	  	= 42.36 + " min";
		desviacion2	= 2.74 + " min";
		
		dia_1		= '18/09/14';
		valor_1		= 28.9;
		dia_2		= '19/09/14';
		valor_2		= 28.6;
		dia_3		= '20/09/14';
		valor_3		= 26.4;
		dia_4		= '21/09/14';
		valor_4		= 29.4;
		dia_5		= '22/09/14';
		valor_5		= 31.05;
		dia_6		= '23/09/14';
		valor_6		= 29.4;
		dia_7		= '24/09/14';
		valor_7		= 28;
		
		turnosV		= 11002;
		turnosVir	= 10233;
		totalV		= 21235;
		
		domingo 	= 6;
		lunes 		= 6;
		martes 		= 5;
		miercoles 	= 5;
		jueves 		= 4;
		viernes 	= 7;		
		sabado 		= 6;
		promedioV	= 5.57;
				
		graficaCircular();
		graficaCliente();
		graficaCajero();
			
		turnosFormatV = new format(turnosV);
		turnosV = turnosFormatV.formato(0,true);
		
		turnosFormatVir = new format(turnosVir);
		turnosVir = turnosFormatVir.formato(0,true);
		
		turnosFormatTotal = new format(totalV);
		totalV = turnosFormatTotal.formato(0,true);
		
		setValores();
	}else if(semana == 33 && genSucActual == "Villa Olímpica"){
	
	 	promedio	= 5.4 + " min";
	 	minimo		= 18 + " seg";
	 	maximo	  	= 19.4 + " min";
		desviacion	= 4.3 + " min";
		
		dia1		= '11/09/14';
		valor1		= 7.86;
		dia2		= '12/09/14';
		valor2		= 9;
		dia3		= '13/09/14';
		valor3		= 4.06;
		dia4		= '14/09/14';
		valor4		= 6.38;
		dia5		= '15/09/14';
		valor5		= 4.58;
		dia6		= '16/09/14';
		valor6		= 3.88;
		dia7		= '17/09/14';
		valor7		= 5.73;
		
		promedio2	= 25.62 + " min";
	 	minimo2		= 11.66 + " min";
	 	maximo2	  	= 38.33 + " min";
		desviacion2	= 9.05 + " min";
		
		dia_1		= '11/09/14';
		valor_1		= 22.4;
		dia_2		= '12/09/14';
		valor_2		= 26.5;
		dia_3		= '13/09/14';
		valor_3		= 27.8;
		dia_4		= '14/09/14';
		valor_4		= 29.6;
		dia_5		= '15/09/14';
		valor_5		= 21.1;
		dia_6		= '16/09/14';
		valor_6		= 25.6;
		dia_7		= '17/09/14';
		valor_7		= 24.6;
		
		turnosV 	= 5537;
		turnosVir	= 5546;
		totalV		= 11083;

		domingo 	= 6;
		lunes 		= 6;
		martes 		= 5;
		miercoles 	= 5;
		jueves 		= 4;
		viernes 	= 6;		
		sabado 		= 6;
		promedioV	= 5.43;					
				
		graficaCircular();
		graficaCliente();
		graficaCajero();
		
		turnosFormatV = new format(turnosV);
		turnosV = turnosFormatV.formato(0,true);
		
		turnosFormatVir = new format(turnosVir);
		turnosVir = turnosFormatVir.formato(0,true);
		
		turnosFormatTotal = new format(totalV);
		totalV = turnosFormatTotal.formato(0,true);
		
		setValores();				
	}else if (semana == 34 && genSucActual == "Villa Olímpica") {
		promedio	= 6.7 + " min";
	 	minimo		= 17 + " seg";
	 	maximo	  	= 22.7 + " min";
		desviacion	= 4.58 + " min";
		
		dia1		= '18/09/14';
		valor1		= 5.53;
		dia2		= '19/09/14';
		valor2		= 8;
		dia3		= '20/09/14';
		valor3		= 7.75;
		dia4		= '21/09/14';
		valor4		= 4.58;
		dia5		= '22/09/14';
		valor5		= 7.55;
		dia6		= '23/09/14';
		valor6		= 6.8;
		dia7		= '24/09/14';
		valor7		= 11.97;
		
		promedio2	= 27.85 + " min";
	 	minimo2		= 10.58 + " min";
	 	maximo2	  	= 42.36 + " min";
		desviacion2	= 10.01 + " min";
		
		dia_1		= '18/09/14';
		valor_1		= 26.6;
		dia_2		= '19/09/14';
		valor_2		= 28.6;
		dia_3		= '20/09/14';
		valor_3		= 26.4;
		dia_4		= '21/09/14';
		valor_4		= 29.4;
		dia_5		= '22/09/14';
		valor_5		= 28.4;
		dia_6		= '23/09/14';
		valor_6		= 29.4;
		dia_7		= '24/09/14';
		valor_7		= 24.6;
		
		turnosV		= 5951;
		turnosVir	= 5664;
		totalV		= 11615;
		
		domingo 	= 5;
		lunes 		= 5;
		martes 		= 5;
		miercoles 	= 4;
		jueves 		= 4;
		viernes 	= 5;		
		sabado 		= 5;
		promedioV	= 4.71;
				
		graficaCircular();
		graficaCliente();
		graficaCajero();
			
		turnosFormatV = new format(turnosV);
		turnosV = turnosFormatV.formato(0,true);
		
		turnosFormatVir = new format(turnosVir);
		turnosVir = turnosFormatVir.formato(0,true);
		
		turnosFormatTotal = new format(totalV);
		totalV = turnosFormatTotal.formato(0,true);
		
		setValores();
	}else if(semana == 33 && genSucActual == "Miramontes"){
	
	 	promedio	= 7 + " min";
	 	minimo		= 15 + " seg";
	 	maximo	  	= 22.1 + " min";
		desviacion	= 4.8 + " min";
		
		dia1		= '11/09/14';
		valor1		= 6.05;
		dia2		= '12/09/14';
		valor2		= 9.12;
		dia3		= '13/09/14';
		valor3		= 8.45;
		dia4		= '14/09/14';
		valor4		= 6.8;
		dia5		= '15/09/14';
		valor5		= 6.12;
		dia6		= '16/09/14';
		valor6		= 6.55;
		dia7		= '17/09/14';
		valor7		= 5.47;
		
		promedio2	= 32.65 + " min";
	 	minimo2		= 9.23 + " min";
	 	maximo2	  	= 50.45 + " min";
		desviacion2	= 12.63 + " min";
		
		dia_1		= '11/09/14';
		valor_1		= 32.5;
		dia_2		= '12/09/14';
		valor_2		= 28.9;
		dia_3		= '13/09/14';
		valor_3		= 31.6;
		dia_4		= '14/09/14';
		valor_4		= 31.5;
		dia_5		= '15/09/14';
		valor_5		= 29.4;
		dia_6		= '16/09/14';
		valor_6		= 30.7;
		dia_7		= '17/09/14';
		valor_7		= 33.7;
		
		turnosV 	= 5844;
		turnosVir	= 4110;
		totalV		= 9954;

		domingo 	= 6;
		lunes 		= 7;
		martes 		= 4;
		miercoles 	= 5;
		jueves 		= 5;
		viernes 	= 7;		
		sabado 		= 6;
		promedioV	= 5.71;					
				
		graficaCircular();
		graficaCliente();
		graficaCajero();
		
		turnosFormatV = new format(turnosV);
		turnosV = turnosFormatV.formato(0,true);
		
		turnosFormatVir = new format(turnosVir);
		turnosVir = turnosFormatVir.formato(0,true);
		
		turnosFormatTotal = new format(totalV);
		totalV = turnosFormatTotal.formato(0,true);
		
		setValores();				
	}else if (semana == 34 && genSucActual == "Miramontes") {
		promedio	= 6.1 + " min";
	 	minimo		= 15 + " seg";
	 	maximo	  	= 26.68 + " min";
		desviacion	= 5.4 + " min";
		
		dia1		= '18/09/14';
		valor1		= 5.97;
		dia2		= '19/09/14';
		valor2		= 7.52;
		dia3		= '20/09/14';
		valor3		= 7.43;
		dia4		= '21/09/14';
		valor4		= 3.88;
		dia5		= '22/09/14';
		valor5		= 10.08;
		dia6		= '23/09/14';
		valor6		= 4.03;
		dia7		= '24/09/14';
		valor7		= 2.7;
		
		promedio2	= 30.41 + " min";
	 	minimo2		= 15.25 + " min";
	 	maximo2	  	= 42.36 + " min";
		desviacion2	= 13.89 + " min";
		
		dia_1		= '18/09/14';
		valor_1		= 31.2;
		dia_2		= '19/09/14';
		valor_2		= 28.6;
		dia_3		= '20/09/14';
		valor_3		= 26.4;
		dia_4		= '21/09/14';
		valor_4		= 29.4;
		dia_5		= '22/09/14';
		valor_5		= 37.7;
		dia_6		= '23/09/14';
		valor_6		= 29.4;
		dia_7		= '24/09/14';
		valor_7		= 31.4;
		
		turnosV		= 5051;
		turnosVir	= 4569;
		totalV		= 9620;
		
		domingo 	= 7;
		lunes 		= 6;
		martes 		= 4;
		miercoles 	= 5;
		jueves 		= 4;
		viernes 	= 8;		
		sabado 		= 7;
		promedioV	= 5.57;
				
		graficaCircular();
		graficaCliente();
		graficaCajero();
			
		turnosFormatV = new format(turnosV);
		turnosV = turnosFormatV.formato(0,true);
		
		turnosFormatVir = new format(turnosVir);
		turnosVir = turnosFormatVir.formato(0,true);
		
		turnosFormatTotal = new format(totalV);
		totalV = turnosFormatTotal.formato(0,true);
		
		setValores();
	}
	monitoAnimado();
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




function setValores (){

 	$("#promedio").text(promedio);
 	$("#desviacion").text(desviacion);
 	$("#minimo").text(minimo);
 	$("#maximo").text(maximo);
	
	$("#promedio2").text(promedio2);
 	$("#desviacion2").text(desviacion2);
 	$("#minimo2").text(minimo2);
 	$("#maximo2").text(maximo2);
	
	$("#turnosV").text(turnosV);
 	$("#turnosVir").text(turnosVir);
 	$("#totalV").text(totalV);
	
	$("#domingo").text(domingo);
 	$("#lunes").text(lunes);
 	$("#martes").text(martes);
 	$("#miercoles").text(miercoles);
	$("#jueves").text(jueves);
	$("#viernes").text(viernes);
 	$("#sabado").text(sabado);
 	$("#promedioV").text(promedioV);
}

function graficaCliente (){
	$('#client').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Tiempo promedio del cliente en espera',
			style:{
				color: colorTextoGraf
			}
        },				
        xAxis: {
            type: 'category'
        },
        yAxis: {
			title: {
                text: 'Minutos'
            }
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
            ],
			color: {
                linearGradient: [100, 300, 100, 100],
                stops: [
					[0, color1],
                    [1, color2]
                ]
            },
            dataLabels: {
			   x: 2,
               y: -10,
			   style: {                    
				color: colorTextoGraf
				}
            }
        }]
    });
}





function graficaCajero (){
	 $('#cajero').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Tiempo promedio de cajeros sin atender turnos',
			style:{
				color: colorTextoGraf
			}
		
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
			title: {
                text: 'Minutos'
            }
        },
        tooltip: {
            pointFormat: 'Minutos:<b>{point.y:.1f}</b>'
        },
        series: [{
            name: 'minutos',
            data: [
                [dia_1,valor_1],
                [dia_2,valor_2],
                [dia_3,valor_3],
                [dia_4,valor_4],
                [dia_5,valor_5],
                [dia_6,valor_6],
                [dia_7,valor_7]
            ],
			color: {
                linearGradient: [100, 300, 100, 100],
                stops: [
                    [0, color1],
                    [1, color2]
                ]
            },
            dataLabels: {
                x: 2,
                y: -10,
			    style: {                    
					color: colorTextoGraf
				}
            }
        }]
    });
}

function graficaCircular(){
	$('#circularG').highcharts({
		colors: [color3, color4],				
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
					['Turnos Virtuales', turnosVir],
					['Turnos', turnosV]
				],			
		}]
	});
}

function monitoAnimado(){
	$("#empleados").hide();
	$("#empleados").show(1000);
}




//CAMBIA EL LINK DE LA PÁGINA ACTIVA EN EL NAV-BAR//
function itemActivo(){
	$("#detalle-completo").addClass("active");
    $("#cliente-espera").removeClass("active");
    $("#turnos-atendidos").removeClass("active");
    $("#empleados-atendiendo").removeClass("active");
    $("#tiempo-sin-atender").removeClass("active");    
}

//APLICAR ESTILOS GENERALES-VERDES
function cambiaEstilosVerdes (){

	document.getElementById("cturnos").innerHTML = "<img src=./resource/images/circulo_verde01.png>";
	document.getElementById("cturnos2").innerHTML ="<img src=./resource/images/circulo_verde02.png>";	
	
	document.getElementById("monoEmpleado").innerHTML = "<img src=./resource/images/p_gde_verde_200.png>";	
	document.getElementById("semanaEmpleado").innerHTML = "<img src=./resource/images/semana_v2.png>";
	
	$("#text-title1").removeClass("title-grafi-rojo");
	$("#text-title1").addClass("title-grafi");
	
	$("#text-title2").removeClass("title-grafi-rojo"); 
	$("#text-title2").addClass("title-grafi");
	
	$("#text-title3").removeClass("title-grafi-rojo");
	$("#text-title3").addClass("title-grafi");
	
	$("#promedio").addClass("title-grafi");
	$("#promedio").removeClass("title-grafi-rojo");
	
	$("#promedio2").addClass("title-grafi");
	$("#promedio2").removeClass("title-grafi-rojo");
	
	$("#desviacion").addClass("title-grafi");
	$("#desviacion").removeClass("title-grafi-rojo");
	
	$("#desviacion2").addClass("title-grafi");
	$("#desviacion2").removeClass("title-grafi-rojo");
	
	$("#minimo").addClass("title-grafi");
	$("#minimo").removeClass("title-grafi-rojo");
	
	$("#maximo").addClass("title-grafi");
	$("#maximo").removeClass("title-grafi-rojo");		
	
	$("#minimo2").addClass("title-grafi");
	$("#minimo2").removeClass("title-grafi-rojo");
	
	$("#maximo2").addClass("title-grafi");
	$("#maximo2").removeClass("title-grafi-rojo");
	
	
	$("#lunes").addClass("num1");
	$("#lunes").removeClass("num1-rojo");

	
	$("#martes").addClass("num2");
	$("#martes").removeClass("num2-rojo");
	
	$("#miercoles").addClass("num1");
	$("#miercoles").removeClass("num1-rojo");

	

	$("#jueves").addClass("num2");
	$("#jueves").removeClass("num2-rojo");
	
	$("#viernes").addClass("num1");
	$("#viernes").removeClass("num1-rojo");

	

	$("#sabado").addClass("num2");
	$("#sabado").removeClass("num2-rojo");
		
	$("#domingo").addClass("num1");
	$("#domingo").removeClass("num1-rojo");

	
    $("#detalle-completo-active").addClass("nav-degradado-verde");
    $("#detalle-completo-active").removeClass("nav-degradado-rojo");
	graficaVerde();
}

//APLICAR ESTILOS DETALLES-ROJOS
function cambiaEstilosRojos (){

	document.getElementById("cturnos").innerHTML = "<img src=./resource/images/circulo_rojo02.png>";
	document.getElementById("cturnos2").innerHTML = "<img src=./resource/images/circulo_rojo01.png>";
	
	document.getElementById("monoEmpleado").innerHTML = "<img src=./resource/images/p_gde_rojo_180.png>";
	document.getElementById("semanaEmpleado").innerHTML = "<img src=./resource/images/semana_r2.png>";
	
	$("#text-title1").removeClass("title-grafi");
	$("#text-title1").addClass("title-grafi-rojo");
	
	
	$("#text-title2").removeClass("title-grafi");
	$("#text-title2").addClass("title-grafi-rojo");
	
	
	$("#text-title3").removeClass("title-grafi");	
	$("#text-title3").addClass("title-grafi-rojo");
	
	
	$("#promedio").addClass("title-grafi-rojo");
	$("#promedio").removeClass("title-grafi");
	
	$("#promedio2").addClass("title-grafi-rojo");
	$("#promedio2").removeClass("title-grafi");
	
	$("#desviacion").addClass("title-grafi-rojo");
	$("#desviacion").removeClass("title-grafi");
	
	$("#desviacion2").addClass("title-grafi-rojo");
	$("#desviacion2").removeClass("title-grafi");
	
	$("#minimo").addClass("title-grafi-rojo");
	$("#minimo").removeClass("title-grafi");
	
	$("#maximo").addClass("title-grafi-rojo");
	$("#maximo").removeClass("title-grafi");		
	
	$("#minimo2").addClass("title-grafi-rojo");
	$("#minimo2").removeClass("title-grafi");
	
	$("#maximo2").addClass("title-grafi-rojo");
	$("#maximo2").removeClass("title-grafi");
			
	$("#lunes").addClass("num1-rojo");
	$("#lunes").removeClass("num1");
	
	$("#lunes").addClass("num1-rojo");	
	$("#lunes").removeClass("num1");
	
	$("#lunes").addClass("num1-rojo");		
	$("#lunes").removeClass("num1");
	
	$("#lunes").addClass("num1-rojo");	
	$("#lunes").removeClass("num1");

	$("#lunes").removeClass("num1");
	$("#lunes").addClass("num1-rojo");	

	$("#martes").removeClass("num2");
	$("#martes").addClass("num2-rojo");
	
	$("#miercoles").removeClass("num1");
	$("#miercoles").addClass("num1-rojo");

	$("#jueves").removeClass("num2");
	$("#jueves").addClass("num2-rojo");
	
	$("#viernes").removeClass("num1");
	$("#viernes").addClass("num1-rojo");

	$("#sabado").removeClass("num2");
	$("#sabado").addClass("num2-rojo");
	
	$("#domingo").removeClass("num1");
	$("#domingo").addClass("num1-rojo");

    $("#detalle-completo-active").addClass("nav-degradado-rojo");
    $("#detalle-completo-active").removeClass("nav-degradado-verde");
	
	graficaRoja();
}

function graficaRoja(){
    colorTextoGraf = '#9D2D38';
    color1 = "rgb(177, 12, 20)";
    color2 = "rgb(247, 110, 80)";
		
	color3 = "rgb(202, 37, 45)";
	color4 = "rgb(254, 154, 43)";	
}

function graficaVerde(){
    colorTextoGraf = '#006837';
    color1 = "rgb(11, 86, 39)";
    color2 = "rgb(47, 168, 59)";
	
	color3 = "rgb(178, 217, 86)";
	color4 = "rgb(0, 104, 55)";
}


