const table = document.querySelector("table")
console.log(table)

fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
    .then(data => {
        console.log(data)
        data.forEach(user => {
            const newRow = document.createElement('tr')
            let element = `<td>${user.id}</td>
                            <td>${user.name}</td>
                            <td>${user.email}</td>
                            <td>${user.username}</td>`

            // console.log(element)
            newRow.innerHTML = element

            // newRow.appendChild(element)

            table.appendChild(newRow)

        });

    })