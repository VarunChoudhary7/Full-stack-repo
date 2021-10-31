const express = require('express')
const app = express()
app.use(express.json())
const categoryRoutes = require('./routes/categoryRoutes')
const productRoutes = require('./routes/productRoutes')


app.use('/categories', categoryRoutes)
app.use('/products', productRoutes)


app.listen(3001, () => {
    console.log("Listening at port 3001")
})
