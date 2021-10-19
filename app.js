// let greet = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("welcome")
//     }, 2000)
// })
// greet.then(value => {
//     console.log(value)
//     return "welcome again"
//     // if this return is not thre then we will get and undefined in console 
// }).then(newValue => {
//     console.log(newValue);
// })

// console.log(greet)

// setTimeout(() => {
//     console.log(greet)
// }, 6000)

let response = fetch("https://jsonplaceholder.typicode.com/todos/10")

// console.log(response)

response.then(data => {
    // console.log(data)
    // console.log(data.json())
    // jsn is a promise as it needs some time to complete it is not a synchronous task 
    return (data.json())
}).then(content => {
    console.log(content)
})