var body = document.querySelector("body")

var button = document.querySelector("button")






// const callBackFunction = (happen) => {
//     const inputValue = input.value
//     const element = document.createElement("li")
//     const textNode = document.createTextNode(inputValue)
//     element.appendChild(textNode)
//     list.appendChild(element)
// }
const callBackFunction = (happen) => {
    // body.classList.add("dark")
    body.classList.toggle("dark")

}



button.addEventListener("click", callBackFunction)