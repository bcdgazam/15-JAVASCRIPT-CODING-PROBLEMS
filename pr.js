// let x = 10;
// let y = 20;

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

// let numOne = 1000;
// let numTwo = 300;
// let numThree = 4000;

// if(numOne > numOne){
//     console.log('Number One is bigger')
// }
// else{
//     console.log('Number Tow is bigger')
// }

// if(numOne > numTwo){
//     if(numOne > numThree){
//         console.log('Number One is bigger')
//     }
//     else{
//         console.log('Number Three is bigger')
//     }
// }
// else{
//     if(numTwo > numThree){
//         console.log('Number Two is bigger')
//     }
//     else{
//         console.log('Number Three is bigger')
//     }
// }


//Find the largest element of an array

// let arr = [23, 45, 32, 22, 54, 66, 65, 90, 23, 5, 43, 531, 555,66666]

// let max = arr[0];

// for(let i = 0; i < arr.length; i++){
//     let element = arr[i];
//     if(element > max){
//         max = element;
//     }
// }

// console.log(max);

//get max number from an array

let stResult = [23, 45, 23, 53, 53, 98, 97, 90, 24, 45, 34]

let max = stResult[0];

for(let i = 0; i < stResult.length; i++){
    let element = stResult[i];
    if(element > max){
        max = element;
    }
}

console.log(max);