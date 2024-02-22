let a = true;
let b = false;

console.log(a);
console.log(b);

//AND
console.log(`${a} && ${b} -> ${a && b}`);
console.log(`${a} && ${a} -> ${a && a}`);

//OR
console.log(`${a} || ${b} -> ${a || b}`);
console.log(`${a} || ${a} -> ${a || a}`);
console.log(`${b} || ${b} -> ${b || b}`);

//NOT
console.log(`!${a} -> ${!a}`);
console.log(`!${b} -> ${!b}`);