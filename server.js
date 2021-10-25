// // console.log("I am a message")
// // console.log("I am another message")

// const http = require('http')
// // console.log(http)
// const fs = require('fs')
// const route = require('path')

// const server = http.createServer((request, response) => {
//     // console.log(request)
//     // console.log(request)
//     // console.log(request.url)
//     // it gives us the path we are sending the request to 
//     // console.log(request.headers)
//     // console.log(request.method)
//     // const path = request.url
//     // // response.write(`You made a request to the ${path}`)
//     // // response.write(`<h1>I am a heading</h1>`)
//     // const markup = fs.readFileSync(route.resolve('./index.html'))

//     // response.write(markup)

//     // response.end()
//     const { url } = request
//     if (url == '/login') {
//         response.write('<h1>LOGIN</h1>')
//         response.end()
//     }
//     if (url == '/signup') {
//         response.write('<h1>SIGNUP</h1>')
//         response.end()
//     }
// })

// // console.log(server)

// server.listen(3000, () => {
//     // first para is port number at which it will run 
//     console.log(`Server listening at PORT: ${3000}`)
// })


const express = require('express')
const app = express()
// it returns us a server i mean express instance returns a server  

app.get(`/`, (req, res) => {
    console.log(req.url)
    res.send('This is a response')
})
app.get(`/login`, (req, res) => {
    console.log(req.url)
    res.send('LOGIN')
})
app.get(`/signup`, (req, res) => {
    console.log(req.url)
    res.send('SIGNUP')
})
app.listen(3000, () => {
    console.log('Server listening at port 3000')
})

const data = [{ name: 'Anisha' }, { name: 'Suman' }, { name: 'Varun' }]

app.get(`/getNames`, (req, res) => {
    console.log(req.url)
    res.send(data)
})
