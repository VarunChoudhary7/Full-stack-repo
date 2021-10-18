// ul = document.querySelector("ul");
// // console.log(ul);
// let response = fetch("https://jsonplaceholder.typicode.com/users").then(resp => resp.json()).then(data => {
//     console.log(data);
//     append_data = (element) => {
//         lielement = document.createElement("li");
//         user_detail = element['name'] + element['username'] + element['email']
//         textnode = document.createTextNode(user_detail);
//         lielement.appendChild(textnode);
//         ul.appendChild(lielement);
//     }
//     data.forEach(append_data);

//}

const table = document.querySelector("table")

console.log(table)


fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => {
        data.forEach(user => {
            // console.log(user)
            let newRow = document.querySelector("tr")
            let dataId = document.querySelector("td")
            let dataIdTextNode = document.createTextNode(user.id)
            dataId.appendChild(dataIdTextNode)
            newRow.appendChild(dataId)

            table.appendChild(newRow)
        });
    })
