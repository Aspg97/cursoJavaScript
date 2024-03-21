// Matrices

let matriz = [[], []];

// Modificar matriz

matriz[0][0] = 1;
matriz[0][1] = 2;
matriz[0][2] = 3;
matriz[1][0] = 4;
matriz[1][1] = 5;
matriz[1][2] = 6;

for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(matriz[i][j]);
  }
}

console.log(matriz[1][0]);

// otra forma de recorrer
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(matriz[i][j]);
  }
}
