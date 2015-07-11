var semanaActual; //VARIABLE DE LA SEMANA ACTUAL
var genSucActual; //VARIABLE DE GENERAL-DETALLE
var tiempo = 500;
$(document).ready( function () {

    llena();
    $('#table_id').DataTable();
})

$( window ).load(function() {
    setValorCombo();    //SET VALOR AL COMBO
    llena();     //CARGA DATOS DE LA SEMANA Y SUCURSAL EN LA PAGINA
    itemActivo();       //ACTIVA EL MENU DE LA BARRA
});


//ASIGNAR VALOR DEL BROWSER AL COMBO SEMANA//
function setValorCombo (){
    $("#comboSemana").val(semanaActual);    //CARGA SEMANA
    getSucDetalle(genSucActual);            //CARGA GENERAL/DETALLE
}

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



function limpia(){

			$("#DivTabla").removeClass("sombra");

			for(i = 1; i<=10; i++){		
				$("#lun"+i).hide();
				document.getElementById("lun"+i).innerHTML = "<img src=\"img/p0.png\">";
				$("#lun"+i).show(tiempo+(i*50));		
			}
			for(i = 1; i<=10; i++){
				$("#mar"+i).hide();
				document.getElementById("mar"+i).innerHTML = "<img src=\"img/p0.png\">";
				$("#mar"+i).show(tiempo+(i*50));
			}
			for(i = 1; i<=10; i++){
				$("#mie"+i).hide();
				document.getElementById("mie"+i).innerHTML = "<img src=\"img/p0.png\">";
				$("#mie"+i).show(tiempo+(i*50));
			}
			for(i = 1; i<=10; i++){
				$("#jue"+i).hide();
				document.getElementById("jue"+i).innerHTML = "<img src=\"img/p0.png\">";
				$("#jue"+i).show(tiempo+(i*50));
			}
			for(i = 1; i<=10; i++){
				$("#vie"+i).hide();
				document.getElementById("vie"+i).innerHTML = "<img src=\"img/p0.png\">";
				$("#vie"+i).show(tiempo+(i*50));
			}
			for(i = 1; i<=10; i++){
				$("#sab"+i).hide();
				document.getElementById("sab"+i).innerHTML = "<img src=\"img/p0.png\">";
				$("#sab"+i).show(tiempo+(i*50));
			}
			for(i = 1; i<=10; i++){
				$("#dom"+i).hide();
				document.getElementById("dom"+i).innerHTML = "<img src=\"img/p0.png\">";
				$("#dom"+i).show(tiempo+(i*50));
			}

}

function llena(){
	
	var diasTip = {
		lunT:'Lunes',
		lunV:0,
		marT:'Martes',
		marV:0,
		mieT:'Miércoles',
		mieV:0,
		jueT:'Jueves',
		jueV:0,
		vieT:'Viernes',
		vieV:0,
		sabT:'Sábado',
		sabV:0,
		domT:'Domingo',
		domV:0
	};

	var lunes;
	var martes;
	var miercoles;
	var jueves;
	var viernes;
	var sabado;
	var domingo;

	limpia();


	diasTip.lunV = lunes;
	diasTip.marV = martes;
	diasTip.mieV = miercoles;
	diasTip.jueV = jueves;
	diasTip.vieV = viernes;
	diasTip.sabV = sabado;
	diasTip.domV = domingo;
	toolTips(diasTip);

	$("#lun0").hide();
	$("#lun0").show(500);
	for(i = 1; i<=lunes; i++){
		//$("#lun"+i).hide();
		document.getElementById("lun"+i).innerHTML = "<img src=\"img/p1.png\">";
		//$("#lun"+i).show(tiempo+(i*50));
	}
	$("#mar11").hide();
	$("#mar11").show(500);
	for(i = 1; i<=martes; i++){
		//$("#mar"+i).hide();
		document.getElementById("mar"+i).innerHTML = "<img src=\"img/p1.png\">";
		//$("#mar"+i).show(tiempo+(i*50));
	}
	$("#mie0").hide();
	$("#mie0").show(500);
	for(i = 1; i<=miercoles; i++){
		//$("#mie"+i).hide();
		document.getElementById("mie"+i).innerHTML = "<img src=\"img/p1.png\">";
		//$("#mie"+i).show(tiempo+(i*50));
	}
	$("#jue11").hide();
	$("#jue11").show(500);
	for(i = 1; i<=jueves; i++){
		//$("#jue"+i).hide();
		document.getElementById("jue"+i).innerHTML = "<img src=\"img/p1.png\">";
		//$("#jue"+i).show(tiempo+(i*50));
	}
	$("#vie0").hide();
	$("#vie0").show(500);
	for(i = 1; i<=viernes; i++){
		//$("#vie"+i).hide();
		document.getElementById("vie"+i).innerHTML = "<img src=\"img/p1.png\">";
		//$("#vie"+i).show(tiempo+(i*50));
	}
	$("#sab11").hide();
	$("#sab11").show(500);
	for(i = 1; i<=sabado; i++){
		//$("#sab"+i).hide();
		document.getElementById("sab"+i).innerHTML = "<img src=\"img/p1.png\">";
		//$("#sab"+i).show(tiempo+(i*50));
	}
	$("#dom0").hide();
	$("#dom0").show(500,function(){
		setInterval(
			function(){$("#DivTabla").addClass("sombra")
		}, 1000);
	});
	for(i = 1; i<=domingo; i++){
		//$("#dom"+i).hide();
		document.getElementById("dom"+i).innerHTML = "<img src=\"img/p1.png\">";
		//$("#dom"+i).show(tiempo+(i*50));
	}
		
	

}

