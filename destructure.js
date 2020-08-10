const person = {name: 'Ikram', age: 30, Job: 'Travel Agent', Wife: 'Salma', address: 'Goshaildanga', friends: ['iffat', 'juwel', 'porag', 'riad']};

// const {Wife, age, Job, phone, friends} = person;

const complexObject = {
    name: 'abc',
    info: {
        address: 'goshaildanga',
        age: 30
    }
}

const {age} = complexObject.info;
console.log(age);

// const Wife = person.Wife;
// const Job = person.Job

// console.log(Job, Wife, age, friends, phone);
// console.log(Job, Wife, age, friends, phone);

const frnd = ['iffat', 'porag', 'riad', 'faisal'];
const [closeFrnd, ...restFrnd] = frnd;

console.log(closeFrnd, restFrnd);

