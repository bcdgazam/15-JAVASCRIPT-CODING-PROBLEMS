let x = 10;
let y = 20;

// console.log('Before swap a =', x, ';', 'b =', y)

// let temp = x + y;
// x = y;
// y = temp;
// console.log('After swap a =', x, ';', 'b =', y)

// x = x + y;
// y = x - y;
// x = x - y;
// console.log('After swap a =', x, ';', 'b =', y)

// [x, y ] = [y, x]
// console.log('After swap a =', x, ';', 'b =', y)


// let num = 10.50;
// console.log(num);

// let result = Math.random(num) * 10;
// let fixedNumber = result.toFixed(0)
// let fixedResult = Math.abs(fixedNumber)

// console.log(fixedResult)

//Find max of two values

let numOne = 1000;
let numTwo = 300;
let numThree = 4000;

// if(numOne > numOne){
//     console.log('Number One is bigger')
// }
// else{
//     console.log('Number Tow is bigger')
// }

if(numOne > numTwo){
    if(numOne > numThree){
        console.log('Number One is bigger')
    }
    else{
        console.log('Number Three is bigger')
    }
}
else{
    if(numTwo > numThree){
        console.log('Number Two is bigger')
    }
    else{
        console.log('Number Three is bigger')
    }
}