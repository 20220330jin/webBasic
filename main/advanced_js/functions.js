function greetUser(greetingPrefix, userName = 'user') {
    console.log(greetingPrefix + ' ' + userName);
    // template literal
    console.log(`${greetingPrefix} ${userName}!`);
}

greetUser('Hello');
greetUser('Hi', 'Jin');

function sumUp(num1, num2, num3 = 0) {
    return num1 + num2 + num3;
}

console.log(sumUp(1, 2));
console.log(sumUp(1, 2, 3));

function sumUp2(...numbers) {
    let result = 0;

    for (const number of numbers) {
        result += number;
    }

    return result;
}

const inputNumbers = [1, 5, 10, 11, 29, 31];

console.log(sumUp2(1, 5, 10, 11));
console.log('------');
console.log(...inputNumbers); // spread operator
console.log(sumUp2(...inputNumbers));

console.log('------');

console.log(sumUp);