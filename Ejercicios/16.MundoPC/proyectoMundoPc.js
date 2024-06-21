class DispositivoEntrada{
    constructor(tipoEntrada,marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(nuevoTipo){
        this._tipoEntrada = nuevoTipo;
    }

    get marca(){
        return this._marca;
    }
    set marca(nuevaMarca){
        this._marca = nuevaMarca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada,marca);
        this._idRaton = Raton.contadorRatones++;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `Informacion del raton:\nID: ${this._idRaton}\nTipo de entrada: ${this._tipoEntrada}\nMarca: ${this._marca}`;
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclado = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada,marca);
        this._idTeclado = Teclado.contadorTeclado++;
    }

    get idTeclado (){
        return this._idTeclado;
    }

    toString(){
        return `Informacion del teclado:\nID: ${this._idTeclado}\nTipo de entrada: ${this._tipoEntrada}\nMarca: ${this._marca}`;
    }
}

class Monitor{
    static contadorMonitor = 0;
    constructor(marca,size){
        this._idMonitor = Monitor.contadorMonitor++;
        this._marca = marca;
        this._size = size;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    get marca(){
        return this._marca;
    }

    set marca(nuevaMarca){
        this._marca = nuevaMarca;
    }

    get size(){
        return this._size;
    }

    set size(nuevoSize){
        this._size = nuevoSize;
    }

    toString(){
        return `Informacion del monitor:\nID: ${this._idMonitor}\nMarca: ${this._marca}\nTamano: ${this._size}`;
    }
}

class Computadora{
    static contadorComputadora=0;
    constructor(nombre,monitor,teclado,raton){
        this._idComputadora = Computadora.contadorComputadora++;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    get idComputadora(){
        return this._idComputadora;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }

    get monitor(){
        return this._monitor;
    }

    set monitor(nuevoMonitor){
        this._monitor = nuevoMonitor;
    }

    get teclado(){
        return this._teclado;
    }

    set teclado(nuevoTeclado){
        this._teclado = nuevoTeclado;
    }

    get raton(){
        return this._raton;
    }

    set raton(nuevoRaton){
        this._raton = nuevoRaton;
    }

    toString(){
        return `Informacion de computadora:\nID: ${this._idComputadora} \nNombre: ${this._nombre}\nRaton marca: ${this._raton.marca} \nTeclado marca: ${this._teclado.marca}`;
    }
}

class Orden{
    static contadorOrden = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrden;
        this._computadoras = [];
    }

    get idOrden(){
        return this._idOrden;
    }

    get computadoras (){
        return this._computadoras;
    }

    set computadoras (nuevaComputadora){
        this._computadoras = nuevaComputadora;
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        console.log(`Numero de orden: ${this._idOrden}`);
        for(let compu in this._computadoras){
            console.log(`Nombre de la computadora: ${this._computadoras[compu].nombre}\nMonitor: [ID: ${this._computadoras[compu].monitor.idMonitor}, Marca: ${this._computadoras[compu].monitor.marca},Tamano: ${this._computadoras[compu].monitor.size}]\nRaton: [ID: ${this._computadoras[compu].raton.idRaton}, Tipo de entrada: ${this._computadoras[compu].raton.tipoEntrada}, Marca: ${this._computadoras[compu].raton.marca}]\nTeclado: [ID: ${this._computadoras[compu].teclado.idTeclado}, Tipo de entrada: ${this._computadoras[compu].teclado.tipoEntrada}, Marca: ${this._computadoras[compu].teclado.marca}]`);
        }
    }

}

let raton1 = new Raton("USB","Redragon");
let teclado1 = new Teclado("USB","BlackShark");
let monitor1 = new Monitor("Spectre",24);
let raton2 = new Raton("Tipo C","Logitech");
let teclado2 = new Teclado("Bluetooth","Redragon");
let monitor2 = new Monitor("LG",27);
console.log(raton1.toString());
console.log(teclado1.toString());
console.log(monitor1.toString());
let computadora1 = new Computadora("La mas top",monitor1,teclado1,raton1);
let computadora2 = new Computadora("La mas top de las top",monitor2,teclado2,raton2);
console.log(computadora1.toString());
console.log(computadora2.toString());
let orden1 = new Orden();
let orden2 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora2);
orden1.mostrarOrden();
orden2.mostrarOrden();