$("#comboSemana").change(llena);

//CAMBIA EL LINK DE LA PÁGINA ACTIVA EN EL NAV-BAR//
function itemActivo(){
    $("#cliente-espera").removeClass("active");
    $("#turnos-atendidos").removeClass("active");
    $("#empleados-atendiendo").addClass("active");
    $("#tiempo-sin-atende").removeClass("active");
    $("#detalle-completo").removeClass("active");
}

//APLICAR ESTILOS GENERALES-VERDES
function cambiaEstilosVerdes (){
    $("#empleados-atendiendo-active").addClass("nav-degradado-verde");
    $("#empleados-atendiendo-active").removeClass("nav-degradado-rojo");
    $("#titulo").removeClass("titulos-graficas-barras titulos-barra rojo-fuerte");
    $("#titulo").addClass("titulos-graficas-barras titulos-barra verde-fuerte");
    $("#lun0").removeClass("diasRojo");
    $("#lun0").addClass("dias");
    $("#mie0").removeClass("diasRojo");
    $("#mie0").addClass("dias");
    $("#vie0").removeClass("diasRojo");
    $("#vie0").addClass("dias");
    $("#dom0").removeClass("diasRojo");
    $("#dom0").addClass("dias");
    $("#mar11").removeClass("diasRojo");
    $("#mar11").addClass("dias");
    $("#jue11").removeClass("diasRojo");
    $("#jue11").addClass("dias");
    $("#sab11").removeClass("diasRojo");
    $("#sab11").addClass("dias");
    $("#lunes").removeClass("red-tooltip");
    $("#lunes").addClass("green-tooltip");
    $("#martes").removeClass("red-tooltip");
    $("#martes").addClass("green-tooltip");
    $("#miercoles").removeClass("red-tooltip");
    $("#miercoles").addClass("green-tooltip");
    $("#jueves").removeClass("red-tooltip");
    $("#jueves").addClass("green-tooltip");
    $("#viernes").removeClass("red-tooltip");
    $("#viernes").addClass("green-tooltip");
    $("#sabado").removeClass("red-tooltip");
    $("#sabado").addClass("green-tooltip");
    $("#domingo").removeClass("red-tooltip");
    $("#domingo").addClass("green-tooltip");
}

//APLICAR ESTILOS DETALLES-ROJOS
function cambiaEstilosRojos (){
    $("#empleados-atendiendo-active").addClass("nav-degradado-rojo");
    $("#empleados-atendiendo-active").removeClass("nav-degradado-verde");
    $("#titulo").removeClass("titulos-graficas-barras titulos-barra verde-fuerte");
    $("#titulo").addClass("titulos-graficas-barras titulos-barra rojo-fuerte");
    $("#lun0").removeClass("dias");
    $("#lun0").addClass("diasRojo");
    $("#mie0").removeClass("dias");
    $("#mie0").addClass("diasRojo");
    $("#vie0").removeClass("dias");
    $("#vie0").addClass("diasRojo");
    $("#dom0").removeClass("dias");
    $("#dom0").addClass("diasRojo");
    $("#mar11").removeClass("dias");
    $("#mar11").addClass("diasRojo");
    $("#jue11").removeClass("dias");
    $("#jue11").addClass("diasRojo");
    $("#sab11").removeClass("dias");
    $("#sab11").addClass("diasRojo");
    $("#lunes").removeClass("green-tooltip");
    $("#lunes").addClass("red-tooltip");
    $("#martes").removeClass("green-tooltip");
    $("#martes").addClass("red-tooltip");
    $("#miercoles").removeClass("green-tooltip");
    $("#miercoles").addClass("red-tooltip");
    $("#jueves").removeClass("green-tooltip");
    $("#jueves").addClass("red-tooltip");
    $("#viernes").removeClass("green-tooltip");
    $("#viernes").addClass("red-tooltip");
    $("#sabado").removeClass("green-tooltip");
    $("#sabado").addClass("red-tooltip");
    $("#domingo").removeClass("green-tooltip");
    $("#domingo").addClass("red-tooltip");
}

//CAMBIO DE CSS (GENERAL-DETALLE)
$("#opcion1").click(function() {
  genSucActual = $("#opcion1").text();
  getSucDetalle();
  llena();
});

$("#opcion2").click(function() {
  genSucActual = $("#opcion2").text();
  getSucDetalle();
  llena();
});

function toolTips(diasT){
	$('#lunes').tooltip('hide')
          .attr('data-original-title', "".concat(diasT.lunV," empleados"))
          .tooltip('fixTitle')
          
	$('#martes').tooltip('hide')
          .attr('data-original-title', "".concat(diasT.marV," empleados"))
          .tooltip('fixTitle')
          
	$('#miercoles').tooltip('hide')
          .attr('data-original-title', "".concat(diasT.mieV," empleados"))
          .tooltip('fixTitle')
          
	$('#jueves').tooltip('hide')
          .attr('data-original-title', "".concat(diasT.jueV," empleados"))
          .tooltip('fixTitle')
          
	$('#viernes').tooltip('hide')
          .attr('data-original-title', "".concat(diasT.vieV," empleados"))
          .tooltip('fixTitle')
          
	$('#sabado').tooltip('hide')
          .attr('data-original-title', "".concat(diasT.sabV," empleados"))
          .tooltip('fixTitle')
          
	$('#domingo').tooltip('hide')
          .attr('data-original-title',"".concat(diasT.domV," empleados"))
          .tooltip('fixTitle')
          
}




