//Ejemplo de uso de call

persona1 = {
    nombre: "Anthony",
    apellido: "Pacheco",
    edad: 27,
    nombreCompleto: function(tel){
        return this.nombre + " " + this.apellido+"Mi numero de telefono es: "+tel;
    },
    datos: function(edadEspeculada){
        return this.nombre + " " + this.apellido + " Edad Especulada: " + edadEspeculada;
    }
}

persona2 = {
    nombre: "Steven",
    apellido: "Pacheco",
    edad: 27
}

console.log(persona1.nombreCompleto('0960094560'));
console.log(persona1.nombreCompleto.call(persona2,'0960094560'));
let datos = [28];
console.log(persona1.datos.apply(persona2,datos));