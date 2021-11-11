const container = document.getElementById("app")

// console.log(container)

// const headingone = React.createElement('h2', {}, 'This is a heading')

// const headingtwo = React.createElement('h3', {}, 'This is heading three')


// ReactDOM.render(headingone, container)
// ReactDOM.render(headingtwo, container)

// there can only be one render method multiple are not allowed

const content = React.createElement('div', {}, [
    React.createElement('h1', {}, `I am heading one`),
    React.createElement('p', {}, `I am paragraph one`),
    React.createElement('p', {}, React.createElement('p', {}, `I am secondary paragraph`),)
    // nesting
]
)

ReactDOM.render(content, container)
