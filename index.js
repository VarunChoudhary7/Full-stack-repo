// console.log("something")

// for (var i = 0; i < 10; i++) {
//     console.log('iteration', i + 1)
// }

// console.log(document)
// it will throw an eror as there is no dom bcoz it was created by the browser

// console.log(window)
// it is also undefined 

// setTimeout(() => {
//     console.log('hello')
// }, 2000)
// this is provide to us by V8 engine so it works fine without any error


// a module is just a file in which we have defined our code seperaely and are importing and exporting our code from there for use 
// it just makes our code more organised 
// console.log(module)
// only node js supports these modules chrome will throw an error 

const greet = () => "hi"

// module.exports.something = 'hi'
// module.exports['something'] = 'hi'
module.exports.greet = greet

// console.log(module)

console.log("i am index.js")