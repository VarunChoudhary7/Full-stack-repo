var heading = document.getElementById("heading")
var body = document.querySelector("body")


console.log(heading)

heading.innerHTML = "I was added by JS"
heading.style = "color:red;font-size:5rem"

heading.classList.add("five")
heading.classList.remove("one")



console.log(heading.classList)

body.classList.add("dark")
// body.classList.remove("dark")


