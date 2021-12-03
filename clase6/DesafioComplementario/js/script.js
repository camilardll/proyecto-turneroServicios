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
usuarios.push (new Usuario ("estefania.alvarez", "55522", "Belgrano 66", "Salta", "tartagal"));
usuarios.push (new Usuario ("julio.perez", "22222", "haedo 55", "cordoba", "cordoba"));
usuarios.push (new Usuario ("carmen.maria", "1155698", "San Martin 22", "cordoba", "cordoba"));
usuarios.push (new Usuario ("Candelaria.hamada", "789987", "Las tipas 34", "Salta", "Salta"));


// funcion ordenar por nombre de usuario

usuarios.sort ((a, b) => {
    if (a.nombre < b.nombre) {
        return -1;
    }

    if (a.nombre > b.nombre) {
        return 1;
    }

    return 0;
})

console.log(usuarios);