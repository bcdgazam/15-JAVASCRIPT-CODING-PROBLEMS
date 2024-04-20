//15-6 Sum of all numbers in an array

/*
let numbers = [23, 45, 56, 79, 90, 30, 20, 10, 900]
let sum = 0;

for (let i = 0; i < numbers.length; i++){
    let element = numbers[i];
    sumNewValue = sum + element;
}

console.log('Total of the numbers:', sumNewValue);

*/

//If I want many times

function sumTotal(n){
    sum = 0;
    for (let i = 0; i < n.length ; i++){
        let element = n[i];
        sum += element;
    }
    return sum;
}

let result = sumTotal([23, 34, 45, 56, 3, 24, 56, 566, 65]);
console.log(result);