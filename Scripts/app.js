//DECLARACIÓN DE VARIABLES A USAR

let nombre = prompt("Ingrese su nombre");
let edad = parseInt (prompt ("Ingrese su edad"))
let monto = parseInt(prompt("Ingrese un monto entre $10.000 y $100.000 -No usar puntos ni simbolos de $-"));
let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas: minimo 1 - maximo 12 "));
let valorCouta = 0;

//FUNCION DE ACCESO AL SITIO PARA MAYORES DE 18 AÑOS
function accesoAlSitio () {
    if (edad <=17) {
        alert("Lo sentimos, no puedes ingresar por ser menor de edad.")
    } 
    else{
        alert("Bienvenide" + " " + nombre)
    }
}
accesoAlSitio()



