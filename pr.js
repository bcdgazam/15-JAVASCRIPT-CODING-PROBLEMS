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

// let num = 3.49;
// let num2 = '598';
// num2 = Math.abs(num2);
// console.log(num + num2);

// num = ' '+ num;
// console.log(num + num2);
// let result = (num + num2);
// result = Math.random(result) * 100;
// let finalResult = result.toFixed(0);
// finalResult = Math.abs(finalResult)
// console.log(finalResult);


// let business = 20;
// let minister = 15;
// let sochib = 25;

// if (business > minister){
//     if(business > sochib){
//         console.log('Businessman is bigger');
//     }
//     else{
//         console.log('Sochib is bigger') 
//     }
// }else {
//     if(minister > sochib){
//         console.log('Minister is bigger')
//     }
//     else{
//         console.log('Sochib is bigger')
//     }
// }

//get max value of 3 numbers


// let businessMan = 20;
// let sochibMan = 15;
// let amJanata = 250;

// if(businessMan > sochibMan){
//     if(businessMan > amJanata){
//         console.log('Business Man Is Bigger')
//     }
//     else{
//         console.log('Am Janata Is Bigger')
//     }
// }
// else{
//     if(sochibMan > amJanata){
//         console.log('Sochib Is Bigger')
//     }
//     else{
//         console.log('Am Janata Is Bigger')
//     }
// }


// let stResult = [10, 20, 3, 23, 33, 23, 54, 53, 64, 61, 35, 111, 245, 9, 9,]

// let max = stResult[0];

// for(let i = 0; i < stResult.length; i++){
//     let element = stResult[i];
//     if(element > max){
//         max = element;
//     }
// }

// console.log(max);

//sum of all array

// let arra = [10, 23, 34, 56, 67, 56, 22, 21, 90, 75, 93, 44, 32, 21, 11, 1]
// let sum = 0;
// for(let i = 0; i < arra.length; i++){
//     let element = arra[i];
//     sum = sum + element;
// }

// console.log(sum);

// let numbers = [23, 45, 56, 79, 90, 30, 20, 10, 900]
// let sum = 0;

// for (let i = 0; i < numbers.length; i++){
//     let element = numbers[i];
//     sumNewValue = sum + element;
// }

// console.log('Total of the numbers:', sumNewValue);

let stResult = [12, 23, 454, 55, 132, 800, 700, 300, 645, 987]

let max = stResult[0];

for(let i = 0; i < stResult.length; i++){
    let element = stResult[i];
    if(element > max){
        max = element;
    }
}

console.log(max);