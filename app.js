var list = document.querySelector("ul")

console.log(list)

var arr = ["go to the gym", "cook", "eat"]

arr.push("Complete  assignment")

for (var i = 0; i < arr.length; i++) {
    var element = document.createElement("li")
    var textNode = document.createTextNode(arr[i])
    // console.log(arr[i]);
    // console.log(textNode)
    // console.log(element)
    element.appendChild(textNode)
    // console.log(element) 
    list.appendChild(element)
}

