// class Usuario {
//     constructor (nombre, psw, domicilio, provincia, localidad){
//         this.nombre = nombre.toLowerCase()
//         this.psw = psw
//         this.domicilio = domicilio.toLowerCase()
//         this.provincia = provincia.toLowerCase()
//         this.localidad = localidad.toLowerCase()
//     }
// }

// const usuarios = []
// usuarios.push (new Usuario ("Camila.ruiz", "123456", "colon 666", "cordoba", "cordoba"));
// usuarios.push (new Usuario ("Ana.Martinez", "111111", "sarmiento 373", "Salta", "salta"));
// usuarios.push (new Usuario ("julio.perez", "22222", "haedo 55", "cordoba", "cordoba"));

// function validar() {

//     let ingresoUsuario = prompt ("Ingresá tu nombre de usuario para reservar un turno");
//     let contrasenaUsuario = prompt ("Ingresá tu contraseña");

//     for (let i = 0; i < usuarios.length; i++) {
//     if ((usuarios[i].nombre === ingresoUsuario) && (usuarios[i].psw === contrasenaUsuario)) {
//         alert('Bienvenido/a '+ingresoUsuario);
//     } else {alert('Tu nombre o contraseña son inválidos. Por favor intentá de nuevo')}
//     }

//     let campoSaludo = document.getElementById("saludo")
//     campoSaludo.innerHTML =`<h2> Bienvenido ${ingresoUsuario}<hr></hr> Elegí el turno que querés reservar para el servicio Gasista.`
// }

// validar ()




class Turno {
    constructor (id, tipoSs, yyyy, mm, dd, hh, estado) {
        this.id= id
        this.tipoSs= tipoSs 
        this.yyyy = yyyy
        this.mm = mm
        this.dd = dd
        this.hh = hh
        this.estado = estado
        this.reservado = false
    }

    reservar (){
        this.reservado = true
        this.estado = "Reservado"
    }
}


const turnosDisponibles = [];
turnosDisponibles.push (new Turno (1, "Plomero", 2021, "Noviembre", "Jueves 25", "10hs", "Disponible"))
turnosDisponibles.push (new Turno (2, "Plomero", 2021, "Noviembre", "Jueves 26", "13hs", "Disponible"))
turnosDisponibles.push (new Turno (3, "Plomero", 2021, "Noviembre", "Viernes 5", "14hs", "Disponible"))



for (const turno of turnosDisponibles) {
    let contenedor = document.createElement ("div")

    contenedor.innerHTML = `
    <div class=disponibleStyle>
    <h3> Servicio de ${turno.tipoSs} </h3>
    <p> ${turno.dd} de ${turno.mm}, ${turno.yyyy} </p>
    <button id="product${turno.id}">${turno.estado}</button>
    </div>
    <hr></hr>
    `;

    //Se agrego class en el div para agregar css a futuro

    let calendarioTurnos = document.getElementById("calendario")
    calendarioTurnos.appendChild(contenedor);
}


const carritoReservas = []

let btn1 = document.getElementById("product1");
btn1.addEventListener("click", () => {
    agregarReserva(1)

})

let btn2 = document.getElementById("product2");
btn2.addEventListener("click", () => {
   agregarReserva(2)
 
})

let btn3 = document.getElementById("product3");
btn3.addEventListener("click", () => {
    agregarReserva(3)
    
})

function agregarReserva (turnoID) {
    let turnoReservado = turnosDisponibles.find ((p => p.id == turnoID));
    carritoReservas.push(turnoReservado);
    turnosDisponibles[turnoID].reservar();
    
    
    mostrarReservas();

}


function mostrarReservas (){
    let contenedor2 = document.getElementById("misTurnos");
        
    for (const turno of carritoReservas) {
        let contenedor2 = document.createElement ("div")
    
        contenedor2.innerHTML = `
        <div class=reservadoStyle>
        <h3> Turno reservado para: ${turno.tipoSs} </h3>
        <p> ${turno.dd} de ${turno.mm}, ${turno.yyyy} </p>
        <p>Estado: Reservado</p>
        </div>
        <hr></hr>
        `;
    
    
        let carritoReservados = document.getElementById("misTurnos")
        carritoReservados.appendChild(contenedor2);
    }
    

}







