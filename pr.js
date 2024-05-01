//Practice file


let a = 10;
let b = 20;

console.log('Before swap a =', a, 'b =', b)

// temp = a;
// a = b;
// b = temp;

// console.log('After swap a = ', a, 'b = ', b)

let result = a +b;
a = result - a;
b = result - b;
console.log('After swap a = ', a, 'b = ', b)