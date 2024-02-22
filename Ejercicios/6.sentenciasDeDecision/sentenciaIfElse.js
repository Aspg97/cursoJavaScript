let miNumero = 10;

//Sentencia if
if(miNumero>0){
    console.log(`valor positivo: ${miNumero}`);
}

miNumero = 0;

if(miNumero>0){
    console.log(`valor positivo: ${miNumero}`);
}

//Sentencia if else
if(miNumero>0){
    console.log(`valor positivo: ${miNumero}`);
}else{
    console.log('EL valor es negativo o igual a cero');
}

//Sentencia if else
miNumero = -4;
if(miNumero>0){
    console.log(`valor positivo: ${miNumero}`);
}else if(miNumero<0){
    console.log('EL valor es negativo');
}else{
    console.log('EL valor es cero');
    
}

//Operador ternario
(miNumero>0)?console.log(`valor positivo:`):console.log(`valor negativo o cero:`);