// const table = document.querySelector("table")

// console.log(table)


// fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => {
//     data.forEach(user => {
//         console.log(user)
//         let newRow = document.querySelector("tr")
//         let dataid = document.querySelector("td")
//         let dataidTextNode = document.createTextNode(user.id)
//         dataid.appendChild(dataidTextNode)
//         newRow.appendChild(dataid)

//         table.appendChild(newRow)
//     })
// })

// alternate method 

// const table = document.querySelector("table")
// console.log(table)
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(data => {
//         data.forEach((user) => {
//             const { id, name, email, username } = user;
//             new_row = document.createElement("tr");
//             new_row.innerHTML = `<td>${id}</td>
//                                    <td>${name}</td>
//                                    <td>${email}</td>
//                                    <td>${username}</td>`
//             table.appendChild(new_row);
//         })
//     })



