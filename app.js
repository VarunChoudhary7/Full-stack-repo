var arr = [1, 2, 3, 4, 5, 6, 7, 8]

// arr.unshift(6)
// console.log(arr)


// console.log(arr.unshift(6))
// arr.shift()
// console.log(arr)
// shift deletes the first Element and unshits adds element at the first place

// var new_arr = arr.slice(2, 5)
// // this does not change the original array it only modifies it 
// // 2 is inclusive while 5 is not 
// console.log(new_arr)
// var new_arr = []
// for (var i = 0; i < arr.length; i++) {
//     if (
//         arr[i]
//         % 2 === 0)
//         new_arr.push(arr[i])
// }

// console.log(new_arr)

var new_arr = arr.filter((element, index) => {
    // console.log(element, index)
    // if (element % 2 === 0) return true
    if (element < 4) return true
})
console.log(new_arr)






