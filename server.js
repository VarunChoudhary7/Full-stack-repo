const express = require('express')
const app = express()
const database = require('./database/db')
app.use(express.json())
const categoryRoutes = require('./routes/categoryRoutes')

// app.get('/', (req, res) => {
//     // res.send('hi')
//     console.log(document)
//     res.send(error.message)
// })
console.log(categoryRoutes.stack)

// app.use('/', categoryRoutes)
app.use('/categories', categoryRoutes)
// app.use('/mercedes', categoryRoutes)
// app.use('/mercedes/1/2/3', categoryRoutes)

// this is a new middleware and it uses to parameters first is the url it will be using and adding the route to it 

app.get('/', (req, res) => {
    try {
        console.log(document)
    } catch (error) {
        res.status(200).send(error.message)
    }
})

app.listen(3001, () => {
    console.log("Listening at port 3001")
})
