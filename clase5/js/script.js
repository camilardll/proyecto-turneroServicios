class Usuario {
    constructor (nombre, psw, domicilio, provincia, localidad){
        this.nombre = nombre.toLowerCase()
        this.psw = psw
        this.domicilio = domicilio.toLowerCase()
        this.provincia = provincia.toLowerCase()
        this.localidad = localidad.toLowerCase()
    }
}

const usuario1 = new Usuario ("Camila.ruiz", "123456", "colon 666", "cordoba", "cordoba");
const usuario2 = new Usuario ("Ana.Martinez", "111111", "sarmiento 373", "Salta", "salta");
const usuario3 = new Usuario ("julio.perez", "22222", "haedo 55", "cordoba", "cordoba");


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

const turnoGas1 = new Turno (2021, 11, 25, "10hs")
const turnoGas2 = new Turno (2021, 11, 26, "13hs")
const turnoGas3 = new Turno (2021, 11, 5, "14hs")




let ingresoUsuario = prompt ("Ingresá tu nombre de usuario para reservar un turno");
let contrasenaUsuario = prompt ("Ingresá tu contraseña");
    


while (ingresoUsuario) {
    switch (ingresoUsuario) {
        case 'camila.ruiz':
            if (contrasenaUsuario === usuario1.psw){
                alert ("¡Bienvenido " + ingresoUsuario + "! A continuación vas a poder elegir tu próximo turno para servicio de gasista");
            };
                break;

        case 'ana.martinez':
            if (contrasenaUsuario === usuario2.psw){
                alert ("¡Bienvenido " + ingresoUsuario + "! A continuación vas a poder elegir tu próximo turno para servicio de gasista");
            };
                break;
        case 'julio.perez':
            if (contrasenaUsuario === usuario3.psw){
                alert ("¡Bienvenido " + ingresoUsuario + "! A continuación vas a poder elegir tu próximo turno para servicio de gasista");
            };
                break;
            
        default:
            alert ('Tu contraseña es inválida');
            break;
    }    let entrada = prompt ('Elegí el turno que querés reservar para el servicio Gasista. 1:Jueves 25 - 10:00hs. / 2: Viernes 26 - 13:00hs. / 3: Viernes 5 - 14:00hs.')

        while (entrada) {
            switch (entrada) {
                case '1':
                    alert ('Listo! Registramos tu turno de Limpieza para el día Jueves 25 - 10:00hs.');
                    turnoGas1.reservar();
                    break;
                case '2':
                    alert ('Listo! Registramos tu turno de Limpieza para el día Viernes 26 - 13:00hs.');
                    turnoGas2.reservar();
                    break;
                case '3':
                    alert ('Listo! Registramos tu turno de Limpieza para el día Viernes 5 - 14:00hs.');
                    turnoGas3.reservar();
                    break; 
                    
                default:
                    alert ('Tu consulta es inválida, por favor elegí otra opción');
                    break;
            }
            alert ('Revisá la consola en inspeccionar para ver el turno reservado');
            console.log (turnoGas1, turnoGas2, turnoGas3);
            break;
        }break;
    }

