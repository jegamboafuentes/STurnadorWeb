$(function() {
  // Handler for .ready() called.
});

$( window ).load(function() {
 	//alert('cargando configuraciones');
 	elegirSemana ();
});


function elegirSemana () {
	var semana = $("#comboSemana").val();
	//var tipoReporte = $("#tipoReporte").val();
 	
 	
 	if(semana == 33){
	 	turnos	= 5844;
	 	virtuales = 4110;
        totales = 9954;
	 	
		setValores();
		grafica();
	}else if (semana == 34) {
	 	turnos   = 5051;
        virtuales = 4569;
        totales = 9620;

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
                    text: ''
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







