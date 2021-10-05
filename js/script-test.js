// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//     console.log(number);

//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }
// console.log('smallestNumber: ', smallestNumber);



// const numbers = [25, 61, 98, 61, 48, 15, 48, 12, 15, 4, 51, 561, 651, 65, 11, 2, 1, 54, 5, 15, 152, 15, 1, 561, 561115, 1, 1, 51, 5, 54, 51, 51];

// let highestNumber = numbers[0];

// for (let number of numbers) {

//     console.log(highestNumber);
//     if (number > highestNumber) {
//         highestNumber = number;
//         }
// }

// console.log('highestNumber: ', highestNumber);
    
const string = 'JavaScript';

const letters = string.split('');
console.log('string: ', string);
let invertedString = '';

// console.log(letters);

for (const letter of letters) {
    // console.log(letter);

    // if (letter === letter.toLocaleLowerCase()) {
    //     console.log('Эта буква в нижнем регистре - ', letter);

    //     invertedString += letter.toUpperCase();
    // } else {
    //     console.log('Эта буква в верхнем регистре - ', letter);

    //     invertedString += letter.toLowerCase();
    // }

    invertedString +=
        letter === letter.toLowerCase()
            ? letter.toUpperCase()
            : letter.toLowerCase();
}

console.log('invertedString: ', invertedString);