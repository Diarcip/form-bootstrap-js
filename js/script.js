function True_or_false(day,month,year)
{
	var dteDate;
	month = month-1;
	dteDate = new Date(year,month,day);
	return ((day = dteDate.getDate()) && (month = dteDate.getMonth()) && (year = dteDate.getFullYear()));
}

function validar_fech(fecha){
	var patron = new RegExp("^(15|16|17|18|19|20)+([0-9]{2})([-])([0-9]{1,2})([-])([0-9]{1,2})$");
	if(fecha.search(patron) == 0){
		var valores = fecha.split("-");
		if(True_or_false(valores[2],valores[1],valores[0])){
			return true;
		}
	}else{
		return false;
	}
}

function calcularEdad(){
	var fecha = document.getElementById("ingreso_user").value;
	if(validar_fech(fecha) == true){
		var valores = fecha.split("-");
		var dia = valores[2];
		var mes = valores[1];
		var ano = valores[0];
		var fecha_hoy = new Date();
		var ahora_ano = fecha_hoy.getYear()+1;
		var ahora_mes = fecha_hoy.getMonth()+1;
		var ahora_dia = fecha_hoy.getDate();

		var edad = (ahora_ano + 1900) - ano;
		if (ahora_mes<mes)
		{
			edad--;
		}
		if ((mes == ahora_mes) && (ahora_dia<dia));
		{
			edad--;
		}
		if (edad > 1900)
		{
			edad -= 1900;
		}
		var meses = 0;
		if(ahora_mes>mes)
			meses = ahora_mes-mes;
		if(ahora_mes<mes)
			meses=12-(mes-ahora_mes);
		if(ahora_mes == mes && dia>ahora_dia)
			meses = 11;

		var dias = 0;
		if(ahora_dia>dia)
			dias = ahora_dia-dia;
		if(ahora_dia<dia){
			ultimoDiaMes = new Date(ahora_ano, ahora_mes, 0);
			dias = ultimoDiaMes.getDate()-(dia-ahora_dia);

		document.getElementsByName("result")[0].value = edad;

  	}else{
  		document.getElementsByName("result")[0].value = "La fecha "+fecha+" es incorrecta";
  	}
  }
}

function Mostrar(form) {
	var valores = [];
	var Depor = form.Deportes;

	for (var i=0, iLen=Depor.length; i<iLen; i++)
	{
		if(Depor[i].checked)
		{
			valores.push(Depor[i].value);
		}
	}
  var mylist = document.getElementById("inputGroupSelect01");
  //document.getElementById("inputGroupSelect01").value = mylist.options[mylist.selectedIndex].text;

	alert (	'Tu nombre es: '+formulario.nombre.value+'\n'+
			'Tu apellido es: '+formulario.Apellido.value+'\n'+
			'Su '+formulario.tip_doc1.value+' es: '+formulario.identi.value+'\n'+
			'Su fecha de nacimiento es '+formulario.ingreso_user.value+ '(YYYY/MM/DD)'+'\n'+
			'Su direccion es: '+formulario.dire.value+'\n'+
			'Su email es: '+formulario.email.value+'\n'+
			'Su numero de celular es: '+formulario.cel.value+'\n'+
			'Deportes: '+valores.join(', '));
}
