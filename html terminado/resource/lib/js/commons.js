$("#barra-navegacion").click(function() { //VALOR DEL COMBO SEMANA
	var combosemana = $("#comboSemana").val();
	localStorage.setItem("semAct", combosemana);
});


$("#cerrarSesion").click(function() { //VALOR DEL COMBO SEMANA
	setHome();
});

$("#ir-a-principal").click(function() { //VALOR DEL COMBO SEMANA
	setHome();
});

function setHome (){
	localStorage.setItem("gen-suc", "Datos Generales");
	localStorage.setItem("semAct", "33");
};