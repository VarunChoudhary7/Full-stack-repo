const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

let products = [{ name: "iPhone 12 case", price: "999" }, { name: "iPhone 13 case", price: "1199" }, { name: "iPhone 13 pro case", price: "1499" }]

//--------------PUBLIC Route------------ 
//this route is a get route 
//this will send products as response
app.get('/products', (req, res) => {
    // res.send(products)
    res.json({ products })
    // after this we don't need to parse it it will do that automatically

})

//--------------PRIVATE Route------------ 

app.post('/products/add', (req, res) => {
    // console.log(req.body)
    const { name, price } = req.body
    const newProduct = {
        // name: req.body.name,
        // name: name,
        name,
        // this works the same way the above command do because es6 allows you to do this 
        // price: req.body.price,
        // price: price,
        price,
    }
    products.push(newProduct)
    res.send('product added')
})



app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT} `)
})