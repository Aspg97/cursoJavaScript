class Persona{
    static contadorPersonas = 0;
    constructor(nombre,apellido,edad){
        this._nombre=nombre;
        this._apellido=apellido;
        this._edad=edad;
        this._idPersona = Persona.contadorPersonas++;
    }

    get idPersona (){
        return this._idPersona;
    }

    get nombre (){
        return this._nombre;
    }

    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(nuevoApellido){
        this._apellido=nuevoApellido;
    }

    get edad(){
        return this._edad;
    }

    set edad(nuevaEdad){
        this._edad=nuevaEdad;
    }

    mostrarDatos(){
        return "ID: "+this._idPersona+" --- Nombre: "+this._nombre+" --- Apellido: "+this._apellido+ " --- Edad: "+this._edad;
    }

    toString(){
        return this.mostrarDatos();
    }
}

class Empleado extends Persona{
    static contadorEmpleado = 0;
    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
        this._idEmpleado = this._idPersona;
        this._sueldo = sueldo;
        Empleado.contadorEmpleado++;
    }

    get idEmpleado (){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(nuevoSueldo){
        this._sueldo=nuevoSueldo;
    }

    toString(){
        return this.mostrarDatos()+" --- Sueldo: "+this._sueldo;
    }
}

class Cliente extends Persona{
    static contadorCliente = 0;
    constructor(nombre,apellido,edad,fechaRegistro){
        super(nombre,apellido,edad);
        this._idCliente = this.idPersona;
        this._fechaRegistro = fechaRegistro;
        Cliente.contadorCliente++;
    }

    get idCliente (){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(nuevaFecha){
        this._fechaRegistro = nuevaFecha;
    }

    toString(){
        return this.mostrarDatos()+" --- Fecha de registro: "+this._fechaRegistro;
    }
}

let persona1 = new Persona("Anthony","Pacheco",27);
let persona2 = new Persona("Steven","Rodriguez",20);
console.log(persona1.toString());
console.log(persona2.toString());


let empleado1 = new Empleado("Emerson","Galindez",15,500);
let empleado2 = new Empleado("Ernesto","Samaniego",18,600);
let empleado3 = new Empleado("Hector","Zambrano",29,800);
console.log(empleado1.toString());
console.log(empleado2.toString());
console.log(empleado3.toString());

let cliente1 = new Cliente("Andres","Napo",19,new Date());
let cliente2 = new Cliente("Maria","Pacheco",21,new Date());
let cliente3 = new Cliente("Maria","Pacheco",23,new Date());
let cliente4 = new Cliente("Julia","Dominguez",25,new Date());
console.log(cliente1.toString());
console.log(cliente2.toString());
console.log(cliente3.toString());
console.log(cliente4.toString());

console.log(Persona.contadorPersonas);
console.log(Empleado.contadorEmpleado);
console.log(Cliente.contadorCliente);