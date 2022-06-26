// const job = {
//     title: 'Developer',
//     location: 'Seoul',
//     salary: 50000,
// };

// console.log(new Date().toISOString());

class Job {
    constructor(jobTitle, place, salary){
        this.title = jobTitle;
        this.location = place;
        this.salary = salary;
    }

    describe(){
        console.log(`I'm a ${this.title}, I work in ${this.location} and I earn ${this.salary}`);
    }
}

const developer = new Job('developer', 'Seoul', 30000);
console.log(developer);
developer.describe();