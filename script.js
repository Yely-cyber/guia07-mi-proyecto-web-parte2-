function saludar() {
  let nombre = document.getElementById("nombre").value.trim();
  let apellido = document.getElementById("apellido").value.trim();
  let soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  let mensaje = "";
  let resultado = document.getElementById("resultado");

  // Validación nombre
  if (nombre === "") {
    mensaje += "Por favor, ingresa tu nombre.\n";
  } else if (nombre.length < 3) {
    mensaje += "El nombre debe tener al menos 3 caracteres.\n";
  } else if (!soloLetras.test(nombre)) {
    mensaje += "El nombre solo debe contener letras.\n";
  }

  // Validación apellido
  if (apellido === "") {
    mensaje += "Por favor, ingresa tu apellido.\n";
  } else if (apellido.length < 4) {
    mensaje += "El apellido debe tener al menos 4 caracteres.\n";
  } else if (!soloLetras.test(apellido)) {
    mensaje += "El apellido solo debe contener letras.\n";
  }

  // Mostrar errores
  if (mensaje !== "") {
    resultado.innerText = mensaje;
    resultado.className = "error";
  } else {
    let nombreFormateado = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
    let apellidoFormateado = apellido.charAt(0).toUpperCase() + apellido.slice(1).toLowerCase();

    resultado.innerText = "Hola " + nombreFormateado + " " + apellidoFormateado + ", bienvenido al sistema.";
    resultado.className = "exito";
  }
}

function validarCorreo() {
  let correo = document.getElementById("correo").value.trim();
  let formatoCorreo = /^[0-9]+@unsaac\.edu\.pe$/;
  let mensajeCorreo = document.getElementById("mensajeCorreo");

  if (correo === "") {
    mensajeCorreo.innerText = "Debe ingresar un correo.";
    mensajeCorreo.className = "error";
  } else if (!formatoCorreo.test(correo)) {
    mensajeCorreo.innerText = "El correo no tiene un formato válido.";
    mensajeCorreo.className = "error";
  } else {
    mensajeCorreo.innerText = "Correo " + correo + " registrado correctamente.";
    mensajeCorreo.className = "exito";
  }
}

function contarCaracteres() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;

  document.getElementById("contador_nombre").innerText = nombre.length + "/30 caracteres";
  document.getElementById("contador_apellido").innerText = apellido.length + "/30 caracteres";
}

function limpiar() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("correo").value = "";
  document.getElementById("resultado").innerText = "";
  document.getElementById("mensajeCorreo").innerText = "";

  document.getElementById("contador_nombre").innerText = "0/30 caracteres";
  document.getElementById("contador_apellido").innerText = "0/30 caracteres";

  document.getElementById("resultado").className = "";
  document.getElementById("mensajeCorreo").className = "";
}