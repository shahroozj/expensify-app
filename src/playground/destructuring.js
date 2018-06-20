const person = {
    name: 'Shahrooz',
    age : 40,
    location : {
        city:'Perth',
        temperature:23
    }
}

const {name :firstname = 'Anonymous', age} = person;
// const name = person.name;
// const age = person.age;

console.log(`${firstname} is ${age}.`)

const {city, temperature:temp} = person.location;
if (city && temp){
    console.log(`it is ${temp} degrees in ${city}.`)
}


const book = {
    name : 'Dragon Attacks',
    authur: 'Jame Cameron',
    publisher : {
        name:'Zarrin Book'
    }
}

const {name : publisherName = 'Self Published'} = book.publisher

console.log(`${publisherName}`)