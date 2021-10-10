// console.log(this)
// console.log(this.alert("Hi"))

// let manufacturer = "Ferrari"

// let car = {
//     Name: "C class",
//     manufacturer: "Mercedes",
//     // print: function (a) {
//     print: function () {

//         // console.log(this.Name + " by " + this.manufacturer)

//         // console.log(a)

//         // console.log(this)
//         let manufacturer = "BMW" // second line fisrt is at top
//         console.log(manufacturer)
//         console.log(car.manufacturer, car.Name)
//         console.log(this.manufacturer, this.Name)


//     }
// }

// console.log(car)
// console.log(typeof car)
// console.log(car.Name)

// console.log(car.manufacturer)
// console.log(car.print())

// car.print("ferrari")
// console.log(car)

// car.print()

// let obj = {
//     h: "hello",
//     w: "world",
//     print: function () {
//         // console.log("hello world")
//         console.log(this);
//         console.log(this.h + this.w);
//         console.log(obj.h);


//     }
// }

// // console.log(obj.print("sdhf"))
// // this returns nothing and hence you will see an undefined in console

// const temp = obj.print("sjhf");
// console.log(temp)

let car = {
    Name: "C class",
    manufacturer: "Mercedes",
    // print: function () {

    //     // console.log(car.manufacturer, car.Name)
    //     // console.log(this.manufacturer, this.Name)

    //     // instead of using car we can use this 
    //     // console.log(this.Name + " this car was manufactured by " + this.manufacturer)
    //     console.log(`${this.Name} was created by ${this.manufacturer}`)

    // }
    print: () => {
        // an arrow syntax always points toward the window while function method points to the object it is in 
        console.log(this)

        // console.log(`${this.Name} was created by ${this.manufacturer}`)
        console.log(`${car.Name} was created by ${car.manufacturer}`)
    }
}
// car.print()

console.log(car)
console.log(Object)

console.log(Object.keys(car))

console.log(Object.values(car))
console.log(car.hasOwnProperty("Name"))

















