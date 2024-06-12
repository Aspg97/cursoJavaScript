class Producto{
    static contadorProductos=0;
    constructor(nombre,precio){
        this._idProducto = Producto.contadorProductos++;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nuevoNombre){
        this._nombre=nuevoNombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(nuevoPrecio){
        this._precio = nuevoPrecio;
    }

    toString(){
        return `ID: ${this._idProducto} - Producto: ${this._nombre} - Precio: ${this._precio}`
    }
}

class Orden{
    static contadorOrden = 0;
    productos = [];
    static get MAX_PRODUCTOS (){
        return 5;
    }

    constructor(){
        this._idProducto = Orden.contadorOrden++;
        this._contadorProductosAgregados = 0;
    }

    get contadorProductosAgregados(){
        return this._contadorProductosAgregados;
    }

    set contadorProductosAgregados(aumento){
        this._contadorProductosAgregados = aumento.length;
    }

    agregarProducto(Producto){
        if(this.contadorProductosAgregados<Orden.MAX_PRODUCTOS){
            this.productos.push(Producto);
            console.log("Producto agregado");
            this.contadorProductosAgregados = this.productos;
        }else console.log("Ya no se pueden agregar mas productos");
    }

    calcularTotal(){
        let total = 0;
        for(let producto of this.productos){
           for(let propiedad in producto){
            if(propiedad == "_precio"){
                total = total+producto[propiedad];
            }
           }
        }
        return total;
    }

    toString(){
        return `Numero de Orden (ID) : ${this._idProducto} -
        Cant. Productos registrados: ${this.contadorProductosAgregados} - 
        Total: ${this.calcularTotal()}`;
    }
}

let producto1 = new Producto("Vinil",5);
let producto2 = new Producto("Perno Decorativo",0.50);
let producto3 = new Producto("Jarro Sublimado",3);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
let orden2 = new Orden();
orden2.agregarProducto(producto3);
let orden3= new Orden();
orden3.agregarProducto(producto3);
orden3.agregarProducto(producto1);
let orden4= new Orden();
orden4.agregarProducto(producto2);
orden4.agregarProducto(producto1);

console.log(orden1.toString());
console.log(orden2.toString());
console.log(orden3.toString());
console.log(orden4.toString());