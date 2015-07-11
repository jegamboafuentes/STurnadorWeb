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
	 	turnos	= 11381;
	 	virtuales = 9656;
        totales = 21037;
	 	
		setValores();
		grafica();
	}else if (semana == 34) {
	 	turnos   = 11002;
        virtuales = 10233;
        totales = 21235;

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
                colors: ['#b2d956', '#006837'],
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







