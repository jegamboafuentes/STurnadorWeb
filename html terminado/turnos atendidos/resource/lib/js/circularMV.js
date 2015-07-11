$(function () {
			$('#circularMV').highcharts({
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
						['Turnos Virtuales', 31617],
						['Turnos', 44893]
					]
				}]
			});
		});