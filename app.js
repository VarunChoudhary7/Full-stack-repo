const container = document.getElementById("app")

// const content = React.createElement('h1', {}, 'hi')
const content = React.createElement('div', {}, [
    // React.createElement("h1", {}, "I am a heading"),
    // React.createElement("h2", {}, "I am a heading"),
    // React.createElement("h3", {}, "I am a heading")

    // React.createElement("li", {}, "I am a heading"),
    // React.createElement("li", {}, "I am a heading"),
    // React.createElement("li", {}, "I am a heading")

    React.createElement("li", {}, "I am a heading"),
    React.createElement("li", {}, "I am a heading"),
    React.createElement("ul", {}, [

        React.createElement("li", {}, "Content"),
        React.createElement("li", {}, "Content"),
        React.createElement("li", {}, "Content"),
        React.createElement("img", { src="" }, ""),
    ])

])

// We need a transpilation app to convert this  into above code 

const Name = "Varun"

const jsx =
    <ul>
        <h2>{Name}</h2>
        <li>I am heading</li>
        <li>I am heading</li>
        <li>I am heading</li>
        <ul>
            <li>Stuff</li>
            <li>Stuff</li>
        </ul>
    </ul>




ReactDOM.render(content, container)
