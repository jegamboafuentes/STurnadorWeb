var semanaActual;

function setValorCombo (){
    $("#comboSemana").val(semanaActual);
}

$( window ).load(function() {
 	semanaActual = localStorage.getItem("semAct");
    setValorCombo();
 	elegirSemana ();
});


function elegirSemana () {
	var semana = $("#comboSemana").val();
	//var tipoReporte = $("#tipoReporte").val();
 	
 	
 	if(semana == 33){
	 	turnos	= 5537;
	 	virtuales = 5546;
        totales = 11083;
	 	
		setValores();
		grafica();
	}else if (semana == 34) {
	 	turnos   = 5951;
        virtuales = 5664;
        totales = 11615;

		setValores();
		grafica();
	}
}

$("#comboSemana").change(elegirSemana);


function setValores (){
 	$("#turnos").text(turnos);
 	$("#virtuales").text(virtuales);
 	$("#totales").text(totales);

}

function grafica (){
$('#circularG').highcharts({
               colors: ['#FE2E2E', '#FE642E'],
                /*style: {
                    fontFamily: 'MyriadPro-Regular, Myriad Pro Regular',
                    fontSize: '2px'
                        },*/                            
                chart: {
                    type: 'pie'
                },
                title: {
                    text: 'Turnos Atendidos'
                },              
                plotOptions: {
                    pie: {
                        innerSize: 200,
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







