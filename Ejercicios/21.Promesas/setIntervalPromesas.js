let pruebaPromesa = new Promise((resolved)=>{
    setTimeout(()=>{
        resolved("hola nueva prueba");
    },5000);
});

pruebaPromesa.then(valor=>console.log(valor));