const express = require('express')
const PORT = 3000
const app = express()

app.use(express.json())
// it uses this as a middleware in every request we make 

app.post('/signup', (req, res) => {
    console.log(req.body)
    res.send('dadada')
})


app.listen(PORT, () => {
    console.log(`Server listening at port: ${PORT}`)
})