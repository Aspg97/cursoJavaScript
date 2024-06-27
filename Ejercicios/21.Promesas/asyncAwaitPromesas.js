async function promesaDePrueba(){
    let miPromesa = new Promise(resolved=>{
        resolved("promesa con Await");
    });

    console.log(await miPromesa);
}


promesaDePrueba();
