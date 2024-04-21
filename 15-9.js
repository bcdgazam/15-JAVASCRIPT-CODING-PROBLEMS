//15-9 Reverse a string

function reverseString(str){
    let reverse = '';
    for(let i = 0; i < str.length; i++){
        let char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}

let speech = 'Hello Brother How are You?'
let forAlienSpeech = reverseString(speech);
console.log(forAlienSpeech);