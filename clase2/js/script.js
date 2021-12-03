
//Pedir nombre de usuario
// Si el nombre de usaurio es "" pedir que ingrese de nuevo
// si no es "" pedir contraseña
// Si la contraseña es "" pedir de nuevo
// Si no es vacia "" pedir nombre y pedir contraseña
// Si nombre y contraseña son correctos dar bienvenida
// Si no dar como ivalido


let nombreUsuario = prompt ("Ingresá un nombre de usaurio para crear tu cuenta");

let alerta1 = "Tu nombre de usaurio no es válido. Por favor, volvé a empezar";

let alerta2 = "Tu contraseña es inválida. Por favor, volvé a empezar";
let alerta3 = "Felicitaciones! Tu usuario se creó correctamente.";
let alerta4 = "Bienvenido!";
let alerta5 = "Los datos ingresados son incorrectos. Por favor, volvé a comenzar.";


if (nombreUsuario === "") {
    alert (alerta1);
} 

else {
    let contrasenaUsuario = prompt ("Ingresá una contraseña");

    
    if (contrasenaUsuario === "") {
        alert (alerta2);
    }
    
    else {
        alert (alerta3);
        let nombreUsuario2 = prompt ("Ingresá nuevamente tu usuario");
        let contrasenaUsuario2 = prompt ("Ingresá nuevamente tu contraseña");
    

            
            if (nombreUsuario2 === nombreUsuario) {
                alert (alerta4);
            }

            else {
                alert (alerta5);
            }
    }
    }

