// calculo del IVA
// ingresar precio del costo
// sumar IVA
// mostrar precio calculado


function precioIva (precio, iva) {
    resultado = precio * iva;
    return resultado
}

let precioCosto = parseInt (prompt ('Ingresá el valor de un producto'))
const iva  = 1.21

let precioCalculado = precioIva (precioCosto, iva)
alert ('El valor del producto con IVA incluido es de $' + precioCalculado)



// Calculo de interes

let importe = parseInt(prompt ("Ingrese valor de la compra"))
let planIng = prompt ('Por favor ingrese el plan de pagos elegido: 1: En 3 cuotas / 2: en 6 cuotas / 3: en 8 cuotas');

switch (planIng) {
    case '1':
        compra = (importe * 1.21);
        break;
    case '2':
        compra = (importe * 1.46);
        break;
    case '3':
        compra = (importe * 1.78);
        break;
    default: alert ('Plan no válido');
    break;
} alert ('El total de su compra es de $' + compra)


// Calculo de cambio

let peso = parseInt(prompt('Ingresá el dinero en Pesos Argentinos que querés convertir'))
let dolar = 0

function convertDolar (peso,dolar) {
    let resultado = peso / dolar;
    return resultado
}


let calculoDolar = prompt ('Elegí el tipo de cambio que querés aplicar: 1-Oficial / 2- Blue')

switch (calculoDolar) {
    case '1':
        final = convertDolar (peso, 105);
        break;
    case '2':
        final = convertDolar (peso, 202);
        break;
    default: alert ('Esta opción no es válida');
    break;
} alert ('El valor total en dólares es de $' + final)

