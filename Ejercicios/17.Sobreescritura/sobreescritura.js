class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
     return `${this._nombre} ${this._sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre,sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    obtenerDetalles(){
        return `Info de empleado -> Gerente: `+super.obtenerDetalles() + ` - Departamento: ${this._departamento}`;
    }
}

function imprimirDatos(objeto){
    console.log(objeto.obtenerDetalles());
}
let empleado = new Empleado("Elver Galarga", 480);
let gerente1 = new Gerente("Anthony Pacheco",600,"Desarrollo Web");
console.log(gerente1.obtenerDetalles());

imprimirDatos(empleado);
imprimirDatos(gerente1);










