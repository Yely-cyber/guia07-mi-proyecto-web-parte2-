function saludar() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  if (nombre === "") {
    document.getElementById("resultado").innerText = "Por favor, ingresa tu nombre.";
  } else if (apellido === "") {
    document.getElementById("resultado").innerText = "Por favor, ingresa tu apellido.";
  }else {
    document.getElementById("resultado").innerText = "Hola " + nombre + apellido + ", bienvenido al sistema.";
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