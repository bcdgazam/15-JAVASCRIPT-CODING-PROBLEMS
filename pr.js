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


let stResul = [23, 50, 60, 10, 20, 98, 100, 102, 97, 96, 80, 103, 151, 50]

let max = stResul[0];

for(let i = 0; i < stResul.length; i++){
    let element = stResul[i];
    if(element > max){
        max = element;
    }
}

console.log('The Heighst Number is:', max);