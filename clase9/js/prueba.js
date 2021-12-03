class Turno {
    constructor (id, servicio, yyyy, mm, dd, hh, estado) {
        this.id= id
        this.servicio= servicio 
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


const turnosDisponibles = [
    {
        id:1,
        nombre : "Carlos Pérez",
        img: "../media/img/plomero_CarlosP.jpg",
        servicio: "Plomería", 
        yyyy: 2021,
        mm: 11,
        dd: 12,
        hh: "10hs.",
        estado: "Disponible",
        reservado: false,
    }

    {
        id:2,
        nombre : "Carlos Pérez",
        img: "../media/img/plomero_CarlosP.jpg",
        servicio: "Plomeria", 
        yyyy: 2021,
        mm: 11,
        dd: 13,
        hh: "10hs.",
        estado: "Disponible",
        reservado: false,
    }

    {
        id:3,
        nombre : "Carlos Pérez",
        img: "../media/img/plomero_CarlosP.jpg",
        servicio: "Plomeria", 
        yyyy: 2021,
        mm: 11,
        dd: 14,
        hh: "10hs.",
        estado: "Disponible",
        reservado: false,
    }

    {
        id:4,
        nombre : "Carlos Pérez",
        img: "../media/img/plomero_CarlosP.jpg",
        servicio: "Plomeria", 
        yyyy: 2021,
        mm: 11,
        dd: 12,
        hh: "10hs.",
        estado: "Disponible",
        reservado: false,
    }

];
