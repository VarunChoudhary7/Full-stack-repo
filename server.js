const express = require('express')
const app = express()
const PORT = 3000

// const logger = (req, res, next) => {
//     console.log(req.method)
//     next()
// }

// app.use(logger)
// this will use middleware in each request 

app.use(express.json())
// this  just makees it a string 

// app.get('/', logger, (req, res) => {
app.get('/', (req, res) => {
    res.send("Server is running")
})

// app.post('/', logger, (req, res) => {
app.post('/', (req, res) => {
    console.log(req.body)
    res.send("Server is running")
})

app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT} `)
})