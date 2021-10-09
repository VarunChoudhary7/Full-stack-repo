// Document object model
// dom is an api
var heading = document.getElementById('heading')
heading.innerHTML = "Hi from JS"
// this changes the content of the element 
var para = document.getElementsByClassName("para")
var tags = document.getElementsByTagName('a')
var query = document.querySelector("#heading")
// it uses css selectors 
var hello = document.querySelector(".para")
var all = document.querySelectorAll(".para")


console.log(heading)
console.log(typeof heading)
console.log(para)
console.log(para.length)

console.log(para[0])
console.log(para[1])


// para.push("asdf")
// getElementsByClassName does not give and array but it gives us an object something similar to an array

console.log(tags)
console.log(query)
console.log(hello)
console.log(para)
console.log(all)