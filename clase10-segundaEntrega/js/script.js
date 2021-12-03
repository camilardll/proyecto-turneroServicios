class Turno {
    constructor (id, servicio, nombre, img, yyyy, mm, dd, hh, estado) {
        this.id= id
        this.servicio= servicio 
        this.nombre = nombre
        this.img = img
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
turnosDisponibles.push (new Turno (1, "Plomería","Pedro Pérez", "media/img/plomero_PedroP.jpg", 2021, "11", "Jueves 25", "10hs", "Disponible"))
turnosDisponibles.push (new Turno (2, "Plomería", "Pedro Pérez", "media/img/plomero_PedroP.jpg", 2021, "11", "Jueves 26", "13hs", "Disponible"))
turnosDisponibles.push (new Turno (3, "Gas", "Julia Andrada","media/img/gasista_JuliaA.jpg", 2021, "11", "Viernes 5", "14hs", "Disponible"))
turnosDisponibles.push (new Turno (4, "Gas", "Julia Andrada","media/img/gasista_JuliaA.jpg", 2021, "11", "Viernes 5", "14hs", "Disponible"))
turnosDisponibles.push (new Turno (5, "Gas", "Julia Andrada","media/img/gasista_JuliaA.jpg", 2021, "11", "Viernes 5", "14hs", "Disponible"))
turnosDisponibles.push (new Turno (6, "Electricidad", "Esteban Fuentes","media/img/electricista_EstebanF.jpg", 2021, "11", "Viernes 5", "14hs", "Disponible"))

const calendarioTurnos = document.getElementById("calendario")

filtrarTodos ()

function filtrarTodos () {

    limpiarHtmlPrevio();

    for (const turno of turnosDisponibles) {
        let contenedor = document.createElement ("div")

    
        contenedor.innerHTML = `
        <div class="card" style="width: 12rem;">
        <img src="${turno.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${turno.nombre}</h5>
        <h6 class="card-title">${turno.servicio}</h6>
        <p class="card-text">${turno.dd}/${turno.mm}, ${turno.hh} </p>
        <a class="btn btn-primary btn-agregar" id="${turno.id}">${turno.estado}</a>
        </div>
        </div>
        `;
    
        //Se agrego class en el div para agregar css a futuro
    
        let calendarioTurnos = document.getElementById("calendario")
        
        calendarioTurnos.appendChild(contenedor);
        
    }

    btnAgregar()
}



const filtroPlomeria = turnosDisponibles.filter (item => item.servicio === "Plomería")
const filtroGas = turnosDisponibles.filter (item => item.servicio === "Gas")
const filtroElectricidad = turnosDisponibles.filter (item => item.servicio === "Electricidad")



let btnTodos = document.getElementById("btnTodos");
btnTodos.addEventListener("click", () => {
    filtrarTodos ()
})


let btnPlomeria = document.getElementById("btnPlomeria");
btnPlomeria.addEventListener("click", () => {
    filtrarServicioPlomeria()
})

let btnGas = document.getElementById("btnGas");
btnGas.addEventListener("click", () => {
    filtrarServicioGas()
})

let btnElectricidad = document.getElementById("btnElectricidad");
btnElectricidad.addEventListener("click", () => {
    filtrarServicioElectricidad()
})



function filtrarServicioPlomeria() {

    limpiarHtmlPrevio();

    for (const turno of filtroPlomeria) {
        let contenedor = document.createElement ("div")
    
        contenedor.innerHTML = `
        <div class="card" style="width: 12rem;">
        <img src="${turno.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${turno.nombre}</h5>
        <h6 class="card-title">${turno.servicio}</h6>
        <p class="card-text">${turno.dd}/${turno.mm}, ${turno.hh} </p>
        <a class="btn btn-primary btn-agregar" id="${turno.id}">${turno.estado}</a>
        </div>
        </div>
        `;
    
        //Se agrego class en el div para agregar css a futuro
         
        
        calendarioTurnos.appendChild(contenedor);
        
    }

    btnAgregar()
}

function filtrarServicioGas() {

    limpiarHtmlPrevio();

    for (const turno of filtroGas) {
        let contenedor = document.createElement ("div")
    
        contenedor.innerHTML = `
        <div class="card" style="width: 12rem;">
        <img src="${turno.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${turno.nombre}</h5>
        <h6 class="card-title">${turno.servicio}</h6>
        <p class="card-text">${turno.dd}/${turno.mm}, ${turno.hh} </p>
        <a class="btn btn-primary btn-agregar" id="${turno.id}">${turno.estado}</a>
        </div>
        </div>
        `;
    
        //Se agrego class en el div para agregar css a futuro
         
        
        calendarioTurnos.appendChild(contenedor);
        
    }

    btnAgregar()
}

function filtrarServicioElectricidad() {

    limpiarHtmlPrevio();

    for (const turno of filtroElectricidad) {
        let contenedor = document.createElement ("div")
    
        contenedor.innerHTML = `
        <div class="card" style="width: 12rem;">
        <img src="${turno.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${turno.nombre}</h5>
        <h6 class="card-title">${turno.servicio}</h6>
        <p class="card-text">${turno.dd}/${turno.mm}, ${turno.hh} </p>
        <a class="btn btn-primary btn-agregar" id="${turno.id}">${turno.estado}</a>
        </div>
        </div>
        `;
    
        //Se agrego class en el div para agregar css a futuro
         
        
        calendarioTurnos.appendChild(contenedor);
     
    }

    btnAgregar()
}



function limpiarHtmlPrevio() {
    calendarioTurnos.innerHTML = "";
}



function btnAgregar() {
    let btn = document.getElementsByClassName('btn-agregar')
    

    for (const botones of btn) {
        botones.addEventListener("click", () => {
                agregarReserva(parseInt(botones.id))
                
            })
        
    }
}





const carritoReservas = []

function agregarReserva (turnoID) {
    let turnoReservado = turnosDisponibles.find ((item => item.id == turnoID));
    carritoReservas.push(turnoReservado);

    console.log(carritoReservas)
    
    // turnosDisponibles[turnoID].reservar();
    
    
    mostrarReservas();

}

   
const misTurnosReservados = document.getElementById("misTurnos");


function mostrarReservas (){

    limpiarHtmlPrevioReservas()
        
    for (const turno of carritoReservas) {
        let contenedor2 = document.createElement ("div")
    
        contenedor2.innerHTML = `
        <div class="card" style="width: 12rem;">
        <img src="${turno.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${turno.nombre}</h5>
        <h6 class="card-title">${turno.servicio}</h6>
        <p class="card-text">${turno.dd}/${turno.mm}, ${turno.hh} </p>
        <p class="card-text">Estado: Reservado</p>
        <a class="btn btn-primary btn-eliminar" id="${turno.id}">Eliminar</a>
        </div>
        </div>
        `;
    
        misTurnosReservados.appendChild(contenedor2);
               
    }

    btnEliminar()

    function btnEliminar() {
        let btn = document.getElementsByClassName('btn-eliminar')
        
    
        for (const botones of btn) {
            botones.addEventListener("click", () => {
                    eliminarReserva(parseInt(botones.id))
                    
                })
            
        }
    }
    
    function eliminarReserva (turnoID) {
        let turnoEliminado = carritoReservas.find ((item => item.id == turnoID));
        carritoReservas.splice(turnoEliminado);
    
       
        // turnosDisponibles[turnoID].reservar();
        
        
        mostrarReservas();
    
    }
    

}

function limpiarHtmlPrevioReservas() {
    misTurnosReservados.innerHTML = "";
}









// function btnEliminar() {
//     let btn = document.getElementsByClassName('btn-eliminar')
    

//     for (const botones of btn) {
//         botones.addEventListener("click", () => {
//                 eliminarReserva(parseInt(botones.id))
                
//             })
        
//     }
// }

// function eliminarReserva (turnoID) {
//     let turnoEliminado = carritoReservas.find ((item => item.id == turnoID));
//     carritoReservas.splice(turnoEliminado);

   
//     // turnosDisponibles[turnoID].reservar();
    
    
//     mostrarReservas();

// }





