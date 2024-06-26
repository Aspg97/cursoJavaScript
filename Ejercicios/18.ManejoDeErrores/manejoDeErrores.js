let a = "s";
//let a = 5
try{
    //let suma = 15+df;
    isNaN(a)?console.log("no pasa nada"):console.log(isNaN(a));

    if(isNaN(a)) throw 'algo paso aqui porque lo que ingresaste es un texto'; else console.log("El dato ingresado es un numero");
    
}catch(error){
    console.log(error);
}finally{
    console.log("ya controlamos lo feo");
}

console.log("pues continuamos con la movida");