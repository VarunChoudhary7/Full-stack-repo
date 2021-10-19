const table = document.querySelector("table")
console.log(table)


fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
    .then(data => {
        console.log(data)
        data.forEach(user => {
            // console.log(user)
            const newRow = document.createElement('tr')
            const dataId = document.createElement('td')
            const dataIdTextNode = document.createTextNode(user.id)
            dataId.appendChild(dataIdTextNode)
            newRow.appendChild(dataId)

            table.appendChild(newRow)
            // now if we want to add name and everything we will just clutter the code as we need to do this again and again 
            // so sir will teach an alternate method 
        });

    })