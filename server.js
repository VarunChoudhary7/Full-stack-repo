const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

const token = "TOP_SECRET"

let products = [{ name: "iPhone 12 case", price: "999" }, { name: "iPhone 13 case", price: "1199" }, { name: "iPhone 13 pro case", price: "1499" }]


// MIDDlEWARE
const validator = (req, res, next) => {
    const { name, price } = req.body
    if (!name || !price) res.json({ error: "Validation Failed" })
    else next()
}

const isAuthorised = (req, res, next) => {
    if (req.headers.authorisation === token) next()
    else res.json({ error: "Authorization Failed" })
}


//--------------PUBLIC Route------------ 
app.get('/products', (req, res) => {
    res.json({ products })
})

//--------------PRIVATE Route------------ 

app.post('/products/add', isAuthorised, validator, (req, res) => {
    const { name, price } = req.body

    products.push({
        name,
        price,
    })
    res.send({ products })
})


//-----------AUTHENTICATION Route----------
app.post('/products/auth', (req, res) => {
    const { email, password } = req.body
    if (email === "admin@mail.com" && password === "password") {
        res.send({ token })
    } else {
        res.send({ message: "UNAUTHORISED" })
    }
})


app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT} `)
})