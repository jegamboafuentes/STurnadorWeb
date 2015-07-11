function hola(){
	document.getElementById("lun11").innerHTML = ":)";
}

function llena(){
	var semana;
	var sucursal;

	var lunes;
	var martes;
	var miercoles;
	var jueves;
	var viernes;
	var sabado;
	var domingo;

	if(semana==32){
		if(sucursal=="Datos Generales"){
			lunes = 7;
			martes = 5;
			miercoles = 5;
			jueves = 5;
			viernes = 7;
			sabado = 6;
			domingo = 6;
		}else if(sucursal=="Villa Olimpica"){
			lunes = 6;
			martes = 5;
			miercoles = 5;
			jueves = 4;
			viernes = 6;
			sabado = 6;
			domingo = 6;
		}else if(sucursal=="Miramontes"){
			lunes = 7;
			martes = 4;
			miercoles = 5;
			jueves = 5;
			viernes = 7;
			sabado = 6;
			domingo = 6;
		}
	}

	if(semana==33){
		if(sucursal=="Datos Generales"){
			lunes = 6;
			martes = 5;
			miercoles = 5;
			jueves = 4;
			viernes = 7;
			sabado = 6;
			domingo = 6;
		}else if(sucursal=="Villa Olimpica"){
			lunes = 5;
			martes = 5;
			miercoles = 4;
			jueves = 4;
			viernes = 5;
			sabado = 5;
			domingo = 5;
		}else if(sucursal=="Miramontes"){
			lunes = 5;
			martes = 5;
			miercoles = 4;
			jueves = 4;
			viernes = 5;
			sabado = 5;
			domingo = 5;
		}
	}
}


