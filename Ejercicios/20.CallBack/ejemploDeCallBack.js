// Prueba de funciones callBack
function mandarMensaje(mensaje){
    console.log(mensaje);
}

function algoritmoDeSuma(num1,num2,funcionMensaje){
    let res = num1+num2;
    console.log(`El resultado de la suma es ${res}`);
   if(res < 0){
    funcionMensaje("la suma de los numeros es un numero negativo");
   }else{
    funcionMensaje("La suma de los numeros es un numero positivo");
   }
}

algoritmoDeSuma(6,9,mandarMensaje);
algoritmoDeSuma(6,-9,mandarMensaje);