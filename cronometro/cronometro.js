(function () {
	// imprimir fecha
	var actualizarFecha = function(){
		var fecha = new Date(),
			diaSemana = fecha.getDay(),
			dia = fecha.getDate(),
			mes = fecha.getMonth(),
			year = fecha.getFullYear();

		var pDiaSemana = document.getElementById('diaSemana'),
			pDia = document.getElementById('dia'),
			pMes = document.getElementById('mes'),
			pYear = document.getElementById('year');

		var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
		pDiaSemana.textContent = semana[diaSemana];

		pDia.textContent = dia;
		
		var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
		pMes.textContent = meses[mes];

		pYear.textContent = year;
	};
	
	// imprimir hora
	var actualizarHora = function(){
		var pSegundos = document.getElementById('segundos'),
			pMinutos = document.getElementById('minutos'),
			pHoras = document.getElementById('horas');

		var segundos = parseInt(pSegundos.textContent),
			minutos = parseInt(pMinutos.textContent),
			horas = parseInt(pHoras.textContent);

		segundos = segundos + 1;
		if(segundos === 60){
			minutos = minutos + 1;
			segundos = 0;
 		}
 		if(minutos === 60){
 			horas = horas + 1;
 			minutos = 0;
 		}

		
		if (segundos <= 9) {
			segundos = "0" + segundos; 
		}
		if(minutos <= 9){
			minutos = "0" + minutos;
		}
		if(horas <= 9){
			horas = "0" + horas;
		}

		pSegundos.textContent = segundos;
		pMinutos.textContent = minutos;
		pHoras.textContent = horas;
	};

	actualizarHora();
	actualizarFecha();

	var intervalo = setInterval(actualizarHora, 1000);
}())