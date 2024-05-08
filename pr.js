let x = 10;
let y = 20;

console.log('Before swap a =', x, ';', 'b =', y)

let temp = x + y;
x = y;
y = temp;

console.log('After swap a =', x, ';', 'b =', y)