//15-2 Swap variable, swap without temp, destructing

/*
let a = 5;
let b = 7;
console.log("before swap: a =", a, ' b =', b)
let temp = a;
a = b;
b = temp;
console.log("After swap: a =", a, ' b =', b)
*/

//Another Way
let x = 5;
let y = 7;
x = x + y;
y = x - y;
x = x - y;
console.log('x=', x,",", 'y=', y)

//Language Related

let p = 5;
let q = 7;

[p, q] = [q, p];
console.log("after swap: p =", p,",", "q =", q)