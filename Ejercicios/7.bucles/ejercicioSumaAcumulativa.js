//Imprimir la suma acumulada de los primeros 5 numeros con los tres tipos de bucles

//for
let acuF = 0,
  acuW = 0,
  acuDW = 0;
for (let i = 0; i < 6; i++) {
  acuF = acuF + i;
}
console.log(acuF);
//while
let cont = 0;
while (cont < 6) {
  acuW = acuW + cont;
  cont++;
}
console.log(acuW);
//do while
let contD = 0;
do {
  acuDW = acuDW + contD;
  contD++;
} while (contD < 6);
console.log(acuDW);
