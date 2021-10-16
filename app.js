// let value = new Promise((resolve, rejection) => {
//     setTimeout(() => {
//         resolve("Hello")
//         // resolve and reject are not keyowrds we can use anything we want but  the order needs to remain the same
//         // rejection("Hello") 
//     }, 3000)
// })

// console.log(value)

// setTimeout(() => {
//     console.log(value)
// }, 4000)

// let response = fetch("https://jsonplaceholder.typicode.com/users")
// console.log(response)
// let response = fetch("https://jsonplaceholder.typicode.com/users").then(data => { console.log(data) })
// this is an object not a proper response 

// .json() comibes a data stream it is not an array it shows all the data present in a stream 

// let response = fetch("https://jsonplaceholder.typicode.com/users").then(res => {
//     // console.log(res.json())
//     // we can see that in turn this also provides a promise 
//     let parsedData = res.json()
//     console.log(parsedData)
// }).then(data => { console.log(data) })
// // this .then always return a promise
// // all the pomises are thenable 


// let response = fetch("https://jsonplaceholder.typicode.com/users").then(res => {
//     let parsedData = res.json()
//     console.log(parsedData)
//     return parsedData

//     // this return makes the promise return something as if we don't return something it will pass on nothing 
//     // json is a java script object it converts an array into an object 

// }).then(data => { console.log(data) })

let response = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => { console.log(data) })