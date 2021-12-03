// Bienvenido a tu sistema de ayuda. Elegí tu consulta 3 opciones
// Prompt Pedir un número del 1 al 3 = un numero
// Si ingresa 1 = Alerta + break
// Si ingresa != numero "Tu consulta es inválida" break



let entrada = prompt ('Bienvenido a Soporte en línea. Elegí una opción para continuar. 1: Consulta de Saldo / 2: Consultar factura. 3: Dar de baja')

while (parseInt (entrada)) {
    switch (entrada) {
        case '1':
            alert ('Tu saldo es de $200 y vence en 15 días');
            break;
        case '2':
            alert ('Tu factura por $500 vence el 10 de noviembre');
            break;
        case '3':
            prompt ('Tu cuenta ya está dada de baja. Por favor indicanos la razón de tu decisión.');
            break; 
        default:
            alert ('Tu consulta es inválida, por favor elegí otra opción')
    }
    entrada = prompt ('Elegí otra opción para avanzar')
}