const fs = require('fs')

// console.log(fs)
// fs.readFile('./test.txt', (data, error) => {
// fs.readFile('./test.txt', (error, data) => {
// fs.readFile('./test.txt', 'utf8', (error, data) => {
//     // this utf8 makes it gives the text instead of buffer 
//     // error is first parameter and then comes data 
//     if (error) console.log(error)
//     else console.log(data)
//     // else console.log(typeof data)
// })

// console.log('I am a log')
// // this will run first 
// // this shows that read file is an ashynchronous task 

// console.log(fs.readFileSync('./test.txt', 'utf8'))
// // this is a synchronous task and runs in between 
// console.log('I am a log')

// fs.writeFile('./test.txt', 'Hello frnds chai peelo', (error) => {
// we also pass the text we want to add 
fs.writeFile('./test.txt', `Aap zra ${fs.readFileSync('./test.txt', 'utf8')}`, (error) => {

    if (error) console.log(error)
})

// we also have write file sync and it works just like read file sync 
