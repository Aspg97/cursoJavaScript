function funcionCallBack(){
    console.log("saludo asincrono despues de 3 segundos");
}

setTimeout(funcionCallBack, 5000); //Recibe como parametros una funcion y un tiempo para ejecutar la funcion en unos determinados milisegundos
setTimeout(funcionCallBack, 2000); //Recibe como parametros una funcion y un tiempo para ejecutar la funcion en unos determinados milisegundos

setTimeout(()=>{console.log("saludo del hachero")},1000);