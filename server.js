const express = require('express')
const PORT = 3000

const app = express()

// const verify = (req, res, next) => {
//     if (req.headers["user-agent"] === 'Thunder Client (https://www.thunderclient.io)')
//         next()
//     else res.send("BLOCKED")
// }

const isAdmin = (req, res, next) => {
    if (req.headers.admin === 'true') next()
    else res.send("AUTHENTICATION")
}

// app.get('/', (req, res) => {
//     res.send('GET')
// })


// app.post('/', (req, res) => {
//     res.send('POST')
// })
// app.put('/', (req, res) => {
//     res.send('PUT')
// })
// app.delete('/', (req, res) => {
//     res.send('DELETE')
// })
// app.patch('/', (req, res) => {
//     res.send('PATCH')
// })
// app.get('/login', (req, res) => {
//     res.send('login page')
// })

// app.get('/', verify, (req, res) => {
//     // console.log(req)
//     // if (req.headers["user-agent"] === 'Thunder Client (https://www.thunderclient.io)')
//     //     res.send('GET')
//     // else res.send("BLOCKED")
//     res.send('VERIFIED')
// })

app.get('/public', (req, res) => {
    res.send('I am a public route')
    console.log(req.headers)
})

app.get('/private', isAdmin, (req, res) => {
    res.send('I am a private route')
})


app.listen(PORT, () => {
    console.log(`Server listening at port: ${PORT}`)
})