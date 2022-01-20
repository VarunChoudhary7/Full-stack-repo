const express = require('express')
const connectDB = require("./mongoDB/connectDB")
const { User } = require('./mongoDB/modals/User')

// console.log(mongoose)

// mongoose.connect(connection_string).then(data => {
//     console.log("connected to the database")
// })

connectDB()

const app = express()

app.use(express.json())

app.get('/getUser/:email', async (req, res) => {
    try {
        const { email } = req.params
        const user = await User.findOne({ email })

        res.send(user)
    } catch (error) {
        console.log(error)
        res.send(error.message)
    }
})

app.post('/addUser', async (req, res) => {
    try {
        // console.log(req.body)
        const user = new User(req.body)
        console.log(user)
        await user.save()
        res.send('request recieved')
    } catch (error) {
        console.log(error)
        res.send(error.message)
    }
})

app.listen(3003, (req, res) => {
    console.log("Server listening at port 3003")
})