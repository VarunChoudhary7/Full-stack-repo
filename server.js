const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

let products = [{ name: "iPhone 12 case", price: "999" }, { name: "iPhone 13 case", price: "1199" }, { name: "iPhone 13 pro case", price: "1499" }]

// MIDDlEWARE
const validator=(req,res,next)=>{
    
}


//--------------PUBLIC Route------------ 
//this route is a get route 
//this will send products as response
app.get('/products', (req, res) => {
    res.json({ products })
})

//--------------PRIVATE Route------------ 

app.post('/products/add', (req, res) => {
    const { name, price } = req.body
    // const newProduct = {
    //     name,
    //     price,
    // }

    if (!name || !price) res.send({ error: "Validation Failed" })
    else {

        products.push({
            name,
            price,
        })
        res.send({ products })
    }
})



app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT} `)
})