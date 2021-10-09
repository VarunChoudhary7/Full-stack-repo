// function greet(Name = "John", age = 19) {
// console.log(Name, age)

// console.log("hello")


// console.log("Hey " + Name + " your age is " + age)

// }

// greet("VARUN", 18)
// greet("VARUN")

// function add(a = 0, b = 0) {
//     console.log(a + b)
//     var sum = a + b
//     return sum
// }
// console.log(sum) 

// add(10)
// when we use this it shows a NaN not a number

// var result = add(10, 20)
// console.log(result)

// var add = function (a = 0, b = 0) {
//     var sum = a + b
//     return sum
// }

// console.log(add(10, 20))

// var greet = function () {

//     console.log("hello")
// }

// greet()
// console.log(add(10, 20))
// function add(a = 0, b = 0) {
//     console.log(a + b)
//     var sum = a + b
//     return sum
// }
// this function key word makes the function go at the top of the code by itself 


// var result = add(10, 20)
// console.log(result)

// var add = function (a = 0, b = 0) {
//     var sum = a + b
//     return sum
// }
// this shows error as in this case we are using a variable before it is declared 

// var add = (a = 0, b = 0) => {
//     // var sum = a + b
//     // return sum
//     return a + b
//}
// this is an arrow function remove the function key word with an arrow 
var add = (a = 0, b = 0) => a + b
// this means that this arropw funtion returns a + b 

console.log(add(10, 20))

const greet = Name => "Hi" + Name
console.log(greet(" Varun"))





