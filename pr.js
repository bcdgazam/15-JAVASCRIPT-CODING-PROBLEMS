//Practice file


// let a = 10;
// let b = 20;

// console.log('Before swap a =', a, 'b =', b)

// temp = a;
// a = b;
// b = temp;

// console.log('After swap a = ', a, 'b = ', b)

// a = a + b;
// a = a - b;
// b = b - a;
// console.log('After swap a = ', a, 'b = ', b)

//another way
// let a = 10;
// let b = 20;
// [a, b] = [b, a];
// console.log('After swap a = ', a, 'b = ', b);

// let p = 5;
// let q = 7;

// [p, q] = [q, p];
// console.log("after swap: p =", p,",", "q =", q)

let num = 3.49;
let num2 = '598';
num2 = Math.abs(num2);
// console.log(num + num2);

// num = ' '+ num;
// console.log(num + num2);
let result = (num + num2);
result = Math.random(result) * 100;
let finalResult = result.toFixed(0);
finalResult = Math.abs(finalResult)
console.log(finalResult);