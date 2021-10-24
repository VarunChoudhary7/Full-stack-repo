// path module
const { resolveSoa } = require('dns')
const path = require('path')

// console.log(path)


// console.log(path.resolve('./app.js'))
//resolve do this is turnig our relative path to absolute path 

// console.log(path.relative('./temp', "./temp/utils.js"))
// in this we pass two paramters the first one shows relative to and second one is the file whose path you want relative to the first one
// humein chahiye dusre ka path pehle vale ke respect mein 

// console.log(path.relative('./', "./temp/utils.js"))
// console.log(path.relative('../', "./temp/utils.js"))
// console.log(path.relative('/', "./temp/utils.js"))
// this / signifies root of the computer here 

// console.log(path.extname('./app.js'))
// this shows us the extension name 

// console.log(path.dirname('./temp/utils.js'))
// this shows us the directory name only 

// console.log(__dirname)
// this shows us the path of the current directory 
// it is similar to resolve

console.log(path.join(__dirname, 'app.js'))
// path.join joins the path of the two files or connects the two files


