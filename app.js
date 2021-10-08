// operators
// arithmetic
var a = 2
var b = 10

console.log(a + b)
console.log("b-a=", b - a)
console.log(b / a, b * a)
console.log("b**a=", b ** a)
console.log("b%a=", b % a)

// assignment operators
b = 12
console.log("b=", b)
b += 1
console.log("b+=1", b)
b++
console.log("b++", b)
b -= 10
console.log("b-=10", b)
b--
console.log("b--", b)

var c = 10
// console.warn(c++) post increment
console.log(++c)
// pre increment 


// comparision

var d = 10
var e = 2
f = "10"

console.log(d > e)
console.log(d < e)
console.log(d == e)
console.log(d >= e)
console.log(d <= e)
console.log(d == f)
console.log()

console.log(d == f)
// this doesn't check for type
console.warn(d === f)
// this check for type
console.log(d + f)

// logical

console.log("true && true", true && true)
console.log("true && false", true && false)
console.log("false && true", false && true)
console.log("false && false", false && false)

console.log("true || true", true || true)
console.log("true || false", true || false)
console.log("false || true", false || true)
console.log("false || false", false || false)




