const button = document.querySelector('button')
const input = document.querySelector('input')
const div = document.querySelector('div')

// button.addEventListener('click', (req, res) => {

//     div.innerHTML = input.value

// })

// console.log(localStorage)

// localStorage.setItem('Inputvalue', "Something"
// u can comment it first now the value will still stay 
// console.log(localStorage.getItem('Inputvalue'))

// localStorage.clear()

// let last = localStorage.getItem('inputValue')
// div.innerHTML = last
// div.innerHTML = localStorage.getItem('inputValue')


// button.addEventListener('click', (req, res) => {
//     // localStorage.setItem('inputValue', input.value)
//     localStorage.setItem('inputValue', [1, 2, 3, 4])

//     div.innerHTML = input.value
// })

// const arr = localStorage.getItem('inputValue')
// console.log(typeof arr)
// localStorage.clear()
const arr = [1, 2, 3, 4, 5]
// JSON.stringify(arr)

// console.log(arr)
// localStorage.setItem('val',arr)

localStorage.setItem('val', JSON.stringify(arr))
// JSON.stringify converts an array to a string 

// console.log(localStorage.getItem('val'))
console.log(JSON.parse(localStorage.getItem('val')))
// JSON.parse converts the same string back to an array after fetching it