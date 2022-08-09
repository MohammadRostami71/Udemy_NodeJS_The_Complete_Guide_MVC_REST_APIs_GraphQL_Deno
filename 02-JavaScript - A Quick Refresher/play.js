const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done!')
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log('Timer is done !');
    fetchData().then(text => {
        console.log(text);
        return fetchData().then(text2 => {
            console.log(text2);
        }).then(text2 => {
            console.log(text2);
        }); 
    });
}, 2000);
const name = 'mohammad';
let age = 29;
const hasHobbies = true;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return 'name :' + userName + ', age' + userAge + ' and the user has hobbies :' + userHasHobby
}

const add = (a, b) => a + b
const addOne = a => a + 1

console.log(summarizeUser(name, age, hasHobbies));
console.log(add(1, 2));
console.log(addOne(1));

const person = {
    name: 'mohammad',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name)
    }
};

console.log(person);
// person.greet();

const printName = ({name}) => {
    console.log(name)
}
printName(person);
const {name2, age2} = person;
console.log(name2, age2);
const hobbies = ['sport', 'cooking'];
for (const hobby in hobbies) {
    console.log(hobby);
}
hobbies.map(item => console.log(item))
console.log(hobbies.map(hobby => 'hobby is :' + hobby))

const copiedArray = [...hobbies];
console.log(copiedArray);

const toArray = (...args) => {
    return args
}

console.log(toArray(1, 2, 3))