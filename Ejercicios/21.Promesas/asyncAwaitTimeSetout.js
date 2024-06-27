async function funcionPromesaPrubea(){
    let laPromesa = new Promise(resolved=>{
        setTimeout(()=>resolved("la promesa de prueba"),3000);
    });

    console.log(await laPromesa);
}

funcionPromesaPrubea();