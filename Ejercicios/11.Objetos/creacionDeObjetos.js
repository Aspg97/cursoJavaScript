persona = {
    nombre: "Anthony",
    apellido: "Pacheco",
    edad: 27,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);

console.log(persona['nombre']);
console.log(persona['apellido']);
console.log(persona['edad']);

console.log(persona);
console.log(persona.nombreCompleto());

for(nombrePropiedad in persona){
    console.log(nombrePropiedad)
    console.log(persona[nombrePropiedad]);
}

persona.mail = 'aspg@hotmail.com';
console.log(persona);
delete persona.mail;
console.log(persona);

let personaArray = Object.values(persona);
console.log(personaArray);

let personaCadena = JSON.stringify(persona);
console.log(personaCadena);