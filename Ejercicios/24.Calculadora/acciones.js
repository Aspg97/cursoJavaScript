function sumar(){
    const form = document.getElementById("form");
    let numA = form['numA'];
    let numB = form['numB'];
    let resultado = parseInt(numA.value) + parseInt(numB.value);
    if(isNaN(resultado)){
        resultado='Ingresa los datos que se te piden';
    }
    document.getElementById('resultado').innerHTML=`El resultado es: ${resultado}`;
}