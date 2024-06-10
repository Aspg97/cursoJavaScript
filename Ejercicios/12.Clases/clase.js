class Persona {
    constructor(nombre,apellido,edad){
        this._nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
}

let persona1 = new Persona("Anthony","Pacheco",27);
console.log(persona1);
console.log(persona1.nombre);
persona1.nombre='steven';
console.log(persona1.nombre);

let persona2 = new Persona("Carlos","Lara",30);
console.log(persona2);