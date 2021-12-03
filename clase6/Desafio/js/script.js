class Usuario {
    constructor (nombre, psw, domicilio, provincia, localidad){
        this.nombre = nombre.toLowerCase()
        this.psw = psw
        this.domicilio = domicilio.toLowerCase()
        this.provincia = provincia.toLowerCase()
        this.localidad = localidad.toLowerCase()
    }
}

const usuarios = []
usuarios.push (new Usuario ("Camila.ruiz", "123456", "colon 666", "cordoba", "cordoba"));
usuarios.push (new Usuario ("Ana.Martinez", "111111", "sarmiento 373", "Salta", "salta"));
usuarios.push (new Usuario ("julio.perez", "22222", "haedo 55", "cordoba", "cordoba"));


class Turno {
    constructor (yyyy, mm, dd, hh) {
        this.yyyy = yyyy
        this.mm = mm
        this.dd = dd
        this.hh = hh
        this.reservado = false
    }

    reservar (){
        this.reservado = true
    }
}


const turnosDisponibles = [];
turnosDisponibles.push (new Turno (2021, 11, 25, "10hs"))
turnosDisponibles.push (new Turno (2021, 11, 26, "13hs"))
turnosDisponibles.push (new Turno (2021, 11, 5, "14hs"))




function validar() {

    let ingresoUsuario = toLowerCase(prompt ("Ingresá tu nombre de usuario para reservar un turno"));
    let contrasenaUsuario = toLowerCase(prompt ("Ingresá tu contraseña"));

    for (let i = 0; i < usuarios.length; i++) {
    if ((usuarios[i].nombre === ingresoUsuario) && (usuarios[i].psw === contrasenaUsuario)) {
        alert('Bienvenido/a '+ingresoUsuario);
    } else {alert('Tu nombre o contraseña son inválidos. Por favor intentá de nuevo')}
    }
}

validar ()



function reservar() {

let entrada = prompt ('Elegí el turno que querés reservar para el servicio Gasista. \n 1:Jueves 25 - 10:00hs. \n 2: Viernes 26 - 13:00hs. \n 3: Viernes 5 - 14:00hs.')

switch (entrada) {
    case '1':
        alert ('Listo! Registramos tu turno de Limpieza para el día Jueves 25 - 10:00hs.');
        turnosDisponibles[0].reservar();
        break;
    case '2':
        alert ('Listo! Registramos tu turno de Limpieza para el día Viernes 26 - 13:00hs.');
        turnosDisponibles[1].reservar();
        break;
    case '3':
        alert ('Listo! Registramos tu turno de Limpieza para el día Viernes 5 - 14:00hs.');
        turnosDisponibles[2].reservar();
        break; 
        
    default:
        alert ('Tu consulta es inválida, por favor elegí otra opción');
        break;
}
alert ('Revisá la consola en inspeccionar para ver el turno reservado');

console.log (turnosDisponibles);
}

reservar()

