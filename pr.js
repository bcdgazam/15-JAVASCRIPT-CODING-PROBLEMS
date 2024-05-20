// let x = 10;
// let y = 20;
// // let temp = x;
// // x = y;
// // y = temp;
// // console.log('x:', x, 'y:', y);

// x = x + y;
// y = x - y;
// x = x-y;
// console.log('x:', x, 'y:', y);

// let randNumber = Math.random() * 6;
// console.log(randNumber);


let num1 = 900;
let num2 = 600;
let num3 = 400;

// if(num1 > num2){
//     console.log('NumberOne is bigger');
// }
// else{
//     console.log('NumberTwo is bigger');
// }

// if(num1 > num2){
//     if(num1 > num3){
//         console.log('NumOne is really bigger');
//     }
//     else{
//         console.log('NumberTwo Is bigger');
//     }
// }
// else if(num2 > num3){
//     console.log('NumberTwo is bigger');
// }
// else{
//     console.log('NumberThree is bigger');
// }

// let array = [10, 20, 30, 40, 89, 90, 77, 43, 12, 11, 500]

// let max = array[0];

// for(let i = 0; i < array.length; i++){
//     let element = array[i];
//     if(element > max){
//         max = element;
//     }
// }
// console.log(max);



// let stResult = [2, 12, 35, 55, 64, 66, 89, 90, 100]
// let max = stResult[0];

// for(let i = 0; i < stResult.length; i++){
//     let element = stResult[i];
//     if(element > max){
//         max = element
//     }
// }

// let sumArray = [10, 10, 10, 10, 10];
// let sum = 0;

// for(let i = 0; i <sumArray.length; i++){
//     let element = sumArray[i];
//     sum = sum + element;
// }

// console.log(sum);


let removeDuplicate = [10, 10, 23, 34, 23]
let newRoom = [];

for(let i = 0; i <removeDuplicate.length; i++){
    let element = removeDuplicate[i];
    if(element == -1){
        newRoom = element;
    }
}

console.log(newRoom);