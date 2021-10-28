const express = require('express')
const app = express()


app.get('/products/cases')
app.get('/products/protection')
app.get('/products/bands')

app.get('/products/:categories', (req, res) => {
    if (req.params.categories = 'iPhone')
        if (req.params.categories = 'mac')
            if (req.params.categories = 'iPad')
                if (req.params.categories = 'music')


                    console.log(req.params)
    res.send("PING")
})



app.listen(3001, () => {
    console.log("Listening at port 3001")
})