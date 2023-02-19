function nombre_ok(){
	var nombre = document.getElementById('nombre');
	var nombre_valido = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
	var error_nombre= document.getElementById('error_nombre');
	let ok = false;

	if (nombre_valido.test(nombre.value)) {
		ok = true;
		error_nombre.innerHTML = "";
	}
	else if (nombre.value == 0) {
		error_nombre.innerHTML = "Rellene este campo";
	}
	else {
		error_nombre.innerHTML = "Nombre inválido";
	}

	if(ok ==  false){
		nombre.classList.remove("ok");
		nombre.classList.remove("success_icon");	
		nombre.classList.add("no_ok");
		nombre.classList.add("error_icon");
	}
	else {
		nombre.classList.remove("no_ok");
		nombre.classList.remove("error_icon");
		nombre.classList.add("ok");
		nombre.classList.add("success_icon");
	}

	return ok;
}

function mail_ok() {
	var mail = document.getElementById('mail');
	var mail_valido =  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
	var error_mail = document.getElementById('error_mail');
	let ok = false;

	if (mail_valido.test(mail.value)) {
		error_mail.innerHTML = "";
		ok = true;
	}else if (mail.value == 0) {
		error_mail.innerHTML = "Rellene este campo";
	}
	else {
		error_mail.innerHTML = "Email inválido";
	}

	if(ok ==  false){
		mail.classList.remove("ok");
		mail.classList.remove("success_icon");	
		mail.classList.add("no_ok");
		mail.classList.add("error_icon");
	}
	else {
		mail.classList.remove("no_ok");
		mail.classList.remove("error_icon");
		mail.classList.add("ok");
		mail.classList.add("success_icon");
	}

	return ok;
} 

function contrasenia_ok() {
	var contrasenia = document.getElementById('contrasenia');
	var contrasenia_valida = /^[\s\S]{1,8}$/;
	var error_contrasenia = document.getElementById('error_contrasenia');
	let ok = false;

	
	if (contrasenia_valida.test(contrasenia.value) ) {
		error_contrasenia.innerHTML = "";
		ok = true
	}
	else if (contrasenia.value == 0) {
		error_contrasenia.innerHTML = "Rellene este campo";
	}
	else {	
		error_contrasenia.innerHTML = "No debe tener más de 8 caracteres";
	}

	if(ok ==  false){
		contrasenia.classList.remove("ok");
		contrasenia.classList.remove("success_icon");	
		contrasenia.classList.add("no_ok");
		contrasenia.classList.add("error_icon");
	}
	else {
		contrasenia.classList.remove("no_ok");
		contrasenia.classList.remove("error_icon");
		contrasenia.classList.add("ok");
		contrasenia.classList.add("success_icon");
	}

	return ok;
}

function contrasenia2_ok() {
	var contrasenia = document.getElementById('contrasenia');
	var contrasenia2 = document.getElementById('contrasenia2');
	var error_contrasenia2 = document.getElementById('error_contrasenia2');
	let ok = false;

	if (contrasenia.value == contrasenia2.value && contrasenia.value!=0) {
		error_contrasenia2.innerHTML = "";
		ok = true;
	}else if (contrasenia2.value == 0) {
		error_contrasenia2.innerHTML = "Rellene este campo";
	}
	else {
		error_contrasenia2.innerHTML = "Las contraseñas no coinciden";
	}

	if(ok == false){
		contrasenia2.classList.remove("ok");
		contrasenia2.classList.remove("success_icon");
		contrasenia2.classList.add("no_ok");
		contrasenia2.classList.add("error_icon");
	}
	else {
		contrasenia2.classList.remove("no_ok");
		contrasenia2.classList.remove("error_icon");
		contrasenia2.classList.add("ok");
		contrasenia2.classList.add("success_icon");
	}
	
	return ok;
}

function bordeBoton() {
	var borde_boton = document.getElementById('button');
	borde_boton.onmouseover = () => {
		borde_boton.classList.add('borderColor');
	}
	borde_boton.onmouseout = () => {	
		borde_boton.classList.remove('borderColor');
	}
}

function todo_ok() {
	var formulario = document.getElementById("form");
	let nombreok = nombre_ok();
	let mailok = mail_ok();
	let contraseniaok = contrasenia_ok();
	let contrasenia2ok = contrasenia2_ok();
	if (nombreok && mailok && contraseniaok && contrasenia2ok) {
		alert('La inscripción ha sido correcta!')
		formulario.reset();
		return false;
	}
	else {
		return false;
	}
}