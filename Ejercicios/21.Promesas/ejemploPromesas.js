let miPromesa = new Promise((resolved,rejected)=>{
    let expresion = false;
    if(expresion == true){
        resolved('Resolvio Correcto');
    }else{
        rejected('Algo salio mal');
    }
});

//miPromesa.then(valor=>console.log(valor),error=>console.log(error));
miPromesa.then(valor=>console.log(valor)).catch(error=>console.log(error));