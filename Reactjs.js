// const h1 = document.createElement("h1")
// h1.textContent = "This is imperative way to program"
// h1.className = "header"
// console.log(h1)

// const element = <h1 classname="header">Hello Reacter!</h1>
// console.log(element)

// ReactDOM.render(element, document.getElementById("root"))

// const element = (
//     <nav>
//         <h1>RK Sell & Buy</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )

// ReactDOM.render(element, document.getElementById("root"))


const page = (
    <div>
        <img src = "./React-icon.svg.png" width="100px"/>
        <h1>Fun Facts About React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on github</li>
            <li>Is maintained by FaceBook</li>
            <li>Power thousands of enterprice apps, including mobile apps</li>
        </ul>
    </div>
)


ReactDOM.render(page, document.getElementById("root"))