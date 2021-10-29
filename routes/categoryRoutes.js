const database = require('../database/db')
const express = require('express')
const router = express.Router()

router.get('/all', (req, res) => {


    // it will first try this try statement block and then it will move on to the catch statement block if the try block do not work 
    // it will also pass along the error as the parameter suggests error 
    try {
        res.json({
            categories: database.categories,
            message: "Successfully fetched categories"
            status: "SUCCESS "
        })


    } catch (error) {
        res.json({
            categories: [],
            message: error.message
            status: "FAILED"
        })
    }

})