console.log("primera pre-entrega ")


let nombre = prompt("Ingrese su nombre: ");
let apellido = prompt("Ingrese su apellido: ");
let tipoDeSangre = prompt("Ingrese su tipo de sangre: ");
const añoNacimiento = parseInt(prompt("Ingrese su año de nacimiento: "));
const añoActual = parseFloat(prompt("Ingrese el año actual: "));
const edad = añoActual - añoNacimiento;





alert("Hola, " + nombre + " " + apellido + " tu tipo de sangre es " + tipoDeSangre + " y naciste en " + añoNacimiento + "! Tienes " + edad + " años.");

const titulo = document.getElementById("zanm-title");
const zanmGif = document.getElementById("zanm-gif");
titulo.hidden = false;
zanmGif.hidden = false;
const titulo2 = document.getElementById("zanm-title-2");
titulo2.hidden = false;