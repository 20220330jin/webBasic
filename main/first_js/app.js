let greetingText = 'Hi I\'m Jin.';
let age = 32;
// alert(greetingText)
greetingText = 'what?'
// alert(greetingText)
// alert(age)

let userName = 'Jin';
let hobby1 = 'Study';
let hobby2 = 'Reading';

let hobbies = [hobby1, hobby2, age];

console.log(hobbies)
console.log(hobbies[2])

let job = {
    title: 'developer',
    place: 'Seoul',
}

console.log(job);
console.log(job.title);

let adultYears = age - 18;
console.log(adultYears)

function calculateAdultYear(userAge) {
    return userAge - 14;
}

calculateAdultYear();
console.log(adultYears)
console.log(calculateAdultYear(30))

console.log('------------method---------------')
let person = {
    name: 'Jin', // Property
    greet() { // Method
        alert('Hello!');
    }
}

person.greet();

