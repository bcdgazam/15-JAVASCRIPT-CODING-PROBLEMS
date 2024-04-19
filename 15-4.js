//15-4 Find max of two values, find max of three values

let business = 950;
let minister = 650;
let sochib = 550;

if (business > minister){
    if(business > sochib){
        console.log('Businessman is bigger');
    }
    else{
        console.log('Sochib is bigger') 
    }
}else {
    if(minister > sochib){
        console.log('Minister is bigger')
    }
    else{
        console.log('Sochib is bigger')
    }
}