const a = document.querySelectorAll("input")[0]
const b = document.querySelectorAll("input")[1]
const add = document.querySelector("#add")
const multiply = document.querySelector("#multiply")
const subtract = document.querySelector("#subtract")
const resultBox = document.querySelector(".result")

// const a = document.getElementsByTagName("input")[0]
// const b = document.getElementsByTagName("input")[1]
// console.log(a, b)
// console.log(add, multiply)
// console.log(result)

const sum = () => {
    const result = parseInt(a.value) + parseInt(b.value)
    console.log(result)
    resultBox.innerHTML = result
    // resultBox.textContent = result

}



const product = () => {
    const result = parseInt(a.value) * parseInt(b.value)
    console.log(result)
    resultBox.innerHTML = result
    // resultBox.textContent = result

}

// const calculate = (event, operation) => {
const calculate = (event, operation) => {

    // console.log(event.target)
    // if (operation == "add") {
    //     console.log("adding")
    // }
    // else if (operation == "multiply") {
    //     console.log("multiplying")
    // }
    switch (operation) {
        case "add":
            resultBox.innerHTML = parseInt(a.value) + parseInt(b.value)
            break
        case "multiply":
            resultBox.innerHTML = parseInt(a.value) * parseInt(b.value)
            break
        case "subtract":
            resultBox.innerHTML = parseInt(a.value) - parseInt(b.value)
            break

        default:
            resultBox.innerHTML = "Not a valid option"
    }


}



// add.addEventListener("click", sum)
// multiply.addEventListener("click", product)
// add.addEventListener("click", calculate("add"))
// in this we are doing a function call but we just need to pass the signature
add.addEventListener("click", (event) => {
    // console.log(multiplying)
    // return calculate(add)
    calculate(event, "add")
})
multiply.addEventListener("click", (event) => calculate(event, "multiply"))
subtract.addEventListener("click", (event) => calculate(event, "subtract"))






