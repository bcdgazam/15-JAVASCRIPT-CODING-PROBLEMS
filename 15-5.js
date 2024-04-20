//15-5 Find the largest element of an array

let stResul = [23, 50, 60, 10, 20, 98, 100, 102, 97, 96, 80, 103, 151, 50]

let max = stResul[0];

for(let i = 0; i < stResul.length; i++){
    let element = stResul[i];
    if(element > max){
        max = element;
    }
}

console.log('The Heighst Number is:', max);