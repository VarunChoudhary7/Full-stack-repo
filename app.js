// fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
//     .then(data => {
//         console.log(data)
//         data.forEach(user => {

//             console.log(data)

//         });

//     })
// if we have so many thens then the code will become cluttered and hence we can use this async and await as they help in resolving a Promise once it is completed 

const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    //     const data = await response.json()
    // console.log(data)
    console.log(response)
    // this shows that this is now an async function and nnow it will wait for he promise to resolve and it also provides a value after getting resolved
    const data = await response.json()
    console.log(data)
    // await nly works in async fnction that you need to keep in mind 
    // so instead of using then we can use await keyword and make our work easier 

}

fetchData()
