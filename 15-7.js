//15-7 Remove duplicate item from an array

let rollNo = [1, 2, 34, 45, 1, 34, 55, 89, 1, 2, 3, 4];
let uniqueRoll = [];

for (let i = 0; i < rollNo.length; i++){
    let element = rollNo[i];
    let index = uniqueRoll.indexOf(element);
    if(index == -1){
        uniqueRoll.push(element)
    }
}

console.log('After Duplicate all rolls are: ', uniqueRoll);