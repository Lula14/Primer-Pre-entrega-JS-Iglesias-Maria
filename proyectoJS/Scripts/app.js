//DECLARACIÓN DE VARIABLES A USAR

let nombre = prompt("Ingrese su nombre");
let edad = parseInt(prompt("Ingrese su edad"))
const monto = document.querySelector("#monto")
const cuotas = document.querySelector("#cantidadCuotas");
const valorCouta = 0;

const cuotasSelecionadas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function cargarArrayCuotas () { 
   

       cuotasSelecionadas.forEach ( cuota => {
        cantidadCuotas.innerHTML += `<option value="">${cuota}</option>`
    })

}
console.log(cuotasSelecionadas)

const interesPorCuota = [
    { cuotas: '1', interes: 1.10 },
    { cuotas: '2', interes: 1.15 },
    { cuotas: '3', interes: 1.20 },
    { cuotas: '4', interes: 1.25 },
    { cuotas: '5', interes: 1.30 },
    { cuotas: '6', interes: 1.35 },
    { cuotas: '7', interes: 1.40 },
    { cuotas: '8', interes: 1.45 },
    { cuotas: '9', interes: 1.50 },
    { cuotas: '10', interes: 1.55 },
    { cuotas: '11', interes: 1.60 },
    { cuotas: '12', interes: 1.65 },];
console.table(interesPorCuota)
for (let i = 0; i <= 12; i++) {
    console.log(interesPorCuota[i]);
}


//FUNCION DE ACCESO AL SITIO PARA MAYORES DE 18 AÑOS
function accesoAlSitio() {
    if (edad <= 17) {
        alert("Lo sentimos, no puedes ingresar por ser menor de edad.")
    }
    else {
        alert("Bienvenide" + " " + nombre + ", vamos a simular tu credito. Ingresá un monto y selecciona la cantidad de cuotas")
    }
}
accesoAlSitio()
cargarArrayCuotas()


