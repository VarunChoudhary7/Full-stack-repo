const express = require('express')
const app = express()
app.use(express.json())
const categoryRoutes = require('./routes/categoryRoutes')


app.use('/categories', categoryRoutes)


app.listen(3001, () => {
    console.log("Listening at port 3001")
})
