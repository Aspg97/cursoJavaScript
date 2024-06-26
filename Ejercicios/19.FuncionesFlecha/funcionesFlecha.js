// funcion normal
function saludo(){
    console.log("hola como estas");
}


//no se puede llamar la funcion flecha antes de ser instaciada
const saludoArquero = ()=>{
    console.log("este es un saludo de la flecha del arquero");
}

const sumaDeNumeros = (num1,num2)=>{
  return `La suma de ${num1} y ${num2} es ${num1+num2}`
};


saludo();
saludoArquero();
console.log(sumaDeNumeros(5,3));