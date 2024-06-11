class Persona {

    static contadorPersonas = 0;

    constructor(nombre,apellido,edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        Persona.contadorPersonas++;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(nuevoApellido){
        this._apellido = nuevoApellido;
    }

    get edad(){
        return this._edad;
    }

    set edad(nuevaEdad){
        this._edad = nuevaEdad;
    }

    nombreCompleto(){
        return this._nombre+" "+this._apellido +" -> "+this._edad;
    }

    toString(){
        return this.nombreCompleto();
    }

    static saludar(){
        console.log("Saludos desde metodo static");
    }

    static saludoPersona(persona){
        return "Hola yo soy "+persona.nombre+", mi apellido es "+persona.apellido+" y tengo "+persona.edad+" years"
    }
}

class Empleado extends Persona{
    constructor(nombre,apellido,edad,departamento){
        super(nombre,apellido,edad);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(nuevoDepartamento){
        this._departamento=nuevoDepartamento;
    }
    //Para la sobreescritura debe tener el mismo nombre del metodo y los mismos parametros
    nombreCompleto(){
        return super.nombreCompleto() + " / "+this._departamento;
    }
}

let empleado1 = new Empleado("Anthony","Pacheco",27,"Desarrollo Web");
let empleado2 = new Empleado("Anthony","Pacheco",27,"Desarrollo Web");
let empleado3 = new Empleado("Anthony","Pacheco",27,"Desarrollo Web");
let empleado4 = new Empleado("Anthony","Pacheco",27,"Desarrollo Web");
console.log(empleado1);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());

//Pruebas con metodo static
Persona.saludar();
console.log(Persona.saludoPersona(empleado1));
console.log(Persona.contadorPersonas);
