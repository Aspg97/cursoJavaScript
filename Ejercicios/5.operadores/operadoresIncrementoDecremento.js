let a=0,b,c;

//Pre-incremento
++a
console.log(a);

//Post-decremento
a++
console.log(a);

//Pre-decremento
--a;
console.log(a);

//post-decremento
a--;
console.log(a);

//Ejemplo
a = 5;
b = 2;
c = ++a * b--;
console.log(c);
console.log(a);
console.log(b);

for(let a = 0; a<0;a++){
    console.log(a);
}