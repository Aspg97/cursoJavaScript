function Persona(nombre,apellido,edad){
this.nombre = nombre;
this.apellido = apellido;
this.edad = edad;
this.datos = function(){
    return "//Nombre --->> "+this.nombre+"//Apellido--->> "+this.apellido+"//Edad--->>"+this.edad+"//";
}
}

Persona.prototype.tel;

let persona1 = new Persona("Anthony","Pacheco",27);
persona1.tel = 15;
console.log(persona1);
console.log(persona1['nombre']);
console.log(persona1.tel);
console.log(persona1.datos())

let persona2 = new Persona("Xavier","Almeida",25);
console.log(persona2);
console.log(persona2['nombre']);
console.log(persona2.tel);
console.log(persona2.datos())

persona1.nombre = "Ernesto";
console.log(persona1['nombre']);
