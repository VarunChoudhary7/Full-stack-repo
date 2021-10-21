// DESTRUCTURING


const person = ({
    name: "Varun",
    age: 19,
    country: "India"
})

// console.log(`Hi ${person.name} you are ${person.age}`)

const { age, name, country } = person
// this shows that the order does not matter but the spelling do matter so don't mess it up

console.log(name, age, country)