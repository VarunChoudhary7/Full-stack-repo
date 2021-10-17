// const hello = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("My name is Varun")
//     }, 3000
//     )

// })
// // console.log(hello)
// // setTimeout(() => {
// //     console.log(hello)

// // }, 4000)

// hello.then(name => { console.log(name) })


// the task to display all the data after fetching from the url 
ul = document.querySelector("ul");
// console.log(ul);
let response = fetch("https://jsonplaceholder.typicode.com/users").then(resp => resp.json()).then(data => {
    console.log(data);
    append_data = (element) => {
        lielement = document.createElement("li");
        user_detail = element['name'] + element['username'] + element['email']
        textnode = document.createTextNode(user_detail);
        lielement.appendChild(textnode);
        ul.appendChild(lielement);
    }
    data.forEach(append_data);

})