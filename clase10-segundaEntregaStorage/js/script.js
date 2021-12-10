
const turnos = [
    {id: 1, servicio: "Plomería", nombre: "Pedro Pérez", img: "media/img/plomero_PedroP.jpg", yyyy: 2021, mm: "11", dd: "Jueves 25", hh: "10hs", estado: "Disponible"},
    {id: 2, servicio: "Plomería", nombre: "Pedro Pérez", img: "media/img/plomero_PedroP.jpg", yyyy: 2021, mm: "11", dd: "Jueves 25", hh: "110hs", estado: "Disponible"},
    {id: 3, servicio: "Gas", nombre: "Julia Andrada", img: "media/img/gasista_JuliaA.jpg", yyyy: 2021, mm: "11", dd: "Viernes 5", hh: "14hs", estado: "Disponible"},
    {id: 4, servicio: "Gas", nombre: "Julia Andrada", img: "media/img/gasista_JuliaA.jpg", yyyy: 2021, mm: "11", dd: "Viernes 5", hh: "16hs", estado: "Disponible"},
    {id: 5, servicio: "Gas", nombre: "Julia Andrada", img: "media/img/gasista_JuliaA.jpg", yyyy: 2021, mm: "11", dd: "Viernes 5", hh: "17hs", estado: "Disponible"},
    {id: 6, servicio: "Electricidad", nombre: "Esteban Fuentes", img: "media/img/electricista_EstebanF.jpg", yyyy: 2021, mm: "11", dd: "Viernes 5", hh: "10hs", estado: "Disponible"}
];

const guardarLocal = (key, value) => { 
    localStorage.setItem(key, value) 
};

guardarLocal("listaTurnos", JSON.stringify(turnos))


const almacenados = JSON.parse(localStorage.getItem("listaTurnos"));

const turnosDisponibles = []

for(const objeto of almacenados) {
    turnosDisponibles.push(objeto);
}


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





