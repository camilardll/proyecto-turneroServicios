
//Pedir nombre de usuario
// Si el nombre de usaurio es "" pedir que ingrese de nuevo
// si no es "" pedir contraseña
// Si la contraseña es "" pedir de nuevo
// Si no es vacia "" pedir nombre y pedir contraseña
// Si nombre y contraseña son correctos dar bienvenida
// Si no dar como ivalido



do {
    nombreUsuario = prompt ("Ingresá un nombre de usuario válido para crear tu cuenta");
} while (nombreUsuario === '') 

do {
    contrasenaUsuario = prompt ("Ingresá una contraseña válida");
} while (contrasenaUsuario === '')



alert ("Felicitaciones " + nombreUsuario + ", tu usuario se creó correctamente!");


let nombreUsuario2 = prompt ("Ingresá nuevamente tu usuario para empezar");
let contrasenaUsuario2 = prompt ("Ingresá tu contraseña");
    
        
if ((nombreUsuario2 === nombreUsuario) && (contrasenaUsuario2 === contrasenaUsuario)){
    alert ("¡Bienvenido " + nombreUsuario + "! A continuación vas a poder elegir tu próximo turno para servicio de limpieza");
} else {
    alert ("Los datos ingresados son incorrectos. Por favor, volvé a comenzar.");
}


let entrada = prompt ('Elegí el horario que quiera contratar para el servicio Limpieza. 1: Lunes 15 - 9:30hs. / 2: Lunes 15 - 10:30hs. / 3: Martes 16 - 14:00hs.')

while (entrada) {
    switch (entrada) {
        case '1':
            alert ('Listo! Registramos tu turno de Limpieza para el día Lunes 15 - 9:30hs.');
            break;
        case '2':
            alert ('Listo! Registramos tu turno de Limpieza para el día Lunes 15 - 10:30hs.');
            break;
        case '3':
            prompt ('Listo! Registramos tu turno de Limpieza para el día Martes 16 - 14:00hs.');
            break; 
        default:
            alert ('Tu consulta es inválida, por favor elegí otra opción');
            break;
    }
    entrada = prompt ('Elegí otra opción para avanzar')
}