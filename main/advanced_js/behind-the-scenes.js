const hobbies = ['Sports', 'Cooking'];

hobbies.push('Reading');

console.log(hobbies);
console.log('-----')

const person = {age: 32};

function getAdultYears(p){
    // p.age -= 18;
    // return p.age;
    return p.age - 18;
}

console.log(getAdultYears(person));
console.log(getAdultYears({...person})); // 모든 키 값을 가져와 
console.log({...person}); // copy
console.log(person);