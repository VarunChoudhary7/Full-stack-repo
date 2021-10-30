const database = require('../database/db')
const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')
const db = require('../database/db')

router.get('/all', (req, res) => {

    try {
        res.json({
            categories: database.categories,
            message: "Successfully fetched categories",
            status: "SUCCESS "
        })
    } catch (error) {
        res.json({
            categories: [],
            message: error.message,
            status: "FAILED"
        })
    }

})

router.post('/add', (req, res) => {
    const { name } = req.body
    const newCategory = {
        id: uuidv4(),
        name
    }
    // if(){}
    let includes = database.categories.find(item => item.name === name)
    console.log(includes)
    // this find method just iteratees over each element and checks if we have it already or not 
    database.categories.push(newCategory)
    try {
        res.json({
            categories: database.categories,
            message: "Successfully added categories",
            status: "SUCCESS"
        })
    }
    catch (error) {
        res.json({
            categories: [],
            message: error.message,
            status: "FAILED"
        })
    }
})

module.exports = router

