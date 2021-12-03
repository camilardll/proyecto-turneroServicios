let entradaA = parseInt(prompt("Ingresá un número del 1 al 10"));
let entradaB = parseInt(prompt("Ingresá otro número del 1 al 10"));
const mensaje1 = "¿Sabías que si multiplicás ";
const mensaje2 = " por ";
const mensaje3 = " te da como resultado el número ";
const mensaje4 = " ?";

let resultadoMulti = entradaA * entradaB;
const textoFinal = " es la cantidad de veces que tuve que googlear cómo codear esto hasta que me salió."

let salida1 = mensaje1+entradaA+mensaje2+entradaB+mensaje3+resultadoMulti+mensaje4
let salida2 = resultadoMulti + textoFinal
alert(salida1)
alert(salida2)






