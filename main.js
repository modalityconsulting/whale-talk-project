// Project - Whale Talk
var input = "Oh man that is some high quality krill right there";

const vowels = ["a", "e", "i", "o", "u"];

var resultArray = [];

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        
        if (input[i] === vowels[j]) {

            if (input[i] === 'e' || input[i] === 'u') {
                resultArray.push(input[i], input[i]);
            } else {
                resultArray.push(input[i]);
            }
        }
    }
}
// console.log(resultArray);

var resultString = resultArray.join("").toUpperCase();

console.log(resultString);
