function saludar() {
  let nombre = document.getElementById("nombre").value.trim();
  let apellido = document.getElementById("apellido").value.trim();
  let soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

  if (nombre === "") {
    document.getElementById("resultado").innerText = "Por favor, ingresa tu nombre.";
  } else if (nombre.length < 3) {
    document.getElementById("resultado").innerText = "El nombre debe tener al menos 3 caracteres.";
  } else if (!soloLetras.test(nombre)) {
    document.getElementById("resultado").innerText = "El nombre solo debe contener letras.";
  } else {
    let nombreFormateado = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
    document.getElementById("resultado").innerText = "Hola " + nombreFormateado + ", bienvenido al sistema.";
  }

  if (apellido === "") {
    document.getElementById("resultado").innerText = "Por favor, ingresa tu apellido.";
  } else if (apellido.length < 4) {
    document.getElementById("resultado").innerText = "El apellido debe tener al menos 4 caracteres.";
  } else if (!soloLetras.test(apellido)) {
    document.getElementById("resultado").innerText = "El apellido solo debe contener letras.";
  } else {
    let apellidoFormateado = apellido.charAt(0).toUpperCase() + apellido.slice(1).toLowerCase();
    document.getElementById("resultado").innerText = "Hola " + apellidoFormateado + ", bienvenido al sistema.";
  }
  
}

function validarCorreo() {
  let correo = document.getElementById("correo").value;
  if (correo === "") {
    document.getElementById("mensajeCorreo").innerText = "Debe ingresar un correo.";
  } else {
    document.getElementById("mensajeCorreo").innerText = "Correo registrado correctamente.";
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
  document.getElementById("contador").innerText = "0/30 caracteres";
}