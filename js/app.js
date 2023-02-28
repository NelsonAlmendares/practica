
var num = prompt("Cantidad de numeros: ");
    var sumando;
    var total = 0;
    for (var i = 0; i < num; i++) {
        sumando = prompt("Numeros: ");
        total = parseInt(total) + parseInt(sumando)
    }

    alert("Suma total: " + parseInt(total));


for (let i = 0; i >= 5; i++) {
    /* Pedimos datos */
    nombre = prompt(i +"Ingresa tu nombre: ");
    apellido = prompt(i +"Ingresa tu apellido: ");
    edad = prompt(i +"Ingresa tu edad: ");
    carrera = prompt(i +"Ingresa tu carrera: ");
    mascota = prompt(i +"Ingresa tu mascota: ");
}

let collection = ["Nelson", "Almendares", "Programador", 20];
let persona = {
    nombre: 'Jules',
    apellido:'Montoya',
    edad: 17,
    estado: 'Casada',
    vehiculo: true
}

console.log(collection);
console.log(Object.values(persona));
console.log("El nombre de la chamaca es: " + persona.nombre);
