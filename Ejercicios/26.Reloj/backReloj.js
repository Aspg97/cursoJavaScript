class Reloj{
    constructor(hora,minuto,segundo,fecha){
        this._hora = hora;
        this._minuto=minuto;
        this._segundo = segundo;
        this._fecha = fecha;
    }

    get hora (){
        return this._hora
    }

    set hora(nuevaHora){
        this._hora = nuevaHora;
    }

    get minuto (){
        return this._minuto
    }

    set minuto (nuevoMinuto){
        this._minuto = nuevoMinuto;
    }

    get segundo(){
        return this._segundo;
    }

    set segundo(neuvoSegundo){
        this._segundo = nuevoMinuto;
    }

    get fecha (){
        return this._fecha;
    }

    set fecha(nuevaFecha){
        this._fecha = nuevaFecha;
    }
}